import React, { useEffect, useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
// import logo from "../../assets/logo.svg";
import { AiFillHome, AiOutlineRight } from "react-icons/ai";

import { IoMdMusicalNote } from "react-icons/io";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { BiWallet } from "react-icons/bi";
import { GiMusicSpell, GiClothes } from "react-icons/gi";
import { MdBookmarkBorder } from "react-icons/md";

const selected = "px-2 py-4 text-magic-blue cursor-pointer";
const notSelected = "py-4 px-2 text-white cursor-pointer hover:text-magic-blue";

function Sidebar() {
  const [navigation, setNavigation] = useState();
  const [minimizeMenu, setMininizeMenu] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (/^\/player\b\/*$/g.test(location.pathname)) {
      setNavigation("home");
    } else if (/^\/\b\/*$/g.test(location.pathname)) {
      setNavigation("index");
    } else if (/^\/player\/merchandise\b[\/\w|\d]*/g.test(location.pathname)) {
      setNavigation("merchandise");
    } else if (/^\/player\/browse\b[\/\w|\d]*/g.test(location.pathname)) {
      setNavigation("music");
    } else if (
      /^\/player\/premium\/purchased\b[\/\w|\d]*/g.test(location.pathname)
    ) {
      setNavigation("purchased");
    } else if (/^\/player\/premium\b[\/\w|\d]*/g.test(location.pathname)) {
      setNavigation("premium");
    } else if (/^\/player\/tv\b[\/\w|\d]*/g.test(location.pathname)) {
      setNavigation("tv");
    } else if (/^\/player\/radio\b[\/\w|\d]*/g.test(location.pathname)) {
      setNavigation("radio");
    } else if (/^\/player\/store\b[\/\w|\d]*/g.test(location.pathname)) {
      setNavigation("store");
    } else if (/^\/player\/studio\b[\/\w|\d]*/g.test(location.pathname)) {
      setNavigation("studio");
    } else if (/^\/player\/finance\b[\/\w|\d]*/g.test(location.pathname)) {
      setNavigation("finance");
    }
  }, [location]);

  return (
    <>
      {/* {(minimizeMenu && (
        <ReducedSidebar
          clickToggler={setMininizeMenu}
          setNavigation={setNavigation}
          navigation={navigation}
          history={history}
        />
      )) || ( */}
      <ExpandedSidebar
        clickToggler={setMininizeMenu}
        setNavigation={setNavigation}
        navigation={navigation}
        navigate={navigate}
      />
      {/* )} */}
    </>
  );
}

const ExpandedSidebar = ({
  clickToggler,
  setNavigation,
  navigation,
  navigate,
}) => {
  const selected =
    "pl-5 py-4 w-full flex items-center justify-between cursor-pointer text-magic-blue";
  const notSelected =
    "pl-5 py-4 w-full flex items-center justify-between cursor-pointer text-white hover:text-magic-blue";

  return (
    <div className="h-full w-44 bg-black shadow-lg flex flex-col transition ease-in-out duration-300 ">
      <div className=" rounded-md pr-2 flex-grow">
        <div className=" flex  pt-6 pl-2 pb-10 justify-center items-center ">
          <div className="  text-center bg-white pb-2 rounded-lg  ">
            {/* <img src={logo} alt="Bloow logo" className=" w-28 h-10 mt-3" /> */}
          </div>
          {/* <div
            className=" shadow-lg p-2 rounded-md"
            onClick={() => clickToggler((prevState) => !prevState)}
          >
            <AiOutlineMenuFold className="text-xl text-white cursor-pointer" />
          </div> */}
        </div>
        <Link to={"/player"}>
          <div
            className={navigation == "home" ? selected : notSelected}
            onClick={() => setNavigation("home")}
          >
            <div className="flex items-center ">
              <AiFillHome className=" " />

              <div className="pl-4 pr-8 font-bold text-xs tracking-wide ">
                Home
              </div>
            </div>
            <AiOutlineRight className="  " />
          </div>
        </Link>
        {/* <Link to={"/player/browse"}>
          <div
            className={navigation == "music" ? selected : notSelected}
            onClick={() => setNavigation("music")}
          >
            <div className="flex items-center">
              <MdLibraryMusic className="  " />

              <div className="pl-4 pr-8  font-bold  text-xs tracking-wide">
                Music
              </div>
            </div>
            <AiOutlineRight className=" " />
          </div>
        </Link> */}
        <Link to={"/player/premium"}>
          <div
            className={navigation == "premium" ? selected : notSelected}
            onClick={() => setNavigation("premium")}
          >
            <div className="flex items-center">
              <IoMdMusicalNote className="  " />

              <div className="pl-4 pr-8  font-bold  text-xs tracking-wide">
                Debut
              </div>
            </div>
            <AiOutlineRight className=" " />
          </div>
        </Link>
        <Link to={"/player/premium/purchased"}>
          <div
            className={navigation == "purchased" ? selected : notSelected}
            onClick={() => setNavigation("purchased")}
          >
            <div className="flex items-center">
              <GiMusicSpell className="  " />

              <div className="pl-4 pr-8  font-bold  text-xs tracking-wide">
                Purchased
              </div>
            </div>
            <AiOutlineRight className=" " />
          </div>
        </Link>

        {/* <div
          className={
            navigation == "tv"
              ? selected
              : notSelected
          }
          onClick={() => setNavigation("tv")}
        >
          <div className="flex items-center">
            <MdTv className=" " />

            <div className="pl-4 font-bold text-xs tracking-wide">TV</div>
          </div>
          <AiOutlineRight className="" />
        </div> */}
        {/* 
        <div
          className={
            navigation == "radio"
              ? selected
              : notSelected
          }
          onClick={() => setNavigation("radio")}
        >
          <div className="flex items-center">
            <IoMdRadio className=" " />

            <div className="pl-4 font-bold text-xs tracking-wide">Radio</div>
          </div>
          <AiOutlineRight className="" />
        </div> */}

        {/* <div
          className={
            navigation == "store"
              ? selected
              : notSelected
          }
          onClick={() => setNavigation("store")}
        >
          <div className="flex items-center">
            <MdShoppingBasket className=" " />

            <div className="pl-4 font-bold text-xs tracking-wide">Store</div>
          </div>
          <AiOutlineRight className="" />
        </div> */}

        {/* {
          user?.role === 'artist' &&
          <div
            className={
              navigation == "studio"
                ? selected
                : notSelected
            }
            onClick={() => setNavigation("studio")}
          >
            <div className="flex items-center">
              <IoRadioSharp className=" " />

              <div className="pl-4 font-bold text-xs tracking-wide">Studio</div>
            </div>
            <AiOutlineRight className="" />
          </div>
        } */}

        <div
          className={navigation == "finance" ? selected : notSelected}
          onClick={() => {
            navigate("/dashboard/artist/finance");
          }}
        >
          <div className="flex items-center ">
            <BiWallet className=" " />

            <div className="pl-4 font-bold text-xs tracking-wide">Wallet</div>
          </div>
          <AiOutlineRight className=" " />
        </div>
        <Link to={"/player/merchandise"}>
          <div
            className={navigation == "merchandise" ? selected : notSelected}
            onClick={() => setNavigation("machandise")}
          >
            <div className="flex items-center">
              <GiClothes className="  " />

              <div className="pl-4 pr-4  font-bold  text-xs tracking-wide">
                Merchandise
              </div>
            </div>
            <AiOutlineRight className=" " />
          </div>
        </Link>
        <Link to={"/player/book"}>
          <div
            className={navigation == "book" ? selected : notSelected}
            onClick={() => setNavigation("book")}
          >
            <div className="flex items-center">
              <MdBookmarkBorder className="  " />

              <div className="pl-4 pr-12  font-bold  text-xs tracking-wide">
                Bookings
              </div>
            </div>
            <AiOutlineRight className=" " />
          </div>
        </Link>
        <Link to={"/home"}>
          <div
            className={navigation == "index" ? selected : notSelected}
            onClick={() => setNavigation("index")}
          >
            <div className="flex items-center">
              <BsFillInfoCircleFill className="  " />

              <div className="pl-4 pr-12  font-bold  text-xs tracking-wide">
                About
              </div>
            </div>
            <AiOutlineRight className=" " />
          </div>
        </Link>
      </div>
    </div>
  );
};
export default Sidebar;
