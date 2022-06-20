import React from "react";
import { Form } from "react-bootstrap";

// import Images
import WelcomeImage from "../../images/common/WelcomeScreen.svg";
import WelcomeText from "../../images/common/WelcomeText.svg";
import CardeLogo from "../../images/common/logo.svg";
import captcha from "../../images/common/captcha.svg";
import { useNavigate } from "react-router-dom";

const WelcomeScreenWindow = () => {
  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigate("/cms-configuration");
  };
  return (
    <div className="login-WelcomeScreenDemo">
      {/* Login Svg Screen */}
      <div className="welcomeImageDemo">
        <img src={CardeLogo} className="CardeLogo" alt="" />
        <img src={WelcomeText} className="WelcomeText" alt="" />
        <img src={WelcomeImage} className="WelcomeImagePhoto1" alt="" />
      </div>
      {/* Login Form Screen */}
      <div className="login-form">
        {/* form */}
        <img src={CardeLogo} className="CardeLogo1" alt="" />
        <p className="formHeading">Card Management Solution</p>
        <Form className="login-fields" onSubmit={handleSubmit}>
          <Form.Group className="loginFieldBox">
            <span className="icon-user"></span>
            <Form.Control
              className="userNameInput loginInput"
              type="text"
              placeholder="Username"
              required
            />
          </Form.Group>
          <Form.Group className="loginFieldBox">
            <span className="icon-password"></span>
            <Form.Control
              className="PasswordInput loginInput"
              type="password"
              placeholder="Password"
              required
            />
          </Form.Group>
          <p className="forgetPasswordText">Forgot Password ?</p>
          <div className="captchaBox">
            <div className="captchaImageBox">
              <img src={captcha} alt="captcha" />
            </div>
            <div className="captchaRefreshBox">
              <span className="icon-refresh"></span>
              <p className="refreshCodeBtn">Refresh code</p>
            </div>
          </div>
          <Form.Group className="loginFieldBox">
            <span className="icon-captcha"></span>
            <Form.Control
              className="captchaInput loginInput"
              type="text"
              placeholder="Enter captcha here"
            />
          </Form.Group>
          <button className="loginBtn" type="submit">
            Login
          </button>
        </Form>
        <div className="copyRight">
          © Maximus Infoware (India) Private Limited 2022
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreenWindow;
