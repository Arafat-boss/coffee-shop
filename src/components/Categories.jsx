/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const Categories = ({categories}) => {
  return (
      <div role="tablist" className="tabs tabs-lifted">
        {
            categories.map((category , i)=>
            <NavLink 
            key={i} to={`./card/${category.category}`} 
            role="tab" className={({isActive})=>`tab text-2xl font-thin mb-10 ${isActive? 'tab-active':''}`}>
                {category.category}
            </NavLink>)
        }
      </div>
  );
};

export default Categories;
