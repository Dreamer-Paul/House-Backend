import { hot } from 'react-hot-loader/root'
import React from 'react'
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom'
import LoginView from './views/Login'
import { Header } from './components/Header'
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
              <Route path="/">1</Route>
              <Route path="/2">2s</Route>
            </Router>
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default hot(App)
