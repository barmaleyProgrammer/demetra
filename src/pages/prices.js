import { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import { roomList, serviceList } from "../api2";
import Loader from './../Components/loader';

const Prices = () => {
    const [rooms, setRooms] = useState([]);
    const [loading, setLoading] = useState(true);
    const [services, setServices] = useState([]);

    useEffect(() => {
        getData();
        getService();
    }, []);

    const getData = () => {
        return roomList().then((result) => {
            setRooms(result);
            setLoading(false);
        });
    }

    const getService = () => {
        return serviceList().then((result) => {
            setServices(result);
        });
    }

    if (loading) {
        return <Loader />;
    }

    return (
        <div className="text-[#2f4a69] w-11/12 md:w-3/4 justify-center mx-auto">
            <h1 className="md:text-4xl text-2xl text-center p-4 font-bold">Ціни бази риболовлі та сімейного відпочинку «Деметра»</h1>
            <h2 className="text-lg md:text-2xl mb-6 text-center">На нашій базі є номери різних категорій</h2>
            <div className="text-lg md:text-2xl mb-7 text-center">Просимо звернути увагу !!! <br> На час опалювального сезону вартiсть номерiв збiльшуеться на 500 грн за добу. <br> Дякуємо за розумiння. </div>
            <article>
                <div className="text-center mb-8">
                    <p>Ціни вказані в гривнях за номер за добу</p>
                    <p className="pt-2 font-semibold text-lg"><b>Наявність номерів:</b></p>
                </div>

                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center mx-auto">
                    {
                        rooms.map((room, index) => (
                            <li key={index} className="border p-4 rounded-lg shadow-lg">
                                <NavLink to={`/rooms/${room.id}`}>
                                    <b className="text-cyan-800 hover:text-amber-600 text-lg">{room.name}</b><br />
                                </NavLink>
                                <p className="pt-1 text-sm md:text-base">{room.price} грн/ доба<br /></p>
                                <div className="text-sm md:text-base" dangerouslySetInnerHTML={{ __html: room.description }}></div>
                            </li>
                        ))
                    }
                </ul>

                <div className="mt-10 text-center">
                    <h3 className="text-xl md:text-2xl font-semibold mb-6">Наші послуги</h3>
                    <ul className="flex flex-wrap gap-10 justify-center mx-auto">
                        {
                            services.map((item, index) => (
                                <li key={index} className="w-full md:w-1/2 lg:w-1/3 text-left border p-4 rounded-lg shadow-lg">
                                    <b className="text-cyan-800 text-lg">{item.name}</b><br />
                                    <div className="text-sm md:text-base" dangerouslySetInnerHTML={{ __html: item.description }}></div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </article>
        </div>
    );
};

export default Prices;
