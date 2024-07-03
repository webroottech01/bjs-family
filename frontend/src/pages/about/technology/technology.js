import React from 'react';
import "./technology.scss";
import MdMessage from '../../../components/md-message/md-message';
import DifferentTechnology from '../../../components/differenttechnology/differenttechnology';


const Technology = () => {
  return (
    <div className="about-technology">
      <div className="our-technology">
        <div className="container-py">
          <h2 className="about-title">Our Technology</h2>
          <p className='jt-p'>
            BJS powers its logistics, distribution, and warehousing operations with cutting edge technology
          </p>
          <p className='sm-p'>
            So whether it’s route planning, order tracking, warehouse scanning, or getting proof-of-delivery on glass, it’s our bespoke <br> 
            </br>technology that powers the whole customer journey.</p>
          <div className="our-patners">
            <h3 className='xm-title'>OUR PARTNERS</h3>
            <div className="patners-logo">
              <img src={process.env.PUBLIC_URL + "/images/lightfootLogo.png"} alt="Lightfoot Logo" />
              <img src={process.env.PUBLIC_URL + "/images/Twilio.png"} alt="Twilio Logo" />
              <img src={process.env.PUBLIC_URL + "/images/what3words_Logo_Horizontal_Red_2020.png"} alt="What3Words Logo" />
              <img src={process.env.PUBLIC_URL + "/images/Group 11521.png"} alt="Group 11521 Logo" />
              <img src={process.env.PUBLIC_URL + "/images/I.Can.Prove.IT.png"} alt="I Can Prove IT Logo" />
            </div>
          </div>
        </div>      
      </div>
      <MdMessage></MdMessage>
      <DifferentTechnology
        layout="layout1"
        title="what makes bjs different"
        content="We provide the very best customer service at every stage of the delivery process, putting customers at the heart of everything we do – so that your products, reputation, customers and peace of mind really are safe in our hands."
        link="#"
        imageUrl1="/images/Clip path group_11zon.jpg"
      />
      {/* Include DifferentTechnology Component */}
     
    </div>
  )
}
export default Technology;