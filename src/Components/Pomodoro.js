import React, { useState, useEffect } from "react";
import System from "../Hook/PomodoroSytem";

const Pomodoro = () => {
  const [timerMinutes, timerSeconds, displayMessage] = System();

  return (
    <div className="box column is-half is-offset-one-quarter has-background-info mt-6 pb-6">
      <div className="level-item has-text-centered">
        {displayMessage && <div className="heading has-text-white-ter">Break time! New sesion start in:</div>}
      </div>

      <div className="title level-item has-text-centered has-text-white-ter is-size-1">
        {timerMinutes}:{timerSeconds}
      </div>
    </div>
  );
};

export default Pomodoro;
