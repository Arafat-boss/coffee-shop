import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../Banner";
import Categories from "../Categories";
import Heading from "../Heading";

const Home = () => {

const categories = useLoaderData();
console.log(categories);

  return (
<div>
      {/* banner */}
      <Banner></Banner>
      {/* header */}
      <Heading
        title={"Browse Coffees by Category"}
        subtitle={
          "Choose your desired coffee category to browse through specific coffees that fit in your taste."
        }
      ></Heading>
      {/* Category */}
      <Categories categories={categories}></Categories>
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
