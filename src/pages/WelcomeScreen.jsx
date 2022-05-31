import React from "react";
// CSS
import "../components/common/common.css";
import "../components/common/main.css";
import "../components/welcomeScreen/welcomeScreen.css";

// Components
import WelcomeScreenWindow from "../components/welcomeScreen/WelcomeScreenWindow.jsx";

const WelcomeScreen = () => {
  return (
    <div>
      <WelcomeScreenWindow />
    </div>
  );
};

export default WelcomeScreen;
