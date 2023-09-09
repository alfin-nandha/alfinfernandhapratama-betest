import request from 'supertest'
import { App } from '../src/applications/web.js'

describe('get token', () => {
    it('should get token', async () => {
        const result = await request(App).get('/api/token')

        expect(result.status).toBe(200)
    })
})