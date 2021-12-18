import React from "react";
import TopMenu from "../common/TopMenu";
import SignIn from "../sample/SignIn";

const Login = () => {
  return (
    <div>
      <TopMenu title="로그인" />
      <SignIn />
    </div>
  );
};

export default Login;
