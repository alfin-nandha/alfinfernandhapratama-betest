import express from 'express'
import { router } from '../routers/router.js'
import { log_middleware } from '../middlewares/log_middleware.js'
import { error_middleware } from '../middlewares/error_middleware.js'

export const App = express()
App.use(express.json())
App.use(log_middleware)

App.use(router)

App.use(error_middleware)