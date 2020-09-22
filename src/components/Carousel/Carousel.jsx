import React from 'react';

function Carousel() {
  return (
    <div
      id="carouselExampleSlidesOnly"
      className="carousel slide"
      data-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            className="d-block w-100"
            src="https://truecaller.blog/wp-content/uploads/2017/03/cropped-blog-header.png"
            alt="First slide"
          />
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100"
            src="https://truecaller.blog/wp-content/uploads/2017/03/cropped-blog-header.png"
            alt="Second slide"
          />
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100"
            src="https://truecaller.blog/wp-content/uploads/2017/03/cropped-blog-header.png"
            alt="Third slide"
          />
        </div>
      </div>
    </div>
  );
}

export default Carousel;
