import './App.css';
import foodData from './foods.json';
import { useState } from 'react';
import React from 'react';
import FoodBox from './components/foodBox';
import FoodForm from './components/AddFoodForm';

function App() {
  const [foods, setFoods] = useState(foodData);
  return (
    <div key={foods.id}>
      {foods.map((food) => (
        <FoodBox
          key={food.servings + food.name}
          title={food.name}
          calories={food.calories}
          image={food.image}
          servings={food.servings}
        />
      ))}
      <FoodForm foods={foods} setFoods={setFoods} />
    </div>
  );
}

export default App;
