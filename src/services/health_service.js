import { prisma_client } from "../applications/database.js";
import { redis_client } from "../applications/redis.js";
import { error_response } from "../utils/error.js";

const connection_check = async () => {

    try {
        // Check Prisma
        await prisma_client.$connect();

        // Check Redis
        await redis_client.connect();

    } catch (error) {
        throw new error_response(500, 'Health checks failed:' + error);
    } finally {
        // Close Prisma and Redis connections
        await prisma_client.$disconnect();
        await redis_client.quit();
    }
};

export {
    connection_check
};