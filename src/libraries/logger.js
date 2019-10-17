import winston from 'winston'
const { createLogger, transports, format } = winston
const { colorize, printf, timestamp, combine } = format

const logger = createLogger({
  transports: [
    new transports.File({
      level: 'info',
      filename: 'combined.log',
      maxsize: 5242880, // 5 MB
      zippedArchive: true
    }),
    new transports.Console({
      level: 'debug',
      format: combine(
        timestamp(),
        colorize(),
        printf(info => `${info.timestamp} [${info.level}]: ${info.message}`)
      )
    })
  ]
})

logger.stream = {
  write: message => logger.info(message)
}

export default logger
