export const emailIsValid = email => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};
export const passwordIsValid = password => {
  return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(password);
};
export const isEmpty = obj => {
  return Object.getOwnPropertyNames(obj).length === 0;
};
