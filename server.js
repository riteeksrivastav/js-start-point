import config from './config'
import express from 'express'

const server = express();

server.set('view engine', 'ejs');

server.get('/', (req, resp) => {
    resp.render('index', {
        content: '...'
    })
})

server.use(express.static('public'));

server.listen(config.port, () => {
    console.log('server started and listening on port ', config.port);
})