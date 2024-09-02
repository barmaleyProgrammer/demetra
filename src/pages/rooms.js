import React, {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
import AllRooms from './rooms/all_room';
import ImgRoomList from './rooms/current_room';
import {getRoomPhoto, roomList} from "../api2";
import Loader from './../Components/loader';
const RoomsMain = () => {
    let { id } = useParams();
    const [rooms, setRooms] = useState([]);
    const [roomPhotos, setRoomPhotos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        return roomList().then((result) => {
            setRooms(result);
            setLoading(false);
        });
    }
    useEffect(() => {
        if (id) {
            setLoading(true);
            const room_id = Number(id);
            getRoomPhoto(room_id).then((result) => {
                setRoomPhotos(result);
                setLoading(false);
            });
        }
    }, [id]);

    if (loading) {
        return <Loader />;
    }

    if (!id) {
        return <AllRooms data={rooms} />;
    } else {
        const currentRoom = rooms.find(room => room.id === Number(id));
        return <ImgRoomList current={roomPhotos} name={currentRoom ? currentRoom.name : ''} />;
    }
};

export default RoomsMain;