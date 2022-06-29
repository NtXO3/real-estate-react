import React, { useEffect, useState } from 'react';
import { housesData } from '../data';
import CountryDropdown from './CountryDropdown';
import { RiSearchLine } from 'react-icons/ri'
import Listing from './Listing';
import ListingSkeleton from './ListingSkeleton';
import { ImSpinner } from 'react-icons/im'
import TypeDropdown from './TypeDropdown';
import PriceDropdown from './PriceDropdown';

const Listings = () => {

    const [countryFilter, setCountryFilter] = useState('')
    const [typeFilter, setTypeFilter] = useState('')
    const [priceFilter, setPriceFilter] = useState({})
    const [listings, setListings] = useState([])
    const [isSkeleton, setIsSkeleton] = useState(true)
    const [isLoadingSpinner, setIsLoadingSpinner] = useState(false)

    useEffect(() => {
        setListings(housesData)
        setTimeout(() => {
            setIsSkeleton(false)
        }, 500)
    }, [])

    const filterListings = () => {
        setIsLoadingSpinner(true)
        const newListings = housesData
            .filter(item => (countryFilter ? item.country === countryFilter : item.country === item.country))
            .filter(item => (typeFilter ? item.type === typeFilter : item.type === item.type))
            .filter(item => (priceFilter.min ? +item.price >= priceFilter.min && (priceFilter.max ? +item.price <= priceFilter.max : +item.price) : item.price === item.price))
        setListings(newListings)
        setTimeout(() => {
            setIsLoadingSpinner(false)
        }, 500)
    }

    return (
        <section id="listings">
            <div className="container">
                <div className="row">
                    <div className="listings__search--wrapper">
                        <CountryDropdown countryFilter={countryFilter} setCountryFilter={setCountryFilter}/>
                        <TypeDropdown typeFilter={typeFilter} setTypeFilter={setTypeFilter} />
                        <PriceDropdown priceFilter={priceFilter} setPriceFilter={setPriceFilter} />
                        <button className="btn filter__btn" onClick={filterListings}><RiSearchLine /></button>
                    </div>
                    <div className="listings__wrapper">
                        {
                            isSkeleton ?
                            new Array(10).fill(0).map((_, index) => <ListingSkeleton key={index} />)
                            :
                            isLoadingSpinner ?
                            <ImSpinner className='spinner__icon' />
                            :
                            listings.length ?
                            listings.map(item => <Listing key={item.id} listing={item} />)
                            :
                            <div className="no__listings--wrapper">
                                <h1 className="no__listings--title">No Results Found Matching Your Filters</h1>
                                <p className="no__listings--para">Try removing some filters or try a different category</p>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Listings;
