import React from 'react'
import './Banner.css'
import { cartIcon, rightTickSvg, whiteIcon } from './Icons'
import colors from './Constants/color'

const Banner = () => {
    const tickIcon = [
        {id:1, heading:"Fermentum non pretium in massa"},
        {id:2, heading:"Duis ultricies nisl eget blandit ornare"},
        {id:3, heading:"Aenean vestibulum eros dignissim"},
        {id:4, heading:"Pellentesque maximus quam eget"}
    ]
    
  return (
    <div className='banar'>
        <div className="banar-svg">{whiteIcon({fill:colors.white,height:60,width:1504})}</div>
        <div className="banar-data-wrap">
            <div className="banar-data">
                <div className="specification">Specification</div>
                <div className="product-overview">Product Overview</div>
                <div className="details-wrap">
                    {tickIcon.map((tick) =>(
                            <div className="details" key={tick.id}>
                                <div className="details-svg">{rightTickSvg({fill:colors.white,width:15,height:15})}</div>
                                <div className="details-data">{tick.heading}</div>
                            </div>
                        ))}
                </div>
                <div className="cart-wrap">
                    <div className="price">$189</div>
                    <button className="add-to-cart-wrap"><span className="cart-svg">{cartIcon({fill:colors.orange,width:15,height:15})}</span>ADD TO CART</button>
                </div>
            </div>
            <div className="banar-img"><img className='hair-straightner-img' src="https://hairstyle.oceanwp.org/wp-content/uploads/2021/04/img4530148.png" alt="" /></div>
        </div>
    </div>
  )
}

export default Banner