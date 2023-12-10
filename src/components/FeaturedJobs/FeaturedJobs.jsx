import { useEffect, useState } from "react";
import FeaturedJob from "../FeaturedJob/FeaturedJob";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loadData, setLoadData] = useState(4);
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
      <div className="container mx-auto lg:grid gap-7 mt-10 lg:grid-cols-2 md:grid md:grid-cols-2 grid-cols-none">
        {jobs.slice(0, loadData).map((job) => (
          <FeaturedJob key={job.id} job={job}></FeaturedJob>
        ))}
      </div>
      <div className="flex justify-center mt-5">
        <div className={loadData === jobs.length && "hidden"}>
          <button
            onClick={() => setLoadData(jobs.length)}
            className="primary__btn btn"
          >
            Show All Jobs
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedJobs;
