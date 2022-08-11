import { ArrowCircleRightIcon, UserIcon } from "@heroicons/react/solid";

export default function Hero() {
  return (
    <div className="bg-white py-16 lg:py-24">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:flex ">
        <div className=" flex flex-col gap-4 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left max-w-7xl">
          <h1>
            <span className="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl">
              <span className="block text-gray-700">Lavora e vivi </span>
              <span className="block text-primaryGreen">
                ovunque<span className="text-gray-700">!</span>
              </span>
            </span>
          </h1>
          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua ad ad non deserunt sunt.
          </p>
          <div className="mt-8 flex">
            <div className="inline-flex rounded-md shadow">
              <a
                href="#"
                className="flex flex-row gap-1 w-32 items-center justify-center px-3 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primaryYellow hover:bg-yellow-700"
              >
                <ArrowCircleRightIcon className="w-6 h-6" />
                <span className="inline ">Inizia qui</span>
              </a>
            </div>
            <div className="ml-3 inline-flex">
              <a
                href="#"
                className="flex flex-row gap-1 w-32 items-center justify-center px-3 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primaryGreen hover:bg-green-900"
              >
                <UserIcon className="w-6 h-6" />
                <span className="inline ">Chi sono</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
          <div className="mx-auto px-4 sm:max-w-3xl sm:px-6 lg:p-0 lg:h-full">
            <div className="aspect-w-10 aspect-h-6 rounded-xl shadow-xl overflow-hidden sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full">
              <img
                className="object-cover lg:h-full lg:w-full"
                src="https://nuvola.corriere.it/files/2022/03/nomadi-digitali-640x480.jpeg?v=78304"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
