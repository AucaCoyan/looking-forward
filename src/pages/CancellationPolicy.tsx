import React from "react";

const CancellationPolicy = () => {
  return (
    <>
      <div>CancellationPolicy</div>
      <p>
        CLASS CANCELATIONS Cancelaciones con reembolso y reprogramaciones de
        clase <br />
        <ul>
          <li>
            La tolerancia máxima de cancelaciones con reembolso y/o
            reprogramaciones de clase será de 2 clases al mes.
          </li>
          <li>
            En todos los casos, el alumno se compromete a avisar de la
            cancelación{" "}
            <span className="underline">24hs previas a dictada la clase.</span>
            <br />
            Por ejemplo: Si la clase se dicta el Martes a las 15hs, el aviso
            tendría que realizarse hasta el Lunes a las 15hs.
          </li>
          <li>
            ¡Por supuesto! se toman en consideración motivos de salud Luego de
            excedidas las 2 clases mensuales de tolerancia, deberán abonarse las
            siguientes.
          </li>
          <li>
            Luego de excedidas las 2 clases mensuales de tolerancia, deberán
            abonarse las siguientes.
          </li>
        </ul>
      </p>
    </>
  );
};

export default CancellationPolicy;
