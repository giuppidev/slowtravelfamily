export const HeroPage = () => {
  return (
    <div
      className={`relative top-0 overflow-hidden  bg-center    bg-hero h-[20rem] md:h-[40rem]  bg-cover  `}
    >
      <div className="absolute font-montserrat  text-5xl md:text-6xl xl:text-7xl top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden  ">
        <div className="flex justify-left items-left h-full ">
          <div className=" flex  flex-col gap-6 justify-end items-start text-white px-6 md:px-12 py-1">
            <h1 className="font-libre [text-shadow:_0_1px_6px_rgb(0_0_0_/_90%)] font-bold  text-3xl md:text-4xl xl:text-5xl mb-3 md:mb-24 tracking-tight  max-w-5xl">
              Una famiglia è un percorso,
              <br />
              non una destinazione.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};
