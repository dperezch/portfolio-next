"use client";

import { useState } from "react";
import IconProject from "./icons/IconProject";
import { Carrusel } from "./parts/Carrusel";

const Proyectos = () => {
  const [project1, setProject1] = useState(true);
  const [project2, setProject2] = useState(false);
  const [project3, setProject3] = useState(false);

  const text1 = {
    title: "App Lista de compras",
    subtitle: "Aplicación Híbrida",
    list: ["Vue2", "QuasarJS", "Android Studio"],
    body: "Aplicación CRUD para agregar productos en modalidad lista y en modalidad de lista con precios, con opciones de cantidad y precio del producto, sumando el total de la lista.",
    secondList: [
      "Generar y compilar aplicaciones en archivos APK",
      "Generar llaves para firmar archivos APK",
      "Utilización de plataforma Google Play Console",
    ],
  };

  const text2 = {
    title: "Curso Autoinstruccional",
    subtitle: "Aplicación Híbrida",
    list: ["Vue3", "QuasarJS", "Android Studio"],
    body: "Aplicación para alojar cursos autoinstruccionales para formato tablet. Funcionalidades de trabajo offline, registro de actividades, tiempo de conexión, calificaciones, fechas. Detección automática de conexión a internet al cerrar sesión y envío automático de registro de actividades del alumno a base datos noSQL alojada en la nube.",
    secondList: [
      "Mockups y prototipos en Figma.",
      "Creación de API Rest con ExpressJS, alojamiento en la nube en Heroku.",
      "Creación y alojamiento en la nube de base de datos NoSQL en MongoDB.",
    ],
  };

  const text3 = {
    title: "Aplicación de gestión de productos e inventario",
    subtitle: "Aplicación Web",
    list: [
      "Next13, hooks ReactJS, NextAuth, Tailwind.",
      "NestJS, Class-Validator, TypeORM, JWT, AWS.",
    ],
    body: "Aplicación para administrar productos de una tienda, el backend se hizo utilizando el framework NestJS con una base de datos SQL alojada en la nube utilizando el servicio Amazon RDS para bases de datos relacionales, el frontend se está realizando con el framework NextJS en su versión 13, en proceso.",
    secondList: [
      "Typescript.",
      "API Rest con NestJS, estructura de módulo, controlador y servicio.",
      "Autenticación y autorización utilizando JWT.",
      "Creación de estructura de base de datos SQL utilizando TypeORM, entidades, DTO.",
    ],
  };

  const rutas1 = ["/app1_1.png", "/app1_2.png", "/app1_3.png", "/app1_4.png"];
  const rutas2 = [
    "/app2_0.png",
    "/app2_1.png",
    "/app2_2.png",
    "/app2_3.png",
    "/app2_4.png",
    "/app2_5.png",
    "/app2_6.png",
    "/app2_7.png",
  ];
  const rutas3 = [
    "/app4_1.png",
    "/app4_2.png",
    "/app4_3.png",
    "/app4_4.png",
    "/app4_5.png",
    "/app4_6.png",
    "/app4_7.png",
    "/app4_8.png",
  ];

  const switchProjects = (project: String) => {
    switch (project) {
      case "proyecto1":
        setProject1(true);
        setProject2(false);
        setProject3(false);
        break;
      case "proyecto2":
        setProject1(false);
        setProject2(true);
        setProject3(false);
        break;
      case "proyecto3":
        setProject1(false);
        setProject2(false);
        setProject3(true);
        break;

      default:
        break;
    }
  };

  return (
    <div id="proyectos" className="py-20">
      <div className="flex md:flex-col lg:flex-row flex-col w-full justify-around items-center pb-5">
        <div className="flex flex-col self-start">
          <div className="flex flex-row">
            <h1 className="mb-4 text-3xl font-bold tracking-tight leading-none md:text-5xl lg:text-7xl text-slate-500">
              <span className="text-teal-500">P</span>royectos
            </h1>
            <IconProject />
          </div>
          <div className="mt-4">
            <button
              onClick={() => switchProjects("proyecto1")}
              className="mr-2 text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-b-lg rounded-r-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center border-r-8 border-b-8 border-black"
            >
              Proyecto 1
            </button>
            <button
              onClick={() => switchProjects("proyecto2")}
              className="mr-2 text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-b-lg rounded-r-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center border-r-8 border-b-8 border-black"
            >
              Proyecto 2
            </button>
            <button
              onClick={() => switchProjects("proyecto3")}
              className="mr-2 text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-b-lg rounded-r-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center border-r-8 border-b-8 border-black"
            >
              Proyecto 3
            </button>
          </div>
        </div>
        <div className=" max-md:pt-10 lg:max-w-[45vw]">
          <div className="min-w-fit mx-auto text-slate-300">
            <section className="p-4 ">
              <h1 className="text-xl font-semibold">
                {" "}
                {(project1 && text1.title) ||
                  (project2 && text2.title) ||
                  (project3 && text3.title)}{" "}
              </h1>
              <span className="text-sm text-gray-500 dark:text-slate-200">
                {" "}
                {(project1 && text1.subtitle) ||
                  (project2 && text2.subtitle) ||
                  (project3 && text3.subtitle)}{" "}
              </span>
            </section>

            <section className="pb-3 mx-4">
              <p>Tecnologías usadas:</p>
              <ul>
                {(project1 &&
                  text1.list.map((text, index) => (
                    <li key={index}> -{text} </li>
                  ))) ||
                  (project2 &&
                    text2.list.map((text, index) => (
                      <li key={index}> -{text} </li>
                    ))) ||
                  (project3 &&
                    text3.list.map((text, index) => (
                      <li key={index}> -{text} </li>
                    )))}
              </ul>
            </section>

            <section className="mx-4 pb-4">
              <p>
                {(project1 && text1.body) ||
                  (project2 && text2.body) ||
                  (project3 && text3.body)}
              </p>
            </section>

            <section className="mx-4 pb-4">
              <p>Aprendizajes:</p>
              <ul>
                {(project1 &&
                  text1.secondList.map((text, index) => (
                    <li key={index}> -{text} </li>
                  ))) ||
                  (project2 &&
                    text2.secondList.map((text, index) => (
                      <li key={index}> -{text} </li>
                    ))) ||
                  (project3 &&
                    text3.secondList.map((text, index) => (
                      <li key={index}> -{text} </li>
                    )))}
              </ul>
            </section>
          </div>
        </div>
      </div>
      {(project1 && <Carrusel imagePaths={rutas1} />) ||
        (project2 && <Carrusel imagePaths={rutas2} />) ||
        (project3 && <Carrusel imagePaths={rutas3} />)}
    </div>
  );
};

export default Proyectos;
