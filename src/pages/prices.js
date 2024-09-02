import React, {useEffect, useState} from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import {getRoomPhoto, roomList} from "../api2";
import Loader from './../Components/loader';

const Prices = () => {
let { id } = useNavigate();
    const [rooms, setRooms] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        return roomList().then((result) => {
            setRooms(result);
            setLoading(false);
        });
    }

    if (loading) {
        return <Loader />;
    }

    return (
        <div className="text-[#2f4a69] w-3/4 justify-center mx-auto">
            <h1 className="md:text-4xl text-xl text-center p-3">Ціни бази риболовлі та сімейного відпочинку «Деметра</h1>
            <h2 className="mb-4 text-center">На нашій базі є номери різних категорій</h2>
            <div className="">
                <article>
                    <div className="mx-auto text-center">
                        <p>Ціни вказані в гривнях за номер за добу</p>
                        <p className="pt-2"><b>Наявність номерів:</b></p>
                    </div>
                    <ul className="grid grid-cols-1 md:grid-cols-3 gap-10 gap-y-6 justify-center mx-auto mt-10">
                        {
                            rooms.map((room, index) => {
                                return (
                                    <li key={index} className="">
                                        <NavLink to={`/rooms/${room.id}`}>
                                            <b className="text-cyan-800 hover:text-amber-600">{room.name}</b><br/>
                                        </NavLink>
                                        <p className="pt-1">{room.price}грн/ доба.<br/>
                                        </p>
                                        <div dangerouslySetInnerHTML={{__html: room.description}}></div>
                                    </li>
                                )
                                }
                            )
                        }
                    </ul>
                    <ul className="flex flex-wrap gap-24 justify-center mx-auto mt-10">
                        <li>
                            <b className="text-cyan-800">У вартість номера входить:</b><br/>
                            <p>
                                проживання в номері обраної категорії;<br/>
                                Спуск-підйом човна;<br/>
                                високошвидкісний Wi-Fi Інтернет;<br/>
                            </p>
                        </li>
                        <li>
                            <b className="text-cyan-800">ДОДАТКОВІ ПОСЛУГИ:</b><br/>
                            Оренда катера-2500 грн;<br/>
                            Послуги єгера-1000 грн;<br/>
                            Спуск-підйом-500 грн* <br/>
                            Парковка катера-2500 грн/місяць;<br/>
                            Мийка катера-250-550 грн;<br/>
                            *для проживаючих-безкоштовно(один раз на добу);<br/>
                        </li>
                    </ul>
                </article>
            </div>
        </div>
    );
};

export default Prices;