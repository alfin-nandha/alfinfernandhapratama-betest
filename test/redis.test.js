import redis_client from "../src/applications/redis.js"
import { test_url } from "./utils_test.js"

describe('initial redis', () => {
    // beforeAll(() => {
    //     test_url()
    // })
    it('should connect to redis', async () => {
        test_url()
        await redis_client.set_value_exp('test', 'value_test')
        const result = await redis_client.get_value('test')

        console.info(result)
    })
})
