import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Calculator from "./calculator";

// // React.createElement => ReactElement - JS Object => HTML Element(render)
// const heading = React.createElement("h1", { id: "Heading" }, "Namaste React");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// // JSX - is not HTML inside JS (it is XML/HTML like syntax)
// // JSX (transpiled before it reaches the JS Engine) done by PARCEL (Babel)
// // JSX => React.createElement => ReactElement - JS Object => HTML Element(render)
// // JSX in single line then it's perfectly valid but for multiple lines you have to use {}
// const jsxHeading = <h1 className="heading">Namaste Ract with jsx</h1>;
// root.render(jsxHeading);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&sf=&txt_keyword=All"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <li
            onClick={() => {
              setIsLoggedIn(isLoggedIn == "Login" ? "Logout" : "Login");
            }}
          >
            {isLoggedIn}
          </li>
        </ul>
      </div>
    </div>
  );
};

const MainBody = () => {
  const [currCount, setCount] = useState(0);
  return (
    <div className="main-body">
      <Calculator/>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <MainBody />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
