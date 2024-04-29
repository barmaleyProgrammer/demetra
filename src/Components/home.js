
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import pike from '../img/pike.webp';
import bug from '../img/Bug_bridge2.png';
import bug_bridge2 from '../img/trikhaty_bridge2_cuten.png';
import {NavLink} from "react-router-dom";
import React from "react";
import FishingNewsPhotos from "./fishingNews/fishingNewsPhotos";
const Home = () => {



    return (
        <>
            {/*https://www.youtube.com/watch?v=VFHWuy2olto*/}
            {/*https://medium.com/stackanatomy/build-an-elegant-gallery-with-react-responsive-carousel-926c4f34768e*/}
            {/*https://www.youtube.com/watch?v=C5NjxM1dyxY*/}
            <Carousel axis={'vertical'}>
                <section className="bg-[#F0F9FF] h-[650px] relative">
                    <h1 className="p-8 text-[#2f4a69] text-3xl absolute w-full">База риболовлі та сімейного відпочинку "Деметра"</h1>
                    <div className="">
                        {/*https://www.google.com/imgres?q=%D0%A2%D1%80%D0%B8%D1%85%D0%B0%D1%82%D1%8B%20%D0%BC%D0%BE%D1%81%D1%82&imgurl=https%3A%2F%2Ftrixati.org.ua%2Fwp-content%2Fuploads%2F2015%2F05%2Fslide02.jpg&imgrefurl=https%3A%2F%2Ftrixati.org.ua%2F&docid=uFKRifDMPjvmLM&tbnid=3j6kKLaY5FQp2M&vet=12ahUKEwjlh62E6eGFAxX1ov0HHcTJDCMQM3oECBgQAA..i&w=1920&h=800&hcb=2&ved=2ahUKEwjlh62E6eGFAxX1ov0HHcTJDCMQM3oECBgQAA*/}
                        <img className="" src={bug_bridge2} alt=""/>
                    </div>
                </section>
                {/*<section className="bg-[#F0F9FF] h-[650px] relative">*/}
                {/*    <h1 className="p-8 text-[#2f4a69] text-3xl absolute w-full">База риболовлі та сімейного відпочинку "Деметра"</h1>*/}
                {/*    <div className="">*/}
                {/*        <img className="" src={bug} alt=""/>*/}
                {/*    </div>*/}
                {/*</section>*/}
                {/*<section className="bg-[#F0F9FF] h-[650px] relative">*/}
                {/*    <h1 className="p-5 text-3xl absolute w-full">текст*/}
                {/*    </h1>*/}
                {/*    <div>*/}
                {/*        <img className="" src={pike} alt=""/>*/}
                {/*    </div>*/}
                {/*</section>*/}
            </Carousel>
            <section className="w-1/2 text-center mx-auto text-[#2f4a69] font-[Roboto] text-xl my-3 mb-8">
                <div>
                    <span>База риболовлі та сімейного відпочинку "Деметра" відкриває сезон у 2024 році.</span><br/>
                    <span>Завжди раді вас бачити!</span>
                </div>
                <div>
                    <h2 className="font-[Poppins] text-[38px] my-4">
                        <span className="text-[#fef333]">Все буде </span>
                        <span className="text-[#0a95d5]">УКРАЇНА!!!!</span>
                    </h2>
                </div>
                    <div className="mt-8">
                        <h4>Ласкаво просимо!</h4>
                        <span>База риболовлі та сімейного відпочинку Деметра знаходиться на лівому березі басейну
                            річки Південний Буг між селами Піски та Гурʼївка, близько 25 км від Миколаєва.<br/>
                            Це місце приваблює риболовів та поцінувачів тихого та культурного відпочинку.
                           <br/> Вас чекають комфортабельні номери, затишок та вдала риболовля.
                       </span>
                    </div>
            </section>
            <section className="font-[Poppins] text-xl text-center h-auto mx-auto bg-slate-200 text-[#2f4a69] pb-16 pt-16">
                <h1 className="text-[#2f4a69] text-4xl p-3">Рибалка на Південному Бузі</h1>
                <p>
                    Південний Буг - це найриболовніша річка України, яка приваблює не тільки аматорів та початківців рибної ловлі,
                    <br/>але й найтитулованіших риболовів та спортсменів, які приїжджають з різних регіонів країни.<br/>
                    Найпопулярніші види  хижої риби в місцевих водоймах -  щука, окунь та судак.
                    З мирних видів переважно  водиться карась, лящ, плітка та сазан.<br/>
                    Надалі ми будемо вас тримати в курсі останніх новин риболовлі та спійманих трофеїв.<br/>
                    Ви також можете стати героєм стрічки новин, якщо надішлете Вашу цікаву історію нашому
                    <NavLink className="text-[#1a73e8] hover:text-blue-950" to="/contacts"> адміністратору</NavLink>
                </p>
            </section>
            <section className="text-center h-auto mb-3 p-8 mx-auto text-[#2f4a69] py-4">
                <h1 className="text-[#2f4a69] text-3xl p-3">Фотогалерея</h1>
                <FishingNewsPhotos/>
            </section>
            <section className="text-center border-2 bg-slate-200">
                ми на мапі
                <iframe title="myFrame" className="w-3/4 h-96 mx-auto p-3"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6912.198806430568!2d31.846115322159463!3d47.12386325392417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c5bf84f49e2e83%3A0x5fa0683ca5bf42!2z0JHQsNC30LA!5e0!3m2!1sru!2sua!4v1714045805492!5m2!1sru!2sua"
                        allowFullScreen="" loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
            </section>
        </>
    );
};
export default Home;
