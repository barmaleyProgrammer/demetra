import React from 'react';
import { useParams } from "react-router-dom";
import AllRooms from './rooms/all_room';
import ImgRoomList from './rooms/current_room';
import data from "./rooms/data";
const RoomsMain = () => {
    let { slug } = useParams();


    if (!slug) {
        return (
                <AllRooms data={data}/>
            )
    } else {
        const current = data.find((item) => item.slug === slug);
        return (<ImgRoomList current={current}/>)

    }
};

export default RoomsMain;