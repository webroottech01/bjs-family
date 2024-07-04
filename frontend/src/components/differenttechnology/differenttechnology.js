import React from "react";
import "./differenttechnology.scss";

const DifferentTechnology = ({ title, content, link, imageUrl1, imageUrl2, layout }) => {
  return (
    <div className="different-technology">
      {layout === 'layout1' && (
        <div className="row align-items-center section-content">
          <div className="col-md-6 left-column-sc">
            <div className="title-column">
              <h2>{title}</h2>
              <p>{content}</p>
              <a href={link}>Learn More</a>
            </div>
          </div>
          <div className="col-md-6 right-column-sc">
            <div className="image-column">
              <img src={process.env.PUBLIC_URL + imageUrl1} alt="Image" />
            </div>
          </div>
        </div>
      )}
      {layout === 'layout2' && (
        <div className="row align-items-center section-content">
          <div className="col-md-6 left-column-sc">
            <div className="title-column">
              <h2>{title}</h2>
              <p>{content}</p>
              <a href={link}>Learn More</a>
            </div>
          </div>
          <div className="col-md-6">
            <div className="image-column">
              <img src={process.env.PUBLIC_URL + imageUrl2} alt="Different Image" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};


export default DifferentTechnology;