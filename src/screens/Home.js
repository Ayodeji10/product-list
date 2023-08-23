import React from "react";
import { data } from "../constants/data";
import Product from "../components/product";

function Home() {
  console.log(data);
  return (
    <div className="container home">
      <h1>Product List</h1>
      <div className="row">
        {data.map((data, i) => {
          return <Product key={i} data={data} />;
        })}
      </div>
    </div>
  );
}

export default Home;
