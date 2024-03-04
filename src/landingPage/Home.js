import React, { useEffect } from "react";
// IMPORT COMPONENTS
import Navbar from "./components/Navbar";
import ImageSlider from "./components/ImageSlider";
import VideoSlider from "./components/VideoSlider";
import Leaderboard from "./components/Leaderboard";
import EventsSlider from "./components/EventsSlider";
import ArtistSlider from "./components/ArtistSlider";
import Awards from "./components/Awards";
import TvRadio from "./components/TvRadio";
import Contact from "./components/Contact";
import SocialMedia from "./components/SocialMedia";
import Footer from "./components/Footer";
import LandingVideoOne from "../assets/wyreVideo.png";
import Khaligraph from "../assets/khaligraph.png";

// OWL CAROUSEL
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const images = [
  {
    title: "Khaligraph",
    image: Khaligraph,
  },
  // {
  //   title: "Jammin",
  //   image:
  //     "https://firebasestorage.googleapis.com/v0/b/bloow-prod.appspot.com/o/files%2Fimages%2FJammin.png?alt=media&token=14be21d5-ba3b-4424-87a1-db4126f0c104",
  // },
  {
    title: "Events",
    image:
      "https://firebasestorage.googleapis.com/v0/b/bloow-f5237.appspot.com/o/files%2Fimages%2Fheaders%2F04%20Music%20Channel.png?alt=media&token=b292a5a0-173a-4c81-bf70-a11958e8bcd3",
  },
];

const songs = [
  {
    title: "Jua Cali",
    image:
      "https://firebasestorage.googleapis.com/v0/b/bloow-prod.appspot.com/o/files%2Fvideos%2Fjuacali-57.png?alt=media&token=ac4af74f-362c-4e67-bf2f-3b84e1462ad6",
    link: "/player/premium/album/641325a32b602ff63687f5b6",
  },
  // {
  //   title: "Winrose",
  //   image:
  //     "https://firebasestorage.googleapis.com/v0/b/bloow-prod.appspot.com/o/files%2Fimages%2Fwinrose%20Song.png?alt=media&token=1f927d82-5a93-45d7-aba8-03bdf67500c9",
  //   link: "/player/browse/artist/62148e3755f0306e4be89692",
  // },
  {
    title: "Ayah",
    image:
      "https://firebasestorage.googleapis.com/v0/b/bloow-prod.appspot.com/o/files%2Fimages%2Fayah.png?alt=media&token=38e47a33-fd98-4f2e-939e-a169259d80b8",
    link: "/player/browse/content/620bd2d53a1bf303b4641d2b",
  },
  {
    title: "Kizungu zungu",
    image:
      "https://firebasestorage.googleapis.com/v0/b/bloow-prod.appspot.com/o/files%2Fimages%2Fkizunguzungu.png?alt=media&token=04594fa8-d615-41cb-8d66-d4d7e7e9dd4d",
    link: "/player/browse/content/62336804a9871ac3763ef82a",
  },
  {
    title: "Pillar",
    image:
      "https://firebasestorage.googleapis.com/v0/b/bloow-prod.appspot.com/o/files%2Fimages%2Fpillar.png?alt=media&token=23dedf34-9361-426b-a4e8-88a9f1ec1258",
    link: "/player/browse/content/62220eed5623cd0d1b3bccf8",
  },
  {
    title: "Nadai",
    image:
      "https://firebasestorage.googleapis.com/v0/b/bloow-prod.appspot.com/o/files%2Fimages%2Fnadai.png?alt=media&token=a3b7755e-32a0-4834-8930-e5ccdeb5305c",
    link: "/player/browse/content/622f1b00a30f59ee3f37aa0e",
  },
  {
    title: "Faithful",
    image:
      "https://firebasestorage.googleapis.com/v0/b/bloow-prod.appspot.com/o/files%2Fimages%2Ffaithful.png?alt=media&token=5d0624e8-6f90-4b20-86e6-1fd7bf7d3d3a",
    link: "/player/browse/content/62fa2336de885bcc353ff609",
  },

  // {
  //   title: "Khartoomany",
  //   image:
  //     "https://firebasestorage.googleapis.com/v0/b/bloow-f5237.appspot.com/o/files%2Fimages%2Fartists%2Fgraphics%202-24.png?alt=media&token=515bc6ad-b3c9-47fb-aaae-b4b58a70c582",
  // },
];

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
    '<i class="bi bi-chevron-left left text-white"></i>',
    '<i class="bi bi-chevron-right text-white"></i>',
  ],
};

function AuthenticatedHome() {
  return (
    <div className="bg-midnight pt-6">
      <Navbar />
      <ImageSlider images={images} />

      <section className="my-5">
        <h2 className="text-center text-light-yellow text-4xl">Shoutout!</h2>
      </section>

      <VideoSlider image={LandingVideoOne} />
      <Leaderboard />
      <ArtistSlider title="Other Perfoming Artists" items={songs} />

      <section className="key--features--section p-10">
        <OwlCarousel {...options}>
          <div className="item pb-20">
            <p className="text-white text-2xl font-mono relative top-24 md:left-80  left-20">
              Key Features <br /> on Bloow
            </p>

            <div className="flex items-center">
              
              <ul className="text-white font-thin relative inset-x-2/3 top-32 inset-x-1/4 md:mx-auto">
                <li>Merchandise</li>
                <li>Voting & Awards</li>
                <li>Events & Concerts Booking</li>
                <li>Milestones</li>
                <li>Bloow Studio</li>
                <li>Bloow Label</li>
                <li>TV & Radio</li>
                <li>Store</li>
                <li>NFTs</li>
                <li>Finance</li>
                <li>Streaming</li>
                <li>Portfolio</li>
                <li>Affiliate Programs</li>
              </ul>
          
            </div>
          </div>

          <div className="item">
            <p className="text-white text-2xl font-mono relative top-24 md:left-80 md:left-40 left-20">
              Key Features <br /> on Bloow
            </p>

            <div className="flex items-center">
          
              <ul className="text-white font-thin relative inset-x-2/3 top-32 inset-x-1/4 md:mx-auto">
                <li>Merchandise</li>
                <li>Voting & Awards</li>
                <li>Events & Concerts Booking</li>
                <li>Milestones</li>
                <li>Bloow Studio</li>
                <li>Bloow Label</li>
                <li>TV & Radio</li>
                <li>Store</li>
                <li>NFTs</li>
                <li>Finance</li>
                <li>Streaming</li>
                <li>Portfolio</li>
                <li>Affiliate Programs</li>
              </ul>
              {/* <img
              className="-w-1 md:mt-40 md:block mr-4 hidden "
              src={navigateNext}
              alt="navigate next icon"
            /> */}
            </div>
          </div>

          <div className="item">
            <p className="text-white text-2xl font-mono relative top-24 md:left-80 md:left-40 left-20">
              Key Features <br /> on Bloow
            </p>

            <div className="flex items-center">
              {/* <img
              className="w-20 mt-48"
              src={navigatePrev}
              alt="navigate prev icon"
            /> */}
              <ul className="text-white font-thin relative inset-x-2/3 top-32 inset-x-1/4 md:mx-auto">
                <li>Merchandise</li>
                <li>Voting & Awards</li>
                <li>Events & Concerts Booking</li>
                <li>Milestones</li>
                <li>Bloow Studio</li>
                <li>Bloow Label</li>
                <li>TV & Radio</li>
                <li>Store</li>
                <li>NFTs</li>
                <li>Finance</li>
                <li>Streaming</li>
                <li>Portfolio</li>
                <li>Affiliate Programs</li>
              </ul>
              {/* <img
              className="-w-1 md:mt-40 md:block mr-4 hidden "
              src={navigateNext}
              alt="navigate next icon"
            /> */}
            </div>
          </div>
        </OwlCarousel>
      </section>

      <EventsSlider />

      <Awards />

      <TvRadio image={LandingVideoOne} />

      <Contact />

      <SocialMedia />

      <Footer />
    </div>
  );
}

export default AuthenticatedHome;
