
import { Routes, Route } from 'react-router-dom';




// import News from '../pages/news.js';
// import About from '../pages/about.js';
import Home from './home';
import Prices from '../pages/prices';
import Rooms from '../pages/rooms';
import Contacts from '../pages/contacts';
import PhotoGallery from "../pages/photo_gallery";
import About from "../pages/about";
import News from "../pages/news";


const Main = () => {

    return (
        <main className="w-full">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/news" element={<News />} />
                <Route path="/prices" element={<Prices />} />
                <Route path="/rooms/:slug?" element={<Rooms />} />
                <Route path="/photo_gallery/:slug?" element={<PhotoGallery />} />
                <Route path="/contacts" element={<Contacts />} />
                {/*<Route path="/territory/:id?" element={<Territory />} />*/}
            </Routes>
        </main>
    );
};

export default Main;
