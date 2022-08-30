import { Router, Request, Response } from 'express'
import asyncHandler from "express-async-handler"
import * as propertiesController from '../controllers/properties'

const propertyRouter = Router()


// Get Property
propertyRouter.get('/:id', asyncHandler(async (req: Request, res: Response) => {
  const result = await propertiesController.getDetails(req.params.id)
  res.send(result)
}))


export default propertyRouter