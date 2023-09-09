import express from 'express'
import user_controller from '../controllers/user_controller.js'
import { token_middleware } from '../middlewares/token_middleware.js'

export const user_router = express.Router()

user_router.use('/users', token_middleware)
const test = (req, res) => {
    res.send('masuk').end()
}
user_router.post('/users', user_controller.create_user)
user_router.get('/users', user_controller.get_user)
user_router.put('/users', user_controller.put_user)
user_router.delete('/users', user_controller.delete_user)
