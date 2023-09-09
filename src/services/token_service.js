import jwt from "jsonwebtoken"
import { jwt_config } from "../utils/config.js"

const generate_token = () => {

    const token = jwt.sign('test', jwt_config.secret, {
        algorithm: jwt_config.algo
    })
    return token
}

export default { generate_token }