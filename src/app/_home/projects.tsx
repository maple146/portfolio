import Card from "@/components/card";
import Title from "@/components/title";

export default function Projects() {
  return (
    <div className="container grid grid-cols-3 py-8 gap-4 lg:gap-8">
      <div className="col-span-full flex justify-center mb-2 lg:mb-4">
        <Title text={"Proyectos"} />
      </div>
      {/* Refactorizar */}
      <div className="col-span-full lg:col-start-1 lg:col-end-2 flex flex-col">
        <Card
          title={"Telecom Institucional"}
          description={"Descripcion"}
          img={"institucional.png"}
          url={"https://institucional.telecom.com.ar/"}
        />
      </div>
      <div className="col-span-full lg:col-start-2 lg:col-end-3 flex flex-col">
        <Card
          title={"Alleata"}
          description={"Descripcion"}
          img={"alleata.png"}
          url={""}
        />
      </div>
      <div className="col-span-full lg:col-start-3 lg:col-end-4 flex flex-col">
        <Card
          title={"Personal"}
          description={"Descripcion"}
          img={"paginaspersonal.png"}
          url={""}
        />
      </div>
      <div className="col-span-full lg:col-start-1 lg:col-end-2 flex flex-col">
        <Card
          title={"Mas mecanico"}
          description={"Descripcion"}
          img={"masmecanico.png"}
          url={"https://masmecanico.com.mx/"}
        />
      </div>
      <div className="col-span-full lg:col-start-2 lg:col-end-3 flex flex-col">
        <Card
          title={"DAP Latam"}
          description={"Descripcion"}
          img={"daplatam.png"}
          url={"https://dap-latam.com/"}
        />
      </div>
      <div className="col-span-full lg:col-start-3 lg:col-end-4 flex flex-col">
        <Card
          title={"Vienissima"}
          description={"Descripcion"}
          img={"vienissima.png"}
          url={"https://www.vienissima.ar/"}
        />
      </div>
      <div className="col-span-full lg:col-start-1 lg:col-end-2 flex flex-col">
        <Card
          title={"Savencia"}
          description={"Descripcion"}
          img={"savencia.png"}
          url={""}
        />
      </div>
      <div className="col-span-full lg:col-start-2 lg:col-end-3 flex flex-col">
        <Card
          title={"Club de Congelados"}
          description={"Descripcion"}
          img={"clubdecongelados.png"}
          url={""}
        />
      </div>
    </div>
  );
}
