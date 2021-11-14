import React from "react";
import "./cart-item.scss";
import { numberWithCommas } from "config/function/numberFormatter";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";

const CartItem = ({ data, i }) => {
  const dispatch = useDispatch();
  return (
    <tr className='cart-item'>
      <td width={10}>{i + 1}</td>
      <td width={300}>
        <div className='d-flex product'>
          <img src={data?.prdImage01} alt='img' />
          <h5 className='card-title'>{data?.prdNm}</h5>
        </div>
      </td>
      <td width={50}>
        Rp
        {numberWithCommas(data?.dscAmt == 0 ? data.selPrc : data.dscAmt)}
      </td>
      <td width={20}>
        <div class='input-group mb-3'>
          <div class='input-group-prepend'>
            <span
              class='input-group-text h-100'
              onClick={() => {
                dispatch({ type: "MINUS_QUANTITY", payload: data });
              }}>
              <FaMinus />
            </span>
          </div>
          <input
            type='text'
            class='form-control text-center'
            value={data.quantity}
          />
          <div class='input-group-append'>
            <span
              class='input-group-text h-100'
              onClick={() => {
                dispatch({ type: "PLUS_QUANTITY", payload: data });
              }}>
              <FaPlus />
            </span>
          </div>
        </div>
      </td>
      <td width={50}>
        Rp
        {numberWithCommas(
          data?.dscAmt == 0
            ? data.selPrc * data.quantity
            : data.dscAmt * data.quantity
        )}
      </td>
      <td width='10px'>
        <FaTrash
          onClick={() => dispatch({ type: "DELETE_CART", payload: data })}
        />
      </td>
    </tr>
  );
};

export default CartItem;
