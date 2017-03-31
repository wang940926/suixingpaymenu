module.exports = {
  path: 'home/',
  childRoutes: [
    {
      path: 'page',
      getComponent (nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('./Home.jsx'))
        })
      }
    }
  ]
}
