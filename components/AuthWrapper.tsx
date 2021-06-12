import { Router, useRouter } from "next/router";
import React from "react";
import { getToken } from "../helpers/auth";
import Home from "../pages/index";

const token = getToken("ktoken");

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
