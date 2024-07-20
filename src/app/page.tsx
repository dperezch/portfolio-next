import About from "@/components/About";
import Contacto from "@/components/Contact";
import Encabezado from "@/components/Head";
import Proyectos from "@/components/Project";
import Skills from "@/components/Skills";

const Home = () => {
  return (
    <>
      <Encabezado />
      <Proyectos />
      <Skills />
      <About />
      <Contacto />
    </>
  );
};

export default Home;
