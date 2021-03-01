export const required = (value) => {
  if (!value) return "Field is required";
};

export const maxLengthCreator = (maxLength) => (value) =>
  value && value.length > maxLength
    ? `Max length is ${maxLength} symbols`
    : null;

export const emailRequired = (value) => {
  let pattern = /^([a-z0-9_\.-])+[@][a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
  if (!pattern.test(value)) {
    return "invalid email address";
  }
};
