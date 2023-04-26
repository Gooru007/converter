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

function convertTime(date) {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Intl.DateTimeFormat("en-US", options).format(new Date(date));
}

export { getFullName, formatToCurrency, convertTime };
