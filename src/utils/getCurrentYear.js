const getCurrentYear = () => {
  const today = new Date();
  const currentFullYear = today.getFullYear();
  return currentFullYear;
};

export default getCurrentYear;
