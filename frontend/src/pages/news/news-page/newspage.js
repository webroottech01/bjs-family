import React from 'react';
import './newspage.scss';
import Testimonials from '../../../components/testimonial-slider/testimonials';
import Partners from '../../../components/partners-slider/partners';
import Media from '../../../components/media-slider/media';

const newsData = [
  {
    id: 1,
    imageUrl: '/images/constructImg.jpg',
    heading: 'Construct IT extend partnership with Tarmac Building Products’ Mortar Division',
    article: 'Article',
    datePosted: 'Posted: 06/10/24',
    description: 'Nationwide construction haulier Construct IT are thrilled to announce a new strategic partnership with Tarmac Building Products Mortar Division, delivering their bagged mortar nationwide...',
    time: '2 min read',
    articleLink: '#',
  },
  {
    id: 2,
    imageUrl: '/images/news1.jpg',
    heading: 'From the Ground Up: Construct IT and Wienerberger build on strong foundations with new nationwide 4-year contract award',
    article: 'Article',
    datePosted: 'Posted: 06/10/24',
    description: 'Nationwide construction haulier Construct IT are thrilled to announce a new strategic partnership with Tarmac Building Products Mortar Division, delivering their bagged mortar nationwide...',
    time: '2 min read',
    articleLink: '#',
  },
  {
    id: 3,
    imageUrl: '/images/news2.jpg',
    heading: 'Scurri inks deal with BJS Home Delivery to offer “next-level” two-person delivery service',
    article: 'Article',
    datePosted: 'Posted: 06/10/24',
    description: 'Nationwide construction haulier Construct IT are thrilled to announce a new strategic partnership with Tarmac Building Products Mortar Division, delivering their bagged mortar nationwide...',
    time: '2 min read',
    articleLink: '#',
  },
  {
    id: 4,
    imageUrl: '/images/news3.jpg',
    heading: 'Construct IT take delivery of their next batch of Renault Tippers to expand partnership with FGD Limited',
    article: 'Article',
    datePosted: 'Posted: 06/10/24',
    description: 'Nationwide construction haulier Construct IT are thrilled to announce a new strategic partnership with Tarmac Building Products Mortar Division, delivering their bagged mortar nationwide...',
    time: '2 min read',
    articleLink: '#',
  },
  {
    id: 5,
    imageUrl: '/images/news4.jpg',
    heading: 'Construct IT and Wienerberger launch from new PD Ports Teesport site',
    article: 'Article',
    datePosted: 'Posted: 06/10/24',
    description: 'Nationwide construction haulier Construct IT are thrilled to announce a new strategic partnership with Tarmac Building Products Mortar Division, delivering their bagged mortar nationwide...',
    time: '2 min read',
    articleLink: '#',
  },
];

const Newspage = () => {
  const viewedStories = 4; // Static value for viewed stories
  const totalStories = newsData.length;
  const percentage = (viewedStories / totalStories) * 100;

  return (
    <div className='newsMain'>
      <div className='container imageSection'>
        <div className='row justify-content-between'>
          {/* First news item */}
          <div className='col-md-6 mainImg p-0'>
            <div className='singleNews'>
              <img src={process.env.PUBLIC_URL + newsData[0].imageUrl} alt="" />
              <div className='mainImgContent'>
                <div className='row'>
                  <div className='col-md-9'>
                    <h3 className='text-start'>{newsData[0].heading}</h3>
                  </div>
                  <div className='col-md-3 d-flex justify-content-between article'>
                    <p><img src={process.env.PUBLIC_URL + "/images/articleIcon.png"} alt="" className='iconMain' /> {newsData[0].article}</p>
                    <p>{newsData[0].datePosted}</p>
                  </div>
                </div>
                <p className='description text-start'>{newsData[0].description}</p>
                <div className='d-flex justify-content-between articleTime'>
                  <p><img src={process.env.PUBLIC_URL + "/images/clock.png"} alt="" className='iconMain' /> {newsData[0].time}</p>
                  <a href={newsData[0].articleLink}>Read Article <img src={process.env.PUBLIC_URL + "/images/nextArrow.png"} alt="" className='iconMain' /> </a>
                </div>
              </div>
            </div>
          </div>

          {/* Remaining four news items */}
          <div className='col-md-6 listNews'>
            {newsData.slice(1).map((news) => (
              <div key={news.id} className='singleNews d-flex'>
                <img src={process.env.PUBLIC_URL + news.imageUrl} alt="" />
                <div className='mainImgContent'>
                  <h3 className='text-start'>{news.heading}</h3>
                  <div className='d-flex justify-content-start gap-3 article'>
                    <p><img src={process.env.PUBLIC_URL + "/images/articleIcon.png"} alt="" className='iconMain' /> {news.article}</p>
                    <p>{news.datePosted}</p>
                  </div>
                  <div className='d-flex justify-content-between timeLink'>
                    <p><img src={process.env.PUBLIC_URL + "/images/clock.png"} alt="" className='iconMain' /> {news.time}</p>
                    <a href={news.articleLink}>Read Article <img src={process.env.PUBLIC_URL + "/images/nextArrow.png"} alt="" className='iconMain' /> </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
      <div className='totalStories'>
        <p>You have viewed {viewedStories} out of {totalStories} stories</p>
        <div className="progress-bar">
          <div className="fill" style={{ width: `${percentage}%` }}></div>
        </div>
        <a href='#'>VIEW ALL STORIES</a>
      </div>

      <div className='mediaSlider'>
        <h2 className='text-center'>MENTIONED IN THE MEDIA</h2>
        <div className='sliderMediaMain'>
          <Media />

        </div>

      </div>

      {/* TESTImonial Carousel */}
      <div className='container newstestimonial'>
        <h2 className='text-start'>what our customers think</h2>
        <Testimonials />
      </div>

      {/* partner Carousel */}
      <div className='partnersMAin'>
        <div className='newsPartners'>
          <h2 className='text-center'>Our Partners</h2>
          <Partners />
        </div>
      </div>



    </div>
  );
};

export default Newspage;
