import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
const Nav = () => {
    const router = useRouter()
    const { pathname } = router;

    const activeLink = inActiveLink + "bg-white color-black p-3 rounded-xl"
    const inActiveLink = "color-white  "
    return (
        <aside className='flex flex-col  gap-3'>
            <Link href="/">
                BuyME
            </Link>
            <nav classname="flex flex-col gap-2">
                <Link href="/" className={pathname === "/" ? activeLink : inActiveLink}>
                    <span>Dashboard</span>
                </Link>
                <Link href="/products" className={pathname.includes("/products") ? activeLink : inActiveLink}>
                    <span>Products</span>
                </Link>
                <Link href="/orders" className={pathname.includes("/orders") ? activeLink : inActiveLink}>
                    <span>Orders</span>
                </Link>
                <Link href="/settings" className={pathname.includes("/settings") ? activeLink : inActiveLink}>
                    <span>Settings</span>
                </Link>
            </nav>
        </aside>
        
    )
}

export default Nav