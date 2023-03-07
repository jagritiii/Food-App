import { Link } from "react-router-dom";
import { IMG_CDN_ID } from "../constants";


type CardProps ={
    name :string,
    cloudinaryImageId :string,
    area :string,
    cuisines :string[]
    id : number
}

const CreateCard = (
  { name, 
    cloudinaryImageId, 
    area, 
    cuisines ,
    id
  } : CardProps
  ) => {
  // const { name, cloudinaryImageId, area, cuisines } = restaurant.data.data;
  return (
    <div className="restaurant-card">
      <Link to={`restaurant/${id}`}>
      <img src={IMG_CDN_ID + cloudinaryImageId}></img>
      <h4 className="font-semibold italic text-lg">{name}</h4>
      <h4 className="text-md ">{area}</h4>
      <p className="text-sm">{cuisines?.join(", ")}</p>
      </Link>
    </div>
  );
};

export default CreateCard;
