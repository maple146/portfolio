import Title from "@/components/title";

export default function About() {
  return (
    <div className="container grid grid-cols-2 py-8 gap-4 lg:gap-8">
      <div className="col-span-full flex justify-center mb-2 lg:mb-4">
        <Title text={"Sobre mi"} />
      </div>
      <div className="col-span-full lg:col-start-1 lg:col-end-2 flex flex-col">
        <Title text={"Quien soy?"} variant={"fullWidth"} />
        <p className="text-base lg:text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          luctus, ligula eget sagittis venenatis, sem nisl condimentum metus,
          eget cursus sem tellus vel nisl. Suspendisse efficitur tempor libero
          eu pharetra. Maecenas ullamcorper eros eros. Quisque mollis enim id
          tellus laoreet ultrices. Phasellus blandit eget nisl tristique
          aliquet. Quisque a risus nisl.
        </p>
      </div>
      <div className="col-span-full lg:col-start-2 lg:col-end-3 flex flex-col">
        <Title text={"A que me dedico?"} variant={"fullWidth"} />
        <p className="text-base lg:text-lg">
          Suspendisse leo ipsum, molestie id semper sed, tristique a metus.
          Suspendisse mollis mi sed ipsum euismod condimentum. Suspendisse sit
          amet fringilla mi. Donec sed lacinia quam. Curabitur elit erat,
          feugiat eget mollis quis, sollicitudin id orci. Cras ac enim non felis
          fringilla elementum. Nullam porta, tortor id sollicitudin tempor,
          ligula leo ultrices tortor, vitae finibus ligula risus et justo.
          Aenean venenatis purus quis pharetra venenatis. Aenean non porta quam.
        </p>
      </div>
      <div className="col-span-full lg:col-start-1 lg:col-end-2 flex flex-col">
        <Title text={"Que herramientas uso?"} variant={"fullWidth"} />
        <p className="text-base lg:text-lg">
          Donec quis dui odio. Nulla tellus lacus, pretium non arcu quis,
          aliquet viverra turpis. Pellentesque ac leo interdum, interdum quam
          eu, eleifend libero. Etiam rhoncus dolor nec arcu condimentum maximus.
          Pellentesque faucibus sem quis massa venenatis, gravida congue libero
          convallis. Proin interdum lacus nec nisi eleifend vulputate. Cras
          tincidunt consequat diam vel vestibulum, consectetur adipiscing elit.
          Etiam rhoncus dolor nec arcu condimentum maximus. Pellentesque
          faucibus sem quis massa venenatis, gravida congue libero convallis.
        </p>
      </div>
      <div className="col-span-full lg:col-start-2 lg:col-end-3 flex flex-col">
        <Title text={"Certificaciones"} variant={"fullWidth"} />
        <p className="text-base lg:text-lg">
          Aliquam auctor ultricies porttitor. Suspendisse interdum cursus diam
          et facilisis. Pellentesque at quam in est gravida laoreet. Phasellus
          sit amet ornare massa, ut scelerisque ex. Mauris posuere ut nisl eget
          luctus. Sed rutrum malesuada velit ut congue. Nullam in felis ex.
          Curabitur eros neque, venenatis nec velit sit amet, molestie malesuada
          orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
    </div>
  );
}
