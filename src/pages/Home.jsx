import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import ChefCard from "./ChefCard";

const Home = () => {
  const chefData = useLoaderData();
  return (
    <div>
      <section className=" w-full flex justify-evenly items-center gap-5" >
    <img src="https://www.chefspencil.com/wp-content/uploads/Top-25-most-popular-foods-in-Bangladesh.jpg" alt="" className=" h-52 lg:h-96
    " />

    <h1 className="text-3xl font-bold"><span className="text-blue-300">Bangladesh Is A Land of Beauty</span>
    <br /> 
    <span className="text-gray-300">People Loved To Eat </span>
    <br />
    <span className="text-blue-300">Various Type </span> <span className="text-gray-300">Of Delicious Food</span>.</h1>
      </section>
      
      {chefData ? (
        <>
          <section className="mx-10 sm:mx-15 md:mx-20 lg:mx-32 mt-10 mb-9  rounded-md">
            <h2 className="text-gray-500 text-center text-3xl pt-6 font-extrabold">
              Bangladeshi popu
              <span className="text-gray-400">
                lar chef and they are Recipes
              </span>
            </h2>

            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-9  pb-10">
              {chefData.map(chef => (
                <ChefCard key={chef._id} chef={chef}></ChefCard>
              ))}
            </div>
          </section>

          <section className="rounded-lg border my-10 p-8">
            <h1 className="text-2xl text-center text-gray-600 font-extralight my-5">
              Bangladeshi Food Culture
            </h1>
            <p className="text-base text-center text-gray-400">
              Bangladeshi food culture is rich, diverse, and influenced by
              various factors such as geography, climate, religion, and history.
              The cuisine is characterized by its use of spices, herbs, and
              aromatic ingredients that add depth and flavor to the dishes. Rice
              is a staple food in Bangladesh and is usually served with various
              curries, vegetables, and lentils...
              <span>
                <label htmlFor="my-modal-3" className="btn btn-xs">
                  red more
                </label>
              </span>
            </p>

            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
              <div className="modal-box relative">
                <label
                  htmlFor="my-modal-3"
                  className="btn btn-sm btn-circle absolute right-2 top-2"
                >
                  ✕
                </label>
                <h1 className="text-2xl text-center text-gray-600 font-extralight my-5">
                  Bangladeshi Food Culture
                </h1>
                <p className="py-4">
                  Bangladeshi food culture is rich, diverse, and influenced by
                  various factors such as geography, climate, religion, and
                  history. The cuisine is characterized by its use of spices,
                  herbs, and aromatic ingredients that add depth and flavor to
                  the dishes. Rice is a staple food in Bangladesh and is usually
                  served with various curries, vegetables, and lentils. In
                  Bangladesh, there are different types of cuisine based on
                  regional variations. In the northern part of the country,
                  dishes are influenced by Mughal cuisine, which is known for
                  its rich and creamy gravies. In the south, there is a strong
                  influence of seafood and coconut in dishes. Some of the
                  popular dishes in Bangladesh include biryani, a flavorful rice
                  dish made with spices, meat, and vegetables, and pitha, a type
                  of sweet or savory cake made with rice flour, coconut, and
                  jaggery. Other popular dishes include dal (lentil soup), fish
                  curry, chotpoti (a spicy snack made with chickpeas), and
                  shondesh (a sweet made from cottage cheese). Bangladesh also
                  has a vibrant street food culture, with various snacks and
                  quick bites available on the streets. Some popular street
                  foods include fuchka, a type of crispy, hollow puri filled
                  with a spicy mixture of chickpeas and potatoes, and jhal muri,
                  a spicy snack made with puffed rice, vegetables, and various
                  spices. In addition to the diverse range of dishes,
                  Bangladeshi food culture is also known for its hospitality and
                  generosity. It is common to see large family gatherings and
                  feasts during festivals and special occasions, where guests
                  are served a variety of dishes and treated with warmth and
                  respect. Overall, Bangladeshi food culture is a reflection of
                  the country's rich history, geography, and diverse
                  communities, and continues to evolve and adapt with changing
                  times while retaining its unique identity.
                </p>
              </div>
            </div>
          </section>
        </>
      ) : (
        <progress className="progress w-56"></progress>
      )}
    </div>
  );
};

export default Home;
