'use server';

export async function shareMeal(fromData) {

  const mealData = {
    title: fromData.get("title"),
    description: fromData.get("description"),
    image: fromData.get("image"),
  };
  
  console.log('Meal shared:', mealData);
}