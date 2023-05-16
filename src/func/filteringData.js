const filteringData = ({ type, data }) => {
  if (type === "All") return data;
  else {
    const filterArr = data.filter((el) => el.type === type);
    return filterArr;
  }
};

export default filteringData;
