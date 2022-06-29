import React, { useState } from 'react';
import { Menu } from '@headlessui/react';
import { RiMapPinLine, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri'
import { housesData } from '../data';
import { BiBuildingHouse } from 'react-icons/bi';

const TypeDropdown = ({ typeFilter, setTypeFilter }) => {

    const typesInit = housesData.map(item => item.type)
    const types = [...new Set(typesInit)]

    return (
        <Menu>
            {
                ({ open }) => (
                    <div className="menu__wrapper">
                        <Menu.Button className='btn menu__btn'>
                            <div className='menu__btn--content'>
                                <BiBuildingHouse className='menu__icon' />
                                <div className="menu__btn--text">
                                    <h5 className="menu__btn--title">{!typeFilter ? 'Property Type (any)' : typeFilter}</h5>
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
                                <button onClick={() => setTypeFilter('')} className={`btn dropdown__btn ${!typeFilter && 'active__dropdown'}`}>Property Type (any)</button>
                            )}
                            </Menu.Item>
                            {
                                types.map((type, index) => (
                                    <Menu.Item>
                                        {({ active }) => (
                                            <button key={index} onClick={() => setTypeFilter(type)} className={`btn dropdown__btn ${typeFilter === type && 'active__dropdown'}`}>{type}</button>
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

export default TypeDropdown;
