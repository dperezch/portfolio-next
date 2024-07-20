"use client";

import { Navbar } from "flowbite-react";

export function Barra() {
  return (
    <Navbar fluid rounded className="bg-slate-800 fixed top-0 w-full">
      <Navbar.Brand>
        <span className="text-slate-200 self-center whitespace-nowrap text-xl font-semibold">
          Portafolio
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="#" className="text-slate-200" active>
          Inicio
        </Navbar.Link>
        <Navbar.Link className="text-slate-200" href="#proyectos">
          Proyectos
        </Navbar.Link>
        <Navbar.Link className="text-slate-200" href="#habilidades">
          Habilidades
        </Navbar.Link>
        <Navbar.Link className="text-slate-200" href="#acerca">
          Acerca de mí
        </Navbar.Link>
        <Navbar.Link className="text-slate-200" href="#contacto">
          Contacto
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
