/* This example requires Tailwind CSS v2.0+ */
import { Popover, Transition } from "@headlessui/react";
import {
  ChartBarIcon,
  CursorClickIcon,
  MenuIcon,
  XIcon,
} from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { Fragment } from "react";

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
  { name: "Chi sono", href: "remote" },
  { name: "Dove lavorare", href: "remote" },
  { name: "Blog", href: "blog" },
  { name: "Risorse", href: "risorse" },
  { name: "Trovare lavoro", href: "risorse" },
];

export default function NavBar() {
  return (
    <Popover className="relative bg-primaryGreen">
      <div className=" mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:flex-1">
            <a href="#">
              <span className="sr-only">Lavoro nomade</span>
              <img
                className="h-8 w-auto sm:h-10"
                src="https://tailwindui.com/img/logos/workflow-mark-white.svg"
                alt=""
              />
            </a>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-green-500 rounded-md p-2 inline-flex items-center justify-center text-white hover:text-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>

          <Popover.Group as="nav" className="hidden md:flex space-x-10">
            {menu.map((option) => {
              if (option.href) {
                return (
                  <a
                    href={option.href}
                    className="text-base font-medium text-white hover:text-gray-200"
                  >
                    {option.name}
                  </a>
                );
              }

              if (option.submenu) {
                return (
                  <SubmenuComponent name={option.name} items={option.submenu} />
                );
              }

              return null;
            })}
          </Popover.Group>
          <div className="hidden items-center justify-end space-x-8 md:flex-1 lg:flex lg:w-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primaryYellow hover:bg-yellow-700"
              >
                Inizia qui
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
                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
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
                      <span className="ml-3 text-base font-medium text-white">
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
