import { useState, useEffect } from "react";

import Header from "./components/Header";
import MealForm from "./components/MealForm";
import MealList from "./components/MealList";
import MealEditForm from "./components/MealEditForm";
import MealDetail from "./components/MealDetail";
import Home from "./components/Home";
import MacroCalculator from "./components/MacroCalculator";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { Switch, Route } from "react-router-dom";
import {Parallax, ParallaxLayer} from '@react-spring/parallax'
import {useRef} from 'react'

const App = () => {
  const ref= useRef(null)
  const [meals, setMeals] = useState([]);
  

  useEffect(() => {
    fetch("http://localhost:4000/meals")
      .then((resp) => resp.json())
      .then((meals) => setMeals(meals));
  }, []);


  const onAddMeal = (newMeal) => {
    setMeals((meals) => [...meals, newMeal]);
  };

  const onUpdateMeal = (updatedMeal) => {
    const updatedMeals = meals.map((ogMeal) => {
      if (ogMeal.id === updatedMeal.id) {
        return updatedMeal;
      } else {
        return ogMeal;
      }
    });
    setMeals(updatedMeals);
  };

  const onDeleteMeal = (deletedMeal) => {
    const updatedMeals = meals.filter(
      (meal) => meal.id !== deletedMeal.id
    );
    setMeals(updatedMeals);
  };

  return (
    <div >
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
          <Parallax pages={3} ref={ref}>
          <ParallaxLayer 
          offset={0}
          speed={1}
          factor={2}
          onClick={() => this.parallax.scrollTo(3)}
          style={{
            backgroundImage: 'url(/images/ingredients.jpg)',
            backgroundSize: 'cover',
          }}>
          
          </ParallaxLayer>
          <ParallaxLayer 
          sticky={{start: 0, end: 2.5}}
          offset={0.2}
          speed={0.05}>
          <img src="/images/Kingdom-logo.png" alt= "Header" />
          </ParallaxLayer>

          <ParallaxLayer 
          offset={1} 
          speed={0.5}
          factor={4}
          onClick={() => this.parallax.scrollTo(0)}
          style={{
            backgroundImage: 'url(/images/Bowl.jpg)',
            backgroundSize: 'cover',
          }}>   
          </ParallaxLayer>
        </Parallax>
        </Route>
        <Route exact path="/meals">
          <MealList meals={meals} onDeleteMeal={onDeleteMeal} />
        </Route>
        <Route exact path="/meals/:id/edit">
          <MealEditForm onUpdateMeal={onUpdateMeal} />
        </Route>
        <Route path="/meals/new">
          <MealForm onAddMeal={onAddMeal} />
        </Route>
        <Route path="/meals/:id">
          <MealDetail />
        </Route>
        <Route path="/calculator">
          <MacroCalculator />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>

      </Switch>
    </div>
  );
};

export default App;