import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

function Pagination(props) {
    const { totalProduct, currentPage, setCurrentPage, totalPageSize } = props;
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalProduct / totalPageSize); i++) {
        pageNumbers.push(i);
    }
    const handleRight = () => {
        if (currentPage < pageNumbers.length) {
            setCurrentPage(currentPage + 1);
        }
    };
    const pagination = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleLeft = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };
    return (
        <ul className={'flex justify-center mt-10'}>
            <button
                onClick={handleLeft}
                className={`h-9 w-9 rounded-full text-[#0006]  ${currentPage !== 1 ? 'hover:bg-[#ddd]' : ''}`}
            >
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            {pageNumbers.map((number, index) => {
                return (
                    <li className="mx-1.5" key={index}>
                        <button
                            onClick={() => pagination(number)}
                            className={`
                                ' h-9 w-9 rounded-full hover:bg-[#ddd] ${
                                    currentPage === number ? 'bg-[#9C69E2] hover:bg-[#9C69E2] text-white ' : ''
                                }'`}
                        >
                            {number}
                        </button>
                    </li>
                );
            })}
            <button
                onClick={handleRight}
                className={`' h-9 w-9 rounded-full hover:bg-[#ddd] text-[#0006]'
                   ${currentPage !== pageNumbers.length ? ' hover:bg-[#ddd]' : ''} 
                   `}
            >
                <FontAwesomeIcon icon={faChevronRight} />
            </button>
        </ul>
    );
}

export default Pagination;
