import React from "react";
import blurredChart from "../../assets/blurredChart.png";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
function ArtistSlider({ title, items }) {
  const options = {
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
      0: {
        items: 5,
      },
      600: {
        items: 5,
      },
      1000: {
        items: 5,
      },
    },
    navText: [
      '<i class="bi bi-chevron-left text-white fa-10x"></i>',
      '<i class="bi bi-chevron-right text-white"></i>',
    ],
  };
  return (
    <>
      <div className="leaderboard--background  py-8">
        <h2 className="text-center text-4xl py-4">{title}</h2>

        <div className="flex gap-4 items-center my-6 w-11/12 mx-auto">
          <OwlCarousel {...options}>
            {items &&
              items.map((item, index) => (
                <div
                  className="relative  cursor-pointer group"
                  onClick={() => {}}
                >
                  <img
                    loading="lazy"
                    src={blurredChart}
                    data-src={item.image}
                    alt={item.title}
                    className="lazyload "
                  />
                  <div className="absolute bottom-0 md:left-28 left-20 top-0 right-0 px-2 py-4 bg-black rounded-r-2xl hidden flex-col justify-center items-center w-12/12 opacity-70 text-white transition ease-in-out delay-150 group-hover:flex duration-300">
                    <span>#{index + 1}</span>
                    <span>{item.title}</span>
                  </div>
                </div>
              ))}
          </OwlCarousel>
        </div>
        <div className="flex items-center justify-center gap-10 pb-6">
          <button
            className={` bg-main-bg  py-2 px-4 text-light-yellow  rounded-xl text-xs md:text-base `}
          >
            Today
          </button>
          <button
            className={`bg-gradient-to-r from-dark-yellow to-light-yellow  py-2 px-4 rounded-xl text-xs md:text-base `}
          >
            This Week
          </button>
          <button
            className={` bg-gradient-to-r from-dark-yellow to-light-yellow py-2 px-4 rounded-xl text-xs md:text-base `}
          >
            This Month
          </button>
        </div>
      </div>
  
    </>
  );
}

export default ArtistSlider;
