import { TurleIcon } from "components/turtle";
import { Logo } from "../logo";

export const HeroPage = () => {
  return (
    <div
      className={`relative top-0 overflow-hidden bg-right   bg-hero h-[42rem] md:h-[38rem]  bg-cover  `}
    >
      <div className="absolute font-montserrat  text-5xl md:text-6xl xl:text-7xl top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden  ">
        <div className="flex justify-left items-left h-full ">
          <div className=" flex flex-col gap-6 justify-left items-start text-white px-6 md:px-12 py-6">
            <h1 className="font-libre   text-3xl md:text-4xl xl:text-5xl tracking-tight mb-12 max-w-5xl">
              Una famiglia che vive <span className="">viaggiando</span>,
              lavorando da <span className="">remoto</span> e con un figlio in{" "}
              <span className="">worldschooling</span> <br />
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};
