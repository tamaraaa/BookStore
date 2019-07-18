export const emailIsValid = email => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};
export const passwordIsValid = password => {
  return /^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{8,15}$/.test(password);
};
