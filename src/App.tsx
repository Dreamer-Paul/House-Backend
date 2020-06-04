import React from 'react'
import { hot } from 'react-hot-loader/root'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { Header } from './components/Header'
import LoginView from './views/Login'
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path={'/login'}>
            <LoginView />
          </Route>
          <Route path={'*'}>
            <Header />
            <Router>
              <Route path={'/:id'}>{(e) => e.match?.params.id}</Route>
            </Router>
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default hot(App)
