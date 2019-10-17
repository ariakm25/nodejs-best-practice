import http from 'http'
import app from './app.js'
import config from '../../../config.js'
import logger from '../../libraries/logger.js'

const server = http.createServer(app)

export const startServer = () => {
  server.listen(config.port, config.host, () => {
    const { address, port } = server.address()
    logger.info(`Server opened at ${address}:${port}`)
  })
}

export default server