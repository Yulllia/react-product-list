import ProductItem from "./ProductItem.js";
// import { FaAngleDoubleUp } from 'react-icons/fa'
import { useState } from "react";
function ProductList({ products, setProducts }) {
  const [quantity, setQuantity] = useState(true);
  console.log(products);
  function changeSort() {
    let arr = products.sort((a, b) => {
      console.log(quantity);
      return quantity ? a.count - b.count : b.count - a.count;
    });
    setProducts([...arr]);
    console.log(products);
    setQuantity(!quantity);
  }
  function deleteItem(id) {
    products.splice(id, 1);
    setProducts([...products]);
    console.log(id);
  }

  const [namesort, setNameSort] = useState(true);
  function sortByName() {
    let arr = products.sort((a, b) => {
      if (a.name < b.name) {
        return namesort ? -1 : 1;
      }
      if (a.name > b.name) {
        return namesort ? 1 : -1;
      }
      return 0;
    });

    setProducts([...arr]);
    setNameSort(!namesort);
  }
  const [descsort, setDescSort] = useState(true);
  function sortByDesc() {
    let arr = products.sort((a, b) => {
      if (a.description.length < b.description.length) {
        return descsort ? -1 : 1;
      }
      if (a.description.length > b.description.length) {
        return descsort ? 1 : -1;
      }
      return 0;
    });

    setProducts([...arr]);
    setDescSort(!descsort);
  }
  console.log(products);
  console.log(namesort);
  return (
    <div>
      <div className="heading">
        <div className="image">Image</div>
        <div onClick={sortByName} className="product_name">
          Product names
        </div>
        <div onClick={changeSort} className="quantity">
          Quantity
        </div>
        <div onClick={sortByDesc} className="description">
          Description
        </div>
      </div>

      {products.map((product, index) => (
        <ProductItem
          className="productname"
          id={index}
          key={index}
          product={product}
          onDelete={deleteItem}
        />
      ))}
    </div>
  );
}
export default ProductList;
