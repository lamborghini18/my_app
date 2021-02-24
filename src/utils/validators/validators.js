export const required = (value) => {
  if (!value) return "Field is required";
};

export const maxLenghtCreator = (maxLenght) => (value) =>
  value && value.length > maxLenght
    ? `Max lenght is ${maxLenght} symbols`
    : null;

export const emailRequired = (value) => {
  let pattern = /^([a-z0-9_\.-])+[@][a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
  if (!pattern.test(value)) {
    return "invalid email address";
  }
};
