"use client";

import { FormEvent, useState } from "react";
import IconChat from "./icons/IconChat";

const Contacto = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");

  const sendForm = async (event: FormEvent) => {
    event.preventDefault();
    console.log(name, email, subject, content);
    const formBody = {
      from: process.env.NEXT_PUBLIC_MAILER_USER,
      to: process.env.NEXT_PUBLIC_MAILER_TO,
      subject,
      text: `Email enviado por: ${email} <n />
            Texto: ${content}`,
    };

    console.log(formBody);

    const response = await fetch("/api/send", {
      method: "POST",
      headers: { "Content-type": "application/json; charset=UTF-8" },
      body: JSON.stringify(formBody),
    }).then((response) => response.json());
    console.log(response);
  };
  return (
    <div className="flex lg:flex-row flex-col w-full justify-around items-center py-20">
      <div id="contacto" className=" self-start">
        <IconChat />
        <h1 className="mb-4 text-3xl font-bold tracking-tight leading-none md:text-5xl lg:text-7xl text-slate-500">
          <span className="text-teal-500">C</span>ontacto
        </h1>
      </div>
      <div className="my-10 lg:w-2/5 w-[85vw]">
        <form onSubmit={sendForm} className="min-w-fit mx-auto">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-teal-500 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="name"
              className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-teal-500  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Nombre
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-teal-500 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-teal-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email de contacto
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="title"
              id="title"
              value={subject}
              onChange={(event) => setSubject(event.target.value)}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-teal-500 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="title"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-teal-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Asunto
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <label
              htmlFor="content"
              className="block mb-2 text-sm font-medium text-gray-500"
            >
              Tu mensaje
            </label>
            <textarea
              id="content"
              name="content"
              rows={4}
              value={content}
              onChange={(event) => setContent(event.target.value)}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-teal-500 focus:border-teal-500"
              placeholder="Deja un comentario..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-b-lg rounded-r-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center border-r-8 border-b-8 border-black"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contacto;
