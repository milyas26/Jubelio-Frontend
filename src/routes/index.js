import React from "react";
import { Switch, Route } from "react-router-dom";
import { NotFound, Homepage, DetailProduct, Carts, Anagram } from "pages";
import { Layout } from "components";

const Routex = () => {
  return (
    <>
      <Layout>
        <Switch>
          <Route exact path='/product/:id' component={DetailProduct} />
          <Route exact path='/carts' component={Carts} />
          <Route exact path='/anagram' component={Anagram} />
          <Route exact path='/' component={Homepage} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </>
  );
};

export default Routex;
