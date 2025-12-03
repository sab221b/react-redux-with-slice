import { useEffect, useRef, useState } from "react";
import Product from "./Product";
import "./styles.css";

export default function App() {
  const productInputRef = useRef();
  useEffect(() => {
    productInputRef?.current?.focus();
  }, []);
  return <Product ref={productInputRef} />;
}
