import { prisma_client } from "../src/applications/database"
import { redis_config } from "../src/utils/config"

const delete_user_test = async () => {
    await prisma_client.user.delete({
        where: {
            username: 'test'
        }
    })
}

const test_url = () => {
    const plain = `redis://${redis_config.host}:${redis_config.port}/${redis_config.db}`
    const safe = `redis://localhost:6380/1`

    console.info(plain)
    console.info(safe)

    if (plain === safe) {
        console.info('persis')
    } else {
        console.info('not')
    }
}

export {
    delete_user_test,
    test_url
}