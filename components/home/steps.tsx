import { getCloudinaryPath } from "utils/cloudinary";
import { Step } from "./step";

const steps: Step[] = [
  {
    name: "Lavoro da remoto",
    number: 1,
    imageUrl: getCloudinaryPath("remoteworking_zawv50.png"),
    description:
      "Lavorare da remoto ci permette di vivere viaggiando. In questa sezione troverai molti consigli utili.",
    href: "/blog/2022/10/lavorare-da-remoto",
  },
  {
    name: "Worldschooling",
    number: 2,
    imageUrl: getCloudinaryPath("school_hrvopp.png"),
    description:
      "Per l'educazione di nostro figlio abbiamo deciso di adottare la worldschooling, un modo per imparare dall'esperienza nel mondo.",
    href: "/blog/2022/11/worldschooling",
  },
  {
    name: "Slow travel",
    number: 3,
    imageUrl: getCloudinaryPath("slowtravel_qipkdv.png"),
    description:
      "Viaggiare lentamente ci permette di entrare realmente a contatto con le realtà locali, conoscendo meglio nuove culture assaporando ogni esperienza lentamente.",
    href: "/blog/2022/10/5-consigli-per-viaggiare-lentamente",
  },
];

export const Steps2 = () => {
  return (
    <div className="relative bg-white px-4  sm:px-6 lg:px-8 p-8 ">
      <div className="relative mx-auto max-w-7xl">
        <div className="text-center  font-montserrat">
          <h2 className=" text-base sm:text-xl uppercase tracking-tight  text-gray-900 ">
            Diventa una famiglia slow travel
          </h2>{" "}
          <p className="mx-auto font-libre mt-3 max-w-5xl text-3xl sm:text-5xl text-gray-800 sm:mt-4">
            Il nostro grande viaggio
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
          {steps.map((step, k) => (
            <Step step={step} key={k} />
          ))}
        </div>
      </div>
    </div>
  );
};
