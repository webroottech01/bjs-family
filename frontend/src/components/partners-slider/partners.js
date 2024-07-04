import React from 'react';
import "./partners.scss";
import Slider from "react-slick";





const Partners = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };

  return (
    <>
    <div className="partnerslider">
      <Slider {...settings}>
        <div className='partnersLogo'>
        <img src='./images/richersounds.png' alt="" className='partnerMainlogo' />
        </div>
        <div className='partnersLogo'>
        <img src='./images/oliverbonas.png' alt="" className='partnerMainlogo' />
        </div>
        <div className='partnersLogo'>
        <img src='./images/wayfair.png' alt="" className='partnerMainlogo' />
        </div>
        <div className='partnersLogo'>
        <img src='./images/tikamoon.png' alt="" className='partnerMainlogo' />
        </div>
        <div className='partnersLogo'>
        <img src='./images/sweeek.png' alt="" className='partnerMainlogo' />
        </div>
        <div className='partnersLogo'>
        <img src='./images/richersounds.png' alt="" className='partnerMainlogo' />
        </div>
        <div className='partnersLogo'>
        <img src='./images/oliverbonas.png' alt="" className='partnerMainlogo' />
        </div>
        <div className='partnersLogo'>
        <img src='./images/wayfair.png' alt="" className='partnerMainlogo' />
        </div>
        <div className='partnersLogo'>
        <img src='./images/tikamoon.png' alt="" className='partnerMainlogo' />
        </div>
      </Slider>
      </div>
    </>
  )
}
export default Partners;