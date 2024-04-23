
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import pike from '../img/pike.webp';
import bug from '../img/Bug_bridge.jpeg';
const Home = () => {



    return (
        <>
            {/*https://www.youtube.com/watch?v=VFHWuy2olto*/}
            {/*https://medium.com/stackanatomy/build-an-elegant-gallery-with-react-responsive-carousel-926c4f34768e*/}
            {/*https://www.youtube.com/watch?v=C5NjxM1dyxY*/}
            <Carousel>
                <section className="bg-[#F0F9FF] relative">
                    <h1 className="p-5 text-3xl absolute w-full">База риболовлі та сімейного відпочинку "Деметра"</h1>
                    <div className="">
                        <img className="" src={bug} alt=""/>
                    </div>
                </section>
                <section className="bg-[#F0F9FF] max-h-full relative">
                    <h1 className="p-5 text-3xl absolute w-full">текст
                    </h1>
                    <div>
                        <img className="" src={pike} alt=""/>
                    </div>
                </section>
            </Carousel>
            <section className="w-1/2 text-center mx-auto text-[#2f4a69] font-[Roboto] text-xl my-3">
                <div>
                    <span>База риболовлі та сімейного відпочинку Деметра відкриває сезон у 2024 році.</span><br/>
                    <span>Завжди раді вас бачити!</span>
                </div>
                <div>
                    <h2 className="font-[Poppins] text-[38px] my-4">
                        <span className="text-[#fef333]">Все буде </span>
                        <span className="text-[#0a95d5]">УКРАЇНА!!!!</span>
                    </h2>
                </div>
                    <div className="mt-8">
                        <h4>Ласкаво просимо до нас</h4>
                       <span>База риболовлі та сімейного відпочинку Деметра знаходиться хххххх.<br/> Вас чекають комфортабельні номери, затишок і тиша на території</span>
                    </div>
            </section>
            <section className="text-center h-48 border-2 mb-3">
                новини рибалки
            </section>
            <section className="text-center h-48 border-2 mb-3">
                ми на мапі
            </section>
        </>
);
};
export default Home;
