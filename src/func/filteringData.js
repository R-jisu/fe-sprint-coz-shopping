const filteringData = ({ type, Data }) => {
  if (type === "All") return Data;
  else {
    const filterArr = Data.filter((el) => el.type === type);
    return filterArr;
  }
};

export default filteringData;
