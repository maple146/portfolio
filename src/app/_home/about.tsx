import CustomLink from "@/components/custom-link";
import Title from "@/components/title";

export default function About() {
  return (
    <div className="container grid grid-cols-2 py-8 gap-4 lg:gap-8">
      <div className="col-span-full flex justify-center mb-2 lg:mb-4">
        <Title text={"Sobre mi"} />
      </div>
      <div className="col-span-full lg:col-start-1 lg:col-end-2 flex flex-col">
        <Title text={"Quien soy?"} variant={"fullWidth"} />
        <p className="text-base lg:text-lg mb-4">
          Soy un programador autodidacta con más de 3 años de experiencia
          creando sitios y aplicaciones web en React. Durante este tiempo, he
          tenido la oportunidad de participar en el desarrollo de diversos
          proyectos, como sitios de e-commerce, e-learning, institucionales y
          landing pages.
        </p>

        <p className="text-base lg:text-lg">
          Me apasiona la creación de interfaces que sean visualmente atractivas,
          responsivas y que brinden una excelente experiencia de usuario.
        </p>
      </div>
      <div className="col-span-full lg:col-start-2 lg:col-end-3 flex flex-col">
        <Title text={"Experiencia"} variant={"fullWidth"} />
        <p className="text-base lg:text-lg mb-4">
          Desde el 2021, formo parte del equipo de EstoEs como Desarrollador
          Front-end, donde tengo las siguientes responsabilidades:
        </p>
        <ul className="list-disc list-inside text-sm leading-6 lg:text-base lg:leading-8">
          <li>Analizar y estimar tiempos de entrega</li>
          <li>Desarrollar y testear interfaces de usuario</li>
          <li>Brindar mantenimiento a proyectos finalizados</li>
          <li>Colaborar con los equipos de diseño y backend</li>
          <li>Crear y gestionar tareas en Jira/Asana</li>
          <li>Revisar y corregir Pull Requests</li>
        </ul>
      </div>
      <div className="col-span-full lg:col-start-1 lg:col-end-2 flex flex-col">
        <Title text={"Que herramientas uso?"} variant={"fullWidth"} />
        <p className="text-base lg:text-lg mb-2">
          Mi stack tecnológico se compone de:
        </p>
        <ul className="mb-4 list-disc list-inside text-sm leading-6 lg:text-base lg:leading-8">
          <li>HTML, CSS, Javascript, Responsive Design</li>
          <li>SASS, Bootstrap, Material-UI, TailwindCSS</li>
          <li>React.js, Next.js, Typescript</li>
        </ul>
        <p className="text-base lg:text-lg">
          Adicionalmente, estoy en proceso de aprender a utilizar Jest para
          mejorar la calidad de mi código.
        </p>
      </div>
      <div className="col-span-full lg:col-start-2 lg:col-end-3 flex flex-col">
        <Title text={"Certificaciones"} variant={"fullWidth"} />
        <div className="flex flex-col gap-2">
          {/* Refactorizar */}
          <CustomLink
            url={
              "https://www.freecodecamp.org/certification/lga-dev/responsive-web-design"
            }
            text={"FreeCodeCamp - Responsive Web Design"}
          />
          <CustomLink
            url={
              "https://www.freecodecamp.org/certification/lga-dev/javascript-algorithms-and-data-structures"
            }
            text={"FreeCodeCamp - Algorithms and Data Structures"}
          />
          <CustomLink
            url={
              "https://www.freecodecamp.org/certification/lga-dev/front-end-libraries"
            }
            text={"FreeCodeCamp - Frontend Development Libraries"}
          />
          <CustomLink
            url={
              "https://drive.google.com/file/d/1Ye6URC3oWzy3rzMCE3eYVsNJ5hKeiiky/view"
            }
            text={"Alkemy Bootcamp - Certificado de finalización"}
          />
          <CustomLink
            url={"http://efset.org/cert/uKizB6"}
            text={"EFSET - Certificado de nivel de inglés"}
          />
        </div>
      </div>
    </div>
  );
}
