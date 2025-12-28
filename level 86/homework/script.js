const items = {
  apple: 1,
  banana: 2,
  orange: 3
};

const formatted = Object.entries(items).map(([item, price]) => `${item}: $${price}`);

console.log(formatted);
