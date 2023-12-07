import Link from 'next/link'

import { Container } from '@/components/Container'

const menuList = [
  {
    name: '首页',
    path: '/',
  },
  {
    name: '文章',
    path: '/articles',
  },
  // {
  //   name: '技术栈',
  //   path: '/projects',
  // },
  // {
  //   name: '关于',
  //   path: '/about',
  // },
]

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="transition hover:text-teal-500 dark:hover:text-teal-400"
    >
      {children}
    </Link>
  )
}

export function Footer() {
  return (
    <footer className="mt-32">
      <Container.Outer>
        <div className="pt-10 pb-16 border-t border-zinc-100 dark:border-zinc-700/40">
          <Container.Inner>
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="flex gap-6 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                {menuList.map(({ name, path }) => (
                  <NavLink key={path} href={path}>
                    {name}
                  </NavLink>
                ))}
              </div>
              <p className="text-sm text-zinc-400 dark:text-zinc-500">
                &copy; {new Date().getFullYear()} Spencer Sharp. All rights
                reserved.
              </p>
            </div>
          </Container.Inner>
        </div>
      </Container.Outer>
    </footer>
  )
}
