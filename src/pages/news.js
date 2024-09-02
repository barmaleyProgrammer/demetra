import {useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";
import {newsList} from '../api2';

const News = () => {

    useEffect( () => {
        newsList().then((result) => setNews_cms(result));
    }, []);

    const [news_cms, setNews_cms] = useState([]);
    return (
        <div className="w-3/4 mx-auto text-[#2f4a69] font-[Roboto] text-xl my-3 mb-8">
            <h1 className="text-4xl p-3 text-center">Рибалка на Південному Бузі</h1>
            <p className="indent-8 ">
                Південний Буг це найриболовніша річка України, яка приваблює не тільки аматорів та початківців
                рибної
                ловлі, але й найтитулованіших риболовів та спортсменів, які приїжджають не тільки з прилеглих
                районів, а й з різних регіонів країни.
            </p>
            <p className="indent-8 ">
                Найпопулярнішими видами хижої риби є щука, окунь та судак, з мирних видів в основному, водиться
                карась,
                лящ, плітка та сазан. Надалі ми будемо вас тримати в курсі останніх новин риболовлі та спійманих
                трофеїв.
                Ви також можете стати героєм стрічки новин, якщо надішлете Вашу цікаву історію нашому
                <NavLink className="text-amber-400 hover:text-blue-950" to="/contacts"> адміністратору</NavLink>
            </p>
            {
                news_cms.map((item, key) => {
                    const formattedDate = new Date(item.publish_date).toLocaleDateString('ru-RU', {
                        day: '2-digit',
                        month: '2-digit',
                        year: 'numeric',
                    });
                    return (
                        <div key={key} className="relative">
                            <hr className="mt-4"/>
                            <div
                                className="absolute left-0 top-0 ml-4 mt-4 text-sm text-gray-600">Дата публікації: {formattedDate}</div>
                            <h2 className="text-4xl p-3 text-center">{item.title}</h2>
                            <p className="text-center">
                                <div dangerouslySetInnerHTML={{__html: item.body}}></div>
                            </p>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default News;