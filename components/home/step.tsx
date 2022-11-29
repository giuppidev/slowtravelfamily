import Image from "next/image";
import Link from "next/link";

export interface Step {
  name: string;
  number: number;
  imageUrl: string;
  description: string;
  href: string;
}

interface StepProps {
  step: Step;
}

export const Step = ({
  step: { name, description, imageUrl, href },
}: StepProps) => {
  return (
    <Link href={href}>
      <a key={name} className="flex flex-col  overflow-hidden  cursor-pointer">
        <div className="flex-shrink-0 rounded">
          <Image
            height={320}
            width={550}
            className="h-72 w-full object-cover rounded-md shadow-xl"
            src={imageUrl}
            alt={name}
          />
        </div>
        <div className="flex-1 bg-white py-4 flex flex-col justify-between">
          <div className="flex-1 ">
            <div className=" mt-1 font-libre flex flex-col justify-between h-full">
              <div>
                <p className="text-2xl f text-gray-900 italic">{name}</p>
                <p className="mt-3 text-base text-gray-800">{description}</p>
              </div>
              <div>
                <span className="border-b font-libre italic border-dashed border-b-gray-900 text-gray-500 hover:text-gray-900 text-base">
                  Scopri di più
                </span>
              </div>
            </div>
          </div>
          <div className="mt-6 flex items-center"></div>
        </div>
      </a>
    </Link>
  );
};

const readTime = (rt: number) => {
  if (rt === 1) {
    return "1 minuto";
  } else {
    return `${rt} minuti`;
  }
};
