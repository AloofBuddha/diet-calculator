// FoodItem describes a class that represents a single item of food by nutritional value
// Constructor defaults are all set to zero as FoodItem doubles as a container/counter for these values
// add/subtract/multiply helper functions allow one to do basic arithmetic on FoodItems (immutably) which are helpful in creating Meals
// a helpful toString function is included for displaying what an item's nutrition info consists of

export default class FoodItem {
  calories: number;
  protien: number;
  fat: number;
  carbs: number;

  constructor(calories = 0, protien = 0, fat = 0, carbs = 0) {
    this.calories = calories;
    this.protien = protien;
    this.fat = fat;
    this.carbs = carbs;
  }

  // add two food items together, returning a new FoodItem
  add(item: FoodItem): FoodItem {
    const calories = this.calories + item.calories;
    const protien = this.protien + item.protien;
    const fat = this.fat + item.fat;
    const carbs = this.carbs + item.carbs;

    return new FoodItem(calories, protien, fat, carbs);
  }

  // subtract one food item from another, returning a new FoodItem
  subtract(item: FoodItem): FoodItem {
    const calories = this.calories - item.calories;
    const protien = this.protien - item.protien;
    const fat = this.fat - item.fat;
    const carbs = this.carbs - item.carbs;

    return new FoodItem(calories, protien, fat, carbs);
  }

  // multiply a food item by a value, useful for claculating the nutritional content of multiple of a FoodItem (return new FoodItem)
  multiply(amount: number): FoodItem {
    const calories = this.calories * amount;
    const protien = this.protien * amount;
    const fat = this.fat * amount;
    const carbs = this.carbs * amount;

    return new FoodItem(calories, protien, fat, carbs);
  }

  // needed for calculating deficit
  negate(): FoodItem {
    const calories = -this.calories;
    const protien = -this.protien;
    const fat = -this.fat;
    const carbs = -this.carbs;

    return new FoodItem(calories, protien, fat, carbs);
  }

  static addList(items: [FoodItem, number][]) {
    return items.reduce(
      (acc, [item, amount]) => acc.add(item.multiply(amount)),
      new FoodItem()
    );
  }

  // padding is for nicely lined up values when printing
  toString() {
    return (
      "{ calories: " +
      `${this.calories}, `.padStart(6) +
      "protien: " +
      `${this.protien}, `.padStart(5) +
      "fat: " +
      `${this.fat}, `.padStart(4) +
      "carbs: " +
      `${this.carbs} `.padStart(4) +
      "}"
    );
  }
}
