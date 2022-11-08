import React from "react";

const CourseOffering = () => {
  return (
    <>
      <div>CourseOffering</div>
      {/* Group of cards */}
      <div className="grid gap-4">
        {/* First card */}
        <div className="w-96 rounded-tl-[38px]  rounded-tr-[50px]  rounded-br-[38px]  rounded-bl-[50px] bg-slate-200 px-8 pt-8 pb-10 text-violet-700">
          <div className="text-2xl">Intensivas Regulares</div>
          <div>A1-A2</div>
          <div>Clases personalizadas</div>
          <div>2 veces por semana</div>
          <div>
            Éstos niveles permitirán al estudiante dominar situaciones
            cotidianas y del pasado, y utilizar vocabulario elemental (e.g.
            presentarse a sí mismo y a otros, pedir y dar información personal
            básica sobre su domicilio, sus pertenencias, personas que conoce,
            lugares de interés, ocupaciones)
          </div>
        </div>
        {/* Seconde card */}
        <div>Grupales Regulares A1-A2</div>
      </div>
    </>
  );
};

export default CourseOffering;
