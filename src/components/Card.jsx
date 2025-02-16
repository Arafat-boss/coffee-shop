import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Card = ({coffee}) => {
    const {name, image, category, origin, type, id, rating, popularity} = coffee
    return (
        <div className="flex relative">
  <Link
    to={`/coffee/${id}`}
    className="transition hover:scale-105 shadow-xl rounded-xl overflow-hidden"
  >
    <figure className="w-full h-48 overflow-hidden">
      <img className="" src={image} alt="" />
    </figure>
    <div className="p-4">
      <p>Category: {category}</p>
      <p>Name: {name}</p>
      <p>Type: {type}</p>
      <p>Origin: {origin}</p>
      <p>Rating: {rating}</p>
      <p>Popularity: {popularity}</p>
    </div>
  </Link>
</div>
    );
};

export default Card;