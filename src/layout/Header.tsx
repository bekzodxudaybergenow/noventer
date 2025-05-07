import Link from "next/link";
import Image from "next/image";
import logo from '@/assets/header/logo.svg'
import menu from '@/assets/header/menu.png';

export default function Header() {
  return (
    <header className="bg-background">
        <div className="container">
          <div className="flex justify-between items-center py-[20px] sm:justify-start gap-x-4 md:justify-between">
            <Link className="order-2 sm:order-1 md:order-1 w-[140px] lg:w-[160px] hover:opacity-[.7] duration-300 active:opacity-[1]" href={'/'}><Image src={logo} alt="Logo" /></Link>
            <nav className="hidden md:flex order-2 items-center gap-x-8">
              <Link className="hover:text-[#5A00DB] duration-300"  href="/">Bosh sahifa</Link>
              <Link className="hover:text-[#5A00DB] duration-300"  href="/">Portfolio</Link>
              <Link className="hover:text-[#5A00DB] duration-300"  href="/">Xizmatlar</Link>
              <Link className="hover:text-[#5A00DB] duration-300"  href="/">Aloqa</Link>
            </nav>
            <div className="order-1 ml-0 sm:order-2 sm:ml-auto md:ml-0 lg:flex items-center gap-x-4">
              <span className="text-[16px]">Uz</span>
              <button className="hidden lg:flex px-3 py-2 rounded-[8px] bg-white/30 backdrop-blur-sm hover:bg-white/50 duration-300 cursor-pointer">Loyiha bormi?</button> 
            </div>
            <button className="order-3 md:hidden"><Image src={menu} alt="Burger-menu" /></button>
            <aside className="hidden">
              <nav className="">
                <Link href="/">Bosh sahifa</Link>
                <Link href="/">Portfolio</Link>
                <Link href="/">Xizmatlar</Link>
                <Link href="/">Aloqa</Link>
              </nav>
            </aside>
          </div>
        </div>
    </header>
  )
}
