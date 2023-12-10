import { useEffect, useState } from "react";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  return (
    <div className="bg-white pb-28">
      <div className="text-center">
        <h2 className="text-4xl font-bold">Featured Jobs {jobs.length} </h2>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="containe mx-auto lg:flex md:flex flex-none">
        <div className="lg:w-1/2 md:w-1/2 sm:w-2/2"></div>
      </div>
    </div>
  );
};

export default FeaturedJobs;
