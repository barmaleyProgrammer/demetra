import axios from 'axios';
// import ApiError from './error';

const connect = axios.create({
    baseURL: (process.env.NODE_ENV === 'development') ? 'http://127.0.0.1:8000/api' : `${window.location.protocol}//api.demetra.fish/api`,
    // baseURL: (process.env.NODE_ENV === 'development') ? `${window.location.protocol}//api.demetra.fish/api` : 'http://127.0.0.1:8000/api',
    // baseURL: 'http://127.0.0.1:8000/api',
    responseType: 'json',
    maxRedirects: 0,
    // timeout: 1000,
    headers: {'Content-Type': 'application/json'}
});


export const newsList = () => {
    const fields = [
        'id','publish_date','title', 'body'
    ];
    return connect.get(`/news?fields=${fields.join(',')}`)
        .then((res) => res.data);
};

export const roomList = () => {
    return connect.get('/room').then((res) => res.data);
}

export const getRoomPhoto = (room_id) => {
    return connect.get(`/room/${room_id}/photo`).then((res) => res.data);
}

export const placeList = () => {
    return connect.get('/place').then((res) => res.data);
}

export const getPlacePhoto = (gallery_place_id) => {
    return connect.get(`/place/${gallery_place_id}/photo`).then((res) => res.data);
}

export const photosList = () => {
    const fields = [
        'id', 'image'
    ];
    // return connect.get('/homepagephotos?inActive=true').then((res) => res.data);
    return connect.get(`/homepagephotos?fields=${fields.join(',')}`)
        .then((res) => res.data);
};

export const serviceList = () => {
    return connect.get('/service').then((res) => res.data);
}


