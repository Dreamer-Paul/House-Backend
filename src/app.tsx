import { FunctionalComponent, h } from 'preact'
import { Route, Router, RouterOnChangeArgs, route } from 'preact-router'

import Home from './routes/home'

import NotFoundPage from './routes/notfound'
import Header from './components/header'
import { getAuthCookie } from './utils/cookie'
import { useState } from 'preact/hooks'
import LoginView from './routes/login'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
if ((module as any).hot) {
  // tslint:disable-next-line:no-var-requires
  require('preact/debug')
}

const App: FunctionalComponent = () => {
  const [url, setUrl] = useState('/')
  const handleRoute = (e: RouterOnChangeArgs) => {
    setUrl(e.url)
    if (e.url !== 'login') {
      const cookie = getAuthCookie()
      if (!cookie) {
        route('/login', true)
      }
    }
  }

  return (
    <div id="app">
      {url !== '/login' && <Header />}
      <Router onChange={handleRoute}>
        <Route path="/" component={Home} />
        <LoginView path="/login" />
        <NotFoundPage default />
      </Router>
    </div>
  )
}

export default App
