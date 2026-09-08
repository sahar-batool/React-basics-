export function mockPrice(id) {
  let hash = 0;
  for (const char of String(id)) {
    hash = (hash * 31 + char.charCodeAt(0)) % 1000;
  }
  const price = 2 + (hash % 800) / 100; // between $2.00 and $9.99
  return price.toFixed(2);
}