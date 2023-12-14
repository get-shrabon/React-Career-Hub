const getStoredData = () => {
  const getData = localStorage.getItem("Applied_Data");
  if (getData) {
    return JSON.parse(getData);
  }
  return [];
};

const saveDataStored = (id) => {
  const saveData = getStoredData();
  const exist = saveData.find((jobId) => jobId === id);
  if (!exist) {
    saveData.push(id);
    localStorage.setItem("Applied_Data", JSON.stringify(saveData));
  }
};

export { getStoredData,saveDataStored };
