import React, { useState } from "react";
import ReactPlayer from "react-player";
import { AiFillPlayCircle } from "react-icons/ai";

// OWL CAROUSEL
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

function VideoSlider({ image }) {
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
      '<i class="bi bi-chevron-left text-white fa-10x"></i>',
      '<i class="bi bi-chevron-right text-white"></i>',
    ],
  };

  return (
    <>
      <div className="relative w-11/12 h-full mx-auto pb-10 my-2">
        <div className=" flex justify-center  h-full">
          {play ? (
            <ReactPlayer
              url="https://firebasestorage.googleapis.com/v0/b/bloow-prod.appspot.com/o/files%2Fvideos%2FBloow%20intro.mp4?alt=media&token=1614c93e-89b6-41ab-9f9f-263cbda1f9d6"
              muted={false}
              playing={play}
              controls={true}
              width="100%"
              height="100%"
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
    </>
  );
}

export default VideoSlider;
