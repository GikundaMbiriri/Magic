import { useState, useEffect } from "react";
import { NavProfile } from "../../../../components/utils/navProfile";
import BrowseNavigation from "./subnavbar/browseNavigation";
import { useHistory, useLocation } from "react-router-dom";
import Login from "../../../../components/auth/login";
import SignUp from "../../../../components/auth/signup";
export const Navbar = () => {
  const [navigation, setNavigation] = useState();
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const history = useHistory();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const authRequired = queryParams.get("login");
  useEffect(() => {
    if (/^\/player\b\/*$/g.test(history.location.pathname)) {
      setNavigation("home");
    } else if (
      /^\/player\/browse\b[\/\w|\d]*/g.test(history.location.pathname)
    ) {
      setNavigation("browse");
    } else if (
      /^\/player\/library\b[\/\w|\d]*/g.test(history.location.pathname)
    ) {
      setNavigation("library");
    } else if (/^\/player\/book\b[\/\w|\d]*/g.test(history.location.pathname)) {
      setNavigation("bookings");
    } else if (
      /^\/player\/premium\b[\/\w|\d]*/g.test(history.location.pathname)
    ) {
      setNavigation("premium");
    } else if (
      /^\/player\/queue\b[\/\w|\d]*/g.test(history.location.pathname)
    ) {
      setNavigation("queue");
    } else {
      setNavigation("queue");
    }
  }, [location]);
  useEffect(() => {
    if (authRequired) {
      setShowSignIn(true);
    }
  }, [authRequired]);
  const mode = {
    light: {
      text: "text-bloow-black",
      background: "bg-white",
      navLink: "text-black",
      navText: "text-bloow-blue",
    },
    dark: {
      text: "text-white",
      background: "bg-midnight",
      navLink: "text-white",
      navText: "text-white",
    },
  };
  const selected = ` ${mode.dark.navText} font-semibold border-2 g rounded-full px-4 py-2 flex justify-center items-center cursor-pointer`;
  const notSelected = ` ${mode.dark.navLink} font-bold text-sm p-2 border-transparent rounded-full flex justify-center items-center cursor-pointer`;

  return (
    <>
      <div
        className={`sticky top-0 z-50 w-full shadow-md flex items-center justify-between p-4 ${mode.dark.background}`}
      >
        <div className=" flex w-1/3  pl-6  justify-start items-center text-white">
          {navigation === "home" && (
            <div className=" text-bloow-blue font-black">
              BLOOW - The Sound Decision
            </div>
          )}

          {navigation === "bookings" && (
            <div className=" text-green text-lg font-semibold">Bookings</div>
          )}
          {navigation === "browse" && <BrowseNavigation />}
          {navigation === "library" && <div>Library</div>}
          {navigation === "premium" && <div>Debut</div>}
          {navigation === "queue" && <div className="font-black text-xl"></div>}
        </div>
        <div className=" flex-grow flex flex-row-reverse ">
          <NavProfile
            setShowSignIn={setShowSignIn}
            setShowSignUp={setShowSignUp}
          />
        </div>
      </div>
      {showSignIn && (
        <Login setShowSignIn={setShowSignIn} setShowSignUp={setShowSignUp} />
      )}
      {showSignUp && (
        <SignUp
          setShowSignIn={setShowSignIn}
          setShowSignUp={setShowSignUp}
          userType={"artist"}
        />
      )}
    </>
  );
};
