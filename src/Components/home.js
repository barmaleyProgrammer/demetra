
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import pike from '../img/pike.webp';
import bass from '../img/bass.webp';
const Home = () => {



    return (
        <>
            {/*https://www.youtube.com/watch?v=VFHWuy2olto*/}
            {/*https://medium.com/stackanatomy/build-an-elegant-gallery-with-react-responsive-carousel-926c4f34768e*/}
            {/*https://www.youtube.com/watch?v=C5NjxM1dyxY*/}
            <Carousel >
                <section className="bg-[#F0F9FF] h-[406px] relative">
                    <h1
                    className="text-center text-3xl select-none absolute">База риболовного відпочинку
                </h1>
                    <div className="">
                        <img className="" src={pike} alt=""/>
                    </div>
                </section>
                <section className="bg-[#F0F9FF] h-[406px] relative">
                    <h1 className="text-center text-3xl select-none absolute">текст
                    </h1>
                    <div>
                        <img className="" src={bass} alt=""/>
                    </div>
                </section>
            </Carousel>
            <section className="text-center h-48 border-2 mb-3">
                Ознайомтеся з базою
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
