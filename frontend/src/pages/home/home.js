import React from 'react'
import "./home.scss";
import Withbigbulky from '../../components/with big & bulky/withbigbulky';
import DifferentTechnology from '../../components/differenttechnology/differenttechnology';

const Home = () => {
    return (
        <>
            <div className='bannerSection'>
                <div className='container'>
                    <p>We’ve come all the way from the UK to offer the very best</p>
                    <p>big and bulky two-person home delivery</p>
                    <div className='maintextouter'>
                        <h1>california dreamin’</h1>
                        <h5>no more</h5></div>
                
                <div className="col-12 bannerButtons">
                    <div className="container">

                        <div className='row justify-content-between'>

                            <div className='col-6'><button><a href="">Learn more about our values</a></button></div>
                            <div className='col-6'><button className='bjsServices'><a href=""><span>BJS</span> Services</a></button></div>
                        </div>

                    </div>
                </div>

                </div>
            </div>


            <div className='homeDeliverSection'>
                <div className="container mb-5">
                    <div className="row">
                        <div className='col-7 leftContent'>
                            <h2>high <span>cali</span>ber home delivery</h2>
                            <p>Award winning two-man home delivery teams, trained in excellence and trusted by leading brands. With an enviable track record of more than a decade the BJS family offer a range of flexible services to keep you and your customers happy.</p>
                            <div className='col-12 twoparts'>
                                <div className='row'>
                                    <div className='col-6'>
                                        <b>We offer flexibility</b>
                                        <ul>
                                            <li>Next day delivery</li>
                                            <li>Choice-of-day delivery</li>
                                            <li>Three hour delivery window</li>
                                            <li>Room of choice</li>
                                        </ul>
                                    </div>
                                    <div className='col-6'>
                                        <b>We go above & beyond</b>
                                        <ul>
                                            <li>Room of choice</li>
                                            <li>Professionally built & installed</li>
                                            <li>Packaging removal & recycle</li>
                                            <li>Removal of old furniture</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 muchmore'>And much more...</div>
                            <div className='col-12 moreinfo'><button>More info <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                            </svg></button></div>
                        </div>
                        <div className='col-5'><img src={process.env.PUBLIC_URL + "/images/sofaimage.jpg"} alt="" width="100%" /></div>
                    </div>

                </div>
            </div>

<Withbigbulky/>
<DifferentTechnology
        layout="layout1"
        title="what makes bjs different"
        content="We provide the very best customer service at every stage of the delivery process, putting customers at the heart of everything we do – so that your products, reputation, customers and peace of mind really are safe in our hands."
        link="#"
        imageUrl1="/images/Clip path group_11zon.jpg"
      />



        </>
    )
}

export default Home;
