import { useState } from 'react';
import arrowLeftCurrentNews from '../../img/bass.png';
import arrowRightCurrentNews from '../../img/bass_left.png';
import listImg from "./list_img_fishingNews";
import Modal from "../modal/modal";
import { useResize } from './use-resize';


const FishingNewsPhotos = () => {
    const { width, isScreenSm, isScreenMd, isScreenLg, isScreenXl } = useResize();
    const [currentPage, setCurrentPage] = useState(1);
    const [modalCurrentImg, setModalCurrentImg] = useState(false);
    const [imgsPerPage, setImgsPerPage] = useState();
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
            <div className={`flex justify-between mx-auto ${isScreenSm ? 'w-80' : 'w-40', isScreenMd ? 'w-80' : 'w-40'}`}>
                <img className="cursor-pointer" src={arrowRightCurrentNews} alt="" onClick={prev}/>
                <img className="cursor-pointer" src={arrowLeftCurrentNews} alt="" onClick={next}/>
            </div>
        );

    };

    const NewsList = ({news, currentPage, perPage}) => {
        const lastNewsIndex = currentPage * perPage;
        const firstNewsIndex = lastNewsIndex - perPage;
        const result = listImg.slice(firstNewsIndex, lastNewsIndex);

        return (
            // <div className="flex mb-8 w-3/4 justify-center mx-auto gap-10">
            <div className={`flex mb-8 w-3/4 justify-center mx-auto gap-10 
            ${isScreenSm ? setImgsPerPage(4) : setImgsPerPage(3)}
            ${isScreenLg ? setImgsPerPage(4) : setImgsPerPage(3)}
            `}>
                {/*<div className="App">*/}
                {/*    <p>width: {width}px</p>*/}
                {/*    <p>isScreenSm: {String(isScreenSm)}</p>*/}
                {/*    <p>isScreenMd: {String(isScreenMd)}</p>*/}
                {/*    <p>isScreenLg: {String(isScreenLg)}</p>*/}
                {/*    <p>isScreenXl: {String(isScreenXl)}</p>*/}
                {/*</div>*/}
                {
                    result.map((item, key) => {
                        return (
                            <div key={key}>
                                <img className={`rounded-lg mt-4 w-64 
                                     ${isScreenSm ? 'h-80 w-64' : 'h-35 w-20', isScreenMd ? 'h-80 w-64' : 'h-35 w-20', isScreenLg ? 'h-80 w-64' : 'h-35 w-20'} `}
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
