// @flow

// Respond with a NextJS Page, with parameters passed to it
exports.exampleOne = (route: string, server:any, app: any) => {
  server.get(route, (req, res) => {
    return app.render(req, res, '/_example/page1', { hmmmWhereIsThisRenderingFrom:"The Server", someCoolId: req.params.someCoolId })
  })
}

// Responding with a regular JSON response
exports.exampleTwo = (route: string, server:any, app: any) => {
  server.get(route, (req, res) => {
    res.json( { message: "This is an example JSON response." } )
  })
}
