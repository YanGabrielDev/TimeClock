
import { useState } from "react";
import InputMask from "react-input-mask";

export default function TimeClock() {
  const [selectHourBegin, setSelectHourBegin] = useState("");

  let mask = "99:99";
  let formatChars = {
    "1": "[0-9]",
    "2": "[0-9]",
    "3": "[0-9]",
    "4": "[0-9]"
  };
  function isValidHour(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    let firtCharacter = value.charAt(0);
    let secondCharacter = value.charAt(1);
    let thirdCharacter = value.charAt(3);
    let fourthCharacter = value.charAt(4)

    // Validar se a primeira posição é maior que 2
    if (parseInt(firtCharacter) > 2) {
        firtCharacter = "2";
    }

    // Validar se a segunda posição é maior que 3
    if ( parseInt(secondCharacter) > 3) {
        secondCharacter = "3";
    }

    // Validar se a terceira posição é maior que 5
    if (parseInt(thirdCharacter) > 5) {
        thirdCharacter = "5";
    }



    // Atualizar o valor do input com as horas e minutos corrigidos
    event.target.value = `${firtCharacter}${secondCharacter}${thirdCharacter}${fourthCharacter}`;
    setSelectHourBegin(event.target.value);
  }


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
            isValidHour(e);
        }}
        mask={mask}
        // formatChars={formatChars}
      ></InputMask>
    </div>
  );
}
