import React, { useState } from "react";
import "./gallery.scss";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (src) => {
    setSelectedImage(src);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <section className="gallery">
      <div className="image-gallery">
        <div className="row">
          <div className="col-md-6 left-column">
            <div className="gallery-out">
              <div className="gallery-item"> 
                <img
                  src={process.env.PUBLIC_URL + "/images/image 41.jpg"}
                  alt="image"
                  onClick={() => handleImageClick(process.env.PUBLIC_URL + "/images/image 41.jpg")}
                />
                <img
                  src={process.env.PUBLIC_URL + "/images/image 42.jpg"}
                  alt="image"
                  onClick={() => handleImageClick(process.env.PUBLIC_URL + "/images/image 42.jpg")}
                />
              </div>
              <div className="gallery-item">
                <img
                  src={process.env.PUBLIC_URL + "/images/image 43.jpg"}
                  alt="image"
                  onClick={() => handleImageClick(process.env.PUBLIC_URL + "/images/image 43.jpg")}
                />
              </div>
            </div>
          </div>
          <div className="col-md-6 right-column">
            <div className="gallery-out">
              <div className="gallery-item">
                <img
                  src={process.env.PUBLIC_URL + "/images/image 44.jpg"}
                  alt="image"
                  onClick={() => handleImageClick(process.env.PUBLIC_URL + "/images/image 44.jpg")}
                />
                <img
                  src={process.env.PUBLIC_URL + "/images/image 45.jpg"}
                  alt="image"
                  onClick={() => handleImageClick(process.env.PUBLIC_URL + "/images/image 45.jpg")}
                />
              </div>
              <div className="gallery-item">
                <img
                  src={process.env.PUBLIC_URL + "/images/image 46.jpg"}
                  alt="image"
                  onClick={() => handleImageClick(process.env.PUBLIC_URL + "/images/image 46.jpg")}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {selectedImage && (
        <div className="modal" onClick={handleCloseModal}>
          <span className="close" onClick={handleCloseModal}>&times;</span>
          <img className="modal-content" src={selectedImage} alt="selected" />
        </div>
      )}
    </section>
  );
};

export default Gallery;
