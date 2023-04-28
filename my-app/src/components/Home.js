import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

const Home = () => {
  const [recentMeals, setRecentMeals] = useState([]);

  useEffect(() => {
    // fetch the 3 most recently added projects from json-server
    fetch("http://localhost:4000/meals?_sort=id&_order=desc&_limit=3")
      .then((r) => r.json())
      .then((recentMeals) => {
        setRecentMeals(recentMeals);
      });
  }, []);

  return (
    <section className= "">
     
      {recentMeals.map((meal) => (
        <p key={meal.id}>{meal.name}</p>
      ))}
      <div>
        <Link className="button" to="/meals">
          View All Meals
        </Link>
      </div>
    </section>
  );
};

export default Home;