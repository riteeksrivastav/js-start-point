import config from './config'
import express from 'express'

const server = express()

server.listen(config.port, () => {
    console.log('server started and listening on port ', config.port)
})