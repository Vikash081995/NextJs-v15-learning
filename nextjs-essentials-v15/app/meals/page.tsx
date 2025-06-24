import classes from "./page.module.css";
import Link from "next/link";
import MealsGrid from '../../components/meals/meals-grid';

export default function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious Meals, created
          <span className={classes.highlight}>by</span>
        </h1>
        <p>
          choose your favorite meals from our broad selection of available meals
          and enjoy a delicious lunch or dinner at home. All our meals are
          cooked with high-quality ingredients, just-in-time and of course by
          experienced chefs!
        </p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share your favourite meal</Link>
        </p>
      </header>
      <main className={classes.meals}>
        <MealsGrid meals={[]}/ >
      </main>
    </>
  );
}
