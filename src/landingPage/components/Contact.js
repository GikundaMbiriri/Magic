import React from "react";

function Contact() {
  return (
    <div className=" md:grid-cols-2 md:grid">
      <div className="contact--background">
        <div className="text-2xl">
          <div className="pl-16 pt-4 mb-4">
            <span className="text-white text-sm font-bold">Let's Talk</span>
            <br />
            <span className="text-xs font-semibold text-white">
              Send us a message for any ideas, questions, issues or projects.
            </span>
          </div>
          <form className="w-10/12 mx-auto">
            <div className="">
              <div className="flex items-center justify-between">
                <input
                  className="pt-2 pb-2 pl-7 w-5/12 placeholder:text-sm  focus:outline-none rounded-2xl bg-white text-black text-sm"
                  type="text"
                  placeholder="Your full name"
                />
                <input
                  className="pt-2 pb-2 pl-7 w-5/12 float-right focus:outline-none bg-white rounded-2xl placeholder:text-sm text-sm"
                  type="text"
                  placeholder="Your email adress"
                />
              </div>
              <textarea
                className="pl-7 pt-2 focus:outline-none text-sm placeholder-black-400 mt-2 rounded-2xl bg-white text-black h-24 w-full placeholder:text-sm placeholder:font-semibold"
                placeholder="Your message"
                name=""
                id=""
                cols="10"
                rows="7"
              ></textarea>
            </div>
            <button className="bg-white text-black rounded-2xl text-sm font-semibold pl-5 pr-5 pt-1 pb-1 float-right mt-3 mb-2">
              Send
            </button>
          </form>
        </div>
      </div>
      <div className="">
        <div className="reach--background p-10">
          <div className="left-10 text-sm text-white">
            <span className="font-bold">Reach us</span>
            <span className="block font-semibold">
              We're just one click away
            </span>
            <br />
            <span className="font-semibold block">
              <span className="font-thin">Email</span> :info@bloowafrica.com
            </span>
            <span className="block font-semibold">
              <span className="font-thin">Phone</span> :+254 713799975
            </span>
            <span className="font-semibold">
              <span className="font-thin">Location</span> :Nairobi, Kenya
            </span>
          </div>
        </div>
        <div className="subscription--background p-10">
          <div className="left-10 text-white">
            <span className="font-bold text-sm">Stay in the loop</span>
            <p className="font-semibold text-sm">
              Join our mailing list to stay on the loop <br /> with our latest
              updates
            </p>
            <form>
              <div className="flex items-center">
                <input
                  className="pt-2 pb-2 pl-7 placeholder:text-sm focus:outline-none rounded-2xl bg-white text-black text-sm"
                  type="text"
                  placeholder="Your email adress"
                />
                <button className="ml-8 bg-white text-black rounded-2xl text-sm font-semibold pl-5 pr-5 pt-2 pb-2 float-right">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
