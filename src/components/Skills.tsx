import IconSkill from "./icons/IconSkill";
import { Avatar } from "flowbite-react";

const Skills = () => {
  const icons = [
    {
      name: "html icon",
      src: "/html_icon.png",
    },
    {
      name: "css icon",
      src: "/css_icon.png",
    },
    {
      name: "javascript icon",
      src: "/js_icon.png",
    },
    {
      name: "vuejs icon",
      src: "/vuejs_icon.png",
    },
    {
      name: "reactjs icon",
      src: "/reactjs_icon.png",
    },
    {
      name: "typescript icon",
      src: "/typescript_icon.png",
    },
    {
      name: "nextjs icon",
      src: "/nextjs_icon.png",
    },
    {
      name: "nuxtjs icon",
      src: "/nuxtjs_icon.png",
    },
    {
      name: "handlebars icon",
      src: "/handlebars_icon.png",
    },
    {
      name: "tailwind icon",
      src: "/tailwind_icon.png",
    },
    {
      name: "bootstrap icon",
      src: "/bootstrap_icon.png",
    },
  ];

  const icon2 = [
    {
      name: "nodejs icon",
      src: "/nodejs_icon.png",
    },
    {
      name: "express icon",
      src: "/express_icon.png",
    },
    {
      name: "postgresql icon",
      src: "/postgresql_icon.png",
    },
    {
      name: "mongodb icon",
      src: "/mongodb_icon.png",
    },
    {
      name: "aws icon",
      src: "/aws_icon.png",
    },
  ];

  const icon3 = [
    {
      name: "git icon",
      src: "/git_icon.png",
    },
    {
      name: "vscode icon",
      src: "/vscode_icon.png",
    },
    {
      name: "postman icon",
      src: "/postman_icon.png",
    },
    {
      name: "terminal icon",
      src: "/terminal_icon.png",
    },
    {
      name: "androidstudio icon",
      src: "/androidstudio_icon.png",
    },
  ];
  return (
    <div id="habilidades" className="py-20">
      <div className="text-center flex justify-center">
        <IconSkill />
        <h1 className="mb-4 text-3xl font-bold tracking-tight leading-none md:text-5xl lg:text-7xl text-slate-500">
          Habilid<span className="text-teal-500">a</span>des
        </h1>
      </div>
      <div className="flex flex-col text-center mt-10">
        <h2 className="lg:text-4xl text-slate-500 tracking-tight font-semibold">
          Frontend
        </h2>
        <div className="flex justify-center flex-wrap gap-10 py-10">
          {icons.map((icon, index) => (
            <Avatar
              key={index}
              img={icon.src}
              alt={icon.name}
              bordered
              size="lg"
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col text-center mt-10">
        <h2 className="lg:text-4xl text-slate-500 tracking-tight font-semibold">
          Backend
        </h2>
        <div className="flex justify-center flex-wrap gap-10 py-10">
          {icon2.map((icon, index) => (
            <Avatar
              key={index}
              img={icon.src}
              alt={icon.name}
              bordered
              size="lg"
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col text-center mt-10">
        <h2 className="lg:text-4xl text-slate-500 tracking-tight font-semibold">
          Otros
        </h2>
        <div className="flex justify-center flex-wrap gap-10 py-10">
          {icon3.map((icon, index) => (
            <Avatar
              key={index}
              img={icon.src}
              alt={icon.name}
              bordered
              size="lg"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
