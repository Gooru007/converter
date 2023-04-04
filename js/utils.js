function getFullName(code, codes) {
  const [, name] = codes.find((item) => item.includes(code));
  return name;
}
function formatToCurrency(code, amount) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: code,
    maximumFractionDigits: 2,
  }).format(amount);
}

export { getFullName, formatToCurrency };
