import express, { Application } from "express";
import dotenv from 'dotenv'
import cors from 'cors'
import routes from './api/routes'
import dbInit from './db/init'
import { errorHandler, notFound } from "./middleware/errorMiddlware";

dbInit()

dotenv.config();

const app: Application = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000


app.use('/api', routes)

app.use(notFound)
app.use(errorHandler)


app.listen(PORT, () => console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`))