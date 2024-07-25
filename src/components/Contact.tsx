"use client";

import { FormEvent, useState } from "react";
import IconChat from "./icons/IconChat";
import { Alerta } from "./parts/Alerta";

const Contacto = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [alerta, setAlerta] = useState(false);

  const sendForm = async (event: FormEvent) => {
    event.preventDefault();
    setAlerta(true);
    setLoading(true);
    //console.log(name, email, subject, content);
    const formBody = {
      from: process.env.NEXT_PUBLIC_MAILER_USER,
      to: process.env.NEXT_PUBLIC_MAILER_TO,
      subject,
      text: `Email enviado por: ${email} <n />
            Texto: ${content}`,
    };

    const formBody2 = {
      from: process.env.NEXT_PUBLIC_MAILER_USER,
      to: email,
      subject: "Te contactaré en breve",
      text: "Hola, muchas gracias por el mensaje!! te responderé en breve por este medio!, Atte. David Pérez.",
    };

    //console.log(formBody);
    //console.log(formBody2);

    const response = await fetch("/api/send", {
      method: "POST",
      headers: { "Content-type": "application/json; charset=UTF-8" },
      body: JSON.stringify(formBody),
    }).then((response) => response.json());
    //console.log(response);
    const response2 = await fetch("/api/send", {
      method: "POST",
      headers: { "Content-type": "application/json; charset=UTF-8" },
      body: JSON.stringify(formBody2),
    }).then((response2) => response2.json());
    //console.log(response2);

    ////////////////////////////////
    setName("");
    setEmail("");
    setSubject("");
    setContent("");
    setLoading(false);
    setTimeout(() => {
      setAlerta(false);
      setLoading(false);
    }, 6000);
  };
  return (
    <div className="flex flex-col">
      <div className="flex lg:flex-row flex-col w-full justify-around items-center pt-20">
        <div id="contacto" className=" lg:self-start">
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
                className="block py-2.5 px-0 w-full text-sm text-slate-300 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-teal-500 peer"
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
                className="block py-2.5 px-0 w-full text-sm text-slate-300 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-teal-500 peer"
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
                className="block py-2.5 px-0 w-full text-sm text-slate-300 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-teal-500 peer"
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
                required
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-b-lg rounded-r-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center border-r-8 border-b-8 border-black"
            >
              {loading ? (
                <>
                  <svg
                    aria-hidden="true"
                    className="inline w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-gray-800 mr-2"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                  Procesando...
                </>
              ) : (
                "Enviar"
              )}
            </button>
          </form>
        </div>
      </div>
      <div className="pb-40 mx-auto">
        {alerta &&
          (loading ? (
            <p className="text-slate-400">...</p>
          ) : (
            <div
              className={`${
                loading ? "opacity-0" : "opacity-100"
              } transition-opacity ease-in-out delay-150 duration-300`}
            >
              <Alerta />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Contacto;
