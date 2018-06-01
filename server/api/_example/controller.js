// @flow

// Respond with a NextJS Page, with parameters passed to it
exports.exampleOne = (app: any) => { // You can choose to take in parameters here...or not to.
  return (req:any, res:any) => { // Remember to always return `(req, res) => {}` here. This allows the `exampleOne(app)` method to use `(req, res) => {}` as a callback.
    return app.render(req, res, '/_example/page1', { hmmmWhereIsThisRenderingFrom:"The Server", someCoolId: req.params.someCoolId })
  }
}

// Responding with a regular JSON response
exports.exampleTwo = () => { // You can choose to take in parameters here...or not to.
  return (req:any, res:any) => { // Remember to always return `(req, res) => {}` here. This allows the `exampleTwo()` method to use (req, res) => {} as a callback.
    return res.json( { message: "This is an example JSON response." } )
  }
}