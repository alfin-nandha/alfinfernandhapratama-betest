import { redis_client } from "../src/applications/redis.js"
import { test_url } from "./utils_test.js"

describe('initial redis', () => {
    // beforeAll(() => {
    //     test_url()
    // })
    it('should connect to redis', async () => {
        await redis_client.connect()
        await redis_client.set('test', 'value_test')
        const result = await redis_client.get('test')
        await redis_client.quit()
        console.info(result)
    })
})
