import { Router } from 'express'
import userRouter from './user'
import propertyRouter from './property'
import feedRouter from './feed'
import ruleRouter from './rule'

const router = Router()

router.use('/user', userRouter)
router.use('/property', propertyRouter)
router.use('/feed', feedRouter)
router.use('/set-rule', ruleRouter)


export default router