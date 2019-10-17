import express from 'express'
import * as controller from './user.controller.js'

export default () => {
  const router = new express.Router()

  router.get('/users', (req, res) => {
    res.json(controller.index())
  })

  router.get('/user/:id', ({ params }, res) => {
    res.json(controller.read(parseInt(params.id, 10)))
  })

  router.post('/users', ({ body: { username }}, res) => {
    controller.create(username)
    res.status(200).send('OK')
  })

  //req 
  router.put('/user/:id', ({ params: { id }, body: { username }}, res) => {
    controller.update({ id: parseInt(id, 10), username })
    res.status(200).send('OK')
  })

  router.delete('/user/:id', ({ params: { id }}, res) => {
    controller.remove(parseInt(id, 10))
    res.status(200).send('OK')
  })

  return router
}