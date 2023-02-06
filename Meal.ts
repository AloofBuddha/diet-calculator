import FoodItem from "./FoodItem";

// Meal is just a name associated with a list of FoodItems and some helper functions

export default class Meal {
  label: string;
  foodItems: FoodItem[];

  constructor(label: string, foodItems: FoodItem[]) {
    this.label = label;
    this.foodItems = foodItems;
  }

  calculateMacros(): FoodItem {
    if (this.foodItems.length === 0) return new FoodItem();

    const counter = this.foodItems.reduce(
      (acc, item) => acc.add(item),
      new FoodItem()
    );

    console.log(`Meal '${this.label}' consisted of:`.padEnd(35), `${counter}`);

    return counter;
  }
}
