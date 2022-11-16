import './App.css';
import foodData from './foods.json';
import { useState } from 'react';
import React from 'react';
import FoodBox from './components/foodBox';

function App() {
  const [foods, setFood] = useState(foodData);
  return (
    <div key={foods.id}>
      {foods.map((food) => (
        <FoodBox
          title={food.title}
          calories={food.calories}
          image={food.image}
          servings={food.servings}
        />
      ))}
    </div>
  );
}

export default App;
