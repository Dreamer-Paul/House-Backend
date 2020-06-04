import { FunctionalComponent, h } from 'preact'
import { Route, Router, RouterOnChangeArgs, route } from 'preact-router'

import Home from '../routes/home'
import Profile from '../routes/profile'
import NotFoundPage from '../routes/notfound'
import Header from './header'
import { getAuthCookie } from '../utils/cookie'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
if ((module as any).hot) {
  // tslint:disable-next-line:no-var-requires
  require('preact/debug')
}

const App: FunctionalComponent = () => {
  const handleRoute = (e: RouterOnChangeArgs) => {
    if (e.url !== 'login') {
      const cookie = getAuthCookie()
      if (!cookie) {
        route('/login', true)
      }
    }
  }

  return (
    <div id="app">
      <Header />
      <Router onChange={handleRoute}>
        <Route path="/" component={Home} />
        <Route path="/profile/" component={Profile} user="me" />
        <Route path="/profile/:user" component={Profile} />
        <NotFoundPage default />
      </Router>
    </div>
  )
}

export default App
