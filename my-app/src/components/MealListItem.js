// Deliverable 3: Add navigation to the application using the `Link`
// component

import { useState } from "react";

import { Link } from "react-router-dom";

const MealListItem = ({
  meal,
  enterMealEditModeFor,
  onDeleteMeal,
}) => {
  const { id, image, calories, title, protein, fat, carbs } = meal;

  const [likeCount, setLikeCount] = useState(0);

  const handleLike = () => setLikeCount(likeCount + 1);

  const handleEditClick = () => {
    enterMealEditModeFor(id);
  };

  const handleDeleteClick = () => {
    fetch(`http://localhost:4000/meals/${id}`, {
      method: "DELETE",
    });
        onDeleteMeal(meal)
      .then((resp) => console.log(resp))
      .then(onDeleteMeal(meal));
  };

  return (
    <li className="card">
      <Link to={`/meals/${id}`}>
        <figure className="image">
          <img src={image} alt={title} />
          <button onClick={handleLike} className="claps">
           ❤️ {likeCount}
          </button>
        </figure>
      </Link>
      <section className="details">
        <h2>{title}</h2>
        <h3>Calories: {calories}</h3>
        <p>Protein: {protein}</p>
        <p>Fat: {fat}</p>
        <p>Carbs: {carbs}</p>
      </section>

      <footer className="extra">
        
        <div className="manage">
          <Link to={`/meals/${id}/edit`}>
            <button type="button">
             ✏️
            </button>
          </Link>
          
          <button onClick={handleDeleteClick}>
            🗑
          </button>
        </div>
      </footer>
    </li>
  );
};

export default MealListItem;