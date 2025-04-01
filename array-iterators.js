let cities = ["Kansas City", "Chicago", "Columbia", "Austin", "Nashville"];
cities.forEach(city => {
    console.log(city.toUpperCase());
  });
  //Output: 
  // KANSAS CITY
  // CHICAGO
  // COLUMBIA
  // AUSTIN
  // NASHVILLE

  let numbers = [1, 2, 3, 4, 5];
  let squares = numbers.map(num => num * num);
  console.log(squares);
  // Output: [ 1, 4, 9, 16, 25 ]

  let scores = [85, 42, 90, 75, 30, 100];
  let highScores = scores.filter(score => score >= 80);
  console.log(highScores);
  // Output: [ 85, 90, 100 ]

  let favoriteFoods = ["Tacos", "Curry Chicken and Rice", "Spaghetti", "Sweet Potatoes", "French Toast"];
  let longFoodName = favoriteFoods.find(food => food.length > 4);
  let longFoodNameIndex = favoriteFoods.findIndex(food => food.length > 4);
  console.log(longFoodName);
  // Output: Tacos
  console.log(longFoodNameIndex);
  // Output: 0
  

