import React from 'react';
import { useParams } from "react-router-dom";
import AllPlaces from './territory/all_places';
import ImgCurrentPlace from './territory/current_place';
import data from "./territory/data_territory";
const PhotosGallery = () => {
    let { slug } = useParams();

    if (!slug) {
        return (
                <AllPlaces data={data}/>
            )
    } else {
        const current = data.find((item) => item.slug === slug);
        return (<ImgCurrentPlace current={current}/>)

    }
};

export default PhotosGallery;