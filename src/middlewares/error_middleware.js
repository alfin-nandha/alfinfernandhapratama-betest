import { error_response } from "../utils/error.js";

export const error_middleware = (err, req, res, next) => {
    if (!err) {
        next();
        return;
    }

    if (err instanceof error_response) {
        res.status(err.status).send({
            code: err.status,
            message: err.message
        }).end();
    } else {
        res.status(500).send({
            code: 500,
            message: `something went wrong! ${err.message}`
        }).end();
    }
};