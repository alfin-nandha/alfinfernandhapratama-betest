import { prisma_client } from "../applications/database.js"
import redis_client from "../applications/redis.js"
import { error_response } from "../utils/error.js"
import { validate } from "../validations/index.js"
import { create_user_validation, get_user_validation, id_user_validation, update_user_validation } from "../validations/user_validation.js"

const post_user = async (req) => {
    const user = validate(create_user_validation, req.body)

    const count_user = await prisma_client.user.count({
        where: {
            OR: [
                {
                    username: user.username
                },
                {
                    emailAddress: user.emailAddress
                },
                {
                    identityNumber: user.indentityNumber
                },
                {
                    accountNumber: user.accounNumber
                }
            ]

        }
    })

    if (count_user >= 1) {
        throw new error_response(400, 'duplicate data')
    }

    const result = await prisma_client.user.create({
        data: user
    })

    await redis_client.set_value_exp(`user_${result.accountNumber}`, JSON.stringify(result))
    await redis_client.set_value_exp(`user_${result.identityNumber}`, JSON.stringify(result))

    return result
}

const drop_user = async (req) => {
    const id = validate(id_user_validation, req.params.id)

    const result = await prisma_client.user.findFirst({
        where: {
            id: id
        }
    })

    if (!result) {
        throw new error_response(404, 'user not found')
    }

    await prisma_client.user.delete({
        where: {
            id: id
        }
    })

    await redis_client.del_value(`user_${result.identityNumber}`)
    await redis_client.del_value(`user_${result.accountNumber}`)
}

const get_user = async (req) => {
    const param = validate(get_user_validation, req.query)

    for (const key in param) {
        const value = param[key]
        if (value != null) {
            const redis_result = await redis_client.get_value(`user_${value}`)
            if (redis_result != null) {
                return JSON.parse(redis_result)
            }
        }
    }

    const db_result = await prisma_client.user.findUnique({
        where: {
            identityNumber: param.identityNumber,
            accountNumber: param.accountNumber
        }
    })

    if (!db_result) {
        throw new error_response(404, 'user not found')
    }

    await redis_client.set_value_exp(`user_${db_result.accountNumber}`, JSON.stringify(db_result), { EX: 3600 })
    await redis_client.set_value_exp(`user_${db_result.identityNumber}`, JSON.stringify(db_result), { EX: 3600 })

    return db_result
}

const update_user = async (req) => {
    const id = validate(id_user_validation, req.params.id)
    const data = validate(update_user_validation, req.body)

    const user = await prisma_client.user.findFirst({
        where: {
            id: id
        }
    })

    if (!user) {
        throw new error_response(404, 'user not found')
    }

    const result = await prisma_client.user.update({
        where: {
            id: id
        },
        data: data
    })

    if (!result) {
        throw new error_response(404, 'user not found')
    }

    await redis_client.set_value_exp(`user_${result.accountNumber}`, JSON.stringify(result), { EX: 3600 })
    await redis_client.set_value_exp(`user_${result.identityNumber}`, JSON.stringify(result), { EX: 3600 })

    return result
}

export default {
    post_user,
    drop_user,
    get_user,
    update_user
}