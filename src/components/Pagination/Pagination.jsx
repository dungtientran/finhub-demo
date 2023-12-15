import React from 'react';
import { useSearchParams } from 'react-router-dom';

import '../../style/pagination.css';

import prev from '../../assets/pagination/prev.svg';
import next from '../../assets/pagination/next.svg';

const Pagination = ({ total, page }) => {
    const [searchParams, setSearchParams] = useSearchParams();

    const handlePage = (pageNumber) => {
        if (page <= total) {
            searchParams.set("page", pageNumber.toString());
            setSearchParams(searchParams);
        }
    }

    return (
        <div className='pagination_container'>
            <div className={`pagination`}>
                {page === 1 ? (
                    <span
                        className={`pagination-arrow-next`}
                        style={{ cursor: 'not-allowed' }}
                    >
                        <img src={prev} alt="prev" />
                    </span>
                ) : (
                    <span
                        className={`pagination-arrow-next`}
                        onClick={() => handlePage(Number(page) - 1)}
                    >
                        <img src={prev} alt="prev" />
                    </span>
                )}
                <p className={`current-page page_current text_current`}>{page || 1}</p>
                <p className="text-small page_current">of</p>
                <p className={`"max-page page_current text_current`}>{total || 1}</p>
                {page === total ? (
                    <span
                        className={`pagination-arrow-next`}
                        style={{ cursor: 'not-allowed' }}
                    >
                        <img src={next} alt="next" />
                    </span>
                ) : (
                    <span
                        className={`pagination-arrow-next`}
                        onClick={() => handlePage(Number(page) + 1)}
                    >
                        <img src={next} alt="next" />
                    </span>
                )}
            </div>
        </div>
    )
}

export default Pagination
