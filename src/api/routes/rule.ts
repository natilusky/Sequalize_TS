import { Router, Request, Response } from 'express'
import asyncHandler from "express-async-handler"
import * as rulesController from '../controllers/rules'

const ruleRouter = Router()


// Get rule
ruleRouter.get('/:id', asyncHandler(async (req: Request, res: Response) => {
  const result = await rulesController.getDetails(req.params.id)
  res.send(result)
}))


export default ruleRouter