import React from 'react';

const ListingSkeleton = () => {
    return (
        <div className="listing__box--wrapper">
            <div className="listing">
                <div className="listing__img--skeleton"></div>
                <div className="listing__description">
                    <div className="listing__tags">
                        <div className="listing__tag--skeleton"></div>
                        <div className="listing__tag--skeleton"></div>
                    </div>
                    <div className="listing__title--skeleton"></div>
                    <div className="listing__info--wrapper">
                        <div className="listing__info--skeleton"></div>
                        <div className="listing__info--skeleton"></div>
                        <div className="listing__info--skeleton"></div>
                    </div>
                    <div className="listing__price--skeleton"></div>
                </div>
            </div>
        </div>
    );
}

export default ListingSkeleton;
