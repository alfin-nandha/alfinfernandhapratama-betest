import token_service from "../services/token_service.js"

const get_token = async (req, res, next) => {
    try {
        const token = token_service.generate_token()

        res.status(200).send({
            data: {
                token: token
            }
        })
    } catch (error) {
        next(error)
    }
}

export default {
    get_token
}