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
    console.info(`redis://${redis_config.host}:${redis_config.port}/${redis_config.db}`)
}

export {
    delete_user_test,
    test_url
}