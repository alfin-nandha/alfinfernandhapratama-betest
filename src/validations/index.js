import { error_response } from "../utils/error.js"

export const validate = (schema, request) => {
    const result = schema.validate(request, {
        abortEarly: true,
        allowUnknown: true,
    })

    if (result.error) {
        throw new error_response(400, result.error.message)
    } else {
        return result.value
    }
}