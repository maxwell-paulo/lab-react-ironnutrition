import { useState } from 'react';

export function AddFoodForm() {
  const [form, setForm] = useState({
    name: '',
    calories: '',
    image: '',
    servings: '',
  });

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  return (
    <form>
      <label htmlFor="food-name">Name</label>
      <input id="food-name" type="text" onChange={handleChange} name="name" />

      <label htmlFor="food-image">Image</label>
      <input id="food-image" type="text" onChange={handleChange} name="image" />

      <label htmlFor="food-calories">Calories</label>
      <input
        id="food-calories"
        type="text"
        onChange={handleChange}
        name="calories"
      />

      <label htmlFor="food-servings">Servings</label>
      <input
        id="food-servings"
        type="text"
        onChange={handleChange}
        name="servings"
      />

      <button type="submit">Create</button>
    </form>
  );
}
