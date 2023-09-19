import { createClient } from "redis";
import { logger } from "./logging.js";
import { env } from "process";

export const redis_client = createClient({
    url: env.REDIS_URL
});

const quit = async () => {
    await redis_client.quit();
};

const get_value = async (key) => {
    if (!redis_client.isOpen) {
        redis_client.connect();
    }
    const result = await redis_client.get(key).finally(quit);
    if (result) {
        logger.log('info', `get redis ${key} found`);
    } else {
        logger.log('info', `get redis ${key} not found`);
    }

    return result;
};

const set_value_exp = async (key, value) => {
    if (!redis_client.isOpen) {
        redis_client.connect();
    }

    return await redis_client.set(key, value, { EX: 3600 }).then(() => {
        logger.log('info', `set redis ${key}`);
    }).finally(quit);
};

const del_value = async (key) => {
    if (!redis_client.isOpen) {
        redis_client.connect();
    }
    return await redis_client.del(key).then(() => {
        logger.log('info', `delete redis ${key}`);
    }).finally(quit);
};



export default {
    get_value,
    set_value_exp,
    del_value
};