import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";
import CategoryLists from "../categoryLists/categoryLists";


const Statistics = () => {
    return (
      <div>
        <Helmet>
          <title>Career Hub | Home</title>
        </Helmet>
        <Banner></Banner>
        <CategoryLists></CategoryLists>
        <FeaturedJobs></FeaturedJobs>
      </div>
    );
};

export default Statistics;