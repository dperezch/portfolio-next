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
              ¡Hola! Soy chileno y tengo una licenciatura en Artes de la
              Universidad de Concepción. Mi viaje en la programación comenzó con
              un bootcamp de desarrollo web front-end, y además, he completado
              otro bootcamp de fullstack JavaScript. También he realizado el
              curso de AWS Cloud Foundations, que me brindó una comprensión
              práctica de los conceptos de la nube en el contexto de Amazon Web
              Services (AWS).
            </p>
            <br />
            <p>
              Desde entonces, he seguido ampliando mis conocimientos de manera
              autodidacta. Me apasiona explorar y aprender constantemente nuevas
              tecnologías, tanto en el front-end como en el back-end.
            </p>
            <br />
            <p>
              Siempre estoy en busca de nuevos desafíos, y espero seguir
              adquiriendo conocimientos y experiencia en este emocionante campo
              de la programación.
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
      <div className="lg:self-start lg:mt-10">
        <h1 className="mb-4 text-3xl font-bold tracking-tight leading-none md:text-5xl lg:text-7xl text-slate-500">
          Acerca de m<span className="text-teal-500">í</span>
        </h1>
        <IconSmile />
      </div>
    </div>
  );
};

export default About;
