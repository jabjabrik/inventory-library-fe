import { useState } from 'react';
import Pagination from 'react-bootstrap/Pagination';


const PaginationComp = ({ currentPage, setCurrentPage, totalPages }) => {
    const pageNumbers = [...Array(totalPages + 1).keys()].slice(1)

    const handleNextPrev = (type) => {
        if (type === 'next') {
            if (currentPage !== totalPages) setCurrentPage(currentPage + 1)
        }
        if (type === 'prev') {
            if (currentPage !== 1) setCurrentPage(currentPage - 1)
        }
    }

    return (
        <Pagination>
            <Pagination.Prev disabled={currentPage === 1} onClick={() => handleNextPrev('prev')} />
            {pageNumbers.map(pgNumber => (
                <Pagination.Item key={pgNumber} active={pgNumber === currentPage} onClick={() => setCurrentPage(pgNumber)}>
                    {pgNumber}
                </Pagination.Item>
            ))}
            <Pagination.Next disabled={currentPage === pageNumbers.at(-1)} onClick={() => handleNextPrev('next')} />
        </Pagination>

    )
}

export default PaginationComp;


