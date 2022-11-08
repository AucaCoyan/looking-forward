import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div className="py-10">
      <div className="text-6xl font-black text-center">
        Welcome to our site!
      </div>
      <div className="text-3xl pt-6 text-center">Let&#39;s learn together</div>
      <section className="pt-10 px-10">
        <div className="text-3xl">Nuestra excelencia</div>
        <div className="text-lg py-6">
          Looking Forward toma como parámetro de máxima exigencia y excelencia
          en evaluación del idioma internacionalmente al British Council y al
          CEFR (Common European Framework of Reference for Languages),
          alineándose año a año con los más altos estándares de calidad en el
          material y la pedagogía aplicados a nuestras clases.
        </div>
      </section>
    </div>
  );
}
