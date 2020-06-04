import React, { FC, useEffect } from 'react'
import style from './index.module.scss'
import sample from 'lodash/sample'
import range from 'lodash/range'

const LoginView: FC = () => {
  useEffect(() => {
    document.body.style.backgroundImage =
      'url(/bg/bg-' + sample(range(1, 7)) + '.jpg)'
    document.documentElement.classList.add(style.login)
    return () => {
      document.body.style.backgroundImage = ''
      document.documentElement.classList.remove(style.login)
    }
  })
  return (
    <main>
      <figure className={style['avatar']}>
        <img src="https://paul.ren/static/img/avatar.jpg" />
      </figure>
      <h2 className={style['username']}>保罗</h2>
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
          className="btn yellow"
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
