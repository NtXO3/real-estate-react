import React, { useState } from 'react';
import { Menu } from '@headlessui/react';
import { RiMapPinLine, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri'
import { housesData } from '../data';

const CountryDropdown = ({ countryFilter, setCountryFilter }) => {

    const countriesInit = housesData.map(item => item.country)
    const countries = [...new Set(countriesInit)]

    return (
        <Menu>
            {
                ({ open }) => (
                    <div className="menu__wrapper">
                        <Menu.Button className='btn menu__btn'>
                            <div className='menu__btn--content'>
                                <RiMapPinLine className='menu__icon' />
                                <div className="menu__btn--text">
                                    <h5 className="menu__btn--title">{!countryFilter ? 'Location (any)' : countryFilter}</h5>
                                    <p className="menu__btn--para">Select your place</p>
                                </div>
                            </div>
                            {
                                open ? <RiArrowUpSLine className='menu__arrow'/> : <RiArrowDownSLine className='menu__arrow'/>
                            }
                        </Menu.Button>
                        <Menu.Items className='menu__dropdown'>
                            <Menu.Item>
                            {({ active }) => (
                                <button onClick={() => setCountryFilter('')} className={`btn dropdown__btn ${!countryFilter && 'active__dropdown'}`}>Location (any)</button>
                            )}
                            </Menu.Item>
                            {
                                countries.map((country, index) => (
                                    <Menu.Item>
                                        {({ active }) => (
                                            <button key={index} onClick={() => setCountryFilter(country)} className={`btn dropdown__btn ${countryFilter === country && 'active__dropdown'}`}>{country}</button>
                                        )}
                                    </Menu.Item>
                                ))
                            }
                        </Menu.Items>
                    </div>
                )
            }
        </Menu>
    );
}

export default CountryDropdown;
