import React, { useState } from 'react';
import { Menu } from '@headlessui/react';
import { RiMapPinLine, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri'
import { housesData } from '../data';
import { MdAttachMoney } from 'react-icons/md';

const PriceDropdown = ({ priceFilter, setPriceFilter }) => {

    const ranges = [
        {
            min: 20000,
            max: 30000
        },
        {
            min: 30000,
            max: 40000,
        },
        {
            min: 100000,
            max: 130000,
        },
        {
            min: 130000,
            max: 160000,
        },
        {
            min: 160000,
            max: 200000,
        },
        {
            min: 200000,
            max: null
        }
    ]

    return (
        <Menu>
            {
                ({ open }) => (
                    <div className="menu__wrapper">
                        <Menu.Button className='btn menu__btn'>
                            <div className='menu__btn--content'>
                                <MdAttachMoney className='menu__icon' />
                                <div className="menu__btn--text">
                                    <h5 className="menu__btn--title">{!priceFilter.min ? 'Price Range (any)' : `$${priceFilter.min} ${priceFilter.max ? `- $${priceFilter.max}` : 'and higher'}`}</h5>
                                    <p className="menu__btn--para">Choose Price Range</p>
                                </div>
                            </div>
                            {
                                open ? <RiArrowUpSLine className='menu__arrow'/> : <RiArrowDownSLine className='menu__arrow'/>
                            }
                        </Menu.Button>
                        <Menu.Items className='menu__dropdown'>
                            <Menu.Item>
                            {({ active }) => (
                                <button onClick={() => setPriceFilter({})} className={`btn dropdown__btn ${!priceFilter && 'active__dropdown'}`}>Price Range (any)</button>
                            )}
                            </Menu.Item>
                            {
                                ranges.map((price, index) => (
                                    <Menu.Item>
                                        {({ active }) => (
                                            <button key={index} onClick={() => setPriceFilter(price)} className={`btn dropdown__btn ${priceFilter.min === price.min && 'active__dropdown'}`}>{`$${price.min} ${price.max ? `- $${price.max}` : 'and higher'}`}</button>
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

export default PriceDropdown;
