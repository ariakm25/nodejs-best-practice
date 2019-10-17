const env = (key, defaultValue) => process.env[key] || defaultValue

export default {
  host: env('HOST', '127.0.0.1'),
  port: env('PORT', '3000'),
  databaseURL: env('DATABASE_URL')
}
