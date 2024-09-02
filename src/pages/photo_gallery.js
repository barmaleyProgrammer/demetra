import React, {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
import AllPlaces from './territory/all_places';
import ImgCurrentPlace from './territory/current_place';
import {getPlacePhoto, placeList} from "../api2";
import Loader from "../Components/loader";
const PhotosGallery = () => {
    let { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [places, setPlaces] = useState([]);
    const [placePhotos, setPlacePhoto] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        try {
            setLoading(true);
            const result = await placeList();
            setPlaces(result);
        } catch (error) {
            console.error('Error fetching places', error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if (id) {
            setLoading(true);
        const gallery_place_id = Number(id);
        getPlacePhoto(gallery_place_id).then((result) => {
            setPlacePhoto(result);
            setLoading(false);
        });
        }
    }, [id]);

    if (loading) {
        return <Loader />;
    }


    if (!id) {
        return (
                <AllPlaces data={places}/>
            )
    } else {
        const currentPlace = places.find(place => place.id === Number(id));
        return (<ImgCurrentPlace current={placePhotos} name={currentPlace.name}/>)

    }
};

export default PhotosGallery;