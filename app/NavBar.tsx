'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"
import { AiFillBug } from 'react-icons/ai'
import classnames from "classnames"
const NavBar = () => {
  const links=[
    {lable:'Dashboard',href:'/'},
    {lable:'Issues',href:'/issues'}
  ]
  const currentPath = usePathname();
  return (
    <nav className="flex space-x-6 px-5 mb-5 border-b h-14 items-center">
        <Link href={"/"}><AiFillBug /></Link>
        <ul className="flex space-x-6">
            {links.map((link)=>(
                <Link key={link.href} className={classnames({
                    'text-zinc-900':currentPath === link.href,
                    'text-zinc-400':currentPath !== link.href,
                    'hover:text-zinc-800 transition-colors': true
                })} href={link.href}>{link.lable}</Link>
            ))}
        </ul>
    </nav>
  )
}

export default NavBar