export function getFormattedDate(date: string) {
  const newDate = new Date(date);
  return newDate.toLocaleDateString();
}

export const validateEmail = (email: string) => {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
};
