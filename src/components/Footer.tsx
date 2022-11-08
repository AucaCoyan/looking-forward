import React from "react";

const Footer = () => {
  return (
    <>
      {/* Blank space */}
      <div className="py-10" />
      <div className="bottom-0 flex items-center py-10 px-6 justify-between bg-gradient-to-tr text-white from-[#2e30f5] to-[#8e05d0]">
        {/* Left items */}
        <div>
          Looking Forward Languages <br />
          General Justo José de Urquiza 118, Acasusso, <br /> Buenos Aires
        </div>
        {/* Center items */}
        <div>
          Director, Interpreter and Teacher <br />
          Yamila Lemos
        </div>
        {/* Right items */}
        <div>
          Office Hours <br />
          Monday to Friday <br />
          08 - 20hs (GMT -3)
        </div>
      </div>
    </>
  );
};

export default Footer;
