import React, { useState, useEffect } from "react";
import "../styles/styles.css";
import { orders, products, users } from "./Data.js";

export const User = ({ userId }) => {
  const user = users.filter((user) => user?.id === userId);
  return (
    <>
      <div>
        <h3> {user[0]?.name?.firstname + " " + user[0]?.name?.lastname}</h3>
        <ul>
          <li>{user[0]?.email}</li>
        </ul>
      </div>
    </>
  );
};

export const Product = ({ productId, quantity }) => {
  const singleProduct = products?.filter(
    (product) => product?.id === productId
  );

  return (
    <div>
      <ul>
        <h3>{singleProduct[0]?.title}</h3>
        <li>{singleProduct[0]?.price}</li>
        <li>{singleProduct[0]?.category}</li>
        <li>{quantity}</li>
      </ul>
    </div>
  );
};

const Order = () => {
  return (
    <>
      {orders &&
        orders.map((item) => {
          return (
            <>
              <User userId={item?.userId} />
              {item?.products.map((product) => (
                <Product
                  productId={product?.productId}
                  quantity={product?.quantity}
                />
              ))}
            </>
          );
        })}
    </>
  );
};

export default Order;
