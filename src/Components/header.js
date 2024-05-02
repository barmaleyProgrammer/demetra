import { useState } from "react";
import { NavLink } from 'react-router-dom';
import demetra from '../img/logo.png';

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <header>
            <div className="text-[#d3a850]">
                <div className="w-full flex flex-wrap gap-10 px-4 items-center justify-between pl-10 md:justify-center">
                    <NavLink to="/">
                        <img className="h-[90px] w-[90px]" src={demetra} alt="logo_Demetra"/>
                    </NavLink>
                    <div className="items-center underline underline-offset-4 decoration-0">
                        <ul className="hidden md:flex flex-row p-0 mt-0 space-x-12 border-0">
                            <li>
                                <NavLink className="p-0 text-lg" to="/prices">Ціни</NavLink>
                            </li>
                            <li>
                                <NavLink className="p-0 text-lg" to="/rooms">Номери</NavLink>
                            </li>
                            <li>
                                <NavLink className="p-0 text-lg" to="/photo_gallery">Галерея</NavLink>
                            </li>
                            <li>
                                <NavLink className="p-0 text-lg" to="/news">Новини</NavLink>
                            </li>
                            <li>
                                <NavLink className="p-0 text-lg whitespace-nowrap" to="/about">Про нас</NavLink>
                            </li>
                            <li>
                                <NavLink className="p-0 text-lg" to="/contacts">Контакти</NavLink>
                            </li>
                        </ul>
                        <button className="space-y-1 md:hidden pr-10" onClick={() => setShowMenu(true)}>
                            <div className="w-6 h-1 bg-white"></div>
                            <div className="w-6 h-1 bg-white"></div>
                            <div className="w-6 h-1 bg-white"></div>
                        </button>
                        {
                            showMenu && (
                                <div className="z-30 bg-[#252525] w-full pb-2 absolute top-0 right-0">
                                    <button className="px-80 relative"
                                            onClick={() => setShowMenu(false)}>
                                        <div className="w-6 h-1 bg-white rotate-45 absolute"></div>
                                        <div className="w-6 h-1 bg-white -rotate-45 absolute"></div>
                                    </button>
                                    <ul className="pb-4 flex flex-col space-y-2">
                                        <li className="flex justify-center w-full py-2 hover:bg-[#202020]">
                                            <NavLink className="p-0 text-lg" to="/" onClick={() => setShowMenu(false)}>Головна</NavLink>
                                        </li>
                                        <li className="flex justify-center w-full py-2 hover:bg-[#202020]">
                                            <NavLink className="p-0 text-lg" to="/prices" onClick={() => setShowMenu(false)}>Ціни</NavLink>
                                        </li>
                                        <li className="flex justify-center w-full py-2 hover:bg-[#202020]">
                                            <NavLink className="p-0 text-lg" to="/rooms" onClick={() => setShowMenu(false)}>Номери</NavLink>
                                        </li>
                                        <li className="flex justify-center w-full py-2 hover:bg-[#202020]">
                                            <NavLink className="p-0 text-lg" to="/photo_gallery" onClick={() => setShowMenu(false)}>Галерея</NavLink>
                                        </li>
                                        <li className="flex justify-center w-full py-2 hover:bg-[#202020]">
                                            <NavLink className="p-0 text-lg" to="/news" onClick={() => setShowMenu(false)}>Новини</NavLink>
                                        </li>
                                        <li className="flex justify-center w-full py-2 hover:bg-[#202020]">
                                            <NavLink className="p-0 text-lg whitespace-nowrap" to="/about" onClick={() => setShowMenu(false)}>Про
                                                нас</NavLink>
                                        </li>
                                        <li className="flex justify-center w-full py-2 hover:bg-[#202020]">
                                            <NavLink className="p-0 text-lg" to="/contacts" onClick={() => setShowMenu(false)}>Контакти</NavLink>
                                        </li>
                                    </ul>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;