// @flow

// Respond with a NextJS Page, with parameters passed to it
exports.exampleOne = (app: any) => {
  return (req:any, res:any) => {
    return app.render(req, res, '/_example/page1', { hmmmWhereIsThisRenderingFrom:"The Server", someCoolId: req.params.someCoolId })
  }
}

// Responding with a regular JSON response
exports.exampleTwo = () => {
  return (req:any, res:any) => {
    return res.json( { message: "This is an example JSON response." } )
  }
}