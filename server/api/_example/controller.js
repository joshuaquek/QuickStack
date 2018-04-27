// @flow

// Respond with a NextJS Page, with parameters passed to it
exports.exampleOne = (route: string, server:any, app: any) => {
  server.get(route, async (req, res) => {
    return app.render(req, res, '/_example/page1', { randomVariableY: req.params.randomVariableX })
  }) 
}

// Responding with a regular JSON response
exports.exampleTwo = (route: string, server:any, app: any) => {
  server.get(route, async (req, res) => {
    res.json( { message: "This is an example JSON response." } )
  })
}
