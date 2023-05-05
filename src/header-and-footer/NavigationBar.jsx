import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link, NavLink } from "react-router-dom";
import toast from "react-hot-toast";
const NavigationBar = () => {
  const { user, logOut, image ,recipes ,setRecipes,} = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Successfully Log Out!");
      })
      .catch(error => {
        toast.error(`${error.message}! Try it again.`);
      });
  };
  return (
    <nav className="navbar pl-5 pr-10 flex justify-between items-center font-extrabold bg-base-300  ">
      <Link to="/" className="">
        <img
          src="https://thumbs.dreamstime.com/b/cook-chef-logo-icon-labels-menu-restaurant-cafe-vector-symbol-isolated-white-background-122383126.jpg"
          alt=""
          className="object-contain w-20 rounded-lg  "
        />
    
      </Link>
      <div className="text-3Xl ">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "default")}
          onClick={() => setRecipes(false)}
        >
          Home
        </NavLink>

        {recipes && (
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              isActive ? "active ml-4" : "default ml-4"
            }
          >
           Chef Recipes
          </NavLink>
        ) }


        <NavLink
          to="/blog"
          className={({ isActive }) =>
            isActive ? "active ml-4" : "default ml-4"
          }
          onClick={() => setRecipes(false)}
        >
          Blog
        </NavLink>
      </div>

      {user ? (
        <div className="flex items-center  gap-2">
       
                {image && <img src={image} title={user?.displayName} className="rounded-full w-14 h-14"/>}
             
          <NavLink
            onClick={handleLogOut}
            className={({ isActive }) =>
              isActive ? "btn btn-info" : "default"
            }
          >
            Logout
          </NavLink>
        </div>
      ) : (
        <div className="">
          <NavLink to="/login">Login</NavLink>
        </div>
      )}
    </nav>
  );
};

export default NavigationBar;
