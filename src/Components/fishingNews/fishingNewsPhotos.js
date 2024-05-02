import { useState, useEffect } from 'react';
import arrowLeftCurrentNews from '../../img/bass.png';
import arrowRightCurrentNews from '../../img/bass_left.png';
import listImg from "./list_img_fishingNews";
import Modal from "../modal/modal";
import { useResize } from './use-resize';


const FishingNewsPhotos = () => {
    const { width, isScreenSm, isScreenMd, isScreenLg, isScreenXl } = useResize();
    const [currentPage, setCurrentPage] = useState(1);
    const [modalCurrentImg, setModalCurrentImg] = useState(false);
    const [imgsPerPage, setImgsPerPage] = useState(4);
    const [imgToShow, setImgToShow] = useState([]);

    useEffect(() => {
        const result = listImg.slice(((currentPage - 1) * imgsPerPage), imgsPerPage * currentPage);
        setImgToShow(result);
    }, [currentPage, imgsPerPage]);

    useEffect(() => {
        if (isScreenSm) {
            setImgsPerPage(1);
        }
        if (isScreenMd) {
            setImgsPerPage(2);
        }
        if (isScreenLg) {
            setImgsPerPage(3);
        }
        if (isScreenXl) {
            setImgsPerPage(4);
        }
    }, [width]);


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
            <div className="flex justify-between mx-auto w-80">
                <img className="cursor-pointer" src={arrowRightCurrentNews} alt="" onClick={prev}/>
                <img className="cursor-pointer" src={arrowLeftCurrentNews} alt="" onClick={next}/>
            </div>
        );

    };

    const NewsList = ({ imgToShow }) => {
        return (
            <div className={`flex mb-8 w-3/4 justify-center mx-auto mt-4 gap-10`}>
                {
                    imgToShow.map((item, key) => {
                        return (
                            <div key={key}>
                                <img className={`rounded-lg sm:h-40 sm:w-32 lg:h-80 lg:w-64 `}
                                     src={item.image} alt=""
                                     onClick={() => setModalCurrentImg(item.image)}/>
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
            <NewsList imgToShow={imgToShow} />
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
