import request from 'supertest'
import { App } from '../src/applications/web.js'
import token_service from '../src/services/token_service.js'

describe('update user', () => {

    it('should update username user', async () => {
        const token = token_service.generate_token()

        const result = await request(App).put('/api/users').send({
            username: 'test_update',
        }).set('Authorization', token)

        expect(result.status).toBe(200)
    })
})