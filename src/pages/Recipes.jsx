import React from "react";
import { useLoaderData } from "react-router-dom";
import Recipe from "./Recipe";

const Recipes = () => {
  const chef = useLoaderData();
  const {
    _id,
    chefName,
    chefImage,
    experience,
    likes,
    chefRecipes,
    aboutChef,
  } = chef;
  return (
 <>
 {
  chef ?   <div>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 justify-center items-center mt-12 mx-10">
    <div className="">
      <h1 className="text-3xl text-gray-600 font-extrabold mb-5">{chefName}</h1>
      <p className="text-xl text-gray-400  ">About:{aboutChef}</p>
    </div>
    <img src={chefImage} className="w-full h-96 rounded-lg "  alt="" />
  </div>
  <h1 className="text-2xl font-semibold text-center my-6">{chefName} Recipes</h1>
  <div className="grid grid-cols-1 gap-5 m-9 z-10">
    {chefRecipes.map(recipe => (
      <Recipe key={recipe.id} recipe={recipe}></Recipe>
    ))}
  </div>
</div> : <progress className="progress w-56"></progress>
 }
 </>
    
  );
};

export default Recipes;
