import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

const MealDetail = () => {
  const [like, setLike] = useState(0);
  const [meal, setMeal] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:4000/meals/${id}`)
      .then((r) => r.json())
      .then((meal) => {
        setMeal(meal);
      });
  }, [id]);

  if (!meal) {
    return <div>Loading...</div>;
  }

  const { image, title, calories, protein, fat, carbs } = meal;

  const handleLikeClick = () => {
    setLike((like) => like + 1);
  };

  return (
    <section>
      <div className="project-detail box">
        <div className="project-image">
          <img src={image} alt={title} />
          <button className="claps" onClick={handleLikeClick}>
            ❤️ {like}
          </button>
        </div>
        <div className="details">
        <h2>{title}</h2>
        <h3>Calories: {calories}</h3>
        <p>Protein:{protein}</p>
        <p>Fat: {fat}</p>
        <p>Carbs: {carbs}</p>
          <div className="extra">
            <span className="badge blue">Phase </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MealDetail;