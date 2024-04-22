import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
        return (
            <header>
                <div className="w-[1152px] mx-auto py-4 flex flex-wrap gap-24 items-center justify-between">
                    <NavLink to="/">
                        <p>лого Demetra</p>
                        {/*<img src={} alt=""/>*/}
                    </NavLink>
                    <div className="flex items-center justify-between underline underline-offset-4 decoration-0">
                        <ul className="flex flex-row p-0 mt-0 space-x-8 border-0">
                            <li>
                                <NavLink className="p-0 text-sm" to="/services">Послуги</NavLink>
                            </li>
                            <li>
                                <NavLink className="p-0 text-sm" to="/news">Новини</NavLink>
                            </li>
                            <li>
                                <NavLink className="p-0 text-sm" to="/about">Про нас</NavLink>
                            </li>
                            <li>
                                <NavLink className="p-0 text-sm" to="/contacts">Контакти</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        );
}

export default Header;