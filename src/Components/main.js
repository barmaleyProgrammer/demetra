
import { Routes, Route } from 'react-router-dom';




// import News from '../pages/news.js';
// import About from '../pages/about.js';
import Home from './home';
import Prices from '../pages/prices';
import RoomsMain from '../pages/rooms/rooms_main';
import Contacts from '../pages/contacts';
import House_3rooms from "../pages/rooms/house_3rooms/house_3rooms";
import RoomWithBedroom from "../pages/rooms/room_with_bedroom/room_with_bedroom";
import RoomWithDoubleBedAndSofa from "../pages/rooms/room_with_double_bed_and_sofa/room_with_double_bed_and_sofa";
import RoomStudioTwoPerson from "../pages/rooms/room_studio_2person/room_studio_2person";
import RoomStudioFourPerson from "../pages/rooms/room_studio_4person/room_studio_4person";
import Kitchen from "../pages/rooms/kitchen/kitchen";
import Territory from "../pages/territory/territory";
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
                <Route path="/rooms_main" element={<RoomsMain />} />
                <Route path="/house_3rooms/:id?" element={<House_3rooms />} />
                <Route path="/room_with_bedroom/:id?" element={<RoomWithBedroom />} />
                <Route path="/room_with_double_bed_and_sofa_2000/:id?" element={<RoomWithDoubleBedAndSofa />} />
                <Route path="/room_studio_2person/:id?" element={<RoomStudioTwoPerson />} />
                <Route path="/room_studio_4person/:id?" element={<RoomStudioFourPerson />} />
                <Route path="/kitchen/:id?" element={<Kitchen />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/territory/:id?" element={<Territory />} />
            </Routes>
        </main>
    );
};

export default Main;
