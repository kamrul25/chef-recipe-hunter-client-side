import React, { useState } from "react";
import { Toaster, toast } from "react-hot-toast";

const Recipe = ({ recipe }) => {
  const { id, recipeImage, recipeName, cookingMethod, rating, ingredients } =
    recipe;
    const[able, setAble] = useState(true)

    const handleFavourite =( )=>{
        setAble(false)
        toast.success("Successfully make favourite food item!!!")
    }
  return (
    <>
<div className="card card-side bg-base-100 shadow-xl">
 <img src={recipeImage} alt={recipeImage} className="w-80 h-80"/>
  <div className="card-body">
    <h2 className="card-title">{recipeName}</h2>
    <p className="text-xs t">Cooking method: {cookingMethod}</p>
    <p>Ingredients: 
      <span className="ml-2">{ingredients[1]}</span>,
      <span className="ml-2">{ingredients[0]}</span>,
      <span className="ml-2">{ingredients[2]}</span>,
      <span className="ml-2">{ingredients[3]}</span>,
      <span className="ml-2">{ingredients[4]}</span> etc.
    </p>
    <div className="card-actions justify-end">
    {
      able ?   <button className="btn btn-primary" onClick={handleFavourite}>Favourite</button> :   <button className="btn btn-primary" disabled>Favourite</button>
    }
    <Toaster/>
    </div>
  </div>
</div>
    </>
  );
};

export default Recipe;
