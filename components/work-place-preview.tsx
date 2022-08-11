import type { Author } from "authors";
import Link from "next/link";
import { WorkPlace } from "../.contentlayer/generated";

interface WorkPlacePreviewProps {
  workPlace: Omit<WorkPlace, "body">;
  author: Author;
}

export const WorkPlacePreview = ({
  workPlace,
  author,
}: WorkPlacePreviewProps) => {
  return (
    <div key={workPlace.name} className="flex flex-col ">
      <li key={workPlace.name}>
        <div className="space-y-4">
          <div className="aspect-w-3 aspect-h-2">
            <img
              className="object-cover shadow-lg rounded-lg"
              src={workPlace.imageUrl}
              alt=""
            />
          </div>
          <div className="text-lg leading-6 font-medium space-y-1">
            <h3>{workPlace.name}</h3>
            <p className="text-indigo-600">{workPlace.address}</p>
          </div>
          <div className="text-lg">
            <p className="text-gray-500">{workPlace.description}</p>
          </div>
          <Link href={workPlace.href}>
            <a href={workPlace.href} className="underline">
              Vedi dettagli
            </a>
          </Link>
        </div>
      </li>
    </div>
  );
};
