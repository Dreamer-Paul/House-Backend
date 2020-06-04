import React, { FC } from 'react'
import { Link } from 'react-router-dom'

export const Header: FC = () => {
  return (
    <header>
      <div className="head-toggle" onClick={undefined}></div>
      <div className="head-breadcrumb">
        <Link to="/">仪表板</Link>
        <Link to="/note">日记</Link>
        <Link to="/edit">编辑</Link>
      </div>
      <div className="head-action"></div>
      <nav className="action-menu">
        <Link to="/note/new">新增</Link>
        <Link to="https://paul.ren/note" target="_blank">
          前台
        </Link>
        <Link to="https://paul.ren/" target="_blank">
          回到首页
        </Link>
      </nav>
    </header>
  )
}
