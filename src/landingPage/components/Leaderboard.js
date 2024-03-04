import React, { useState } from "react";

import blurredChart from "../../assets/blurredChart.png";
// IMPORT IMAGES
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
function Leaderboard() {
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
      '<i class="bi bi-chevron-left text-white fa-10x"></i>',
      '<i class="bi bi-chevron-right text-white"></i>',
    ],
  };
  const [leaderBoardActive, setLeaderBoardActive] = useState(0);

  const handleLeaderBoardTodayChange = () => {
    setLeaderBoardActive(0);
  };

  const handleLeaderBoardWeekChange = () => {
    setLeaderBoardActive(1);
  };

  const handleLeaderBoardMonthChange = () => {
    setLeaderBoardActive(2);
  };
  const artists1 = [
    {
      Name: "Jua Cali",
      Image:
        "https://firebasestorage.googleapis.com/v0/b/bloow-prod.appspot.com/o/files%2Fvideos%2Fjuacali-33.png?alt=media&token=3bc96eff-353e-4639-862c-264f2ff810d2",
      Link: "/player/premium/album/641325a32b602ff63687f5b6",
    },
    // {
    //   Name: "Khartoomoney",
    //   Image:
    //     "https://firebasestorage.googleapis.com/v0/b/bloow-prod.appspot.com/o/files%2Fimages%2Fkhatoomoney1.png?alt=media&token=3caf59cb-be69-42b8-83d2-dc3463cda1df",
    //   Link: "/player/browse/artist/6217310555f0306e4be898a2",
    // },
    {
      Name: "Qqu",
      Image:
        "https://firebasestorage.googleapis.com/v0/b/bloow-prod.appspot.com/o/files%2Fimages%2Fqqu.png?alt=media&token=1e3b16d1-ecc3-4f3e-bc93-372a04597af4",
      Link: "/player/browse/artist/620bd0c43a1bf303b4641caf",
    },
    {
      Name: "Tingseh",
      Image:
        "https://firebasestorage.googleapis.com/v0/b/bloow-prod.appspot.com/o/files%2Fimages%2Ftingseh.png?alt=media&token=08f5b415-f44a-43f0-9909-4511584b37f1",
      Link: "/player/browse/artist/62277e7d5623cd0d1b3bcf2a",
    },
    {
      Name: "Versatile",
      Image:
        "https://firebasestorage.googleapis.com/v0/b/bloow-prod.appspot.com/o/files%2Fimages%2Fversatile.png?alt=media&token=e9877059-7cc5-4a20-b339-893fbecdec42",
      Link: "/player/browse/artist/620bd3e33a1bf303b4641d63",
    },

    {
      Name: "Kuky",
      Image:
        "https://firebasestorage.googleapis.com/v0/b/bloow-prod.appspot.com/o/files%2Fimages%2Fkuky.png?alt=media&token=a5727f5e-58cd-40e0-b179-d6b84f85ec2c",
      Link: "/player/browse/artist/634e8d730b3fb4b44f20297b",
    },
  ];
  const artists2 = [
    {
      Name: "Lynn(Diva)",
      Image:
        "https://firebasestorage.googleapis.com/v0/b/bloow-prod.appspot.com/o/files%2Fimages%2Flynn%20Diva.png?alt=media&token=f5a64b98-946d-46dd-986e-4cc8f4d5a04c",
      Link: "/player/browse/artist/62220dab5623cd0d1b3bccd2",
    },
  ];
  return (
    <>
      <div className=" py-8 bg-gradient-to-r from-dark-yellow to-light-yellow ">
        <h2 className="text-center text-4xl py-6 text-shrink ">
          Magic Leaderboard
        </h2>

        <div className="flex gap-4 items-center my-6 w-11/12 mx-auto">
          <OwlCarousel {...options}>
            {artists1.map((artist, index) => (
              <div
                className="relative cursor-pointer group "
                onClick={() => {}}
              >
                <img
                  className="lazyload"
                  loading="lazy"
                  src={blurredChart}
                  data-src={artist.Image}
                  alt="leaderboard six"
                />
                <div className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-black rounded-b-2xl hidden flex-col justify-center items-center w-12/12 opacity-70 group-hover:flex">
                  <span className="text-white font-semibold">#{index + 1}</span>
                  <span className="text-shrink text-white font-semibold">
                    {artist.Name}
                  </span>
                </div>
              </div>
            ))}
          </OwlCarousel>
        </div>

      
      </div>
    </>
  );
}

export default Leaderboard;
