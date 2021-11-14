import React from "react";
import "./layout.scss";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { useHistory, useLocation } from "react-router";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const { pathname } = useLocation();
  const { carts } = useSelector((state) => state.mainReducer);
  const history = useHistory();

  const menus = [
    {
      id: 1,
      name: "Beranda",
      link: "/",
    },
    {
      id: 2,
      name: <AiOutlineShoppingCart />,
      link: "/carts",
    },
  ];
  return (
    <div className='bg-white header-web'>
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
