import { Router } from "express"
import AuthController from "../controllers/authController"
import limiter from "../middleware/rateLimitMiddleware"

const authRouter = Router()

//consigna 4, "Implementar rate limit únicamente en las rutas de autenticación"
// http://localhost:3000/auth/register
authRouter.post("/register", limiter, AuthController.register)
// http://localhost:3000/auth/login
authRouter.post("/login", limiter, AuthController.login)

export default authRouter