import React from 'react'
import './Testimonial.css'
import { reviewSvgIcon, startIcon } from './Icons'
import colors from './Constants/color'
import {Splide,SplideSlide} from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/core";

const Testimonial = () => {
        const rating = [
            {id:1, reviewSvg:{reviewSvgIcon}, img : "https://hairstyle.oceanwp.org/wp-content/uploads/2021/04/t1.png", data:"Aliquam dignissim lacinia tristque nulla lobortis nunc ac eros scelerisque varius suspendisse sit amet urna vitae urna semper quis at ligula",name:"LOLA MILES",review:"Best products", ratingIcon:{startIcon}},
            {id:2, reviewSvg:{reviewSvgIcon}, img : "https://hairstyle.oceanwp.org/wp-content/uploads/2021/04/t-6.png", data:"Aliquam dignissim lacinia tristque nulla lobortis nunc ac eros scelerisque varius suspendisse sit amet urna vitae urna semper quis at ligula",name:"MIKE KENLI",review:"5 stars indeed", ratingIcon:{startIcon}},
            {id:3, reviewSvg:{reviewSvgIcon}, img : "https://hairstyle.oceanwp.org/wp-content/uploads/2021/04/t-2.png", data:"Aliquam dignissim lacinia tristque nulla lobortis nunc ac eros scelerisque varius suspendisse sit amet urna vitae urna semper quis at ligula",name:"SOFIA MILLER",review:"Excellent", ratingIcon:{startIcon}},
            {id:4, reviewSvg:{reviewSvgIcon}, img : "https://hairstyle.oceanwp.org/wp-content/uploads/2021/04/t-5.png", data:"Aliquam dignissim lacinia tristque nulla lobortis nunc ac eros scelerisque varius suspendisse sit amet urna vitae urna semper quis at ligula",name:"GAEL LUDWING",review:"Wonderful", ratingIcon:{startIcon}},
            {id:5, reviewSvg:{reviewSvgIcon}, img : "https://hairstyle.oceanwp.org/wp-content/uploads/2021/04/0001_Calque-4.png", data:"Aliquam dignissim lacinia tristque nulla lobortis nunc ac eros scelerisque varius suspendisse sit amet urna vitae urna semper quis at ligula",name:"ELSA MALITA",review:"Good", ratingIcon:{startIcon}},
            {id:6, reviewSvg:{reviewSvgIcon}, img : "https://hairstyle.oceanwp.org/wp-content/uploads/2021/04/p7.png", data:"Aliquam dignissim lacinia tristque nulla lobortis nunc ac eros scelerisque varius suspendisse sit amet urna vitae urna semper quis at ligula",name:"MICKAEL FACUI",review:"Amazing", ratingIcon:{startIcon}}
        ]
        const option = {
          type: "loop",
          autoplay: true,
          interval: 50000,
          pauseOnHover: true,
          arrows: true,
          pagination: true,
          perPage: 3,
          perMove: 1,
          gap: "30px",
          breakpoints: {
              1400:{perPage: 5},
              1099:{perPage: 4},
              767: {perPage: 3},
              599: {perPage: 2},
              479: {perPage: 1}
          }
      }
        
  return (
    <div className='testimonial-wrap'>
      <div className="testimonial">
        <div className="testimonial-sub-heading">OUR USERS LOVES US</div>
        <div className="testimonial-heading">CUSTOMER REVIEWS</div>
        <div className="testimonial-review">
        <Splide options={option} className="splide">
          {rating.map((tick) => (
            <SplideSlide key={tick.id}>
            <div className="testimonial-review-wrapper" >
              <div className="review-svg">{reviewSvgIcon({ width:40,height:40,fill:colors.orange})}</div>
              <div className="review-data">{tick.data}</div>
              <div className="review-wrapper">
              <div className="review-img"><img className='image' src={tick.img} alt="" /></div>
                <div className="review-data-wrap">
                  <div className="review-heading">{tick.name}</div>
                  <div className="review-sub-heading">{tick.review}</div>
                  {rating.map((tick) =>(
                    <span key={tick.id} className="review-rating">{startIcon({width:16,height:13,fill:colors.yellow})}</span>
                   ))}
                </div>
              </div>
            </div>
            </SplideSlide>
          ))}
          </Splide>
        </div>
      </div>
    </div>
  )
}

export default Testimonial