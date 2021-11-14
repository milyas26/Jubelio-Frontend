import React, { useState, useRef } from "react";
import { Helmet } from "react-helmet";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductList } from "config/redux/action";
import "./homepage.scss";
import { CardProduct } from "components";

const Homepage = () => {
  const dispatch = useDispatch();
  const { products, loading } = useSelector((state) => state.mainReducer);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (!products.length) {
      dispatch(getProductList(page));
    }
  }, []);

  const pageEnd = useRef();

  useEffect(() => {
    if (loading) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            dispatch(getProductList(page));
            setPage(page + 1);
            if (page >= 3) {
              observer.unobserve(pageEnd.current);
            }
          }
        },
        { threshold: 1 }
      );
      observer.observe(pageEnd.current);
    }
  }, [products]);

  return (
    <>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Homepage | Jubelio Test</title>
        <meta
          name='description'
          content='Fetch api menggunakan Elevenia open api, test project frontend jubelio'
        />
      </Helmet>

      <div className='div py-3 homepage bg-white'>
        <div className='container'>
          <h2 className='text-center mb-md-5 mb-3'>Product List</h2>
          <div className='row product-list mx-0 px-0'>
            {products?.map((item, i) => (
              <CardProduct item={item} key={i} />
            ))}
          </div>

          {loading && (
            <div className='text-center'>
              <div class='spinner-grow text-success' role='status'></div>
            </div>
          )}
          <a style={{ opacity: 0.1 }} ref={pageEnd}>
            .
          </a>
        </div>
      </div>
    </>
  );
};

export default Homepage;
