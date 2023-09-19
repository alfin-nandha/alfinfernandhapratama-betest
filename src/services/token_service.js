import jwt from "jsonwebtoken";
import { jwt_config } from "../utils/config.js";
import { env } from "process";

const generate_token = () => {

    const token = jwt.sign(
        {
            timestamp: new Date()
        },
        jwt_config.secret,
        {
            algorithm: jwt_config.algo,
            expiresIn: env.JWT_EXP
        }
    );
    return {
        token: token,
        expiresIn: env.JWT_EXP
    };
};

export default { generate_token };