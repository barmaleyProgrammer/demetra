import Modal from "../../Components/modal/modal";
import {useState} from "react";

const ImgCurrentPlace = ({current, name}) => {
    console.log('current', current);
    const [modalCurrentPage, setModalCurrentPage] = useState(false);
    return (
        <div>
            <div className="pb-10">
                <h1 className="p-4 text-4xl text-center text-[#2f4a69]">{name}</h1>
                <div className="w-[70%] mx-auto flex flex-wrap justify-center gap-10 mt-6">
                    {
                        current.map(( item, key) => {
                                return (
                                    <div key={key}>
                                        <img className={`h-auto w-60 rounded-lg cursor-pointer ${modalCurrentPage ? 'blur-[2px]' : ""}`}
                                            src={item.image} alt="" onClick={() => setModalCurrentPage(item.image)}/>
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
                        <img className="p-4 md:h-[800px] h-[500px]" src={modalCurrentPage} alt=""onClick={() => setModalCurrentPage(false)}/>
                        {/*</div>*/}
                    </Modal>
                )
            }
        </div>
    );
};

export default ImgCurrentPlace;