import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    list: [
      {
        id: 0.19277816463563624,
        name: "Hamam",
        quantity: "14",
      },
      {
        id: 0.7030824898282884,
        name: "Cinthol",
        quantity: "8",
      },
      {
        id: 0.018371988273509277,
        name: "Dettol",
        quantity: "3",
      },
    ],
  },
  reducers: {
    createProduct: (state, action) => {
      console.log("action-create-product", action);
      state.list = [...state.list, action.payload];
    },
    editProduct: (state, action) => {
      console.log("action-edit-product", action);
      const { id, name, quantity } = action.payload;
      const newList = state.list.map((item) => {
        if (item.id === id) {
          item.name = name;
          item.quantity = quantity;
        }
        return item;
      });
      state.list = [...newList];
    },
    removeProduct: (state, action) => {
      console.log("action-remove-product", action);
      const { id } = action.payload;
      const newList = state.list.filter((item) => item.id !== id);
      state.list = [...newList];
    },
  },
});

export const { createProduct, editProduct, removeProduct } =
  productSlice.actions;
export default productSlice;
