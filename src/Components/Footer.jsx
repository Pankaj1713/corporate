import React from 'react'
import './Footer.css'
import { callIcon, clockIcon, locationIcon, mailIcon } from './Icons'
import colors from './Constants/color'

const Footer = () => {
  // const footer = [ 
  //   {}
  // ]
  return (
    <div className='footer'>
        <div className="footer-heading">Get The Latest Deals</div>
        <div className="footer-sub-heading">and receive $20 coupon for first shopping</div>
        <div className="input-wrapper">
          <input type="text" name='input' id='label' placeholder='Enter your email address' className="input" />
          <button className="btn">GO</button>
        </div>
        <div className="border-bottom"></div>
        <div className="footer-bottom-wrap">
          <div className="footer-bottom">
            <div className="footer-logo"><img className='footer-logo-img' src="https://hairstyle.oceanwp.org/wp-content/uploads/2020/12/flogo.png" alt="" /></div>
            <div className="footer-data">Pellentesque id rhoncus augue nec maximus enim nunc commodo purus sit</div>
            <div className="footer-bottom-svg-wrap">
              <div className="footer-svg">{locationIcon({width:15,height:15,fill: colors.orange})}</div>
              <div className="footer-bottom-svg-data">London Eye, London, United Kingdom</div>
            </div>
            <div className="footer-bottom-svg-wrap">
              <div className="footer-svg">{callIcon({width:15,height:15,fill: colors.orange})}</div>
              <div className="footer-bottom-svg-data">(657) 123-456</div>
            </div>
            <div className="footer-bottom-svg-wrap">
              <div className="footer-svg">{mailIcon({width:15,height:15,fill: colors.orange})}</div>
              <div className="footer-bottom-svg-data">contact@website.com</div>
            </div>
            <div className="footer-bottom-svg-wrap">
              <div className="footer-svg">{clockIcon({width:15,height:15,fill: colors.orange})}</div>
              <div className="footer-bottom-svg-data">Mon - Fri / 9:00 AM - 6:00 PM</div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Footer