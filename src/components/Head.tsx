import React from "react";

const Encabezado = () => {
  return (
    <div className="flex items-center justify-around lg:flex-row flex-col pt-36 pb-20">
      <div className="m-6">
        <section className="text-slate-300">
          <h1 className="mb-4 text-4xl font-bold tracking-tight leading-none md:text-5xl lg:text-7xl text-slate-100">
            David Pérez Ch<span className="text-teal-500">.</span>
          </h1>
          <h2 className="text-2xl lg:text-3xl font-semibold">
            Desarrollador Web Full-Stack
          </h2>
        </section>
        <section className="my-3 text-slate-400">
          <article className="text-lg font-normal">
            Desarrollo de aplicaciones web utilizando tecnologías JavaScript
            front-end y back-end.
          </article>
        </section>
      </div>
    </div>
  );
};

export default Encabezado;
