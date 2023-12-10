import Banner from "../Banner/Banner";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";
import CategoryLists from "../categoryLists/categoryLists";


const Statistics = () => {
    return (
      <div>
        <Banner></Banner>
        <CategoryLists></CategoryLists>
        <FeaturedJobs></FeaturedJobs>
      </div>
    );
};

export default Statistics;