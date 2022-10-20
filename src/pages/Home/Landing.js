import React from "react";
import BucketGirl from "../../assets/images/bucketgirl.png";

const Landing = () => {
  return (
    <>
      <div className="hero h-screen lg:h-[60vh] bg-accent mt-16 relative z-10">
        <div className="hero-content flex-col lg:flex-row">
          <div className="max-w-xl">
            <p
              data-aos-delay="200"
              data-aos-duration="1000"
              // data-aos="fade-right"
              data-aos="fade-up"
              className="text-xl"
            >
              Best Quality
            </p>
            <h1
              data-aos-delay="400"
              data-aos-duration="900"
              // data-aos="fade-right"
              data-aos="fade-up"
              className="text-5xl font-bold"
            >
              Professional Cleaning Service!
            </h1>
            <p
              data-aos-delay="600"
              data-aos-duration="800"
              // data-aos="fade-right"
              data-aos="fade-up"
              className="py-6 "
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has
            </p>
            <button
              data-aos="zoom-in"
              data-aos-delay="1000"
              // data-aos="fade-up"
              className="btn btn-primary"
            >
              Get Started
            </button>
          </div>
          <div className="h-[60vh] shrink-0">
            <img alt="" src={BucketGirl} className="h-full" />
          </div>
        </div>
      </div>
      <div className="rounded-2xl mx-auto relative z-20 mt-[-50px] shadow-lg p-10 w-5/6 bg-base-200">
        <h1 className="text-2xl mb-5 text-primary">Get Free Estimate</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-4">
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
        </div>
        <button className="btn btn-primary mt-5">Get a quote</button>
      </div>
    </>
  );
};

export default Landing;
