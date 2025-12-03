import { forwardRef, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createProduct,
  editProduct,
  removeProduct,
} from "./reducers/productSlice";
import "./styles.css";

const Product = (props) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state?.product?.list);
  const [product, setProduct] = useState({
    name: "",
    quantity: "",
  });

  const [editId, setEditId] = useState("");

  useEffect(() => {
    if (editId) {
      const editproduct = products.find((item) => item.id === editId);
      const { name, quantity } = editproduct;
      setProduct({ name, quantity });
    }
  }, [editId]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "productname") {
      setProduct({ name: value, quantity: product.quantity });
    } else if (name === "quantity") {
      setProduct({ name: product.name, quantity: value });
    }
  };

  const handleSubmit = (event, type) => {
    event.preventDefault();
    if (editId) {
      const updatedProduct = {
        id: editId,
        name: product.name,
        quantity: product.quantity,
      };
      dispatch(editProduct(updatedProduct));
      setEditId("");
      setProduct({ name: "", quantity: "" });
    } else {
      const newProduct = {
        id: Math.random(),
        name: product.name,
        quantity: product.quantity,
      };
      dispatch(createProduct(newProduct));
      setProduct({ name: "", quantity: "" });
    }
  };

  const handleDelete = (item) => {
    dispatch(removeProduct(item));
  };

  return (
    <div className="App">
      <h3>Product Details</h3>
      <form onSubmit={(event) => handleSubmit(event)}>
        <div className="row">
          <div className="m-2 text-left">
            <label className="m-2" htmlFor="productname">
              Product
            </label>
            <input
              ref={props.ref}
              onInput={handleChange}
              value={product.name}
              name="productname"
              type="text"
            />
          </div>
          <div className="m-2 text-left">
            <label className="m-2" htmlFor="quantity">
              Quantity
            </label>
            <input
              name="quantity"
              onInput={handleChange}
              type="text"
              value={product.quantity}
            />
          </div>
          <div style={{ alignContent: "center" }}>
            <button className="save-btn" type="submit">
              Save
            </button>
          </div>
        </div>
      </form>
      <ul className={editId ? "backdrop" : ""}>
        {products.map((item, id) => (
          <li key={item.id}>
            <div className="row" style={{ alignItems: "center" }}>
              <p className="productname">{item.name}</p>
              <p className="productname">{item.quantity}</p>
              <button
                onClick={() => setEditId(item.id)}
                className="save-btn m-2"
                type="submit"
              >
                Edit
              </button>
              <button
                onClick={() => {
                  handleDelete(item);
                }}
                className="delete-btn"
                type="submit"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Product;
