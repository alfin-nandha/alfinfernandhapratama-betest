import { connection_check } from "../services/health_service.js"

const health_check = async (req, res, next) => {
    try {

        await connection_check()
        // throw new error_response(500, 'tidak sehat')
        res.send({
            code: 200,
            message: 'Redis, DB Connection OK. Health checks passed.'
        }).end()
    } catch (error) {
        next(error)
    }
}

export default {
    health_check
}