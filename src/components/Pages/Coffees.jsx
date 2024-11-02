import { useLoaderData } from "react-router-dom";
import Card from "../Card";
import { useState } from "react";

const Coffees = () => {
  const data = useLoaderData();
  const [coffees, setCoffees] = useState(data);
  const handelSort = (sortBy) =>{
    if(sortBy === 'popularity'){
        const sorted = [...data].sort((a,b)=>b.popularity - a.popularity)
        setCoffees(sorted)
    }
    else if( sortBy === 'rating'){
        const sorted = [...data].sort((a,b)=> b.rating - a.rating)
        setCoffees(sorted)
    }
  }
  return (
    <>
      <div className="flex justify-between items-center mb-12">
        <div>
          <h1 className="text-3xl font-thin">
            Sort Coffees by Popularity & Rating
          </h1>
        </div>
        <div className="space-x-4">
          <button onClick={()=>handelSort('popularity')} className="btn btn-warning">Sort By Popularity</button>
          <button onClick={()=>handelSort('rating')} className="btn btn-warning">Sort By Rating</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {coffees.map((coffee) => (
          <Card key={coffee.id} coffee={coffee}></Card>
        ))}
      </div>
    </>
  );
};

export default Coffees;
