import About from "@/components/About";
import Contacto from "@/components/Contact";
import Encabezado from "@/components/Head";
import Proyectos from "@/components/Project";

const Home = () => {
  return (
    <>
      <Encabezado />
      <Proyectos />
      <About />
      <Contacto />
    </>
  );
};

export default Home;
