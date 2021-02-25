export const getItems = () => {
  return new Promise(resolve => {
    setTimeout(function() {
      resolve(getItemsAPI());
    }, 500);
  });
};

export const addItem = name => {
  return new Promise(resolve => {
    setTimeout(function() {
      resolve(addItemAPI(name));
    }, 500);
  });
};

export const removeItem = id => {
  return new Promise(resolve => {
    setTimeout(function() {
      resolve(removeItemAPI(id));
    }, 500);
  });
};

export const getItemsAPI = () => {
  return JSON.parse(localStorage.getItem("items")) || [];
};

export const addItemAPI = name => {
  const list = JSON.parse(localStorage.getItem("items")) || [];
  let maxId = 0;

  for (var i = 0; i < list.length; i++) {
    if (list[i].id > maxId) {
      maxId = list[i].id;
    }
  }

  let item = {
    id: maxId + 1,
    name
  };

  let listAux = list.concat(item);
  localStorage.setItem("items", JSON.stringify(listAux));
  return listAux;
};

export const removeItemAPI = id => {
  let listAux = JSON.parse(localStorage.getItem("items")).filter(
    t => t.id !== id
  );
  localStorage.setItem("items", JSON.stringify(listAux));
  return listAux;
};
