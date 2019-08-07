export const emailIsValid = email => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};
export const passwordIsValid = password => {
  return /^[A-Za-z]\w{5,14}$/.test(password);
};
export const isEmpty = obj => {
  return Object.getOwnPropertyNames(obj).length === 0;
};
