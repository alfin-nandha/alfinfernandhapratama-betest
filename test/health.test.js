import request from 'supertest'
import { App } from '../src/applications/web'

describe('health', () => {
    it('should hit health check api', async () => {
        const result = await request(App).get('/api/health')
        expect(result.statusCode).toBe(200)
        expect(result.body.data.message).toBe('sehat')
    })
})