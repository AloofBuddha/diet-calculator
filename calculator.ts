import Meal from "./Meal";
import FOOD_DICT from "./foodDict";
import MacroCounter from "./MacroCounter";

const macroCounter = new MacroCounter();

const breakfast = new Meal("breakfast", [
  FOOD_DICT.coffeeW1Milk,
  FOOD_DICT.ketoCereal,
]);

const lunch = new Meal("lunch", [FOOD_DICT.turkeySandwich]);

const dinner = new Meal("dinner", []);

const snack = new Meal("snack", []);

const meals: Meal[] = [breakfast, lunch, dinner, snack];

macroCounter.addMeals(meals);
