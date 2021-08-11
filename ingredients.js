const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:

console.log("While..loop - Ingredients:");
let i = 0;
while (i < ingredients.length) {
  console.log(ingredients[i]);
  i++;
}

// Write a for loop that prints out the contents of ingredients:

console.log("For..loop - Ingredients:")
for (let i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:
console.log("Reversed - Ingredients:")
//const reversed = ingredients.reverse();
for (let i = ingredients.length - 1; i >= 0; i--) {
  console.log(ingredients[i]);
}
// test
// const reversed = array1.reverse();
// console.log('reversed:', reversed);
// expected output: "reversed:" Array ["three", "two", "one"]