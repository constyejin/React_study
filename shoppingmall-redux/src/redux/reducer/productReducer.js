import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

let initialState = {
  productList: [],
  isLoading: false,
  error: null,
}

export const fetchProducts = createAsyncThunk(
  'product/fetchAll', 
  async (searchQuery, thunkapi) => {
    try {
      let url = `https://my-json-server.typicode.com/constyejin/React_study/products/?q=${searchQuery}`;
      let response = await fetch(url);
      return await response.json();
    } catch(error) {
      thunkapi.rejectWithValue(error.message);
    }
  }
);

// function productReducer(state = initialState, action) {
//   let {type, payload} = action;
//   switch(type) {
//     case 'GET_PRODUCT_SUCCESS':
//       return { ...state, productList: payload.data }
//     default :
//       return {...state}
//   }
// }

// export default productReducer;


const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    // getAllProducts(state, action) {
    //   state.productList = action.payload.data
    // }
  },
  // extraReducers: 외부로 부터 state가 바뀌는 경우 (비동기 케이스 주로 처리)
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(fetchProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.productList = action.payload;
    })
    .addCase(fetchProducts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    })
  }
})

export const productActions = productSlice.actions;
export default productSlice.reducer;
