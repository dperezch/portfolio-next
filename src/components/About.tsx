import React from "react";
import { Image } from "@nextui-org/image";
import IconSmile from "./icons/IconSmile";

const About = () => {
  return (
    <div
      id="acerca"
      className="flex md:flex-col-reverse lg:flex-row flex-col-reverse w-full justify-around items-center py-20"
    >
      <div className="flex items-center justify-around lg:flex-row flex-col">
        <div className="max-md:pt-10 max-w-xl">
          <section className="flex flex-col justify-center items-center p-6">
            <Image
              isBlurred
              width={240}
              src="/perfil.jpg"
              alt="NextUI Album Cover"
              className="m-5"
            />
          </section>
          <section className="p-6 text-slate-300">
            <p>
              Hola!, soy chileno, licenciado en Artes de la Universidad de
              Concepción, comencé el camino de la programación realizando un
              bootcamp de desarrollo web front-end y luego seguí complementando
              mis conocimientos de manera autodidacta.
            </p>
            <br />
            <p>
              Siempre estoy explorando y aprendiendo constantemente nuevas
              tecnologías tanto de front-end como de back-end y también de
              computación en la nube como los servicios de Amazon Web Services.
            </p>
            <br />
            <p>
              Constantemente estoy en búsqueda de nuevos desafíos por lo cual
              espero seguir adquiriendo más conocimientos y experiencia en este
              mundo tan entretenido que es la programación.
            </p>
            <div className="gap-4 flex mt-4 md:mt-6 text-slate-800">
              <a
                className="text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-b-lg rounded-r-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center border-r-8 border-b-8 border-black"
                href="https://www.credly.com/users/david-perez.6a181c02"
                target="_blank"
              >
                Credly
              </a>
              <a
                className="text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-b-lg rounded-r-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center border-r-8 border-b-8 border-black"
                href="David_Perez_CV_FullStack.pdf"
                download
              >
                Mi CV
              </a>
            </div>
          </section>
        </div>
      </div>
      <div className="self-start">
        <h1 className="mb-4 text-3xl font-bold tracking-tight leading-none md:text-5xl lg:text-7xl text-slate-500">
          Acerca de m<span className="text-teal-500">í</span>
        </h1>
        <IconSmile />
      </div>
    </div>
  );
};

export default About;
