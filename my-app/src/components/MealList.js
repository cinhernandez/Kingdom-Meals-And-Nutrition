import MealListItem from "./MealListItem";
import { useState } from "react";

const MealList = ({
  meals,
  enterMealEditModeFor,
  onDeleteMeal,
}) => {
  const [searchQuery, setSearchQuery] = useState("");

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

  return (
    <section>
      <h2>Meals</h2>

      <div className="filter">
        <button type="button">All</button>
        <button type="button">High Protein Meals</button>
        <button type="button">Low Carbs</button>
        <button type="button">Under 800 Calories</button>
        <button type="button">Low Fat</button>
        <button type="button">Sweets</button>
      </div>
      <input type="text" placeholder="Search..." onChange={handleOnChange} />

      <ul className="cards">{mealItems}</ul>
    </section>
  );
};

export default MealList;