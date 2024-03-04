import React from "react";

// OWL CAROUSEL
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import UONPoster from "../../assets/UON.png";
function EventsSlider() {
  const options = {
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 3,
        center: true,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 3,
      },
    },
    navText: [
      '<i class="bi bi-chevron-left"></i>',
      '<i class="bi bi-chevron-right"></i>',
    ],
  };

  return (
    <>
      <div className="bg-gradient-to-r from-dark-yellow to-light-yellow px-20">
        <h2 className="text-center font-semibold text-2xl py-8">
          Upcoming Events
        </h2>

        <div className="">
          <OwlCarousel {...options}>
            <div className="item">
              <p className="relative md:top-36 top-16 md:font-semibold  text-center text-white ">
                Event 2
              </p>
              <img
                className="w-full lazyload"
                data-src={
                  "https://firebasestorage.googleapis.com/v0/b/bloow-prod.appspot.com/o/files%2Fwhitelabel%2Fevent1.png?alt=media&token=21b58fa1-e4b2-438f-ab14-0f2789a90428"
                }
                alt="upcoming event one"
              />
            </div>
            <div className="item">
              <p className="relative md:top-36 top-16 md:font-semibold text-center text-white ">
                Event 1
              </p>
              <img
                className="w-full lazyload"
                data-src={
                  "https://firebasestorage.googleapis.com/v0/b/bloow-prod.appspot.com/o/files%2Fwhitelabel%2Fevent2.png?alt=media&token=963e9d5d-6f2b-4e37-89f8-42f60d845608"
                }
                alt="upcoming event two"
              />
            </div>
            <div className="item">
              <p className="relative md:top-36 top-16 md:font-semibold text-center text-white ">
                Event 3
              </p>
              <img
                className="w-full lazyload"
                data-src={
                  "https://firebasestorage.googleapis.com/v0/b/bloow-prod.appspot.com/o/files%2Fwhitelabel%2Fevent2.png?alt=media&token=963e9d5d-6f2b-4e37-89f8-42f60d845608"
                }
                alt="upcoming event three"
              />
            </div>
            <div className="item">
              <p className="relative md:top-36 top-16 md:font-semibold text-center text-white ">
                Event 4
              </p>
              <img
                className="w-full lazyload"
                data-src={
                  "https://firebasestorage.googleapis.com/v0/b/bloow-prod.appspot.com/o/files%2Fwhitelabel%2Fevent1.png?alt=media&token=21b58fa1-e4b2-438f-ab14-0f2789a90428"
                }
                alt="upcoming event four"
              />
            </div>
          </OwlCarousel>
        </div>
      </div>
    </>
  );
}

export default EventsSlider;
