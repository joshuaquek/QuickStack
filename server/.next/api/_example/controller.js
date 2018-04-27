// 

// Respond with a NextJS Page, with parameters passed to it
exports.exampleOne = (route, server, app) => {
  server.get(route, async (req, res) => {
    return app.render(req, res, '/example', { id: req.params.id })
  })
}

// Responding with a regular JSON response
exports.exampleTwo = (route, server, app) => {
  server.get(route, async (req, res) => {
    res.json( { message: "This is an example JSON response." } )
  })
}
