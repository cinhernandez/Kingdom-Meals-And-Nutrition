import React, { useState } from 'react';



const MacroCalculator = () => {
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [activityLevel, setActivityLevel] = useState('');
  const [protein, setProtein] = useState('');
  const [carbs, setCarbs] = useState('');
  const [fat, setFat] = useState('');

  const proteinRatio = 0.3;
  const carbRatio = 0.4;
  const fatRatio = 0.3;
    
  //I need to fix the calculateMacros function to get the correct results
  //No styling has been added to this component yet
  function calculateMacros(e) {
    e.preventDefault();
    const heightInMeters = height * 0.0254;
    const weightInKilos = weight * 0.453592;
    const bmr = gender === 'male'
      ? (10 * weightInKilos) + (6.25 * (height * 2.54)) - (5 * age) + 5
      : (10 * weightInKilos) + (6.25 * (height * 2.54)) - (5 * age) - 161;

    const activityFactors = {
      sedentary: 1.2,
      lightlyActive: 1.375,
      moderatelyActive: 1.55,
      veryActive: 1.725,
      extraActive: 1.9,
    };
    const tdee = bmr * activityFactors[activityLevel];
    const proteinCalories = proteinRatio * tdee;
    const carbsCalories = carbRatio * tdee;
    const fatCalories = fatRatio * tdee;
    const proteinGrams = proteinCalories / 4;
    const carbsGrams = carbsCalories / 4;
    const fatGrams = fatCalories / 9;
    setProtein(proteinGrams.toFixed(0));
    setCarbs(carbsGrams.toFixed(0));
    setFat(fatGrams.toFixed(0));
  }
  

  
  return (
    <section>
    <form onSubmit={calculateMacros} className="form">
    <h3>Macro Calculator</h3>
    <label className="age">Age:</label>
        <input type="number" value={age} onChange={e => setAge(e.target.value)} />
    <label>Gender:</label>
    <select value={gender} onChange={e => setGender(e.target.value)}>
          <option value="male">Male</option>
          <option value="female">Female</option>
    </select>
      
    <label>Weight (in lbs): </label>
        <input type="number" value={weight} onChange={e => setWeight(e.target.value)} />
     
    <label>Height (in inches):</label>
        <input type="number" value={height} onChange={e => setHeight(e.target.value)} />
      
    <label>Activity Level:</label>
        <select value={activityLevel} onChange={e => setActivityLevel(e.target.value)}>
          <option value="sedentary">Sedentary</option>
          <option value="lightlyActive">Lightly Active</option>
          <option value="moderatelyActive">Moderately Active</option>
          <option value="veryActive">Very Active</option>
          <option value="extraActive">Extra Active</option>
        </select>

      <button type="submit">Calculate Macros</button>
      
      <label className="protein">Protein: {protein}g</label>
      <label className="carbs">Carbs: {carbs}g</label>
      <label className="fat">Fat: {fat}g</label>
    
    </form>
    </section>
  );
}

export default MacroCalculator;
