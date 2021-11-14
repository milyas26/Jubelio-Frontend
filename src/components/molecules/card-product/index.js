import React from "react";
import { useHistory } from "react-router";
import { numberWithCommas } from "config/function/numberFormatter";
import "./card-product.scss";

const Index = ({ item, ref }) => {
  const history = useHistory();
  return (
    <div
      className='col-lg-2 col-md-3 col-sm-4 col-6 mb-3 px-1 px-sm-2 card-product'
      onClick={() => history.push(`/product/${item.prdNo}`)}
      ref={ref}>
      <div className='card'>
        <img src={`https://picsum.photos/200?random=${item.prdNm}`} />
        <div className='card-body'>
          <h5 className='card-title'>{item.prdNm}</h5>
          <p className='card-text harga'>Rp {numberWithCommas(item.selPrc)}</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
