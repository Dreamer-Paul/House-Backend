import { FunctionalComponent, h } from 'preact'
import { Fragment } from 'preact'
import * as style from './style.css'

const LoginView: FunctionalComponent = () => {
  return (
    <Fragment>
      <div className={style.wrap}>this is login</div>
    </Fragment>
  )
}

export default LoginView
