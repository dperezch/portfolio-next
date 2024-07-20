"use client";

import { Carousel } from "flowbite-react";

interface ImagePaths {
  imagePaths: string[];
}

export function Carrusel({ imagePaths }: ImagePaths) {
  return (
    <div className="h-56 sm:h-80 xl:h-80 2xl:h-96 xl:max-w-[45vw] mx-auto">
      <Carousel>
        {imagePaths.map((path, index) => (
          <img key={index} src={path} alt={`imagen ${index + 1}`} />
        ))}
      </Carousel>
    </div>
  );
}
