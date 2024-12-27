import React, { useState } from 'react';
import './Campus.css';
import gallery_1 from '../../assets/edusity_assets/gallery-1.png';
import gallery_2 from '../../assets/edusity_assets/gallery-2.png';
import gallery_3 from '../../assets/edusity_assets/gallery-3.png';
import gallery_4 from '../../assets/edusity_assets/gallery-4.png';
import gallery_5 from '../../assets/edusity_assets/gallery-5.jpg';
import gallery_6 from '../../assets/edusity_assets/gallery-6.jpg';
import gallery_7 from '../../assets/edusity_assets/gallery-7.jpg';
import gallery_8 from '../../assets/edusity_assets/gallery-8.jpg';
import gallery_9 from '../../assets/edusity_assets/gallery-9.jpg';
import gallery_10 from '../../assets/edusity_assets/gallery-10.jpg';
import gallery_11 from '../../assets/edusity_assets/gallery-11.jpg';
import white_arrow from '../../assets/edusity_assets/white-arrow.png';

const Campus = () => {
  const [showAdditionalGalleries, setShowAdditionalGalleries] = useState(false);

  const toggleGalleries = () => {
    setShowAdditionalGalleries(!showAdditionalGalleries);
  };

  return (
    <div className="campus">
      <div className="gallery">
        <img src={gallery_1} alt="" />
        <img src={gallery_2} alt="" />
        <img src={gallery_3} alt="" />
        <img src={gallery_4} alt="" />
      </div>
      {showAdditionalGalleries && (
      <div className="gallery">
        <img src={gallery_5} alt="" />
        <img src={gallery_6} alt="" />
        <img src={gallery_7} alt="" />
        <img src={gallery_8} alt="" />
      </div>
      )}
      {showAdditionalGalleries && (
        <div className="gallery2">
          <img src={gallery_9} alt="" />
          <img src={gallery_10} alt="" />
          <img src={gallery_11} alt="" />
        </div>
      )}
      <button className='btn dark-btn' onClick={toggleGalleries}>
        {showAdditionalGalleries ? 'Hide' : 'See more here'} <img src={white_arrow} alt="" />
      </button>
    </div>
  );
};

export default Campus;
