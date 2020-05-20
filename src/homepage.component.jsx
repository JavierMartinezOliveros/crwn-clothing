import React from 'react';

import './homepage.styles.scss';

const HomePage = () => (
    <div className='homepage'>
        <div className='directory-menu'>
            <div className='menu-item'>
                <div className='menu-item__content'>
                    <p className='menu-item__title'>HATS</p>
                    <span className='menu-item__subtitle'>Shop now</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='menu-item__content'>
                    <p className='menu-item__title'>Jackets</p>
                    <span className='menu-item__subtitle'>Shop now</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='menu-item__content'>
                    <p className='menu-item__title'>Sneakers</p>
                    <span className='menu-item__subtitle'>Shop now</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='menu-item__content'>
                    <p className='menu-item__title'>Womens</p>
                    <span className='menu-item__subtitle'>Shop now</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='menu-item__content'>
                    <p className='menu-item__title'>Men</p>
                    <span className='menu-item__subtitle'>Shop now</span>
                </div>
            </div>
        </div>
    </div>
);

export default HomePage;