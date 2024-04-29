import getImg from "./list_img_house_3rooms";

const CurrentImg = ({ id }) => {
    const img = getImg.find((item) => item.id == id);
    return (<img className="p-20 mx-auto h-[800px] " src={img.image} alt=""/>);
}

export default CurrentImg;