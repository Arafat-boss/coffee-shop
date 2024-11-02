import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Card from "./Card";
import { useEffect, useState } from "react";

const CoffeeCard = () => {
    const navigate = useNavigate()
const data = useLoaderData()
const {category} = useParams()
const [coffees, setCoffees] = useState([]);
useEffect(()=>{
   if(category){
    const filteredCategory = [...data].filter(coffee => coffee.category === category)
    setCoffees(filteredCategory)
   }else{
    setCoffees(data.slice(0,6))
   }
},[category, data])
    return (
        <>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {
                coffees.map((coffee)=><Card key={coffee.id} coffee={coffee}></Card>)
           }
        </div>
        <button className="btn btn-warning mt-10" onClick={()=>navigate('./coffees')}>All View</button>
        </>
    );
};

export default CoffeeCard;