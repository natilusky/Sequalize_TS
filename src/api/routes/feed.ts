import { Router, Request, Response } from 'express'
import asyncHandler from "express-async-handler"
import * as feedController from '../controllers/feed'

const feedRouter = Router()

// Get Feed
feedRouter.get('/:id', asyncHandler(async (req: Request, res: Response) => {
  const result = await feedController.getDetails(req.params.id)
  res.send(result)
}))

export default feedRouter