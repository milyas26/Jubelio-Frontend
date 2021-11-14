import { CartItem } from "components";
import React from "react";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import "./carts.scss";

const Carts = () => {
  const { carts } = useSelector((state) => state.cartsReducer);

  // create anagram function
  const anagrams = ["kita", "atik", "tika", "aku", "kia", "makan", "kua"];
  const list = [];
  anagrams.forEach((anagram) => {
    let letters = anagram.split("");
    function bubbleSort(array) {
      var done = false;
      while (!done) {
        done = true;
        for (var i = 1; i < array.length; i += 1) {
          if (array[i - 1] > array[i]) {
            done = false;
            var tmp = array[i - 1];
            array[i - 1] = array[i];
            array[i] = tmp;
          }
        }
      }

      return array;
    }
    bubbleSort(letters);
    list[letters] ? list[letters].push(anagram) : (list[letters] = [anagram]);
  });

  const keys = Object.keys(list);
  let val2 = [];
  for (let val of keys) {
    val2.push(list[val]);
  }
  console.log("This Result Anagram", val2);

  return (
    <>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Carts | Jubelio Test</title>
        {/* <link rel='canonical' href='https://yearbook-apps.vercel.app/' /> */}
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
