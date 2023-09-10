import { env } from "process"
import { logger } from "./applications/logging.js"
import { App } from "./applications/web.js"

export const server = App.listen(env.PORT, () => {
    logger.info(`server start on port ${env.PORT}`)
})

