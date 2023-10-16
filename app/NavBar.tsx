import Link from "next/link"
import { AiFillBug } from 'react-icons/ai'
const NavBar = () => {
  const links=[
    {lable:'Dashboard',href:'/'},
    {lable:'Issues',href:'/issues'}
  ]
  return (
    <nav className="flex space-x-6 px-5 mb-5 border-b h-14 items-center">
        <Link href={"/"}><AiFillBug /></Link>
        <ul className="flex space-x-6">
            {links.map((link)=>(
                <Link key={link.href} className="text-zinc-400 hover:text-zinc-800 transition-colors" href={link.href}>{link.lable}</Link>
            ))}
        </ul>
    </nav>
  )
}

export default NavBar