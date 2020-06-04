import { FunctionalComponent, h } from 'preact'
import { Link } from 'preact-router/match'

export const Header: FunctionalComponent = () => {
  return (
    <header>
      <div class="head-toggle" onClick={undefined}></div>
      <div class="head-breadcrumb">
        <Link href="/">仪表板</Link>
        <Link href="/note">日记</Link>
        <Link>编辑</Link>
      </div>
      <div class="head-action"></div>
      <nav class="action-menu">
        <Link href="/note/new">新增</Link>
        <Link href="https://paul.ren/note" target="_blank">
          前台
        </Link>
        <Link href="https://paul.ren/" target="_blank">
          回到首页
        </Link>
      </nav>
    </header>
  )
}

export default Header
