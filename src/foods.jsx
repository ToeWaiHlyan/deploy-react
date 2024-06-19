import { useState,useEffect } from "react";

function Food()
{
    const [foods , setFoods] = useState([]);
    const [foodsDetails , setFoodsDetails] = useState([]);

    const controller = new AbortController();

    useEffect(()=>
    {
        const searchBtn = document.querySelector('.search-btn');
        searchBtn.addEventListener('click',fetchData);

        async function fetchData()
        {
            const jsInput = document.querySelector('.js-input').value.trim();
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${jsInput}`);
            if (!response.ok)
            {
                throw new error ('Can not fetch data');
            }
            const data = await response.json();
            setFoods(data.meals);
        }

        fetchData();

        return() =>
        {
            controller.abort();
        }
    },[]);


    async function getMealRecipe(idMeal)
    {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`);
        if(!response.ok)
        {
            throw new error('Can not fetch data');
        }
        const data = await response.json();
        setFoodsDetails(data.meals)
        const mealDetails = document.querySelector('.meal-details');
        mealDetails.classList.remove('close-recipe');
    };

    function closeRecipe()
    {
        const mealDetails = document.querySelector('.meal-details')
        mealDetails.classList.add('close-recipe');
    }


    return(
    <>
    {foods.map((foodItems)=>

        <div className="meal-container" key={foodItems.idMeal}>
            <div className="meal-img">
                <img src={foodItems.strMealThumb} alt="food"/>
            </div>
            <div className="meal-name">
                <h3>{foodItems.strMeal}</h3>
                <button href="#" className="recipe-btn" onClick={()=>getMealRecipe(foodItems.idMeal)}>Get Recipe</button>
            </div>
        </div>
    )}

    {foodsDetails && foodsDetails.map((foodsItemsDetails)=>
        <div className="meal-details" key={foodsItemsDetails.idMeal}>
            <button className="recipe-close-btn" onClick={closeRecipe}>
                <img src="close-icon.png" className="close-icon"/>
            </button>
            <div className="meal-details-container" key={foodsItemsDetails.idMeal}>
                <h2>{foodsItemsDetails.strMeal}</h2>
                <p className="recipe-category">{foodsItemsDetails.strCategory}</p>
                <div className="recipe-instruct">
                <h3>Instructions</h3>
                <p>{foodsItemsDetails.strInstructions}</p>
                </div>
                <div className="recipe-meal-img">
                <img src={foodsItemsDetails.strMealThumb} alt="foods"/>
                </div>
                <div className="recipe-link">
                <a href={foodsItemsDetails.strYoutube} target="_blank">Watch Video</a>
                </div>
            </div>
        </div>
    )}
    </>)
}

export default Food;