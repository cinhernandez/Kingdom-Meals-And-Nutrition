import React, { useState, useEffect } from "react";

import { useParams, useHistory } from "react-router-dom";

const MealEditForm = ({ onUpdateProject }) => {
  const [formData, setFormData] = useState({
    title: "",
    calories: "",
    protein: "",
    fat: "",
    carbs: "",
    image: "",
  });

  const { id } = useParams();

  const history = useHistory();

  const { title, calories, protein, fat, carbs, image } = formData;

  useEffect(() => {
    fetch(`http://localhost:4000/meals/${id}`)
      .then((res) => res.json())
      .then((meal) => setFormData(meal));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const configObj = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    };

    fetch(`http://localhost:4000/meals/${id}`, configObj)
      .then((resp) => resp.json())
      .then((updatedMeal) => {
        onUpdateProject(updatedMeal);
        history.push(`/meals/${id}`);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="form" autoComplete="off">
      <h3>Edit Meal</h3>

      <label htmlFor="title">Title:</label>
      <input
        type="text"
        id="title"
        name="title"
        value={title}
        onChange={handleChange}
      />

      <label htmlFor="calories">Calories:</label>
      <input 
        type="text"
        id="calories" 
        name="calories" 
        value={calories} 
        onChange={handleChange} />

      <label htmlFor="protein">Protein:</label>
      <input 
        type="text"
        name="protein" 
        id="protein" 
        value={protein} 
        onChange={handleChange} />
        

      <label htmlFor="fat">Fat:</label>
      <input
        type="text"
        id="fat"
        name="fat"
        value={fat}
        onChange={handleChange}
      />
      <label htmlFor="carbs">Carbs:</label>
      <input
        type="text"
        id="carbs"
        name="carbs"
        value={carbs}
        onChange={handleChange}
      />

      <label htmlFor="image">Share your meal photo</label>
      <input
        type="text"
        id="image"
        name="image"
        value={image}
        onChange={handleChange}
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default MealEditForm;