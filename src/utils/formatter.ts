export function withZeroBefore(n: number) {
  if (n < 10) {
    return "00" + n;
  } else if (n < 100) {
    return "0" + n;
  }
  return n;
}

export function toRange01(value: number, min: number, max: number) {
  return (value - min) / (max - min);
}

export function capitalizeFirstLetter(text: string): string {
  const split = text.split("-");
  let result: string[] = [];
  split.forEach((str) => {
    result.push(str.charAt(0).toUpperCase() + str.slice(1));
  });
  return result.join(" ");
}
