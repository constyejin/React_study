function getProducts(searchQuery) {
  return async (dispatch, getState) => {
    let url = `https://my-json-server.typicode.com/constyejin/React_study/products/?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    // setProductList(data);
    console.log(data)
  };
}

export const productAction = { getProducts };
