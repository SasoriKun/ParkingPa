import React, { useEffect, useState } from "react";
import moment from "moment";

const Registro = ({ onChangeData, dataArray = [] }) => {
 
  const [data, setdata] = useState({ tipo: "Automovil" });
  const [arrayData, setArrayData] = useState(dataArray);

  useEffect(() => {

    setArrayData(dataArray);
  }, [dataArray]);

  const validar = () => {
    const dataSend = {
      ...data,
      id:
        arrayData.length == 0
          ? 1
          : parseInt(arrayData[arrayData.length - 1].id) + 1,
      fecha: new Date(),
    };
    debugger;
    const allData = [...arrayData, dataSend];
   
    setArrayData(allData);
    onChangeData(allData);
    setdata({ tipo: "Automovil" });
  };

  return (
    <>
      <h2>Nombre del propietario</h2>
      <input
        value={data?.nombre || ""}
        type="text"
        placeholder="Ingrese su nombre"
        onChange={(e) => {
          setdata({
            ...data,
            nombre: e.target.value,
          });
        }}
      />
      <br />
      <h2>Placa vehiculo</h2>
      <input
        value={data?.placa || ""}
        type="text"
        placeholder="Ingrese la placa del vehiculo"
        onChange={(e) => {
          setdata({
            ...data,
            placa: e.target.value,
          });
        }}
      />
      <br />
      <h2>Tipo de vehiculo</h2>
      <select
        value={data.tipo}
        name="TipoV"
        onChange={(e) => {
          setdata({
            ...data,
            tipo: e.target.value,
          });
        }}
      >
        <option value="Automovil"> Automovil </option>
        <option value="Motocicleta"> Motocicleta </option>
      </select>
      <br />
      <br />
      <input type="button" value="Registrar" onClick={validar} />
    </>
  );
};

const Validacion = ({ arrayData, positionSelected, totalPago }) => {
  console.log("array ", arrayData);
  const data = arrayData[positionSelected];
  const dateOut = moment(new Date());
  // const [total, settotal] = useState(0);
  let total = 0;

  // useEffect(() => {
  // debugger;
  if (data) {
    const duration = moment.duration(dateOut.diff(data?.fecha));
    const minutes = duration.asMinutes();

    const valorMinutoAutomovil = 2000;
    const valorMinutoMotocicleta = 1000;

    if (data?.tipo == "Automovil") {
      total = parseInt(valorMinutoAutomovil * minutes);
    } else {
      total = parseInt(valorMinutoMotocicleta * minutes);
    }
    totalPago(total);
  }

  // const total
  // }, []);

  return (
    <>
      <h2>Id</h2>
      <input type="text" name="idV" disabled value={data?.id || ""}></input>
      <h2>Nombre del usuario</h2>
      <input
        type="text"
        name="nombreV"
        disabled
        value={data?.nombre || ""}
      ></input>
      <h2>Placa vehiculo</h2>
      <input
        type="text"
        name="pVehi"
        disabled
        value={data?.placa || ""}
      ></input>
      <h2>Tipo de vehiculo</h2>
      <input type="text" name="tVehi" disabled value={data?.tipo || ""}></input>
      <h2>Hora Entrada</h2>
      <input
        type="text"
        name="fechaV"
        disabled
        value={(data && moment(data?.fecha).format("LT")) || ""}
      ></input>
      <h2>Hora salida</h2>
      <input
        type="text"
        name="fechaS"
        disabled
        value={(data && dateOut.format("LT")) || ""}
      ></input>
      <h2>Total a pagar</h2>
      {total ? (
        <input
          type="text"
          name="tPago"
          disabled
          value={(total && `$${total}`) || ""}
        />
      ) : null}
      <br />
      <br />
    </>
  );
};

export { Registro, Validacion };
