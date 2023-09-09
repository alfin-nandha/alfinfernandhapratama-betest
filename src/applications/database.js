import { PrismaClient } from "@prisma/client";
import { database_config } from "../utils/config.js";

export const prisma_client = new PrismaClient({
    datasourceUrl: `${database_config.provider}://${database_config.username}:${database_config.password}@${database_config.host}:${database_config.port}/${database_config.db}?authSource=admin`
})