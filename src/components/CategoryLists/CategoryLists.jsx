import Account from "./Images/accounts.png"
import Creative from "./Images/creative.png"
import Marketing from "./Images/marketing.png"
import Chip from "./Images/chip.png"

const CategoryLists = () => {

  return (
    <div className="bg-white py-28">
      <div className="text-center">
        <h2 className="text-4xl font-bold">Job Category List</h2>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="lg:flex md:flex flex-none container mx-auto mt-5">
        <div className="w-1/4 p-7 category">
          <img src={Account} alt="" />
          <h3 className="font-bold text-2xl mb-3">Account & Finance</h3>
          <p>300 Jobs Available</p>
        </div>
        <div className="w-1/4 p-7 category">
          <img src={Creative} alt="" />
          <h3 className="font-bold text-2xl mb-3">Creative Design</h3>
          <p>100+ Jobs Available</p>
        </div>
        <div className="w-1/4 p-7 category">
          <img src={Marketing} alt="" />
          <h3 className="font-bold text-2xl mb-3">Marketing & Sales</h3>
          <p>150 Jobs Available</p>
        </div>
        <div className="w-1/4 p-7 category">
          <img src={Chip} alt="" />
          <h3 className="font-bold text-2xl mb-3">Engineering Job</h3>
          <p>224 Jobs Available</p>
        </div>
      </div>
    </div>
  );
};

export default CategoryLists;
