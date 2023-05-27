import React from "react";

const Formulario = ({
  onChangePosition,
  arrayData = [],
  eliminarTexoBuscar,
}) => {
  const [id, setId] = React.useState(null);

  const onClick = () => {
    const position = arrayData?.findIndex((element) => {
      return element.id == id;
    });

    console.log("nuevo array: ", arrayData);

    if (position != -1) {
      onChangePosition(position);
    } else {
      alert("No encontre el ticket");
    }
  };

  return (
    <>
      <h2>Id ticket</h2>
      <input
        type="number"
        placeholder="Ingrese su Id del ticket"
        onChange={(e) => {
          setId(e.target.value);
        }}
      />
      <br />
      <br />
      <input type="button" value="Buscar" onClick={() => onClick(id)} />
      <input
        type="button"
        value="Eliminar"
        onClick={() => eliminarTexoBuscar()}
      />
    </>
  );
};

const IdTicket = () => {
  return (
    <>
      <h2>Id Ticket</h2>
      <input type="text" name="idT" disabled></input>
      <h2>Propietario del vehiculo</h2>
      <input type="text" name="nombre" disabled></input>
      <h2>Placa vehiculo</h2>
      <input type="text" name="pVehiT" disabled></input>
      <h2>Tipo de vehiculo</h2>
      <input type="text" name="tVehiT" disabled></input>
      <h2>Total a pagar</h2>
      <input type="text" name="tPagar" disabled></input>
      <br />
      <br />
      <input type="button" value="Calcular" />
    </>
  );
};

export { Formulario, IdTicket };
