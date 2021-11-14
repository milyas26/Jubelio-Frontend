import React from "react";
import NotFound from "assets/404.svg";
import "./notfound.scss";
import { useHistory } from "react-router";

const Page404 = () => {
  const history = useHistory();
  return (
    <div className='notfound'>
      <div className='wrapper'>
        <img src={NotFound} alt='notFound' />
        <h1>Halaman Tidak Ditemukan!</h1>

        <div className='buttons mt-5'>
          <a onClick={() => history.push("/")} className='btn btn-warning'>
            Kembali Ke Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default Page404;
