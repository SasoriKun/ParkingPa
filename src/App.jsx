import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Registro, Validacion } from "./Vistas/Registro";
import { Formulario, IdTicket } from "./Vistas/Calculo";
import { Pago } from "./Vistas/Pago";

function App() {
  const [arrayData, setArrayData] = useState([]);
  const [positionSelected, setPositionSelected] = useState();
  const [totalPago, setTotalPago] = useState();

  return (
    <div>
      <div className="App fondo">
        <div>
          <Registro
            onChangeData={(arrayData) => {
              setArrayData(arrayData);
            }}
            dataArray={arrayData}
          ></Registro>
        </div>
        <div></div>
        <div className="margin">
          <Formulario
            arrayData={arrayData}
            onChangePosition={(position) => {
              setPositionSelected(position);
            }}
            eliminarTexoBuscar={() => {
              setPositionSelected(undefined);
              setTotalPago(undefined);
            }}
          ></Formulario>
          {positionSelected >= 0 ? (
            <Validacion
              arrayData={arrayData}
              positionSelected={positionSelected}
              totalPago={(total) => {
                setTotalPago(total);
              }}
            ></Validacion>
          ) : null}
        </div>
      </div>

      <div>{/* <IdTicket></IdTicket> */}</div>
      {positionSelected >= 0 && totalPago ? (
        <Pago
          arrayData={arrayData}
          totalPago={totalPago}
          positionSelected={positionSelected}
          eliminarDato={(position) => {
            const newArray = [...arrayData];

            newArray.splice(position, 1);

            setArrayData(newArray);
            setPositionSelected(undefined);
          }}
        ></Pago>
      ) : null}
    </div>
  );
}

export default App;
