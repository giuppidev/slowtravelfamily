import { CameraIcon } from "@heroicons/react/solid";
import { SEO } from "components/seo";
import Link from "next/link";

const people = [
  {
    name: "Barbara",
    role: "Mamma",
    imageUrl: "/our-story/barbi.png",
    bio: "Barbara è una giovane psicoterapeuta, mamma di Jacopo e lettrice incallita. È appassionata di avventure, educazione alternativa e consapevolezza. Amante dei viaggi e delle novità, é con suo figlio che sperimenta queste passioni, scoprendo una vita lenta fatta di curiosità e dettagli che trasmette a tutta la famiglia.",
    sentence: " Sempre alla ricerca della prossima meta da scoprire!",
  },
  {
    name: "Giuseppe",
    role: "Papà",
    imageUrl: "/our-story/giuppi.png",
    bio: "Giuseppe è un intraprendente sviluppatore, papà di Jacopo e runner. È una persona riflessiva, amante della meditazione, mente organizzativa della famiglia. Ama lanciarsi in nuove avventure, ma solo dopo averle accuratamente analizzate.",
    sentence:
      "Padre amorevole e attento, è la mente dietro ogni nuovo progetto di famiglia!",
  },
  {
    name: "Jacopo",
    role: "Piccolo viaggiatore",
    imageUrl: "/our-story/jaco.png",
    bio: "Jacopo è nato nel 2019, poco prima della pandemia, ed è il cuore e il motore delle nostre scelte. Ama correre, costruire e smontare qualsiasi cosa. Anima sensibile, è tanto curioso quanto amante della sua famiglia e per questo costituisce la vera ragione per vivere una vita lenta, fatta di presente e di momenti di scoperta e altri di coccole.",

    sentence:
      "A soli tre anni ha amici che provengono da ogni parte del mondo!",
  },
  {
    name: "Khaleese",
    role: "Gatta nera",
    imageUrl: "/our-story/kaki.png",
    bio: "Detta Kaki, è parte della nostra famiglia dalla sua nascita nel 2014. Amante della vita lenta, del cibo e dei divani, ha un ottimo spirito di adattamento. Preferisce l' aereo alla macchina ed è lei che ci fa decidere le prossime mete.",

    sentence: "Un altro motivo per stare più tempo in ogni nuovo posto!",
  },
];

export default function OurStory() {
  return (
    <>
      <SEO title="Famiglia Slow Travel" />

      <div className="overflow-hidden bg-white">
        <div className="relative mx-auto max-w-6xl py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-montserrat text-base sm:text-xl uppercase tracking-tight  text-gray-900 ">
              La nostra storia
            </h2>{" "}
            <p className="mx-auto text-left font-libre mt-3  text-3xl sm:text-5xl text-gray-800 sm:mt-4">
              Siamo una famiglia di nomadi digitali, amanti della natura, del
              viaggio e di ogni nuova scoperta.
            </p>
          </div>
          <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
            <div className="relative lg:col-start-2 lg:row-start-1">
              <div className="relative mx-auto max-w-prose text-base lg:max-w-none">
                <figure>
                  <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                    <img
                      className="rounded-lg object-cover object-center shadow-lg"
                      src="/our-story/slowtravelfamily.png"
                      alt="A lavorare in un bar nella splendida piazza di Ermopoli, Syros."
                      width={1184}
                      height={1376}
                    />
                  </div>
                  <figcaption className="mt-3 flex text-sm text-gray-500">
                    <CameraIcon
                      className="h-5 w-5 flex-none text-gray-400"
                      aria-hidden="true"
                    />
                    <span className="ml-2">
                      A lavorare in un bar nella splendida piazza di Hermopoli,
                      Syros.
                    </span>
                  </figcaption>
                </figure>
              </div>
            </div>
            <div className="mt-8">
              <div className="prose prose-indigo prose-lg mx-auto mt-5 text-gray-600 lg:col-start-1 lg:row-start-1 lg:max-w-none">
                <p>
                  Siamo una famiglia di nomadi digitali, amanti dei viaggi e
                  sempre alla ricerca di nuovi modi lenti per vivere le nostre
                  vite.
                </p>
                <p>
                  Abbiamo organizzato i nostri lavori per poter vivere una vita
                  viaggiando con nostro figlio di tre anni e la nostra gatta
                  nera.
                </p>
                <p>
                  Ci siamo conosciuti nel 2013, e da quando stiamo insieme
                  abbiamo sempre viaggiato. Siamo stati in tanti paesi in
                  Europa, ma abbiamo visitato anche la Malesia, parte dell' Asia
                  e pianificato un viaggio in America.
                </p>{" "}
                <p>
                  Da quando abbiamo avuto Jacopo, nel 2019, abbiamo cominciato a
                  sognare di avere più tempo per viaggiare, ma non sapevamo come
                  sistemare i nostri lavori per permetterci di uscire dalla
                  dinamica ferie/lavoro.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <div className="prose prose-indigo prose-lg mx-auto mt-5 text-gray-600 lg:col-start-1 lg:row-start-1 lg:max-w-none">
              <p>
                La pandemia Covid-19 ha cambiato, come per molti altri, le
                nostre idee e le nostri visioni della vita: la paura di
                ammalarsi, la perdita parziale di socialità e della possibilità
                di uscire dalle proprie case o dal proprio paese hanno
                sviluppato in noi la consapevolezza di poter vivere una sola
                vita e di volerla vivere diversamente, soprattutto per Jacopo.
              </p>
              <p>
                Nel gennaio 2022 abbiamo cominciato a pensare a come poter
                modificare le nostre abitudini e i nostri lavori: tante
                occupazioni che prima non era possibile spostare da remoto, ora
                erano fattibili anche viaggiando. Ci siamo organizzati per
                diventare nomadi digitali, e abbiamo approfondito
                l'homeschooling e la worldschooling per l'educazione di Jacopo.
              </p>
              <p>
                A Settembre 2022 eravamo pronti per il nostro primo viaggio in
                Grecia!{" "}
              </p>
              <p>
                Con questo blog e il nostro canale{" "}
                <a
                  target="_blank"
                  href="https://www.youtube.com/@famigliaslowtravel"
                  className="underline text-gray-600 hover:text-green-800 visited:text-primaryGreen"
                >
                  Youtube
                </a>
                abbiamo la possibilità di ispirare altre famiglie a fare la
                nostra scelta.{" "}
              </p>
              <p>Siamo così felici che tu sia qui!</p>
              <p>
                Alcune famiglie vendono ciò che hanno o smettono di lavorare per
                fare questa vita, noi crediamo invece che sia possibile
                mantenere le proprie radici e trasformare una vita stabile in
                una vita nomade, con la quale si può scegliere di viaggiare, ma
                anche di tornare a casa quando si desidera.
              </p>
              <p>
                Se desideri libertà per la tua vita e quella della tua famiglia,
                sei nel posto giusto!
              </p>
            </div>

            <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8 lg:py-24">
              <div className="space-y-12">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Chi siamo
                </h2>

                <ul
                  role="list"
                  className="space-y-12 lg:grid lg:grid-cols-1 lg:items-start lg:gap-x-8 lg:gap-y-12 lg:space-y-0"
                >
                  {people.map((person) => (
                    <li key={person.name}>
                      <div className="space-y-4 sm:grid sm:grid-cols-3 sm:gap-6 sm:space-y-0 lg:gap-8">
                        <div className="aspect-w-2 aspect-h-2 h-0 sm:aspect-w-3 sm:aspect-h-3">
                          <img
                            className="rounded-lg object-cover shadow-lg"
                            src={person.imageUrl}
                            alt=""
                          />
                        </div>
                        <div className="sm:col-span-2">
                          <div className="space-y-4">
                            <div className="space-y-1 text-lg font-medium leading-6">
                              <h1 className="text-2xl">{person.name}</h1>
                              <p className=" font-libre text-gray-900 italic">
                                {person.role}
                              </p>
                            </div>
                            <div className="text-lg">
                              <p className="text-gray-600">{person.bio}</p>
                            </div>
                            <div className="text-lg">
                              <p className="text-gray-900 italic">
                                {person.sentence}
                              </p>
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
        </div>
      </div>
    </>
  );
}
