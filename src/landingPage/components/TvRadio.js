import React, { useState } from "react";
import { AiFillPlayCircle } from "react-icons/ai";

import ReactPlayer from "react-player";
// OWL CAROUSEL
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

function TvRadio({ image }) {
  const [play, setPlay] = useState(false);

  const handlePlay = () => {
    setPlay(true);
  };

  const options = {
    loop: true,
    margin: 10,
    nav: true,
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
      '<i class="bi bi-chevron-left fa-10x"></i>',
      '<i class="bi bi-chevron-right"></i>',
    ],
  };

  const rules = {
    loop: true,
    margin: 10,
    nav: true,
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
    navText: [
      '<i class="bi bi-chevron-left"></i>',
      '<i class="bi bi-chevron-right"></i>',
    ],
  };

  return (
    <section className="bg-gradient-to-r from-dark-yellow to-light-yellow py-8">
      <div className="flex items-center justify-center gap-8 py-4">
        <div className=" flex space-x-8 ">
          <div className="text-2xl font-semibold">Bloow TV</div>
          <div className="text-2xl">Bloow Radio</div>
        </div>
      </div>
      <div className="relative w-11/12 mx-auto">
        <div className="absolute inset-y-1/3  w-full mt-4">
          {/* <div className="flex justify-between items-center">
            {!play && (
              <>
             
                <img
                  className="w-8 mx-auto lg:w-24 z-10 cursor-pointer"
                  onClick={handlePlay}
                  src={playCircle}
                  alt="play circle icon"
                />
            
              </>
            )}
          </div> */}
        </div>

        <div
          style={{ minHeight: "500px" }}
          className="my-7 flex justify-center"
        >
          {play ? (
            <ReactPlayer
              url="https://firebasestorage.googleapis.com/v0/b/bloow-prod.appspot.com/o/files%2Fvideos%2FUON-%20Sponsor.mp4?alt=media&token=79c8be7e-7c38-49e2-b7d7-31c3d2ffeba3"
              muted={false}
              playing={play}
              width="100%"
              height="100%"
              controls={true}
            />
          ) : (
            <div className=" relative">
              <img src={image} alt="Video thumbnail" onClick={handlePlay} />
              <div className="absolute w-full top-48">
                <AiFillPlayCircle
                  className=" cursor-pointer mx-auto text-white text-6xl"
                  onClick={handlePlay}
                />
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="w-11/12 mx-auto  py-4">
        <OwlCarousel {...options}>
          <div className="">
            <img
              data-src={
                "https://firebasestorage.googleapis.com/v0/b/bloow-prod.appspot.com/o/files%2Fimages%2Fvoting%20partie.png?alt=media&token=6c4512b7-80cb-4569-b635-075524e01bf1"
              }
              className="lazyload"
              alt="voting parties"
            />
          </div>

          <div className="">
            <img
              data-src={
                "https://firebasestorage.googleapis.com/v0/b/bloow-prod.appspot.com/o/files%2Fimages%2Fmental%20health.png?alt=media&token=6596fc31-859d-4bb9-866f-f61256c1adc4"
              }
              className="lazyload"
              alt="mental health"
            />
          </div>

          <div className="">
            <img
              data-src={
                "https://firebasestorage.googleapis.com/v0/b/bloow-prod.appspot.com/o/files%2Fimages%2Fmoney%20matters.png?alt=media&token=b9c82dae-9af0-4b3d-8be6-1616ed5446e3"
              }
              className="lazyload"
              alt="maoney matters"
            />
          </div>

          <div className="">
            <img
              data-src={
                "https://firebasestorage.googleapis.com/v0/b/bloow-prod.appspot.com/o/files%2Fimages%2Fspotlight.png?alt=media&token=a0e2ec2c-f3e5-4916-8140-74f2f008f992"
              }
              className="lazyload"
              alt="the spotlight"
            />
          </div>
          <div className="">
            <img
              data-src={
                "https://firebasestorage.googleapis.com/v0/b/bloow-prod.appspot.com/o/files%2Fimages%2Fnfts.png?alt=media&token=15489708-cf68-4b91-8351-e951f3175eb1"
              }
              className="lazyload"
              alt="the nft"
            />
          </div>
        </OwlCarousel>
      </div>
    </section>
  );
}

export default TvRadio;
