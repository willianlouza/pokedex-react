export function zeroBefore(n: number) {
  if (n < 10) {
    return "00" + n;
  } else if (n < 100) {
    return "0" + n;
  }
  return n;
}

export function clamp(value: number, min: number, max: number) {
  return (value - min) / (max - min);
}

export function capitalize(s: string): string {
  const split = s.split("-");
  let aux: string[] = [];
  split.forEach((str) => {
    aux.push(str.charAt(0).toUpperCase() + str.slice(1));
  });
  return aux.join(" ");
}
