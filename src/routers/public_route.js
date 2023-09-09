import express from 'express'
import token_controller from '../controllers/token_controller.js'
import controllers from '../controllers/index.js'


export const public_router = express.Router()

public_router.get('/health', controllers.health_check)
public_router.get('/token', token_controller.get_token)