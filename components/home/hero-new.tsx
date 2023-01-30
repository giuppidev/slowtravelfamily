import { HeroPage } from "components/home/hero-page";
import Link from "next/link";
import { getCloudinaryPath } from "utils/cloudinary";

const heroSub = <> </>;

export default function Hero() {
  return (
    <div>
      <HeroPage />
      <section className="overflow-hidden bg-white pt-8">
        <div className="text-primaryGreen relative mx-auto max-w-7xl px-4 pt-20 pb-12 sm:px-6 lg:px-8 lg:py-20">
          <svg
            className="absolute top-full left-0 translate-x-80 -translate-y-24 transform lg:hidden"
            width={784}
            height={404}
            fill="none"
            viewBox="0 0 784 404"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="e56e3f81-d9c1-4b83-a3ba-0d0ac8c32f32"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-primaryGreen opacity-20"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={784}
              height={404}
              fill="url(#e56e3f81-d9c1-4b83-a3ba-0d0ac8c32f32)"
            />
          </svg>

          <svg
            className="absolute right-full top-1/2 hidden translate-x-1/2 -translate-y-1/2 transform lg:block"
            width={404}
            height={784}
            fill="none"
            viewBox="0 0 404 784"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="56409614-3d62-4985-9a10-7ca758a8f4f0"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-primaryGreen opacity-20"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={784}
              fill="url(#56409614-3d62-4985-9a10-7ca758a8f4f0)"
            />
          </svg>

          <div className="relative lg:flex lg:items-center">
            <div className="hidden lg:block lg:flex-shrink-0">
              <img
                className="h-80 w-80 rounded-full xl:h-96 xl:w-96"
                src={getCloudinaryPath("slowtravelfamily_loffpc.png")}
                alt=""
              />
            </div>

            <div className="relative lg:ml-10">
              <svg
                className="absolute top-0 left-0 h-36 w-36 -translate-x-8 -translate-y-24 transform text-primaryGreen opacity-20"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 144 144"
                aria-hidden="true"
              >
                <path
                  strokeWidth={2}
                  d="M41.485 15C17.753 31.753 1 59.208 1 89.455c0 24.664 14.891 39.09 32.109 39.09 16.287 0 28.386-13.03 28.386-28.387 0-15.356-10.703-26.524-24.663-26.524-2.792 0-6.515.465-7.446.93 2.327-15.821 17.218-34.435 32.11-43.742L41.485 15zm80.04 0c-23.268 16.753-40.02 44.208-40.02 74.455 0 24.664 14.891 39.09 32.109 39.09 15.822 0 28.386-13.03 28.386-28.387 0-15.356-11.168-26.524-25.129-26.524-2.792 0-6.049.465-6.98.93 2.327-15.821 16.753-34.435 31.644-43.742L121.525 15z"
                />
              </svg>
              <blockquote className="relative">
                <div className="text-xl    text-gray-700">
                  <p className="text-3xl sm:text-3xl pb-5 text-gray-700 font-libre">
                    Siamo Barbara e Giuseppe, due genitori nomadi digitali.
                  </p>
                  <p className=" font-libre ">
                    Con nostro figlio Jacopo e la nostra gatta Kaki abbiamo
                    deciso di vivere viaggiando, lavorando da remoto ed educando
                    nostro figlio con la worldschooling.
                  </p>
                  <p className=" font-libre pt-2">
                    Come Famiglia Slow Travel ti forniamo guide e consigli per
                    viaggiare lentamente con i tuoi figli. La nostra speranza è
                    ispirare altre famiglie che sono alla ricerca della loro{" "}
                    <em>felicità</em>.
                  </p>
                  <div className="pt-5">
                    <Link href="/our-story" passHref>
                      <a className="border-b pt-4 font-libre italic border-dashed border-b-gray-900 text-gray-500 hover:text-gray-900 text-base">
                        Scopri tutta la nostra storia
                      </a>
                    </Link>
                  </div>
                </div>
              </blockquote>
            </div>
            <div className="block lg:hidden lg:flex-shrink-0 mt-12">
              <img
                className="h-80 w-80 rounded-full xl:h-96 xl:w-96"
                src={getCloudinaryPath("slowtravelfamily_loffpc.png")}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
