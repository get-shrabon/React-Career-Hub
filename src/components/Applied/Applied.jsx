import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredData } from "../../Utility/LocalStorage";

const Applied = () => {
  const jobs = useLoaderData();
  useEffect(() => {
    const storedJob = getStoredData();
    if (jobs.length > 0) {
      const jobApplied = jobs.filter((job) => storedJob.includes(job.id));
      console.log(jobApplied, jobs, storedJob);
    }
  } , []);
  return (
    <div>
      <h1 className="text-center text-3xl py-5">Jobs Applied Page</h1>
    </div>
  );
};

export default Applied;
