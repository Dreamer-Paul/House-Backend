import { FunctionalComponent, h, Fragment } from 'preact'
import { Route, Router, RouterOnChangeArgs, route } from 'preact-router'

import Home from './routes/home'

import Header from './components/header'
import { getAuthCookie } from './utils/cookie'
import { useState } from 'preact/hooks'
import LoginView from './routes/login'

import './style/index.css'
import 'kico-style'
import './style/panel.css'

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
    <Fragment>
      {url !== '/login' && <Header />}
      <Router onChange={handleRoute}>
        <Route path="/" component={Home} />
        <LoginView path="/login" />
      </Router>
    </Fragment>
  )
}

export default App
