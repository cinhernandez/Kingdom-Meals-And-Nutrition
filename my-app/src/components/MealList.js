import MealListItem from "./MealListItem";
import { useState } from "react";

const MealList = ({
  meals,
  enterMealEditModeFor,
  onDeleteMeal,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMeal, setSeletedMeal] = useState("default");

  


  const searchResults = meals.filter((meal) => {
    return meal.title.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const mealItems = searchResults.map((meal) => {
    return (
      <MealListItem
        key={meal.id}
        meal={meal}
        enterMealEditModeFor={enterMealEditModeFor}
        onDeleteMeal={onDeleteMeal}
      />
    );
  });

  
  const handleOnChange = (e) => setSearchQuery(e.target.value);

  
  const handleChange = (e) => {
    setSeletedMeal(e.target.value);
  }
  

  return (
    <section>
      <h2>Meal Option</h2>

      <div className="filter">
      <select value={selectedMeal} onChange={handleChange}>

        <option value="default">Select an option</option>
        <option value="option1" >High Protein</option>
        <option value="option2">Under 500 Calories</option>
        <option value="option3">Low Carb</option>
        </select>
      </div>
      <input type="text" placeholder="Search..." onChange={handleOnChange} />

      <ul className="cards">{mealItems}</ul>
    </section>
  )
  
};

export default MealList;