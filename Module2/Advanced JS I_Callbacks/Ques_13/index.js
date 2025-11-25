function countCategories(categories) {
  return categories.reduce((acc, category) => {
    if (acc[category]) {
      acc[category]++;
    } else {
      acc[category] = 1;
    }
    return acc;
  }, {});  
}

const input = ["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"];

console.log(countCategories(input));
