// @flow
exports.init = function (server: any, app: any) {

  // All get endpoints will route through Next App Router
  const handle = app.getRequestHandler()
  server.get('*', (req, res) => {
    return handle(req, res)
  })

  // Log start message on app start
  const port = parseInt(process.env.PORT, 10) || 3000 // Integer - defaults to 3000 if PORT is not set
  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })

};