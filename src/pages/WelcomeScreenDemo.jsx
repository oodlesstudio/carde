import React from "react";
// CSS
import "../components/common/common.css";
import "../components/common/main.css";
import "../components/welcomeScreenDemo/welcomeScreen.css";

// Components
import WelcomeScreenWindow from "../components/welcomeScreenDemo/WelcomeScreenWindow.jsx";

const WelcomeScreenDemo = () => {
  return (
    <div className="w-100 h-100">
      <WelcomeScreenWindow />
    </div>
  );
};

export default WelcomeScreenDemo;
