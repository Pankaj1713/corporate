import React from 'react'
import './Header.css'
import { chairIcon, discountIcon, drierIcon, hairStraightnerIcon, icon, returnIcon, rocketIcon, servicesIcon, trimmerIcon } from './Icons'
import colors from './Constants/color'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='main'>
        <div className="navbar">
            <a href="#" className="logo"><img className='logo-img' src="https://hairstyle.oceanwp.org/wp-content/uploads/2021/04/hlogo.png" alt="Logo" /></a>
            <div className="nav-list">
                <ul className='list'>
                    <li className='list-items'><a href="#">HOMEPAGE</a> </li>
                    <li className='list-items'> <a href="#">SHOP</a></li>
                    <li className='list-items'> <a href="#">BLOG</a></li>
                    <li className='list-items'> <a href="#">CONTACT</a></li>
                    <li className='list-items'> <a href="#">MY ACCOUNT</a></li>
                    <li className='list-items'><a className='button' href="/login">Login</a></li>
                </ul>
            </div>
        </div>
        <div className="banner">
            <div className="background-image">
                <div className="banner-data">
                    <div className="banner-heading">TAKE Care Of Your Hair</div>
                    <div className="banner-sub-heading">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</div>
                    <button className="shop-now-button" type='submit'>SHOP NOW</button>
                </div>
            </div>
        </div>
        <div className="elementor">
            <div className="elementor-column">
                <span className="svg-wrap">{rocketIcon({width:35,height:35,fill:colors.orange})}</span>
                <div className="free-shipping-wrap">
                    <div className="free-shipping">FREE SHIPPING</div>
                    <div className="free-shipping-sub-heading">orders $50 or more</div>
                </div>
            </div>
            <div className="elementor-column">
                <span className="svg-wrap">{returnIcon({width:35,height:35,fill:colors.orange})}</span>
                <div className="free-shipping-wrap">
                    <div className="free-shipping">FREE RETURNS</div>
                    <div className="free-shipping-sub-heading">within 30 days</div>
                </div>
            </div>
            <div className="elementor-column">
                <span className="svg-wrap">{discountIcon({width:35,height:35,fill:colors.orange})}</span>
                <div className="free-shipping-wrap">
                    <div className="free-shipping">GET 20% OFF 1 ITEM</div>
                    <div className="free-shipping-sub-heading">When you sign up</div>
                </div>
            </div>
            <div className="elementor-column">
                <span className="svg-wrap">{servicesIcon({width:35,height:35,fill:colors.orange})}</span>
                <div className="free-shipping-wrap">
                    <div className="free-shipping">WE SUPPORT</div>
                    <div className="free-shipping-sub-heading">orders $50 or more</div>
                </div>
            </div>
        </div>
        <div className='banner-1'>
            <div className="banner-img"><img className='brown-hairs' src="https://hairstyle.oceanwp.org/wp-content/uploads/2021/04/img741036.png" alt="" /></div>
            <div className="banner-1-data">
                <div className="your-hair">Your hair, your beauty.</div>
                <div className="heading">Best brands</div>
                <div className="data">Vivamus non lorem nec sem tempus interdum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam vehicula interdum augue, in tristique purus bibendum vel.</div>
                <div className="item-details-wrap">
                    <div className="items-wrap">
                        <div className="item-details">
                            <span className="svg">{chairIcon({width:50,height:50,fill:colors.orange})}</span>
                            <div className="svg-data">Sed dolor urna sagittis</div>
                        </div>
                        <div className="item-details">
                            <span className="svg">{drierIcon({width:50,height:50,fill:colors.orange})}</span>
                            <div className="svg-data">Sed dolor urna sagittis</div>
                        </div>
                    </div>
                    <div className="items-wrap">
                        <div className="item-details">
                            <span className="svg">{trimmerIcon({width:50,height:50,fill:colors.orange})}</span>
                            <div className="svg-data">Sed dolor urna sagittis</div>
                        </div>
                        <div className="item-details">
                            <span className="svg">{hairStraightnerIcon({width:50,height:50,fill:colors.orange})}</span>
                            <div className="svg-data">Sed dolor urna sagittis</div>
                        </div>
                    </div>
                </div>
                <div className="down-svg">{icon({fill:colors.white})}</div>
            </div>
        </div>
    </div>
    
  )
}

export default Header