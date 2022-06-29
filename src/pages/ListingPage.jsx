import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { housesData } from '../data.js';
import { BiArea, BiBath, BiBed } from 'react-icons/bi';
import { useNavigate } from 'react-router';
import { AiOutlineTag } from 'react-icons/ai';
import { BiBuildingHouse } from 'react-icons/bi';
import { IoConstructOutline } from 'react-icons/io5';
import { ImSpinner } from 'react-icons/im';
import { RiThumbUpLine } from 'react-icons/ri';

const ListingPage = () => {
    const [modalOpen, setModalOpen] = useState(false)
    const navigate = useNavigate()
    const { id } = useParams()

    const [listing, setListing] = useState({})
    const idListing = housesData.find(item => item.id === +id)

    const [isLoading, setIsLoading] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)

    useEffect(() => {
        setListing(idListing)
    }, [idListing])

    const numberWithCommas = (num) =>  {
        if (!num) {
            return
        }
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsLoading(true)
        setTimeout(() => {
            setIsSuccess(true)
        }, 1000)
    }

    const createUrl = (str) => {
        return str.toLowerCase().split('').map(item => item === ' ' ? '-' : item).join('')
    }

    return (
        <section id="listing">
            <div className="container">
                <div className="row">
                    <div className="listing-info__top">
                        <div className="listing-info__top--description">
                            <h1 className="listing-info__title">{listing?.address}</h1>
                            <div className="listing__tags listing-info__tags">
                                <div className="listing__tag">{listing?.type}</div>
                                <div className="listing__tag purple__tag">{listing?.country}</div>
                            </div>
                        </div>
                        <h1 className="listing__price listing-info__top--price">${numberWithCommas(listing?.price)}</h1>
                    </div>
                    <div className="listing__content--wrapper">
                        <div className="listing__content">
                            <figure className="listing-info__img--wrapper">
                                <img src={listing?.imageLg} alt="" className="listing-info__img" />
                            </figure>
                            <div className="listing-info__stats">
                                <div className="listing__info listing__stat">
                                    <BiBed className='listing__info--icon' />
                                    <span>{listing?.bedrooms}</span>
                                </div>
                                <div className="listing__info listing__stat">
                                    <BiBath className='listing__info--icon' />
                                    <span>{listing?.bathrooms}</span>
                                </div>
                                <div className="listing__info listing__stat">
                                    <BiArea className='listing__info--icon' />
                                    <span>{listing?.surface}</span>
                                </div>
                            </div>
                            <p className="listing-info__para">
                                {listing?.description}
                            </p>
                            <h2 className="listing-info__details--title">Property Details</h2>
                            <div className="listing-info__details--wrapper">
                                <div className="listing-info__details">
                                    <p className="listing-info__details--name"><AiOutlineTag className='listing-info__details--icon'/>Price</p>
                                    <p className="listing-info__details--value">${numberWithCommas(listing?.price)}</p>
                                </div>
                                <div className="listing-info__details">
                                    <p className="listing-info__details--name"><BiBuildingHouse className='listing-info__details--icon'/>Property Type</p>
                                    <p className="listing-info__details--value">{listing?.type}</p>
                                </div>
                                <div className="listing-info__details">
                                    <p className="listing-info__details--name"><IoConstructOutline className='listing-info__details--icon'/>Construction Year</p>
                                    <p className="listing-info__details--value">{listing?.year}</p>
                                </div>
                                <div className="listing-info__details">
                                    <p className="listing-info__details--name"><BiBed className='listing-info__details--icon'/>Bedrooms</p>
                                    <p className="listing-info__details--value">{listing?.bedrooms}</p>
                                </div>
                                <div className="listing-info__details">
                                    <p className="listing-info__details--name"><BiBath className='listing-info__details--icon'/>Bathrooms</p>
                                    <p className="listing-info__details--value">{listing?.bathrooms}</p>
                                </div>
                            </div>
                        </div>
                        <div className="listing__contact--wrapper">
                            <div className="listing__contact--box">
                                {
                                    isLoading ? 
                                    <div className='loading__overlay'><ImSpinner className='spinner__icon' /></div>
                                    :
                                    ''
                                }
                                {
                                    isSuccess ?
                                    <div className='success__overlay'>
                                        <RiThumbUpLine className='success__icon' />
                                        <h1 className='success__title'>Your Message has been received!</h1>
                                        <p className='success__para'>The respective property agent will be in touch with you soon!</p>
                                    </div>
                                    :
                                    ''
                                }
                                <div className="listing__agent--wrapper">
                                    <img src={listing.agent?.image} alt="" className="listing__agent--img" />
                                    <div>
                                        <h2 className="listing__agent--name">{listing.agent?.name}</h2>
                                        <button type='button' onClick={() => navigate(`/${listing.agent?.name ? createUrl(listing.agent?.name) : ''}/listings`)} className="btn agent__btn">View Listings</button>
                                    </div>
                                </div>
                                <form className="listing__contact" onSubmit={handleSubmit}>
                                    <input type="text" name="name" className='listing__input' placeholder='Name*' required />
                                    <input type="email" name="email" className='listing__input' placeholder='Email*' required/>
                                    <input type="tel" name="phone" className='listing__input' placeholder='Phone*' required/>
                                    <textarea name="message" className='listing__input listing__message' placeholder='Hello, I am interested in viewing this property...'></textarea>
                                    <div className="listing__contact--buttons">
                                        <button className="btn btn__primary contact__btn">Send message</button>
                                        <a href={`tel: ${listing.agent?.phone}`} className="btn btn__outline">Call</a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ListingPage;
