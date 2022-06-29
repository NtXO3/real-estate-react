import React from 'react';
import { BiBed, BiBath, BiArea } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom';

const Listing = ({ listing }) => {
    const navigate = useNavigate()

    return (
        <div className="listing__box--wrapper">
            <div className="listing" onClick={() => navigate(`/listings/${listing.id}`)}>
                <img src={listing?.image} alt="" className="listing__img" />
                <div className="listing__description">
                    <div className="listing__tags">
                        <div className="listing__tag">{listing.type}</div>
                        <div className="listing__tag purple__tag">{listing.country}</div>
                    </div>
                    <h2 className="listing__title">{listing.address}</h2>
                    <div className="listing__info--wrapper">
                        <div className="listing__info">
                            <BiBed className='listing__info--icon' />
                            <span>{listing.bedrooms}</span>
                        </div>
                        <div className="listing__info">
                            <BiBath className='listing__info--icon' />
                            <span>{listing.bathrooms}</span>
                        </div>
                        <div className="listing__info">
                            <BiArea className='listing__info--icon' />
                            <span>{listing.surface}</span>
                        </div>
                    </div>
                    <h2 className="listing__price">$ {listing.price}</h2>
                </div>
            </div>
        </div>
    );
}

export default Listing;
