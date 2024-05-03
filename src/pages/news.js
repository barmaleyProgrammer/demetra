import React from 'react';
import {NavLink} from "react-router-dom";

const News = () => {
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
            <h1 className="text-4xl p-3 text-center">Увага!</h1>
            <h1 className="text-center">Про заборону добування (вилову) водних біоресурсів:</h1>
            <p className="indent-8 text-center"><br/>
                р. Південний Буг* - від впадання у Бузький лиман до с. Голоскове - з 5 квітня до 25 травня;
            </p>
            <a href="https://zakon.rada.gov.ua/laws/show/z1412-22#Text">
                <p className="text-blue-500 text-center">посилання на НАКАЗ(додаток 3,частина II)</p></a>
        </div>
    );
};

export default News;