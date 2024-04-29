import list_img from "../house_3rooms/list_img_house_3rooms";
import { useState } from "react";
import Modal from './../../../Components/modal/modal';

const House_3rooms = () => {
    const [modalCurrentPage, setModalCurrentPage] = useState(false);


    return (
        <>
            <div className="pb-10">
                <h1 className="p-4 text-4xl text-center text-[#2f4a69]">Дім трикімнатний</h1>
                <div className="w-[70%] mx-auto grid grid-flow-row grid-cols-4 gap-10 mt-6">
                    {list_img.map((item, key) =>
                        <div key={key}>
                                <img className="h-auto w-60 rounded-lg cursor-pointer" src={item.image} alt="" onClick={() => setModalCurrentPage(item.image)}/>
                        </div>
                    )}
                </div>
            </div>
            {
                modalCurrentPage && (
                    <Modal close={() => setModalCurrentPage(false)}>
                        {/*<div className="">*/}
                            <img className="p-4 h-[800px]" src={modalCurrentPage} alt=""/>
                        {/*</div>*/}
                    </Modal>
                )
            }
        </>

    )
};
export default House_3rooms;