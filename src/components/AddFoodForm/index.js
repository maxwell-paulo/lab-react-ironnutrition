import { useState } from 'react';

export function AddFoodForm(props) {
  const [form, setForm] = useState({
    name: '',
    image: '',
    calories: 0,
    servings: 0,
  });
  function handleChange(event) {
    setForm({ form, [event.target.name]: event.target.value });
  }

  function handleAddFoods(event) {
    event.preventDefault();
    props.attList([form, ...props.attFood]);
  }

  return (
    <form>
      <label htmlFor="food-name">Name</label>
      <input
        id="food-name"
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
      />

      <label htmlFor="food-image">Image</label>
      <input
        id="food-image"
        type="text"
        name="image"
        value={form.image}
        onChange={handleChange}
      />

      <label htmlFor="food-calories">Calories</label>
      <input
        id="food-calories"
        type="number"
        name="calories"
        value={form.calories}
        onChange={handleChange}
      />

      <label htmlFor="food-servings">Servings</label>
      <input
        id="food-servings"
        type="number"
        name="servings"
        value={form.servings}
        onChange={handleChange}
      />

      <button onClick={handleAddFoods}>Create</button>
    </form>
  );
}
