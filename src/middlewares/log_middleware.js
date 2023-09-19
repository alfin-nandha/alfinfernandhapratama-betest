import { logger } from "../applications/logging.js";
import { get_uuid } from "../utils/common.js";


const log_middleware = (req, res, next) => {
    const log_id = get_uuid();
    logger.info({
        log_id: log_id,
        type: 'request',
        url: req.originalUrl,
        method: req.method.toUpperCase(),
        params: req.params,
        body: req.body,
        header: req.headers
    });

    const old_send = res.send;
    res.send = (body) => {
        logger.info({
            log_id: log_id,
            type: 'response',
            url: req.originalUrl,
            status_code: res.status,
            body: body
        });

        res.send = old_send;
        return res.send(body);
    };

    next();
};

export {
    log_middleware
};