import React from 'react';
import house from './main_img/3rooms_house.jpg';
import kitchen from './main_img/photo_1.jpg';
import room_3person from './main_img/room_3person_2500.jpg';
import studio_2000grn from './main_img/studio_2000grn.jpg';
import studio_1500grn from './main_img/studio_1500grn.jpg';
import person_4 from './main_img/studio_4person.jpg';
import {NavLink} from "react-router-dom";
const RoomsMain = () => {
    return (
        <div className="bg-[#F0F5FA] pb-10">
            <div className="p-8 text-[#2f4a69] text-3xl text-center">
                Наші доступні номери
            </div>
            {/*<div className="grid grid-cols-3 mb-8 w-3/4 mx-auto">*/}
            <div className="flex flex-wrap gap-24 w-3/4 mx-auto justify-center bg-[#F0F5FA]">
                <div>
                    <NavLink to="/house_3rooms">
                    <img className="rounded-lg mt-4 h-[369px] w-[266px]" src={house} alt=""/>
                    <p className="text-[#ABABAB] text-sm py-2">дім трикімнатний 4000грн/доба</p>
                    </NavLink>
                </div>
                <div>
                    <NavLink to="/room_with_bedroom">
                    <img className="rounded-lg mt-4 h-[369px] w-[266px]" src={room_3person} alt=""/>
                    <p className="text-[#ABABAB] text-sm py-2">номер кухня + спальня 2500грн/доба</p>
                    </NavLink>
                </div>
                <div>
                    <NavLink to="/room_with_double_bed_and_sofa_2000">
                    <img className="rounded-lg mt-4 h-[369px] w-[266px]" src={studio_2000grn} alt=""/>
                    <p className="text-[#ABABAB] text-sm py-2">Номер-студія-2000 грн</p>
                    </NavLink>
                </div>
                <div>
                    <NavLink to="/room_studio_2person">
                    <img className="rounded-lg mt-4 h-[369px] w-[266px]" src={studio_1500grn} alt=""/>
                    <p className="text-[#ABABAB] text-sm py-2">Номер- студія -1500 грн</p>
                    </NavLink>
                </div>
                <div>
                    <NavLink to="/room_studio_4person">
                    <img className="rounded-lg mt-4 h-[369px] w-[266px]" src={person_4} alt=""/>
                    <p className="text-[#ABABAB] text-sm py-2">Номер- студія на чотирьох осіб -2000 грн</p>
                    </NavLink>
                </div>
                <div>
                    <NavLink to="/kitchen">
                    <img className="rounded-lg mt-4 h-[369px] w-[266px]" src={kitchen} alt=""/>
                    <p className="text-[#ABABAB] text-sm py-2">Комплектация кухни</p>
                    </NavLink>
                </div>
            </div>
            {/*<div className="p-8 text-[#2f4a69] text-3xl text-center">*/}
            {/*    Комплектация кухни*/}
            {/*</div>*/}
            {/*<div className="grid grid-cols-3 mb-8 w-3/4 mx-auto">*/}
            {/*    <div>*/}
            {/*        /!*<NavLink to={`/news/${item.id}`}>*!/*/}
            {/*        <img className="rounded-lg mt-4 w-[369px] h-[266px]" src={kitchen} alt=""/>*/}
            {/*        <p className="text-[#ABABAB] text-sm py-2">3 кімн дім</p>*/}
            {/*        /!*<h2>{item.title}</h2>*!/*/}
            {/*        /!*</NavLink>*!/*/}
            {/*    </div>*/}
            {/*    <div>*/}
            {/*        /!*<NavLink to={`/news/${item.id}`}>*!/*/}
            {/*        <img className="rounded-lg mt-4 w-[369px] h-[266px]" src={kitchen} alt=""/>*/}
            {/*        <p className="text-[#ABABAB] text-sm py-2">3 кімн дім</p>*/}
            {/*        /!*<h2>{item.title}</h2>*!/*/}
            {/*        /!*</NavLink>*!/*/}
            {/*    </div>*/}
            {/*    <div>*/}
            {/*        /!*<NavLink to={`/news/${item.id}`}>*!/*/}
            {/*        <img className="rounded-lg mt-4 w-[369px] h-[266px]" src={kitchen} alt=""/>*/}
            {/*        <p className="text-[#ABABAB] text-sm py-2">3 кімн дім</p>*/}
            {/*        /!*<h2>{item.title}</h2>*!/*/}
            {/*        /!*</NavLink>*!/*/}
            {/*    </div>*/}


            {/*</div>*/}

        </div>

    )
        ;
};

export default RoomsMain;