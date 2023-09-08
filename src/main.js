import { logger } from "./applications/logging.js"
import { App } from "./applications/web.js"

export const server = App.listen(3000, () => {
    logger.info('server start on port 3000')

})

