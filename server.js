const { createServer } = require('http')
const express = require('express')
const next = require('next')
const routes = require('./routes')
const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const handler = routes.getRequestHandler(app)
const server = express()

app.prepare()
  .then(() => {
	server.use(handler)

	server.get('*', (req, res) => {
	   return handle(req, res)
	})

    createServer(handler)
      .listen(port, (err) => {
        if (err) throw err
        console.log(`> Ready on http://localhost:${port}`)
      })
  })
