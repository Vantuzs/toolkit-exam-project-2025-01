import React from 'react';

import style from './HeaderRight.module.scss'

const HeaderRight = () => {
    return (
        <div class={style['header-right']}>
            <div class={style['search-icon']}>
                <img src='https://www.atom.com/html/html/html/static_images/icon-search.svg'/>
                </div>
            <div class={`${style['account-box']} ${style.dropdown}`}>
                <div class={style['dropdown-toggle']}>
                    <div class={style.icon}>
                        <img src="https://www.atom.com/html/html/html/static_images/icon-user.svg" alt="" />
                    </div>
                </div>
                <ul class={style['dropdown-menu']}>
                    <li>
                        <a class={style['dropdown-item']} href="">
                            <div class={`${style.icon} ${style['icon-account']}`}>
                                <img src="https://www.atom.com/public/images/icon-account.svg" alt="" />
                            </div>
                            Login
                        </a>
                    </li>
                    <li>
                        <a class={style['dropdown-item']} href="">
                            <div class={`${style.icon} ${style['icon-account']}`}>
                                <img src="https://www.atom.com/public/images/icon-account.svg" alt="" />
                            </div>
                            Signup
                        </a>
                    </li>
                </ul>
            </div>
            <div class={`${style['phone-box']} ${style.dropdown}`}>
                <div class={style['dropdown-toggle']}>
                    <div class={style.icon}>
                        <img src="https://www.atom.com/public/images/icon-phone.svg" alt="" />
                    </div>
                </div>
                <ul class={style['dropdown-menu']}>
                    <li>
                        <a class={style['dropdown-item']} href="">
                            <div class={`${style.icon} ${style['icon-phone']}`}>
                                <img src="https://www.atom.com/public/images/icon-phone.svg" alt="" />
                            </div>
                            (877) 355-3585
                        </a>
                    </li>
                    <li>
                        <a class={style['dropdown-item']} href="">
                            <div class={`${style.icon} ${style['icon-chat']}`}>
                                <img src="https://www.atom.com/public/images/icon-chat-black.svg" alt="" />
                            </div>
                            Chat
                        </a>
                    </li>
                    <li>
                        <a class={style['dropdown-item']} href="">
                            <div class={`${style.icon} ${style['icon-email']}`}>
                                <img src="https://www.atom.com/public/images/icon-email.svg" alt="" />
                            </div>
                            Email
                        </a>
                    </li>
                    <li>
                        <a class={style['dropdown-item']} href="">
                            <div class={`${style.icon} ${style['icon-help']}`}>
                                <img src="https://www.atom.com/public/images/icon-help.svg" alt="" />
                            </div>
                            Help Desk
                        </a>
                    </li>
                </ul>
            </div>
            <a class={style['favorites-box']} href="">
                <img src="https://www.atom.com/html/html/html/static_images/icon-heart.svg" alt="" />
            </a>
        </div>
    );
}

export default HeaderRight;

// https://www.atom.com/how-it-works