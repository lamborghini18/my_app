export const required = (value) => {
  if (value) return undefined;
  return "Field is required";
};
export const maxLenghtCreator = (maxLenght) => (value) =>
  value && value.lenght > maxLenght
    ? `Max lenght is ${maxLenght} symbols`
    : undefined;
