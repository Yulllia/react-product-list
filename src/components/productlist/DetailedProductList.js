import ProductItemDetail from "./ProductItemDetail.js";
import ProductItemComments from "./ProductItemComments.js";
import { useParams } from "react-router-dom";
import "./DetailedProductList.css";

function DetailedProductList({ products, setProducts }) {
  const { id } = useParams();
  const product = products.find((el) => el.id === id);
  console.log(product);
  function deleteComments(id) {
    product?.comments.splice(id, 1);
    setProducts([...products]);
  }

  return (
    <div>
      <h1>Details Pages</h1>
      <ProductItemDetail
        className="productname"
        id={id}
        key={products.id}
        product={product}
        products={products}
        setProducts={setProducts}
      />
      {product?.comments.map((comment, index) => (
        <ProductItemComments
          className="productname"
          id={index}
          key={index}
          comment={comment}
          onDelete={deleteComments}
        />
      ))}
    </div>
  );
}

export default DetailedProductList;
