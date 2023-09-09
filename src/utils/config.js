import { env } from "process"

const app_config = {
    name: env.APP_NAME,
    port: env.PORT,
}

const database_config = {
    provider: env.DB_PROVIDER,
    host: env.DB_HOST,
    port: env.DB_PORT,
    username: env.DB_USERNAME,
    password: env.DB_PASSWORD,
    db: env.DB_NAME
}

const jwt_config = {
    secret: env.JWT_SECRET,
    algo: env.JWT_ALGO
}

const redis_config = {
    host: env.REDIS_HOST,
    port: env.REDIS_PORT,
    db: env.REDIS_DB
}

export {
    app_config,
    database_config,
    jwt_config,
    redis_config
}