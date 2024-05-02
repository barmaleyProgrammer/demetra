import {useState} from 'react';
import arrowLeftCurrentNews from '../../img/bass.png';
import arrowRightCurrentNews from '../../img/bass_left.png';
import listImg from "./list_img_fishingNews";
import Modal from "../modal/modal";

const imgsPerPage = 4;

const FishingNewsPhotos = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [modalCurrentImg, setModalCurrentImg] = useState(false);
    const PaginationCurrentNews = ({ total, perPage, currentPage, paginate }) => {
        const pageCount = Math.ceil(total / perPage);

        const next = () => {
            const val = currentPage + 1;
            if (pageCount >= val) {
                paginate(val);
            }
        };

        const prev = () => {
            const val = currentPage - 1;
            if (val > 0) {
                paginate(val);
            }
        }

        return (
            <div className="flex flex-row items-center justify-between gap-x-2">
                <img className="cursor-pointer absolute bottom-[-170px] left-[170px] hover:w-20 hover:left-[130px] hover:bottom-[-190px]" src={arrowRightCurrentNews} alt="" onClick={prev}/>
                <img className="cursor-pointer absolute bottom-[-170px] right-[170px] hover:w-20 hover:right-[130px] hover:bottom-[-190px]" src={arrowLeftCurrentNews} alt="" onClick={next}/>
            </div>
        );

    };

    const NewsList = ({news, currentPage, perPage}) => {
        const lastNewsIndex = currentPage * perPage;
        const firstNewsIndex = lastNewsIndex - perPage;
        const result = listImg.slice(firstNewsIndex, lastNewsIndex);

        return (
            <div className="flex mb-8 w-3/4 justify-center mx-auto gap-10">
                {
                    result.map((item, key) => {
                        return (
                            <div key={key}>
                                    <img className="rounded-lg mt-4 h-80 w-64" src={item.image} alt="" onClick={() => setModalCurrentImg(item.image)}/>
                            </div>
                        );
                    })
                }
            </div>
        );
    };

    return (
        <>
            <div className="flex flex-row items-center justify-between relative">
                <PaginationCurrentNews
                    total={listImg.length}
                    perPage={imgsPerPage}
                    currentPage={currentPage}
                    paginate={setCurrentPage}
                />
            </div>
            <NewsList
                news={listImg}
                perPage={imgsPerPage}
                currentPage={currentPage}
            />
            {
                modalCurrentImg && (
                    <Modal close={() => setModalCurrentImg(false)}>
                        <img className="p-4 h-[800px]" src={modalCurrentImg} alt=""onClick={() => setModalCurrentImg(false)}/>
                    </Modal>
                )
            }
        </>
    );
};

export default FishingNewsPhotos;
