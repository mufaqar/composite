import Link from 'next/link'
import React from 'react'
import { FaChevronRight } from 'react-icons/fa6'

const BreadCrumb = () => {
    return (
        <ul className='flex items-center gap-2 mb-8'>
            <li>
                <Link href="/" className={`md:text-xl text-sm font-normal text-description hover:text-secondary opacity-60`}>Home</Link>
            </li>
            <li><FaChevronRight className='text-secondary' /></li>
            <li>
                <Link href="/" className={`md:text-xl text-sm font-normal text-description hover:text-secondary opacity-60`}>Shop</Link>
            </li>
            <li><FaChevronRight className='text-secondary' /></li>
            <li>
                <Link href="/" className={`md:text-xl text-sm font-normal text-description hover:text-secondary`}>vertical composite fencing panel</Link>
            </li>
        </ul>
    )
}

export default BreadCrumb