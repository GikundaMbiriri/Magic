import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import blurredKhali from "../../assets/blurredKhali.jpg";
function ImageSlider({ images }) {
  const options = {
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 10000,

    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
    nav: true,
    navText: [
      `<div className="z-100"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
  </svg></div>`,
      `<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
</svg>`,
    ],
  };
  return (
    <>
      <div className="flex gap-6 items-center my-6 overflow-x-scroll no-scrollbar cursor-pointer">
        <OwlCarousel {...options}>
          {images &&
            images.map((item) => (
              <div
                key={item.title}
                className="w-11/12 m-auto flex justify-between flex-shrink-0 cursor-pointer"
                onClick={
                  item?.link
                    ? () => {
                        window.open(item?.link, "_blank");
                      }
                    : () => {}
                }
              >
                <img
                  className=" rounded-md lazyload "
                  src={blurredKhali}
                  data-src={item.image}
                  alt={item.title}
                  style={{ width: "100%", height: "58vh" }}
                />
              </div>
            ))}
        </OwlCarousel>
      </div>
    </>
  );
}

export default ImageSlider;
