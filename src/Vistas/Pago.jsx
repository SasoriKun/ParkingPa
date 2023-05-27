import React from "react";

const Pago = ({ totalPago, positionSelected, eliminarDato }) => {
  const [valorIngresado, setValorIngresado] = React.useState();

  const onPago = () => {
    if (valorIngresado < totalPago) {
      alert("No te alcanza");
      return;
    }

    if (valorIngresado === totalPago) {
      alert("Pagaste el parqueadero");
      eliminarDato(positionSelected);
      return;
    }

    if (valorIngresado > totalPago) {
      alert(
        `Pagaste el parqueadero, su devuelto es: ${valorIngresado - totalPago}`
      );
      eliminarDato(positionSelected);
      return;
    }
  };

  return (
    <>
      <h2>Dinero a depositar</h2>
      <input
        type="number"
        placeholder="Ingrese la cantidad de dinero solicitada"
        onChange={(e) => {
          setValorIngresado(parseInt(e.target.value));
        }}
      />
      <br />
      <br />
      <input type="button" value="Pagar" onClick={() => onPago()} />
    </>
  );
};

export { Pago };
