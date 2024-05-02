import Modal from "../../Components/modal/modal";
import {useState} from "react";

const ImgRoomList = ({current}) => {
    const [modalCurrentPage, setModalCurrentPage] = useState(false);
    return (
        <div>
            <div className="pb-10">
                <h1 className="p-4 text-4xl text-center text-[#2f4a69]">{current.title}</h1>
                {/*<div className="w-[70%] mx-auto grid grid-flow-row grid-cols-4 gap-10 mt-6">*/}
                <div className="w-[70%] mx-auto flex flex-wrap justify-center gap-10 mt-6">
                    {
                        current.images.map(( item, key) => {
                                return (
                                    <div key={key}>
                                        <img className={`h-auto w-60 rounded-lg cursor-pointer ${modalCurrentPage ? 'blur-[2px]' : ""}`}
                                            src={item} alt="" onClick={() => setModalCurrentPage(item)}/>
                                    </div>
                                );
                        })
                    }
                </div>
            </div>
            {
                modalCurrentPage && (
                    <Modal close={() => setModalCurrentPage(false)}>
                        {/*<div className="">*/}
                        <img className="p-4 h-[500px]" src={modalCurrentPage} alt="" onClick={() => setModalCurrentPage(false)}/>
                        {/*</div>*/}
                    </Modal>
                )
            }
        </div>
    );
};

export default ImgRoomList;