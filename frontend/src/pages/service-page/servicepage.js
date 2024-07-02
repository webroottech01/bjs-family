import React from 'react';
import "./servicepage.scss";



const serviceData = {
  imageUrl: '', // Replace with your image URL
  articleLink: 'https://example.com/article', // Replace with your article link
};



const Servicepage = () => {
  return (
    <>
      <div className='service-banner'>
        <div className='container'>
          <div className='row justify-content-between'>
            <div className='col-md-7'>
              <h2>High <span>Cali</span>ber Services</h2>
              <h3>industry-leading home delivery</h3>
              <p>We provide the very best home delivery in the US, offering a wide range of flexible services carried out by our friendly and well-trained teams of specialists.</p>
              <div className='row'>
                <div className='col-md-2'>
                  <img src={process.env.PUBLIC_URL + "/images/24-hours.svg"} alt="" />
                  <h4>Next day delivery</h4>
                </div>
                <div className='col-md-2'>
                  <img src={process.env.PUBLIC_URL + "/images/april.svg"} alt="" />
                  <h4>Choice-of-Day Delivery</h4>
                </div>
                <div className='col-md-2'>
                  <img src={process.env.PUBLIC_URL + "/images/room.svg"} alt="" />
                  <h4>Room of Choice</h4>
                </div>
                <div className='col-md-2'>
                  <img src={process.env.PUBLIC_URL + "/images/screwdriver.svg"} alt="" />  
                  <h4>Assembly</h4>
                </div>
                <div className='col-md-2'>
                  <p>and much more...</p>
                </div>
              </div>
            </div>
            <div className='col-md-4 img-sec'>
              <img src={process.env.PUBLIC_URL + "/images/Handy-men.png"} alt="service" />  
            </div>
          </div>
        </div>
      </div>


      <div className='about-srvc'>
        <div className='container'>
            <div className='row'>
              <div className='col-lg-3'>
                <h2>Your customers can expect</h2>
                <ul>
                  <li>Call to arrange a suitable delivery time</li>
                  <li>Three hour delivery window</li>
                  <li>Pre-delivery courtesy call prior to arrival</li>
                  <li>Place furniture in a room of their choice</li>
                  <li>Build and install furniture</li>
                  <li>Remove and dispose of packaging</li>
                  <li>Recycle or dispose of old furniture</li>
                  <li>Smiles on their doorstep, whatever the weather</li>
                </ul>
                <h2>We can offer you</h2>
                <ul>
                  <li>Products collected from your warehouse or supplier</li>
                  <li>Store & manage your stock in our own warehouse</li>
                  <li>Full delivery management system</li>
                  <li>Ensure that we deliver your items without damage</li>
                </ul>
              </div>

              <div className='col-lg-6'>
                <h2>Bolt-on options</h2>
                <p>Above and beyond our standard ‘delivery to the door’ service at a convenient time, we offer several ‘bolt-on’ options to provide additional help for your customers – all to ensure their delivery experience matches your own high standards, again and again.</p>
                <div className='row'>
                  <div className='col-lg-4'>
                    <img src={process.env.PUBLIC_URL + "/images/room-choice.png"} alt="" />  
                  </div>
                  <div className='col-lg-8'>
                    <h3>Room of Choice</h3>
                    <p>Delivering to a room of choice, carefully, safely and without damage or fuss.</p>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-lg-4'>
                    <img src={process.env.PUBLIC_URL + "/images/well-built.png"} alt="" /> 
                  </div>
                  <div className='col-lg-8'>
                    <h3>Well Built & Installed</h3>
                    <p>Our trained delivery team can correctly build and install furniture and electrical items.</p>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-lg-4'>
                    <img src={process.env.PUBLIC_URL + "/images/packaging.png"} alt="" /> 
                  </div>
                  <div className='col-lg-8'>
                    <h3>Packaging Removal</h3>
                    <p>Our teams can also dispose of all product packaging with our own recycling facility.</p>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-lg-4'>
                    <img src={process.env.PUBLIC_URL + "/images/furniture.png"} alt="" />  
                  </div>
                  <div className='col-lg-8'>
                    <h3>Old Furniture Removal</h3>
                    <p>Finally, we not only deliver hard-to-handle items but can take them away too.</p>
                  </div>
                </div>
              </div>

              <div className='col-lg-3'>
                <h2>Warehousing</h2>
                <p>We are located centrally in California, just minutes away from Interstate 99. Operating from our single hub reduces the risk of loss or damage to your furniture, and our warehouses are managed with the latest technology in inventory control.</p>
                <ul>
                  <li>Two-man handling</li>
                  <li>The highest Health & Safety standards</li>
                  <li>Use of mechanical equipment to move products</li>
                  <li>Unloading of containers</li>
                  <li>Secure storage of goods</li>
                  <li>Pick and pack service</li>
                  <li>Computer controlled inventory</li>
                  <li>Comprehensively trained and experienced warehouse team</li>
                </ul>
              </div>
            </div>
        </div>
      </div>

    </>
  );
};
export default Servicepage;