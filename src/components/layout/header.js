import React from "react";
import "./layout.scss";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { useHistory, useLocation } from "react-router";
import { AiOutlineShoppingCart, AiOutlineSearch } from "react-icons/ai";
import { useSelector } from "react-redux";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const { pathname } = useLocation();
  const { carts } = useSelector((state) => state.cartsReducer);
  const { products } = useSelector((state) => state.mainReducer);
  const history = useHistory();

  // search autocomplete function
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [showSearchResult, setShowSearchResult] = useState(false);

  const handleChange = (e) => {
    setSearch(e.target.value);
    setShowSearchResult(true);
    setSearchResult(
      products.filter((product) =>
        product.prdNm.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  return (
    <div
      className='bg-white header-web'
      onClick={() => setShowSearchResult(false)}>
      <nav className='container navbar navbar-expand-md navbar-light bg-light d-flex align-items-center justify-content-between'>
        <a className='navbar-brand' onClick={() => history.push("/")}>
          JUBELIO TEST
        </a>

        <div className='d-md-none'>
          <div onClick={() => setToggle(!toggle)}>
            <FaBars />
          </div>
        </div>

        <div className='d-none d-md-block'>
          <div
            className='navbar-web d-flex align-items-center'
            id='navbarNavAltMarkup'>
            <div className='navbar-nav ms-auto'>
              <div className='d-flex align-items-center search-field'>
                <div className='search-icon'>
                  <AiOutlineSearch />
                </div>
                <input
                  className='search-input search-field-input'
                  type='text'
                  placeholder='Cari produk'
                  onChange={handleChange}
                />
              </div>
              {showSearchResult && (
                <div className='searched-products'>
                  {searchResult.length > 0 ? (
                    <div className='search-result'>
                      <ul class='list-group list-group-flush py-3 shadow'>
                        {searchResult.slice(1, 10).map((product) => (
                          <li
                            class='list-group-item'
                            style={{ cursor: "pointer" }}
                            onClick={() => {
                              history.push(`/product/${product.prdNo}`);
                              setShowSearchResult(false);
                            }}>
                            {product.prdNm}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <ul class='list-group list-group-flush'>
                      <li class='list-group-item'>Produk tidak ditemukan!</li>
                    </ul>
                  )}
                </div>
              )}
              <a
                className={`nav-item nav-link ${pathname === "/" && "active"}`}
                onClick={() => {
                  history.push("/");
                  setToggle(!toggle);
                }}>
                Beranda
              </a>
              <a
                className={`nav-item nav-link ${
                  pathname === "/carts" && "active"
                }`}
                onClick={() => {
                  history.push("/carts");
                  setToggle(!toggle);
                }}>
                <div className='cart-icon'>
                  <AiOutlineShoppingCart size={20} />
                  <div className='length'>
                    <span>{carts?.length}</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </nav>
      {toggle && (
        <div className='menu-mobile d-md-none' onBlur={() => setToggle(false)}>
          <div className='navbar-nav container px-3'>
            <a
              className={`nav-item nav-link ${pathname === "/" && "active"}`}
              onClick={() => {
                history.push("/");
                setToggle(!toggle);
              }}>
              Beranda
            </a>
            <a
              className={`nav-item nav-link ${
                pathname === "/carts" && "active"
              }`}
              onClick={() => {
                history.push("/carts");
                setToggle(!toggle);
              }}>
              <div className='cart-icon'>
                <AiOutlineShoppingCart size={20} />
                <div className='length'>
                  <span>{carts?.length}</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
