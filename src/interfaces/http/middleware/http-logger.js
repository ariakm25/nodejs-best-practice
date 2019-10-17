import morgan from 'morgan'
import logger from '../../../libraries/logger.js'

export default () => morgan('dev', { stream: logger.stream })