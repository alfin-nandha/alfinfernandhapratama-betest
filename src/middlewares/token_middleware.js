import { validate_token } from "../validations/token_validation.js"

const token_middleware = (req, res, next) => {
    const token = req.get("Authorization")

    if (!token) {
        res.status(401).send({
            errors: 'Invalid authorization'
        })
    } else {
        validate_token(token)
        next()
    }
}

export { token_middleware }