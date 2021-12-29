import React from "react";
import { useState } from "react";
import AddProductItem from "./AddProductItem";
import Button from "./Button";

function Header({ title, products, setProducts }) {
  const [showAddProductItem, setShowAddProductItem] = useState(false);
  const onClick = () => {
    console.log("onclick");
  };

  return (
    <header className="header">
      <h1>
        {title}
        <Button
          onClick={onClick}
          color="orange"
          text="Add New Product"
          onClick={() => {
            setShowAddProductItem(true);
          }}
        />
        <AddProductItem
          showAddProductItem={showAddProductItem}
          setShowAddProductItem={setShowAddProductItem}
          products={products}
          setProducts={setProducts}
        />
      </h1>
    </header>
  );
}

export default Header;
