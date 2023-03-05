import Image from 'next/image'
import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { HiEllipsisHorizontal } from 'react-icons/hi2'

const Header = () => {

    const [toggle, setToggle] = useState(false)

  return (
    
    <header>
        <div className="padding flex justify-between">
            <div>
                <Image src={logo} alt="logo" height={50} />
            </div>
            <div className="flex flex-row">
                <div className="hidden md:flex p-2 flex-row text-center drop-shadow-md">
                    <a href="#" className="cdc__header-links">Início</a>
                    <a href="#" className="cdc__header-links">Receitas</a>
                    <a href="#" className="cdc__header-links">Dúvidas frequentes</a>
                    <a href="#" className="cdc__header-links">Contato</a>
                </div>
                {toggle && (
                    <div className="flex flex-col text-center bg-gray-300 p-2 rounded absolute top-9 right-20 scale-up-right">
                        <a href="#" className="cdc__header-menu_links">Início</a>
                        <a href="#" className="cdc__header-menu_links">Receitas</a>
                        <a href="#" className="cdc__header-menu_links">Dúvidas frequentes</a>
                        <a href="#" className="cdc__header-menu_links">Contato</a>
                    </div>
                )}
                {toggle
                    ? <HiEllipsisHorizontal className="md:hidden" size={50} onClick={() => setToggle(false)} />
                    : <HiEllipsisHorizontal className="md:hidden" size={50} onClick={() => setToggle(true)} />
                }  
            </div>
        </div>
    </header>
    
  )
}

export default Header