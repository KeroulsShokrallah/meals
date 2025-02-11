import React, { useEffect, useState } from "react";
import styles from "./Meals.module.css";
import axios from "axios";
import { Await, Link } from "react-router-dom";

export default function Meals() {
  const [Categories, setCategories] = useState([]);
  const [SlectetCategory, setSlectetCategory] = useState("All");
  const [Meals, setMeals] = useState([]);

  let getAllcategories = async () => {
    let { data } = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/list.php?c=list`
    );
    // console.log(data.meals);

    setCategories(data.meals);
  };

  let getcategory = async (SlectetCategory) => {
    let { data } = await axios.get(
      `${
        SlectetCategory === "All"
          ? `https://www.themealdb.com/api/json/v1/1/search.php?s=`
          : `https://www.themealdb.com/api/json/v1/1/filter.php?c=${SlectetCategory}`
      }`
    );
    // console.log(data.meals);
    setMeals(data.meals);
  };

  useEffect(() => {
    getAllcategories();
  }, []);

  useEffect(() => {
    getcategory(SlectetCategory);
  }, [SlectetCategory]);

  return (
    <>
      <div>
        <h1 className="font-bold text-3xl pacifico-regular text-orange-primary py-10">
          Learn, Cook, Eat Your Food
        </h1>
        <ul className="flex flex-wrap gap-6 my-5 mb-24">
          <li
            className={`${SlectetCategory === "All" && styles.active} border-1 rounded-full px-4 py-1.5 cursor-pointer border-gray-300 text-gray-500`} 
            onClick={() => setSlectetCategory("All")}
          >
            All
          </li>
          {Categories?.map((category, index) => (
            <li
              className={`${SlectetCategory === category.strCategory && styles.active} border-1 rounded-full px-2.5 py-1.5 cursor-pointer border-gray-300 text-gray-500`}
              key={index}
              onClick={() => setSlectetCategory(category.strCategory)}
            >
              {category.strCategory}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap">
          {Meals?.map((meal) => (
            <div
              key={meal.idMeal}
              className="sm:w-full md:w-[50%] lg:w-[33.33%] xl:w-[25%] p-4 text-center"
            >
              <div className="item px-4 bg-white rounded-2xl relative h-[340px] my-7">
                <div className="absolute top-[-10%] ">
                  <img
                    className="w-[80%] rounded-full mx-auto  hover:rotate-360 duration-1000"
                    src={meal.strMealThumb} 
                    alt=""
                  />
                </div>
                <h2 className="pt-50 mb-4">{meal.strMeal}</h2>
             { meal.strArea?  <h3 className=" text-green-primary mb-5">
                  <i className="fa-solid fa-earth-americas text-green-primary me-2"></i>
                  {meal.strArea}
                </h3> :null}
                <Link to={`/mealdetails/${meal.idMeal}`} className="text-white bg-green-primary px-2 py-2 rounded-2xl">View Recipe</Link>
              </div>
            </div>  
          ))}
        </div>
      </div>
    </>
  );
}
