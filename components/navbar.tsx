/* This example requires Tailwind CSS v2.0+ */
import { Popover, Transition } from "@headlessui/react";
import {
  ChartBarIcon,
  CursorClickIcon,
  MenuIcon,
  XIcon,
} from "@heroicons/react/outline";
import {
  ArrowCircleRightIcon,
  ChevronDownIcon,
  FlagIcon,
} from "@heroicons/react/solid";
import { useRouter } from "next/router";
import { Fragment } from "react";
import { LogoL, LogoN } from "./logo";

type HeroIcon = (props: React.ComponentProps<"svg">) => JSX.Element;

interface Submenu {
  name: string;
  description: String;
  href: string;
  icon: HeroIcon;
}

interface Menu {
  name: String;
  href?: string;
  submenu?: Submenu[];
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const remoteWorking = [
  {
    name: "Mappa",
    description: "Guarda tutti i luoghi in cui lavorare",
    href: "#",
    icon: ChartBarIcon,
  },
  {
    name: "Attrezzatura",
    description: "Attrezzatura per lavorare da remoto",
    href: "#",
    icon: CursorClickIcon,
  },
];

const menu: Menu[] = [
  { name: "Home", href: "/" },
  { name: "Dove lavorare", href: "/work-places" },
  // { name: "Trovare lavoro", href: "/jobs" },
  { name: "Risorse", href: "/resources" },
  { name: "Blog", href: "/blog" },
  { name: "Chi sono", href: "/who-am-i" },
];

export default function NavBar() {
  const router = useRouter();

  const linkActive = (path: string) => {
    if (path === "/") {
      return router.pathname === path;
    }

    return router.pathname.startsWith(path);
  };

  return (
    <Popover className="relative bg-primaryGreen px-4 lg:px-8  ">
      <div className=" mx-auto px-4 sm:px-6  max-w-7xl h-18">
        <div className="flex flex-1 justify-between items-center sm:items-stretch  md:justify-start md:space-x-10 h-full">
          <div className="flex justify-start lg:flex-1 py-2">
            <a href="/" className="flex items-end text-white text-4xl py-2">
              <span className="sr-only">Lavoro nomade</span>
              <LogoL className="h-10 w-10 text-white" />
              <span className="-ml-0.5 pr-4 -mb-1">avoro</span>
              <LogoN className="h-10 w-10 text-white" />
              <span className="-ml-1 pr-4 -mb-1">omade</span>
            </a>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-primaryGreen hover:text-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-700">
              <span className="sr-only">Apri menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>

          <Popover.Group
            as="div"
            className="hidden md:flex space-x-10 flex-shrink-0 pt-1"
          >
            {menu.map((option, k) => {
              if (option.href) {
                return (
                  <a
                    href={option.href}
                    key={k}
                    className={classNames(
                      "inline-flex items-center px-1 pt-1 border-b-4 text-base font-semibold",
                      linkActive(option.href)
                        ? "border-b-4 border-b-primaryYellow text-primaryYellow"
                        : "text-white border-b-transparent hover:text-primaryYellow hover:border-b-4 hover:border-b-primaryYellow"
                    )}
                  >
                    {option.name}
                  </a>
                );
                return (
                  <a
                    href={option.href}
                    key={k}
                    className="inline-flex items-center border-b-4 border-b-transparent  text-base h-full font-medium text-white hover:text-primaryYellow hover:border-b-4 hover:border-b-primaryYellow"
                  >
                    {option.name}
                  </a>
                );
              }

              if (option.submenu) {
                return (
                  <SubmenuComponent
                    key={k}
                    name={option.name}
                    items={option.submenu}
                  />
                );
              }

              return null;
            })}
          </Popover.Group>
          <div className="hidden items-center justify-end space-x-8 md:flex-1 lg:flex lg:w-0">
            <div className="flex rounded-md shadow">
              <a
                href="#"
                className="flex flex-row gap-1 w-32 items-center justify-center px-3 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-500 hover:bg-red-700"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="youtube"
                  className="h-6 w-6"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <path
                    fill="currentColor"
                    d="M549.7 124.1c-6.281-23.65-24.79-42.28-48.28-48.6C458.8 64 288 64 288 64S117.2 64 74.63 75.49c-23.5 6.322-42 24.95-48.28 48.6-11.41 42.87-11.41 132.3-11.41 132.3s0 89.44 11.41 132.3c6.281 23.65 24.79 41.5 48.28 47.82C117.2 448 288 448 288 448s170.8 0 213.4-11.49c23.5-6.321 42-24.17 48.28-47.82 11.41-42.87 11.41-132.3 11.41-132.3s0-89.44-11.41-132.3zm-317.5 213.5V175.2l142.7 81.21-142.7 81.2z"
                  ></path>
                </svg>
                <span className="inline ">Youtube</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute z-50 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-end w-full">
                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-700">
                  <span className="sr-only">Close menu</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {menu.map((item, k) => (
                    <a
                      key={k}
                      href={item.href}
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    >
                      <span className="ml-3 text-base font-medium text-gray-800">
                        {item.name}
                      </span>
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}

interface SubmenuComponentProps {
  name: String;
  items: Submenu[];
}

const SubmenuComponent = ({ name, items }: SubmenuComponentProps) => {
  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button
            className={`${
              open ? "text-gray-900" : "text-gray-500"
            } group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
          >
            <span>{name}</span>
            <ChevronDownIcon
              className={`${
                open ? "text-gray-600" : "text-gray-400"
              } ml-2 h-5 w-5 group-hover:text-gray-500`}
              aria-hidden="true"
            />
          </Popover.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                  {items.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                    >
                      <item.icon
                        className="flex-shrink-0 h-6 w-6 text-indigo-600"
                        aria-hidden="true"
                      />
                      <div className="ml-4">
                        <p className="text-base font-medium text-white">
                          {item.name}
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                          {item.description}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};
