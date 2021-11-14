import React, { useState } from "react";
import { useParams } from "react-router";
import "./detail-product.scss";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetail } from "config/redux/action";
import { useEffect } from "react";
import { numberWithCommas } from "config/function/numberFormatter";
import { FaPlus, FaMinus } from "react-icons/fa";
import { Helmet } from "react-helmet";
import { Button } from "components";

const DetailProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { detailProduct, carts } = useSelector((state) => state.mainReducer);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    dispatch(getProductDetail(id));
  }, []);

  const desc = detailProduct?.htmlDetail.replace(/\n/g, "<br />");

  const getSalesType = (type) => {
    switch (type) {
      case "01":
        return "Ready Stock";
      case "02":
        return "Pre-Order";
      case "03":
        return "Used Items";
      default:
        return "";
    }
  };
  return (
    <>
      <Helmet>
        <meta charSet='utf-8' />
        <title>{`${detailProduct?.prdNm} | Jubelio Test`}</title>
        <meta name='description' content={desc?.slice(0, 200)} />
      </Helmet>
      <div className='detail-product container mt-2 px-0'>
        <section className='content mb-2 p-2'>
          <div className='row bg-white p-4'>
            <div className='col-md-4 image mb-3'>
              <img src={detailProduct?.prdImage01} alt='' className='w-100' />
            </div>
            <div className='col-md-8 details px-0 px-md-4'>
              <h2 className='mb-2'>{detailProduct?.prdNm}</h2>
              <table className='table table-borderless'>
                <tbody>
                  <tr>
                    <td>Harga</td>
                    <td>
                      {detailProduct?.dscAmt != 0 ? (
                        <div className='price'>
                          <p className='harga-coret'>
                            Rp{numberWithCommas(detailProduct?.selPrc)}
                          </p>
                          <p className='harga-jual'>
                            Rp{numberWithCommas(detailProduct?.dscAmt)}
                          </p>
                        </div>
                      ) : (
                        <div className='price-2'>
                          <p className='harga-jual'>
                            Rp{numberWithCommas(detailProduct?.selPrc)}
                          </p>
                        </div>
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td>Sisa Stock</td>
                    <td>{detailProduct?.prdSelQty} items</td>
                  </tr>
                </tbody>
              </table>

              <div className='orders col-md-4'>
                <div class='input-group mb-3'>
                  <div class='input-group-prepend'>
                    <span
                      class='input-group-text h-100'
                      onClick={() => {
                        quantity > 1
                          ? setQuantity(quantity - 1)
                          : setQuantity(1);
                      }}>
                      <FaMinus />
                    </span>
                  </div>
                  <input
                    type='text'
                    class='form-control text-center'
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value))}
                  />
                  <div class='input-group-append'>
                    <span
                      class='input-group-text h-100'
                      onClick={() => {
                        setQuantity(quantity + 1);
                      }}>
                      <FaPlus />
                    </span>
                  </div>
                </div>

                <Button
                  label='Add to Cart'
                  onClick={() => {
                    dispatch({
                      type: "ADD_TO_CART",
                      payload: {
                        ...detailProduct,
                        quantity,
                      },
                    });
                  }}
                />
              </div>
            </div>
          </div>
        </section>
        <div className='bg-white p-4 mb-3'>
          <div className='spesifikasi-produk mb-2'>
            <h4>Spesifikasi Produk</h4>
            <table className='table table-bordered table-striped'>
              <tbody>
                <tr>
                  <td>Sales Tipe</td>
                  <td>{getSalesType(detailProduct?.selMthdCd)}</td>
                </tr>
                <tr>
                  <td>Kode Produk</td>
                  <td>{detailProduct?.prdNo}</td>
                </tr>
                <tr>
                  <td>Kondisi</td>
                  <td>
                    {detailProduct?.prdStatCd === "01" ? "Baru" : "Bekas"}
                  </td>
                </tr>
                <tr>
                  <td>VAT</td>
                  <td>
                    {detailProduct?.prdStatCd === "01"
                      ? "Barang Kena Pajak"
                      : "Barang Bebas Pajak"}
                  </td>
                </tr>
                <tr>
                  <td>Berat</td>
                  <td>{detailProduct?.prdWght}g</td>
                </tr>
                <tr>
                  <td>SKU</td>
                  <td>{detailProduct?.sellerPrdCd}</td>
                </tr>
                <tr>
                  <td>Gratis Ongkir</td>
                  <td>{detailProduct?.freeDelivery == 0 ? "TIDAK" : "YA"}</td>
                </tr>
                <tr>
                  <td>Update Terakhir</td>
                  <td>{detailProduct?.updateDt}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='deskripsi-produk'>
            <h4>Deskripsi Produk</h4>
            <div
              className='description'
              dangerouslySetInnerHTML={{ __html: desc }}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailProduct;
