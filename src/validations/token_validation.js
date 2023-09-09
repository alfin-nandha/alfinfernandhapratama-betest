import jwt from "jsonwebtoken"
import { jwt_config } from "../utils/config.js"
import { error_response } from "../utils/error.js"

const validate_token = (token) => {
    try {
        if (token.includes("Bearer ")) {
            token = token.substring("Bearer ".length)
        }
        jwt.verify(token, jwt_config.secret, {
            algorithms: jwt_config.algo
        })
    } catch (error) {
        throw new error_response(401, 'invalid Authorization')
    }


}

export { validate_token }