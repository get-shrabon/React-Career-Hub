import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import bg2 from "./images/bg2.png";
import bg1 from "./images/bg1.png";
import Money from "./images/money.png";
import Calander from "./images/calendar.png";
import Phone from "./images/phone.png";
import Email from "./images/email.png";
import Location from "./images/location2.png";
import { saveDataStored } from "../../Utility/LocalStorage";


const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const job = jobs.find((job) => job.id === idInt);
  const {
    job_title,
    salary,
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    contact_information,
  } = job;
  const handleApplyedBtn = () => {
    saveDataStored(idInt);
    toast("You Have Applied Successful");
  };
  return (
    <div>
      <div className=" job_detail_bg">
        <h3 className="text-center text-2xl font-bold">Job Details</h3>
        <img className="bg2" src={bg2} alt="" />
        <img className="bg1" src={bg1} alt="" />
      </div>
      <div className="py-10 grid grid-cols-4 container mx-auto gap-5">
        <div className="col-span-3 border p-5 rounded">
          <p>
            <strong>Job Description:</strong>
            {job_description}
          </p>
          <p>
            <strong>Job Responsibility:</strong>
            {job_responsibility}
          </p>
          <p>
            <strong>Educational Requirements:</strong> <br />
            {educational_requirements}
          </p>
          <p>
            <strong>Experiences:</strong> <br />
            {experiences}
          </p>
        </div>
        <div className="col-span-1 border p-2 job__des">
          <h4 className="font-bold mb-3">Job Details</h4>
          <div className="flex items-center gap-2 my-1">
            <img src={Money} alt="" />
            <h5 className="font-medium">Salary :</h5>
            <p>{salary}</p>
          </div>
          <div className="flex items-center gap-2 my-1">
            <img src={Calander} alt="" />
            <h5 className="font-medium">Job Title :</h5>
            <p>{job_title}</p>
          </div>
          <h4 className="font-bold text-xl mt-3">Contact Information</h4>
          <hr />
          <div className="flex items-center gap-2 my-1">
            <img src={Phone} alt="" />
            <h5 className="font-medium">Phone :</h5>
            <p>{contact_information.phone}</p>
          </div>
          <div className="flex items-center gap-2 my-1">
            <img src={Email} alt="" />
            <h5 className="font-medium">Email :</h5>
            <p>{contact_information.email}</p>
          </div>
          <div className="flex items-start gap-2 my-1">
            <img src={Location} alt="" />
            <div>
              <h5 className="font-medium">Address :</h5>
              <p>{contact_information.address}</p>
            </div>
          </div>
          <button
            onClick={handleApplyedBtn}
            className="primary__btn btn w-[100%] mt-3"
          >
            Apply Now
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default JobDetails;
