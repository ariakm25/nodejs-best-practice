import express from 'express'
import middleware from './middleware/all.js'
import user from '../../components/user/user.routes.js'

const app = express()


app.use(middleware())
app.use('/api/v1', user())

export default app
