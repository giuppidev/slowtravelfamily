const steps = [
  {
    name: "Ispirazione",
    number: 1,
    imageUrl:
      "https://blog.deskshake.com/wp-content/uploads/2019/12/libri-per-nomadi-digitali-1170x550.jpg",
    description: "blasbladlbalkjfalkdjalskdjlaksdj",
    link: "#",
  },
  {
    name: "Trovare lavoro",
    number: 2,
    imageUrl:
      "https://www.travelworldaddict.com/wp-content/uploads/2019/06/nomadi-digitali-1068x712.jpg",
    description: "blasbladlbalkjfalkdjalskdjlaksdj",
    link: "#",
  },
  {
    name: "Destinazioni",
    number: 3,

    imageUrl:
      "https://blog.deskshake.com/wp-content/uploads/2017/10/nomadi-digitali-1170x550.jpeg",
    description: "blasbladlbalkjfalkdjalskdjlaksdj",
    link: "#",
  },
];

export default function Steps() {
  return (
    <div className="bg-white">
      <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
              Come diventare un nomade digitale
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              In tre semplici passi.
            </p>
          </div>
          <ul
            role="list"
            className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8"
          >
            {steps.map((step) => (
              <li key={step.number}>
                <div className="space-y-4">
                  <div className="relative aspect-w-3 aspect-h-2">
                    <img
                      className="object-cover shadow-lg rounded-lg"
                      src={step.imageUrl}
                      alt=""
                    />
                    <div className="absolute top-2 left-4 text-white text-7xl">
                      {step.number}.
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="text-lg leading-6 flex flex-col gap-4 font-medium space-y-1 text-primaryGreen">
                      <div className="text-2xl bg-primaryGreen text-white w-fit px-3">
                        {step.name}
                      </div>
                      <p className="text-gray-700">{step.description}</p>
                      <div className="mt-8 flex">
                        <div className="inline-flex rounded-md shadow">
                          <a
                            href="#"
                            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primaryYellow hover:bg-yellow-700"
                          >
                            SCOPRI
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
