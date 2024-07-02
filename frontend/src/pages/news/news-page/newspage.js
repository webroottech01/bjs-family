import React from 'react';
import './newspage.scss';

const newsData = [{ 
  id:1,
  imageUrl: '/images/constructImg.jpg', // Replace with your image URL
  heading: 'Construct IT extend partnership with Tarmac Building Products’ Mortar Division',
  article: 'Article',
  datePosted: 'Posted: 06/10/24',
  description: 'Nationwide construction haulier Construct IT are thrilled to announce a new strategic partnership with Tarmac Building Products Mortar Division, delivering their bagged mortar nationwide...',
  time: '2 min read',
  articleLink: '#',

},
{
  id:2,
  imageUrl: '/images/constructImg.jpg', // Replace with your image URL
  heading: 'Construct IT extend partnership with Tarmac Building Products’ Mortar Division',
  article: 'Article',
  datePosted: 'Posted: 06/10/24',
  description: 'Nationwide construction haulier Construct IT are thrilled to announce a new strategic partnership with Tarmac Building Products Mortar Division, delivering their bagged mortar nationwide...',
  time: '2 min read',
  articleLink: '#',

},
{
  id:3,
  imageUrl: '/images/constructImg.jpg', // Replace with your image URL
  heading: 'Construct IT extend partnership with Tarmac Building Products’ Mortar Division',
  article: 'Article',
  datePosted: 'Posted: 06/10/24',
  description: 'Nationwide construction haulier Construct IT are thrilled to announce a new strategic partnership with Tarmac Building Products Mortar Division, delivering their bagged mortar nationwide...',
  time: '2 min read',
  articleLink: '#',

},
{
  id:4,
  imageUrl: '/images/constructImg.jpg', // Replace with your image URL
  heading: 'Construct IT extend partnership with Tarmac Building Products’ Mortar Division',
  article: 'Article',
  datePosted: 'Posted: 06/10/24',
  description: 'Nationwide construction haulier Construct IT are thrilled to announce a new strategic partnership with Tarmac Building Products Mortar Division, delivering their bagged mortar nationwide...',
  time: '2 min read',
  articleLink: '#',

},
{
  id:5,
  imageUrl: '/images/constructImg.jpg', // Replace with your image URL
  heading: 'Construct IT extend partnership with Tarmac Building Products’ Mortar Division',
  article: 'Article',
  datePosted: 'Posted: 06/10/24',
  description: 'Nationwide construction haulier Construct IT are thrilled to announce a new strategic partnership with Tarmac Building Products Mortar Division, delivering their bagged mortar nationwide...',
  time: '2 min read',
  articleLink: '#',

},
];

const Newspage = () => {
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
                    <p>{newsData[0].article}</p>
                    <p>{newsData[0].datePosted}</p>
                  </div>
                </div>
                <p className='description text-start'>{newsData[0].description}</p>
                <div className='d-flex justify-content-between'>
                  <p>{newsData[0].time}</p>
                  <a href={newsData[0].articleLink}>Read Article</a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Remaining four news items */}
          <div className='col-md-6 listNews'>
            {newsData.slice(1, 5).map((news) => (
              <div key={news.id} className='singleNews d-flex'>
                <img src={process.env.PUBLIC_URL + news.imageUrl} alt="" />
                <div className='mainImgContent'>
                  <div className='row'>
                    <div className='col-md-9'>
                      <h3 className='text-start'>{news.heading}</h3>
                    </div>
                    <div className='col-md-3 d-flex justify-content-between article'>
                      <p>{news.article}</p>
                      <p>{news.datePosted}</p>
                    </div>
                  </div>
                  <p className='description text-start'>{news.description}</p>
                  <div className='d-flex justify-content-between'>
                    <p>{news.time}</p>
                    <a href={news.articleLink}>Read Article</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </div>
  );
};


export default Newspage;
