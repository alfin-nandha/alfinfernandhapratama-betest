export class error_response extends Error {
    status

    constructor(status, msg) {
        super(msg)
        this.status = status
    }
}

