import React from "react";
// CSS
import "../components/common/common.css";
import "../components/common/main.css";
import "../components/welcomeScreen/welcomeScreen.css";

// Components
import WelcomeScreenWindow from "../components/welcomeScreen/WelcomeScreenWindow.jsx";

const WelcomeScreen = () => {
  return (
    <div className="w-100 h-100">
      <WelcomeScreenWindow />
    </div>
  );
};

export default WelcomeScreen;
