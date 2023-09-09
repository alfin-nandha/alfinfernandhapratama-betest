import request from 'supertest'
import { App } from '../src/applications/web.js'
import token_service from '../src/services/token_service.js'
import { delete_user_test } from './utils_test.js'

describe('create user', () => {
    beforeAll(async () => {
        await delete_user_test()
    })

    it('should create user', async () => {
        const token = token_service.generate_token()

        const result = await request(App).post('/api/users').send({
            username: 'test',
            emailAddress: 'test@gmail.com',
            accountNumber: 'account_test',
            identityNumber: 'identity_test'
        }).set('Authorization', token)

        expect(result.status).toBe(200)
    })
})