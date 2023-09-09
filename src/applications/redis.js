import { createClient } from "redis";
import { redis_config } from "../utils/config.js";
import { logger } from "./logging.js";

export const redis_client = createClient({
    url: `redis://localhost:6379/1`,
})
