import React from "react";
import { Button, Input } from "../../Forms";
import "./navAuth.scss"

const NavAuth = () => {
  return (
    <div className="navAuth">
      <Button to="Login">Войти</Button>
      <Button to="Register" variant="outline">Регистрация</Button>
    </div>
  );
};

export default NavAuth;
