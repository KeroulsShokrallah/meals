import React, { useEffect, useState } from "react";
import styles from "./Mealdetails.module.css";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export default function Mealdetails() {
  let { id } = useParams();
  const [Mealdetails, setMealdetails] = useState([]);
  //  console.log(id);

  let getMealdetails = async (id) => {
    let { data } = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    console.log(data.meals);
    setMealdetails(data.meals);
  };

  useEffect(() => {
    getMealdetails(id);
  }, []);

  return (
    <>
      <div></div>

      {Mealdetails ? (
        Mealdetails.map((meal) => (
          <div key={id}>
            <h1 className="font-black pt-6 text-5xl pacifico-regular mb-14">
              {meal.strMeal}
            </h1>
            <div className=" sm:flex-none   lg:flex flex-row gap-x-3">
              <div className="basis-1/3">
                <img
                  className="w-full rounded-2xl mt-3"
                  src={meal.strMealThumb}
                  alt="mealphoto"
                />
                <ul className="justify-center items-center flex gap-3 mt-3 mb-5">
                  <li className="bg-red-700 cursor-pointer text-white text-[16px] w-fit rounded-2xl px-4 py-2 mt-2">
                    <i className="fa-brands fa-youtube text-white me-2"></i>
                    <Link target="_blank" to={meal.strYoutube}>
                      Youtube
                    </Link>
                  </li>
                 <li className="bg-green-primary cursor-pointer text-white text-[16px] w-fit rounded-2xl px-4 py-2 mt-2">
                    <i className="fa-solid fa-globe text-white me-2"></i>
                    <Link target="_blank" to={meal.strSource}>
                      source
                    </Link> 
                  </li>
              
                </ul>
              </div>
              <div className="basis-1/3">
                <p className="pt-10 mb-20">{meal.strInstructions}</p>
              </div>
              <div className="basis-1/3 bg-white h-fit py-3 rounded-2xl  px-5 ">
                <h1 className="border-b-4 mb-1  border-gray-300 font-bold">Ingredients</h1>
               

                {meal.strIngredient1 ? (
                  <div className="flex justify-between border-b-2 border-gray-300">
                    <p className="mb-1 mt-4">{meal.strIngredient1}</p>
                    <p className="mb-1 mt-4">{meal.strMeasure1}</p>
                  </div>
                  
                ) : null}
                {meal.strIngredient2 ? (
                  <div className="flex justify-between border-b-2 border-gray-300">
                    <p className="mb-1 mt-4">{meal.strIngredient2}</p>
                    <p className="mb-1 mt-4">{meal.strMeasure2}</p>
                  </div>
                  
                ) : null}
                {meal.strIngredient3 ? (
                  <div className="flex justify-between border-b-2 border-gray-300">
                    <p className="mb-1 mt-4">{meal.strIngredient3}</p>
                    <p className="mb-1 mt-4">{meal.strMeasure3}</p>
                  </div>
                
                ) : null}
                {meal.strIngredient4 ? (
                  <div className="flex justify-between border-b-2 border-gray-300">
                    <p className="mb-1 mt-4">{meal.strIngredient4}</p>
                    <p className="mb-1 mt-4">{meal.strMeasure4}</p>
                  </div>
                  
                ) : null}
                {meal.strIngredient5 ? (
                  <div className="flex justify-between border-b-2 border-gray-300">
                    <p className="mb-1 mt-4">{meal.strIngredient5}</p>
                    <p className="mb-1 mt-4">{meal.strMeasure5}</p>
                  </div>
                  
                ) : null}
                {meal.strIngredient6 ? (
                  <div className="flex justify-between border-b-2 border-gray-300">
                    <p className="mb-1 mt-4">{meal.strIngredient6}</p>
                    <p className="mb-1 mt-4">{meal.strMeasure6}</p>
                  </div>
                  
                ) : null}
                {meal.strIngredient7 ? (
                  <div className="flex justify-between border-b-2 border-gray-300">
                    <p className="mb-1 mt-4">{meal.strIngredient7}</p>
                    <p className="mb-1 mt-4">{meal.strMeasure7}</p>
                  </div>
                  
                ) : null}
                {meal.strIngredient8 ? (
                  <div className="flex justify-between border-b-2 border-gray-300">
                    <p className="mb-1 mt-4">{meal.strIngredient8}</p>
                    <p className="mb-1 mt-4">{meal.strMeasure8}</p>
                  </div>
                  
                ) : null}
                {meal.strIngredient9 ? (
                  <div className="flex justify-between border-b-2 border-gray-300">
                    <p className="mb-1 mt-4">{meal.strIngredient9}</p>
                    <p className="mb-1 mt-4">{meal.strMeasure9}</p>
                  </div>
                  
                ) : null}
                {meal.strIngredient10 ? (
                  <div className="flex justify-between border-b-2 border-gray-300">
                    <p className="mb-1 mt-4">{meal.strIngredient10}</p>
                    <p className="mb-1 mt-4">{meal.strMeasure10}</p>
                  </div>
                  
                ) : null}
                {meal.strIngredient11 ? (
                  <div className="flex justify-between border-b-2 border-gray-300">
                    <p className="mb-1 mt-4">{meal.strIngredient11}</p>
                    <p className="mb-1 mt-4">{meal.strMeasure11}</p>
                  </div>
                  
                ) : null}
                {meal.strIngredient12 ? (
                  <div className="flex justify-between border-b-2 border-gray-300">
                    <p className="mb-1 mt-4">{meal.strIngredient12}</p>
                    <p className="mb-1 mt-4">{meal.strMeasure12}</p>
                  </div>
                  
                ) : null}
                {meal.strIngredient13 ? (
                  <div className="flex justify-between border-b-2 border-gray-300">
                    <p className="mb-1 mt-4">{meal.strIngredient13}</p>
                    <p className="mb-1 mt-4">{meal.strMeasure13}</p>
                  </div>
                  
                ) : null}
                {meal.strIngredient14 ? (
                  <div className="flex justify-between border-b-2 border-gray-300">
                    <p className="mb-1 mt-4">{meal.strIngredient14}</p>
                    <p className="mb-1 mt-4">{meal.strMeasure14}</p>
                  </div>
                  
                ) : null}
                {meal.strIngredient15 ? (
                  <div className="flex justify-between border-b-2 border-gray-300">
                    <p className="mb-1 mt-4">{meal.strIngredient15}</p>
                    <p className="mb-1 mt-4">{meal.strMeasure15}</p>
                  </div>
                  
                ) : null}
                {meal.strIngredient16 ? (
                  <div className="flex justify-between border-b-2 border-gray-300">
                    <p className="mb-1 mt-4">{meal.strIngredient16}</p>
                    <p className="mb-1 mt-4">{meal.strMeasure16}</p>
                  </div>
                  
                ) : null}
                {meal.strIngredient17 ? (
                  <div className="flex justify-between border-b-2 border-gray-300">
                    <p className="mb-1 mt-4">{meal.strIngredient17}</p>
                    <p className="mb-1 mt-4">{meal.strMeasure17}</p>
                  </div>
                  
                ) : null}
                {meal.strIngredient18 ? (
                  <div className="flex justify-between border-b-2 border-gray-300">
                    <p className="mb-1 mt-4">{meal.strIngredient18}</p>
                    <p className="mb-1 mt-4">{meal.strMeasure18}</p>
                  </div>
                  
                ) : null}
                {meal.strIngredient19 ? (
                  <div className="flex justify-between border-b-2 border-gray-300">
                    <p className="mb-1 mt-4">{meal.strIngredient19}</p>
                    <p className="mb-1 mt-4">{meal.strMeasure19}</p>
                  </div>
                  
                ) : null}
                {meal.strIngredient20 ? (
                  <div className="flex justify-between border-b-2 border-gray-300">
                    <p className="mb-1 mt-4">{meal.strIngredient20}</p>
                    <p className="mb-1 mt-4">{meal.strMeasure20}</p>
                  </div>
                  
                ) : null}
              </div>
            </div>
          </div>
        ))
      ) : (
        <h1>No data to show</h1>
      )}
    </>
  );
}
