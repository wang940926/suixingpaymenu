import BaseApplication from './base/BaseApplication'

module.exports = {
  name: 'app',
  path: '/re/',
  component: BaseApplication,
  childRoutes: [
    require('./pages/2016/09/midAutumn'),
    require('./404')
  ]
}
