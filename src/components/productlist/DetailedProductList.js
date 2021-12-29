import NewProductItemDetail from "./NewProductItemDetail.js";

function DetailedProductList({ products, setProducts }) {
  return (
    <div>
      <h1>Details Pages</h1>
      <div className="heading">
        <div className="image">Image</div>
        <div className="description">Description</div>
        <div className="description">Count</div>
        <div className="quantity">Width</div>
        <div className="quantity">Height</div>
        <div className="quantity">Weight</div>
      </div>
      {products.map((item, index) => (
        <NewProductItemDetail
          className="productname"
          id={index}
          key={index}
          product={item}
        />
      ))}
    </div>
  );
}

export default DetailedProductList;
