import authorImg  from  "./images/user.png"

const Banner = () => {
    return (
      <div className="banner">
        <div className="lg:flex md:flex sm:flex-none container mx-auto items-center">
          <div className="w-1/2">
            <h2 className="text-[60px] text-black font-bold leading-tight">
              One Step <br /> Closer To Your <br />{" "}
              <span className="styles__text">Dream Job</span>
            </h2>
            <p>
              Explore thousands of job opportunities with all the information
              you need. Its your future. Come find it. Manage all your job
              application from start to finish.
            </p>
            <button className="primary__btn btn mt-3">Get Started</button>
          </div>
          <div className="w-1/2">
            <img src={authorImg} alt="" />
          </div>
        </div>
      </div>
    );
};

export default Banner;