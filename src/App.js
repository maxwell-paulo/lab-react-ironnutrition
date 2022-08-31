import foods from './foods.json';
import { FoodBox } from './components/FoodBox';
import { AddFoodForm } from './components/AddFoodForm';

function App() {
  return (
      <div>
        <AddFoodForm />

        {foods.map((currentFood) => {
          return (
            <FoodBox
              key={currentFood.name}
              food={{
                name: currentFood.name,
                calories: currentFood.calories,
                image: currentFood.image,
                servings: currentFood.servings,
              }}
            />
          );
        })}
      </div>
  )
}

export default App;
