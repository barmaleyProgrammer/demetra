import React from 'react';
import {NavLink} from "react-router-dom";

const Prices = () => {
    return (
        <div className="text-[#2f4a69] w-3/4 justify-center mx-auto">
            <h1 className="text-4xl text-center p-3">Ціни бази риболовлі та сімейного відпочинку «Деметра</h1>
            <h2 className="mb-4 text-center">На нашій базі є номери різних категорій</h2>
            <div className="">
                <article>
                    <div className="mx-auto text-center">
                        <p>Ціни вказані в гривнях за номер за добу</p>
                        <p>Стандартний час заїзду- з xx.xx. Час виїзду- до xx.xx</p>
                        <p className="pt-2"><b>Наявність номерів:</b></p>
                    </div>
                    <ul className="flex flex-wrap w-4/5 gap-20 gap-y-6 justify-center mx-auto mt-10">
                        <li className="">
                            <NavLink to="/rooms/house_3rooms">
                                <b className="text-cyan-800 hover:text-amber-600">дім трикімнатний</b><br/>
                            </NavLink>
                            <p className="pt-1">4000грн/ доба.<br/>
                            </p>
                            <p className="italic">
                                3 окремі кімнати,<br/>
                                2 санвузли,кухня.<br/>
                                хол з розкладним диваном,<br/>
                                який може буди додатковим<br/> спальним місцем.
                            </p>
                        </li>
                        <li className="">
                            <NavLink to="/rooms/room_with_bedroom">
                                <b className="text-cyan-800 hover:text-amber-600">номер кухня + спальня;</b><br/>
                            </NavLink>
                            <p className="pt-1">2500 грн/ доба.<br/>
                            </p>
                            <p className="italic">
                                Номер на трьох осіб<br/>
                                Кухня і окрема спальня. <br/>
                                Спальними місцями є окремі ліжка<br/>
                            </p>
                        </li>
                        <li className="">
                            <NavLink to="/rooms/room_studio_2person">
                                <b className="text-cyan-800 hover:text-amber-600">Номер студія(2 персони);</b><br/>
                            </NavLink>
                            <p className="pt-1">1500 грн/ доба</p>
                            <p className="italic">
                                спальне місце- двоярусне ліжко.
                            </p>
                        </li>
                        <li className="">
                            <NavLink to="/rooms/room_with_double_bed_and_sofa">
                                <b className="text-cyan-800 hover:text-amber-600">Номер-студія(3 персони);</b><br/>
                            </NavLink>
                            <p className="pt-1">2000 грн/ доба<br/>
                            </p>
                            <p className="italic">
                                двоспальне ліжко <br/>і розкладний диван.<br/>
                            </p>
                        </li>
                        <li className="">
                            <NavLink to="/rooms/room_studio_4person">
                                <b className="text-cyan-800 hover:text-amber-600">Номер- студія(4 персони);</b><br/>
                            </NavLink>
                            <p className="pt-1">2000 грн/доба<br/>
                            </p>
                            <p className="italic">
                                двоярусні ліжка
                            </p>
                        </li>
                    {/*</ul>*/}
                    {/*<ul className="flex flex-wrap w-3/4 gap-24 justify-between mx-auto mt-10">*/}
                        <li>
                            <b className="text-cyan-800">У вартість номера входить:</b><br/>
                            <p>
                                проживання в номері обраної категорії;<br/>
                                Спуск-підйом човна;<br/>
                                високошвидкісний Wi-Fi Інтернет(є такє?);<br/>
                            </p>
                        </li>
                        <li>
                            <b className="text-cyan-800">ДОДАТКОВІ ПОСЛУГИ:</b><br/>
                            Оренда катера-2500 грн;<br/>
                            Послуги єгера-1000 грн;<br/>
                            Спуск-підйом-500 грн* <br/>
                            Парковка катера-2500 грн/місяць;<br/>
                            Мийка катера-250-550 грн;<br/>
                            *для проживаючих-безкоштовно;<br/>
                        </li>
                    </ul>
                </article>
            </div>
        </div>
    );
};

export default Prices;