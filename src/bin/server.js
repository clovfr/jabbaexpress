#!/usr/bin/env node

const path = require('path')
const http = require('http')

const pkg = {
  name: process.env.npm_package_name,
  version: process.env.npm_package_version,
  description: process.env.npm_package_description,
  author: {
    name: process.env.npm_package_author_name,
    email: process.env.npm_package_author_email
  },
  license: process.env.npm_package_license
}

console.log(`
\x1b[1m \x1b[32m${pkg.name} \x1b[0m${pkg.version} \x1b[2m Copyright (C) 2021 \x1b[0m ${pkg.author.name} \x1b[2m
    This program comes with ABSOLUTELY NO WARRANTY.
    This is free software, and you are welcome to redistribute it under the ${pkg.license} license conditions.
\x1b[0m`)

const app = require(path.join(__dirname, '..'))

const normalizePort = (val) => {
  const port = parseInt(val, 10)
  if (isNaN(port)) return val
  if (port >= 0) return port
  return false
}

const port = normalizePort(process.env.PORT || 8080)
const server = http.createServer(app)
server.listen(port)

server.on('error', (error) => {
  if (error.syscall !== 'listen') {
    throw error
  }

  const bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(`${bind} requires elevated privileges`)
      process.exit(1)
    case 'EADDRINUSE':
      console.error(`${bind}is already in use`)
      process.exit(1)
    default:
      throw error
  }
})

server.on('listening', () => {
  const addr = server.address()
  const bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port
  console.log(`${pkg.name}/${pkg.version} listening on ${bind}`)
})
