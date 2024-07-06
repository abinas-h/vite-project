import { useState } from "react";

import CustomForm from "./components/CustomForm";
import Thing from "./components/thing";

import JSConfetti from "js-confetti";

const jsConfetti = new JSConfetti();

function getSuccessMessage() {
  const congratulations = [
    "Fantastic achievement! So proud of you!",
    "Congratulations on reaching this milestone! Keep up the amazing work.",
    "Wishing you all the best in your future endeavors. Well done!",
    "You did it! This is a cause for celebration. Congratulations!",
    "Your hard work and dedication have paid off. Huge congratulations!",
    "May your success continue to grow. Congratulations on this achievement!",
    "Cheers to all your accomplishments! You deserve this moment.",
    "Sending you a big congratulations on this exciting news!",
    "So thrilled for you! Congratulations on achieving your goal.",
    "Wishing you continued success and happiness. Congratulations!",
  ];

  return congratulations[Math.floor(Math.random() * congratulations.length)];
}

function App() {
  const [thing, setThing] = useState("");
  const [isCompleted, setIsCompleted] = useState(true);

  const handelSubmit = (e) => {
    e.preventDefault();

    // if(thing.trim() == ""){
    //   alert("plaese enter the thing")
    //   return;
    // }

    setIsCompleted(false);
  };

  const handelInput = (e) => {
    setThing(e.target.value);
  };

  const handelCompletedThing = async (e) => {
    e.target.setAttribute("disabled", true);
    setThing(getSuccessMessage());
    await jsConfetti.addConfetti();

    e.target.removeAttribute("disabled");
    setThing("");
    setIsCompleted(true);
  };

  return (
    <div
      className="grid place-items-center min-h-screen 
    bg-gradient-to-b from-slate-100 to-slate-200 
    "
    >
      <div className="grid place-items-center gap-8 m-8">
        {isCompleted && (
          <CustomForm
            handelInput={handelInput}
            handelSubmit={handelSubmit}
            thing={thing}
          />
        )}

        {!isCompleted && (
          <Thing thing={thing} handelCompletedThing={handelCompletedThing} disabled = {thing.trim() === ""} />
        )}
      </div>
    </div>
  );
}

export default App;
