import React from "react";

import facebookBackground from "../../assets/facebook-background.png";
import instagramBackground from "../../assets/instagram-background.png";
import twitterBackground from "../../assets/twitter-background.png";
import linkedinBackground from "../../assets/linkedin-background.png";

// OWL CAROUSEL
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

function SocialMedia() {
  const options = {
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 4,
      },
      600: {
        items: 4,
      },
      1000: {
        items: 4,
      },
    },
    navText: [
      '<i class="bi bi-chevron-left"></i>',
      '<i class="bi bi-chevron-right"></i>',
    ],
  };

  return (
    <div className="bg-white pb-10 ">
      <div className="text-center text-3xl py-10">Social Media</div>
      <div className="w-11/12 mx-auto">
        <OwlCarousel {...options}>
          <a
            href="https://web.facebook.com/Bloow-Global-106379321845229?_rdc=1&_rdr"
            target="_blank"
          >
            <div className="relative">
              <img
                data-src={facebookBackground}
                className="lazyload"
                alt="facebook"
              />
            </div>
          </a>

          <a href="https://www.instagram.com/bloowglobal" target="_blank">
            <div className="relative">
              <img
                data-src={instagramBackground}
                className="lazyload"
                alt="instagram"
              />
            </div>
          </a>

          <a href="https://twitter.com/Bloowglobal" target="_blank">
            <div className="relative">
              <img
                data-src={twitterBackground}
                className="lazyload"
                alt="twitter"
              />
            </div>
          </a>

          <a
            href="https://www.linkedin.com/company/bloow-global"
            target="_blank"
          >
            <div className="relative">
              <img
                data-src={linkedinBackground}
                className="lazyload"
                alt="linkedin"
              />
            </div>
          </a>
        </OwlCarousel>
      </div>
    </div>
  );
}

export default SocialMedia;
