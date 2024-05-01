import React from 'react';
import { NavLink } from 'react-router-dom';
import demetra from '../img/logo.png';

const Header = () => {
        return (
            <header>
                <div className="text-[#d3a850]">
                    <div className="w-full flex flex-wrap gap-10 px-4 items-center justify-center">
                        <NavLink to="/">
                            <img className="h-[90px] w-[90px]" src={demetra} alt="logo_Demetra"/>
                        </NavLink>
                        <div className="items-center underline underline-offset-4 decoration-0">
                            <ul className="flex flex-row p-0 mt-0 space-x-12 border-0">
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
                            {/*<button className="space-y-1 group md:hidden">*/}
                            {/*    <div className="w-6 h-1 bg-white"></div>*/}
                            {/*    <div className="w-6 h-1 bg-white"></div>*/}
                            {/*    <div className="w-6 h-1 bg-white"></div>*/}
                            {/*    <ul className="bg-[#252525] w-screen pb-10 absolute group-focus:top-0 -top-full right-0 duration-150 flex flex-col space-y-3 justify-end">*/}
                            {/*       <button className="px-10 py-8 relative ml-auto">*/}
                            {/*            <div className="w-6 h-1 bg-white rotate-45 absolute"></div>*/}
                            {/*            <div className="w-6 h-1 bg-white -rotate-45 absolute"></div>*/}
                            {/*       </button>*/}
                            {/*        <li className="flex justify-center w-full py-4 hover:bg-[#202020]">*/}
                            {/*            <NavLink className="p-0 text-lg" to="/prices">Ціни</NavLink>*/}
                            {/*        </li>*/}
                            {/*        <li className="flex justify-center w-full py-4 hover:bg-[#202020]">*/}
                            {/*            <NavLink className="p-0 text-lg" to="/rooms">Номери</NavLink>*/}
                            {/*        </li>*/}
                            {/*        <li className="flex justify-center w-full py-4 hover:bg-[#202020]">*/}
                            {/*            <NavLink className="p-0 text-lg" to="/photo_gallery">Галерея</NavLink>*/}
                            {/*        </li>*/}
                            {/*        <li className="flex justify-center w-full py-4 hover:bg-[#202020]">*/}
                            {/*            <NavLink className="p-0 text-lg" to="/news">Новини</NavLink>*/}
                            {/*        </li>*/}
                            {/*        <li className="flex justify-center w-full py-4 hover:bg-[#202020]">*/}
                            {/*            <NavLink className="p-0 text-lg whitespace-nowrap" to="/about">Про нас</NavLink>*/}
                            {/*        </li>*/}
                            {/*        <li className="flex justify-center w-full py-4 hover:bg-[#202020]">*/}
                            {/*            <NavLink className="p-0 text-lg" to="/contacts">Контакти</NavLink>*/}
                            {/*        </li>*/}
                            {/*    </ul>*/}
                            {/*</button>*/}
                        </div>
                    </div>
                </div>
            </header>
        );
}

export default Header;