import express from 'express'
import headers from './headers.js'
import httpLogger from './http-logger.js'

export default () => {
  const router = new express.Router()

  router.use(headers())
  router.use(httpLogger())

  return router
}
