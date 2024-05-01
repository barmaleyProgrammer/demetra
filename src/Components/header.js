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
                            <ul className="flex flex-row p-0 mt-0 space-x-8 border-0">
                                <li>
                                    <NavLink className="p-0 text-lg" to="/prices">Ціни</NavLink>
                                </li>
                                <li>
                                    <NavLink className="p-0 text-lg" to="/rooms">Номери</NavLink>
                                </li>
                                <li>
                                    <NavLink className="p-0 text-lg" to="/territory">Територія</NavLink>
                                </li>
                                <li>
                                    <NavLink className="p-0 text-lg whitespace-nowrap" to="/rooms_main">Ангар для човнів</NavLink>
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
                        </div>
                    </div>
                </div>
            </header>
        );
}

export default Header;