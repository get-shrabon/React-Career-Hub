import PropTypes from "prop-types";
import LocationImg from "./images/location2.png";
import MoneyImg from "./images/money.png";
const FeaturedJob = ({ job }) => {
  const {
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    job_type,
    location,
    salary,
  } = job;
  return (
    <div className="jobBox">
      <img src={logo} alt="" />
      <h2 className="text-2xl font-bold">{job_title}</h2>
      <p className="text-[20px] font-medium">{company_name}</p>
      <div className="flex items-center gap-5 my-3">
        <button className="styles__text">{remote_or_onsite}</button>
        <button className="styles__text">{job_type}</button>
      </div>
      <div className="flex items-center gap-5">
        <p className="flex items-center ">
          <span>
            <img className="sm__img" src={LocationImg} alt="" />
          </span>
          <span className="text-[#757575]">{location}</span>
        </p>
        <p className="flex items-center">
          <span>
            <img className="sm__img" src={MoneyImg} alt="" />
          </span>
          <span className="text-[#757575]">{salary}</span>
        </p>
      </div>
      <button className="primary__btn mt-3">View Details</button>
    </div>
  );
};
FeaturedJob.propTypes = {
  job: PropTypes.object.isRequired,
};
export default FeaturedJob;
