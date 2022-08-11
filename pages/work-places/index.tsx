import Map from "components/map";
import { WorkPlacePreview } from "components/work-place-preview";
import { WorkPlace } from "contentlayer/generated";
import { InferGetStaticPropsType } from "next";
import { getWorkPlacesData } from "utils/work-places";

export async function getStaticProps() {
  const workPlaces = getWorkPlacesData().filter((p) => {
    return p.frontMatter._raw.sourceFilePath;
  });

  return {
    props: { workPlaces },
  };
}

export default function WorkPlaces({
  workPlaces,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className="bg-white">
      <div className=" mx-auto h-[296px] sm:px-6 lg:px-8 px-4 max-w-7xl py-4">
        <Map locations={workPlaces.map((place) => place.frontMatter)} />
      </div>

      <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-12">
        <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
          <div className="space-y-5 sm:space-y-4">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Dove lavorare
            </h2>
            <p className="text-xl text-gray-500">
              Lista di posti in cui lavorare da remoto.
            </p>
          </div>
          <div className="lg:col-span-2">
            <ul
              role="list"
              className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:gap-x-8"
            >
              {workPlaces.map((place, k) => (
                <WorkPlacePreview
                  author={place.author}
                  workPlace={place.frontMatter}
                  key={k}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
