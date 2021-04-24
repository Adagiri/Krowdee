import React from "react";
import { getCookie } from "../operations/utils";
import Home from "../pages/index";


const token = getCookie("jwt");

const withAuth = (Component) => {
  const Auth = () => {

    // if token exists, return component
    if (token) {
      return <Component />;
    }

    //if token doesnt exist
    return <Home />;
  };

  // Copy getInitial props so it will run as well
  if (Component.getInitialProps) {
    Auth.getInitialProps = Component.getInitialProps;
  }

  return Auth;
};

export default withAuth;
