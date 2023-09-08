import { ObjectId } from "bson"
import { prisma_client } from "../src/applications/database.js"

describe('initial db', () => {
    it('should insert data', async () => {
        await prisma_client.$connect()
        await prisma_client.user.create({
            data: {
                username: 'test',
                emailAddress: 'test@mail.com',
                accountNumber: '99954321',
                identityNumber: '876543312'
            }
        });

        const result = await prisma_client.user.findMany()
        console.info(result)
    })
})
