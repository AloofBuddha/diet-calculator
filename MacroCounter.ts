import FoodItem from "./FoodItem";
import Meal from "./Meal";

// use defaults if not explicitly provided
const DEFAULT_DAILY_MACROS = new FoodItem(1554, 149, 52, 133);

export default class MacroCounter {
  counter: FoodItem;

  constructor() {
    this.counter = DEFAULT_DAILY_MACROS;

    console.log(
      "Total macro goals for the day are:".padEnd(35),
      `${this.counter}`
    );
  }

  addMeals(meals: Meal[]) {
    this.counter = meals.reduce(
      (acc, meal) => acc.subtract(meal.calculateMacros()),
      this.counter
    );
    this.report();
  }

  report() {
    console.log("Macros left for today are:".padEnd(35), `${this.counter}`);
    console.log(
      "Today's total macros are:".padEnd(35),
      `${DEFAULT_DAILY_MACROS.add(this.counter.negate())}`
    );
  }
}
