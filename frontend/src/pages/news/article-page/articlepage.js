import React from 'react';
import './articlepage.scss';


const Articlepage = () => {
  return (
    <>


      <div className="articlepageMain">
        <div className="articlepage">
          <div className='d-flex justify-content-between align-items-center'>
            <button>
              <a href=""><img src={process.env.PUBLIC_URL + "/images/articlebackarrow.png"} alt="" className='comaImg' /> Article List</a>
            </button>
            <div className='articleHeader text-center'>
              <h3>Construct IT extend partnership with Tarmac Building Products’ Mortar Division</h3>
              <div className='d-flex justify-content-center gap-4'>
                <p> <img src={process.env.PUBLIC_URL + "/images/articleIcon.png"} alt="" className='comaImg' /> Article</p>
                <p>Posted: 05/23/2024</p>
                <p><img src={process.env.PUBLIC_URL + "/images/watchWhite.png"} alt="" className='comaImg' /> 2 min road</p>
              </div>
            </div>
            <button>
              <a href="">Next Article <img src={process.env.PUBLIC_URL + "/images/articlenextarrow.png"} alt="" className='comaImg' /> </a>
            </button>

          </div>
        </div>

        <div className='articleContentMain'>
        <img src={process.env.PUBLIC_URL + "/images/constructImg.jpg"} alt="" /> 
        <div className='row justify-content-between'>
          <div className='col-md-11 text-start'>            
        <h2>Nationwide construction haulier Construct IT are thrilled to announce a new strategic partnership with Tarmac Building Products' Mortar Division, delivering their bagged mortar nationwide.</h2>
        <p>This marks another major milestone for Construct IT as their significant growth continues, cementing their standing in the construction haulage industry.</p>
        <p>Construct IT are taking on the responsibility of delivering Tarmac Building Products’ bagged mortar from their key sites located in Derby, and Croxden in the Midlands, and Colchester, Harper Lane, and Sevenoaks in the South. This operation is set to strengthen the supply chain for Tarmac, offering unparalleled access to their products across the country.</p>
        <p>Both Construct IT and Tarmac Building Products are committed to upholding the highest standards of safety, quality, and innovation in the construction industry. This partnership not only signifies a union between two leaders in their respective fields but also represents a shared vision for the future of the construction industry — one that is built on the foundation of safety and reliability.</p>
          </div>
          <div className='col-md-1'>
            <h4>SHARE</h4>
            <img src={process.env.PUBLIC_URL + "/images/linkedinIcon.png"} alt="" /> 
            <img src={process.env.PUBLIC_URL + "/images/linkedinIcon.png"} alt="" /> 
            <img src={process.env.PUBLIC_URL + "/images/linkedinIcon.png"} alt="" /> 
            <img src={process.env.PUBLIC_URL + "/images/linkedinIcon.png"} alt="" /> 
          </div>
        </div>
        </div>
      </div>



    </>
  )
}



export default Articlepage;
