import express from 'express'
import { user_router } from './user_route.js'
import { public_router } from './public_route.js'

export const router = express.Router()

router.use(
    '/api',
    public_router,
    user_router,
)