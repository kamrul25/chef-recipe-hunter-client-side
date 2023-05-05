import React, { useContext } from 'react';
import { FaHeart } from "react-icons/fa";
import { AuthContext } from '../providers/AuthProvider';
import { Link } from 'react-router-dom';
const ChefCard = ({chef}) => {
    const {_id, chefName, chefImage ,experience, likes, chefRecipes, aboutChef} = chef;
    const {user, setRecipes} = useContext(AuthContext);
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl ">
        <figure><img src={chefImage} alt="Shoes" className='h-80 w-full'/></figure>
        <div className="card-body">
          <h2 className="card-title">{chefName}</h2>
          <div className="card-actions justify-between items-center">
            <div className='flex  items-center gap-3'>
                <p>Experience: {experience}</p>
                <p className='flex  items-center '> <FaHeart className='text-red-500'></FaHeart> : <span>{likes}</span></p>
            </div>
                <p>Recipe Quantity: {chefRecipes.length}</p>
          </div>
            {user ? <Link to={`chef/${chef._id}`} 
            onClick={() => setRecipes(true)}
            className="btn btn-primary">See All Recipes</Link> :<Link to="/login" className="btn btn-primary">See All Recipes</Link>}
        </div>
      </div>
    );
};

export default ChefCard;