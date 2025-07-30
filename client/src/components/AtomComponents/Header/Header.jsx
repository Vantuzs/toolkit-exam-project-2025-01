import React,{useState} from 'react';
import HeaderLeft from './HeaderLeft/HeaderLeft';
import style from './Header.module.scss'
import HeaderMiddle from './HeaderMiddle/HeaderMiddle';
import HeaderRight from './HeaderRight/HeaderRight';

const Header = () => {
    return (
        <div className={style.header}>

            <div className={style.container}>

                <div className={style['header-inner']}>
                    <HeaderLeft/>
                    <HeaderMiddle/>
                    <HeaderRight/>
                </div>
            </div>
        </div>
    );
}

export default Header;
