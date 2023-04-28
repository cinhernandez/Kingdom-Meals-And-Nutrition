import { useState } from "react";
import { useHistory } from "react-router-dom";

const MealForm = ({ onAddMeal }) => {
  const [formData, setFormData] = useState({
    title: "",
    calories: "",
    protein: "",
    fat: "",
    carbs: "",
    image: "",
  });

  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({ ...formData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ ...formData, claps: 0 }),
    };

    fetch("http://localhost:4000/meals", configObj)
      .then((resp) => resp.json())
      .then((meal) => {
        onAddMeal(meal);
        history.push(`/meals/${meal.id}`);
      });
  };

  return (
    <section>
      <form className="form" autoComplete="off" onSubmit={handleSubmit}>
        <h3>Add New Meal & Nutrition</h3>

        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          onChange={handleChange}
          value={formData.title}
        />

        <label htmlFor="calories">Calories:</label>
        <input
          type="text"
          id="calories"
          name="calories"
          onChange={handleChange}
          value={formData.calories}
        />

        <label htmlFor="protein">Protein:</label>
        <input
          type="text"
          id="protein"
          name="protein"
          onChange={handleChange}
          value={formData.protein}
        />
        
        <label htmlFor="fat">Fat:</label>
        <input
          type="text"
          id="fat"
          name="fat"
          onChange={handleChange}
          value={formData.fat}
        />

        <label htmlFor="carbs">Carbs:</label>
        <input
          type="text"
          id="carbs"
          name="carbs"
          onChange={handleChange}
          value={formData.carbs}
        />

        <label htmlFor="image">Share your meal photo:</label>
        <input
          type="text"
          id="image"
          name="image"
          onChange={handleChange}
          value={formData.image}
        />

        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default MealForm;