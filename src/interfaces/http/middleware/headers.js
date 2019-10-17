import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import bodyParser from 'body-parser'

export default () => {
  const router = new express.Router()

  router.use(cors())
  router.use(helmet())
  router.use(bodyParser.urlencoded({ extended: true }))
  router.use(bodyParser.json())

  return router
}