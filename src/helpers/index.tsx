export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function getFormattedDate(date: string) {
  const newDate = new Date(date);
  return newDate.toLocaleDateString();
}
