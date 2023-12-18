import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredData } from "../../Utility/LocalStorage";
import { Helmet } from "react-helmet-async";

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
    <div className="py-[200px] flex items-center justify-center">
 <Helmet>
  <title>
    Career Hub | Applied Jobs
  </title>
 </Helmet>
      <h1 className="text-center text-3xl py-5">Jobs Applied Page</h1>
    </div>
  );
};

export default Applied;
