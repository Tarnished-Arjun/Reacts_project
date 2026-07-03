import { useState } from "react";

function Toggle() {
  const [isOn, setIsOn] = useState(false);

  return (
    <>
      <h1>{isOn ? "💡 Light ON" : "💡 Light OFF"}</h1>

      <button onClick={() => setIsOn(!isOn)}>
        {isOn ? "Light OFF" : "Light ON"}
      </button>
    </>
  );
}

export default Toggle;