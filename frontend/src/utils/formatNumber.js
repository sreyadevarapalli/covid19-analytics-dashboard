function formatNumber(value) {
  if (value === undefined || value === null) {
    return "0";
  }

  const number = Number(value);

  if (Number.isNaN(number)) {
    return "0";
  }

  return number.toLocaleString("en-US");
}

export { formatNumber };