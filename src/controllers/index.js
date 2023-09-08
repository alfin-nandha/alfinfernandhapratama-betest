const health_check = async (req, res, next) => {
    try {

        // throw new error_response(500, 'tidak sehat')
        res.send({
            data: {
                message: 'sehat'
            }
        }).end()
    } catch (error) {
        next(error)
    }
}

export default {
    health_check
}