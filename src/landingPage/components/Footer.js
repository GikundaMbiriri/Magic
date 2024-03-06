import React from "react";
import logo from "../../assets/logo.png";

function Footer() {
  return (
    <div className="footer--background p-4">
      <div className="md:flex grid items-center">
        <div className="w-20 h-20 pr-4">
          <img data-src={logo} className="lazyload" alt="footer" />
        </div>
        <div className="md:flex md:items-center md:justify-between grid md:w-1/2 w-full mx-auto">
          <div className="flex flex-col m-2">
            <span className="text-white font-semibold text-sm">
              Stay in the loop
            </span>
            <span className="text-white font-semibold text-sm">
              Join our mailing list to stay in the loop with our latest updates
            </span>
            <form>
              <input
                className="w-full mt-4 pt-2 pb-2 pl-7 focus:outline-none bg-white rounded-2xl placeholder:text-sm text-sm"
                type="text"
                placeholder="Your email adress"
              />
              <button className="w-5/12 block float-right bg-white text-black rounded-2xl text-sm font-semibold pl-5 pr-5 pt-1 pb-1 mt-4">
                Send
              </button>
            </form>
          </div>
        </div>
        <div className="md:w-5/12 w-full mt-4 mx-auto text-white">
          <div className="border border-black-800 rounded p-4 w-12/12">
            <span className="font-semibold block text-sm text-white ">
              Email :<span className="font-bold">info@bloowafrica.com</span>
            </span>
            <span className="block font-semibold text-sm">
              Phone :<span className="font-bold">+254 729 400 426</span>
            </span>
            <span className="font-semibold text-sm">
              Location :
              <span className="font-bold">
                AfyaRekod Campus, Nairobi, Kenya
              </span>
            </span>
          </div>
          <div className="flex justify-between mt-4">
            <div>
              <p className="font-bold">My Account</p>
              <div className="flex flex-col">
                <div className="text-white no-underline text-sm">Profile</div>
                <div className="text-white no-underline text-sm">Favorites</div>
                <div className="text-white no-underline text-sm">Watchlist</div>
                <div className="text-white no-underline text-sm">
                  My Collections
                </div>
                <div className="text-white no-underline text-sm">Settings</div>
                <div className="text-white no-underline text-sm">Stats</div>
                <div className="text-white no-underline text-sm">Rankings</div>
                <div className="text-white no-underline text-sm">Activity</div>
              </div>
            </div>
            <div>
              <p className="font-bold">Resources</p>
              <div className="flex flex-col">
                <div className="text-white no-underline text-sm">
                  Help Center
                </div>
                <div className="text-white no-underline text-sm">
                  Platform Status
                </div>
                <div className="text-white no-underline text-sm">Partners</div>
                <div className="text-white no-underline text-sm">
                  Gas-Free Marketplace
                </div>
                <div className="text-white no-underline text-sm">Taxes</div>
                <div className="text-white no-underline text-sm">Blog</div>
                <div className="text-white no-underline text-sm">Docs</div>
                <div className="text-white no-underline text-sm">
                  Newsletter
                </div>
              </div>
            </div>
            <div>
              <p className="font-bold">Company</p>
              <div className="flex flex-col">
                <div className="text-white no-underline text-sm">About</div>
                <div className="text-white no-underline text-sm">Careers</div>
                <div className="text-white no-underline text-sm">Ventures</div>
                <div className="text-white no-underline text-sm">Grants</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
