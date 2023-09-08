import { error_response } from "../utils/error"

export const error_middleware = (err, req, res, next) => {
    if (!err) {
        next()
        return
    }

    if (err instanceof error_response) {
        res.status(err.status).send({
            errors: err.message
        }).end()
    } else {
        res.status(500).send({
            errors: 'something went wrong!'
        }).end()
    }
}