import sql from 'better-sqlite3';

const db = sql('meals.db');

export async function getMeals() {
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate a delay for demonstration purposes
    const meals = db.prepare('SELECT * FROM meals').all();
    return meals.map(meal => ({
        ...meal,
        image: meal.image || '/images/default.jpg', // Fallback image if none provided
    }));
    }

    export async function getMealbySlug(slug){
        return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
    }