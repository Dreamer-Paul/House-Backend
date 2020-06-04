import { FunctionalComponent, h } from 'preact'
import * as style from './index.css'
import sample from 'lodash/sample'
import range from 'lodash/range'
import { useEffect } from 'preact/hooks'
const LoginView: FunctionalComponent = () => {
  useEffect(() => {
    document.body.style.backgroundImage =
      'url(/assets/bg/bg-' + sample(range(6)) + '.jpg)'

    return () => {
      document.body.style.backgroundImage = ''
    }
  })
  return (
    <main>
      <figure class={style['avatar']}>
        <img src="https://paul.ren/static/img/avatar.jpg" />
      </figure>
      <h2 class={style['username']}>保罗</h2>
      <form method="post">
        <input
          id={style.password}
          type="password"
          placeholder="密码"
          name="login"
          autoFocus
        />
        <button
          id={style.login}
          type="submit"
          class="btn yellow"
          name="login-submit"
        >
          &raquo;
        </button>
      </form>
      <p>
        <a href="https://paul.ren/">返回首页</a>
      </p>
    </main>
  )
}

export default LoginView
