import user_service from "../services/user_service.js"

const create_user = async (req, res, next) => {
    try {
        const result = await user_service.post_user(req)

        res.status(200).send({
            data: result
        })
    } catch (error) {
        next(error)
    }
}

const delete_user = async (req, res, next) => {
    try {

        await user_service.drop_user(req)

        res.status(200).send({
            data: {
                message: 'delete success'
            }
        })
    } catch (error) {
        next(error)
    }
}

const get_user = async (req, res, next) => {
    try {
        const result = await user_service.get_user(req)
        res.status(200).send({
            data: result
        })
    } catch (error) {
        next(error)
    }
}

const put_user = async (req, res, next) => {
    try {
        const result = await user_service.update_user(req)

        res.status(200).send({
            data: result
        })
    } catch (error) {
        next(error)
    }
}

export default {
    create_user,
    delete_user,
    get_user,
    put_user
}