import FoodItem from "./FoodItem";

/* non-entity items
/ This is just to keep track but lots of items don't register on this scale like: 
/ - black coffee
/ - pickles
/ - mustard
*/

// legend: (calories, protien, fat, carbs)

// primitive items
const eggWhole = new FoodItem(70, 6, 5, 0);
const eggWhite = new FoodItem(18, 4, 0, 0);
const coffeeW1Milk = new FoodItem(22, 2, 1, 3); // 8 oz (large mug)
const ezekielBread = new FoodItem(80, 5, 0, 15);
const orangeJuice = new FoodItem(55, 1, 0, 13); // 4 oz (small glass)
const turkeySlice = new FoodItem(48, 6, 2, 1);
const sweetPotato = new FoodItem(90, 2, 0, 22); // serving size says 3/4th cup
const mayo = new FoodItem(110, 0, 12, 0); // 1 tbsp
const beefJerkey = new FoodItem(100, 13, 1, 10);
const chickenBurrito = new FoodItem(610, 27, 13, 82); // shouldn't eat this!
const ketoCereal = new FoodItem(220, 22, 10, 28); // 1 cup (hard in the carbs)

// complex (compound) items
const omelette = FoodItem.addList([
  [eggWhite, 3],
  [eggWhole, 1],
]);
const turkeySandwich = FoodItem.addList([
  [turkeySlice, 8],
  [ezekielBread, 2],
  [mayo, 1],
]);

// Any standard food item should only be calculated once
// Unless otherwise specified all solids = 1 serving, all liquids = 8 fl oz
const FOOD_DICT: { [key: string]: FoodItem } = {
  eggWhole,
  eggWhite,
  omelette,
  coffeeW1Milk,
  ezekielBread,
  orangeJuice,
  turkeySandwich,
  sweetPotato,
  beefJerkey,
  chickenBurrito,
  ketoCereal,
};

export default FOOD_DICT;
