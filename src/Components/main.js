
import { Routes, Route } from 'react-router-dom';




// import News from '../pages/news.js';
// import About from '../pages/about.js';
import Home from './home';
import Services from '../pages/services';
// import Contacts from '../pages/contacts';


const Main = () => {

    return (
        <main className="w-full mx-auto">
            <Routes>
                <Route path="/" element={<Home />} />
                {/*<Route path="/about" element={<About />} />*/}
                <Route path="/services" element={<Services />} />
                {/*<Route path="/news/:id?" element={<News />} />*/}
                {/*<Route path="/contacts" element={<Contacts />} />*/}
                {/*<Route path="/userAgreement" element={<UserAgreement />} />*/}
            </Routes>
        </main>
    );
};

export default Main;
