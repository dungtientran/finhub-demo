import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const TitleCategory = ({ title, isViewMore = true, id }) => {
    const { t } = useTranslation();

    return (
        <div className='title_category'>
            <h2>
                {title}
            </h2>

            {isViewMore && (
                <Link
                    to={`/blog/viewmore/${id}`}
                    className='view_more'
                >
                    {t("VIEW_MORE")} &gt;
                </Link>
            )}
        </div>
    )
}

export default TitleCategory
