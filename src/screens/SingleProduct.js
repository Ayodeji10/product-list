import React from "react";
import { data } from "../constants/data";
import { useParams } from "react-router-dom";
import Product from "../components/product";

function SingleProduct() {
  const { id } = useParams();
  return (
    <div className="container home">
      <h1>
        Product {id}: {data[id - 1].product_name}
      </h1>
      {data
        .filter((p) => p.product_id == id)
        .map((product, i) => {
          return <Product data={product} key={i} />;
        })}
    </div>
  );
}

export default SingleProduct;
