import "./styles.css";

import { useState } from "react";
import InputMask from "react-input-mask";

export default function App() {
  const [selectHourBegin, setSelectHourBegin] = useState("");

  let mask = "12:34";
  let formatChars = {
    "1": "[0-9]",
    "2": "[0-9]",
    "3": "[0-9]",
    "4": "[0-9]"
  };
  function validateHoras(event) {
    const value = event.target.value.split(":");
    let horas = parseInt(value[0]);
    let minutos = parseInt(value[1]);

    // Substituir o primeiro caractere por "2" caso ele seja maior que "2"
    if (horas > 23) {
      horas = 23;
      event.target.value = `23:${minutos}`;
      setSelectHourBegin(event.target.value);
    } else {
      event.target.value = `${horas}:${minutos}`;
    }
    setSelectHourBegin(event.target.value);
  }

  let beforeMaskedValueChange = (newState , oldState, userInput) => {
    let { value } = newState;

    // Conditional mask for the 2nd digit base on the first digit
    if (value.startsWith("2")) formatChars["2"] = "[0-3]";
    // To block 24, 25, etc.
    else formatChars["2"] = "[0-9]"; // To allow 05, 12, etc.
    return { value, selection: newState.selection };
  };

  return (
    <div className="App">
      <h1>
        <small>Hora Inicial</small> {selectHourBegin}
      </h1>
      <InputMask
        className="inputMask"
        placeholder="hh:mm"
        value={selectHourBegin}
        onChange={(e) => {
          validateHoras(e);
        }}
        mask={mask}
        // formatChars={formatChars}
      ></InputMask>
    </div>
  );
}
