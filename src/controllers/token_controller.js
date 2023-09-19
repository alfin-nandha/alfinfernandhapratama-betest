import token_service from "../services/token_service.js";

const get_token = (req, res, next) => {
    try {
        const token = token_service.generate_token();

        res.status(200).send({
            code: 200,
            data: {
                token: token
            },
            message: "get token success"
        });
    } catch (error) {
        next(error);
    }
};

export default {
    get_token
};