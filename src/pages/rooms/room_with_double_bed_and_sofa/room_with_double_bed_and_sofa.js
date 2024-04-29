import list_img from "./list_img_room_with_double_bed_and_sofa";
import { useState } from "react";
import Modal from './../../../Components/modal/modal';

const RoomWithDoubleBedAndSofa = () => {
    const [modalCurrentImg, setModalCurrentImg] = useState(false);


    return (
        <>
            <div className="pb-10">
                <h1 className="p-4 text-4xl text-center text-[#2f4a69]">Номер студія двоспальне ліжко і розкладний диван 2000 грн доба.</h1>
                <div className="w-[70%] mx-auto grid grid-flow-row grid-cols-4 gap-10 mt-6">
                    {list_img.map((item, key) =>
                        <div key={key}>
                                <img className="h-auto w-60 rounded-lg cursor-pointer" src={item.image} alt="" onClick={() => setModalCurrentImg(item.image)}/>
                        </div>
                    )}
                </div>
            </div>
            {
                modalCurrentImg && (
                    <Modal close={() => setModalCurrentImg(false)}>
                        {/*<div className="">*/}
                            <img className="p-4 h-[800px]" src={modalCurrentImg} alt=""/>
                        {/*</div>*/}
                    </Modal>
                )
            }
        </>

    )
};
export default RoomWithDoubleBedAndSofa;