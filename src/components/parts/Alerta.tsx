"use client";

import { Alert } from "flowbite-react";

export function Alerta() {
  return (
    <Alert color="info">
      <span className="font-medium">Mensaje enviado!</span> Muchas gracias por
      contactarme, te responderé tan pronto me sea posible.
    </Alert>
  );
}
