import Image from 'next/image'
import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { HiEllipsisHorizontal } from 'react-icons/hi2'

const Header = () => {

    const [toggle, setToggle] = useState(false)

  return (
    <div>
        <header>
        <div className="padding flex justify-between">
            <div>
                <Image src={logo} alt="logo" height={50} />
            </div>
            <div className="flex flex-row">
                    <ul className="hidden md:flex p-2 flex-row text-center drop-shadow-md">
                        <li className="cdc__header-links"><a href="#">Início</a></li>
                        <li className="cdc__header-links"><a href="/receitas">Receitas</a></li>
                        <li className="cdc__header-links"><a href="/duvidas">Dúvidas frequentes</a></li>
                        <li className="cdc__header-links"><a href="/contato">Contato</a></li>
                    </ul>
                {toggle && (
                    <ul className="flex flex-col text-center bg-gray-300 p-2 rounded absolute top-9 right-20 scale-up-right">
                        <li className="cdc__header-menu_links"><a href="#">Início</a></li>
                        <li className="cdc__header-menu_links"><a href="/receitas">Receitas</a></li>
                        <li className="cdc__header-menu_links"><a href="/duvidas">Dúvidas frequentes</a></li>
                        <li className="cdc__header-menu_links"><a href="/contato">Contato</a></li>
                    </ul>
                )}
                {toggle
                    ? <HiEllipsisHorizontal className="md:hidden" size={50} onClick={() => setToggle(false)} />
                    : <HiEllipsisHorizontal className="md:hidden" size={50} onClick={() => setToggle(true)} />
                }  
            </div>
        </div>
    </header>
    </div>
  )
}

export default Header