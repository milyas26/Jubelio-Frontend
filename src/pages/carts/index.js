import { CartItem } from "components";
import React from "react";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import "./carts.scss";

const Carts = () => {
  const { carts } = useSelector((state) => state.cartsReducer);

  return (
    <>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Carts | Jubelio Test</title>
        <meta
          name='description'
          content='Fetch api menggunakan Elevenia open api, test project frontend jubelio'
        />
      </Helmet>
      <div className='bg-white cart-page'>
        <div className='container'>
          <h4 className='mb-3'>Keranjang</h4>
          <table className='table'>
            <thead>
              <tr>
                <th scope='col'>No</th>
                <th scope='col'>Product</th>
                <th scope='col'>Price</th>
                <th scope='col'>Quantity</th>
                <th scope='col'>Total</th>
                <th scope='col'>Act</th>
              </tr>
            </thead>
            <tbody>
              {carts.map((cart, i) => (
                <CartItem key={i} data={cart} i={i} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Carts;
