/* This example requires Tailwind CSS v2.0+ */
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment, useCallback, useEffect, useState } from "react";
import { Logo, Logo2, Logo3 } from "./logo";

const social = [
  {
    name: "Youtube",
    href: "https://www.youtube.com/@famigliaslowtravel",
    classes: "bg-red-500 hover:bg-red-700",
    icon: (props: any) => (
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
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/famigliaslowtravel",
    classes: "bg-pink-500 hover:bg-pink-700",
    icon: (props: any) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
];

interface Submenu {
  name: string;
  description: String;
  href: string;
}

interface Menu {
  name: String;
  href?: string;
  submenu?: Submenu[];
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const menu: Menu[] = [
  { name: "Home", href: "/" },
  { name: "Blog", href: "/blog" },
  {
    name: "Diventare nomadi",
    submenu: [
      {
        name: "Lavoro remoto",
        description: "Risorse per aiutarti a lavorare ovunque",
        href: "/blog/2022/10/lavorare-da-remoto",
      },
      {
        name: "Worldschooling",
        description: "Come educare i figli viaggiando",
        href: "/blog/2022/11/worldschooling",
      },
      {
        name: "Viaggiare con figli",
        description: "Viaggiare con i proprio figli lentamente",
        href: "/blog/2022/10/5-consigli-per-viaggiare-lentamente",
      },
    ],
  },

  { name: "La nostra storia", href: "/our-story" },
];

export default function NavBar() {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);

  const handleNavigation = useCallback(
    (e: any) => {
      const position = window.pageYOffset;
      if (position > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    },
    [isScrolled]
  );

  useEffect(() => {
    window.addEventListener("scroll", handleNavigation);

    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);
  const linkActive = (path: string) => {
    if (path === "/") {
      return router.pathname === path;
    }

    return router.pathname.startsWith(path);
  };

  return (
    <Popover
      className={`sticky top-0 z-50  shadow transition-all duration-100 font-montserrat
    ${isScrolled ? "bg-white text-gray-800" : "bg-white text-gray-800"}`}
    >
      <div className="sticky  mx-auto px-4 sm:px-10  max-w-8xl h-28 ">
        <div className="flex flex-1 justify-between items-center   md:justify-start md:space-x-10 h-full">
          <div className="flex justify-start lg:flex-1 py-2">
            <Link href={"/"} passHref>
              <a className="flex items-center font-montserrat  text-xl py-2">
                <span className="sr-only">Slow travel family</span>

                <span className="-ml-0.5 pr-4 -mb-1 flex gap-2 items-center">
                  <Logo3 className="h-20 w-20 text-primaryGreen " />{" "}
                </span>
              </a>
            </Link>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button
              className={`bg-white rounded-md p-2 inline-flex items-center justify-center  hover:text-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primaryGreen  text-gray-800`}
            >
              <span className="sr-only">Apri menu</span>
              <MenuIcon className="h-10 w-10" aria-hidden="true" />
            </Popover.Button>
          </div>

          <Popover.Group
            as="div"
            className="hidden md:flex space-x-1  lg:space-x-6 h-10 rounded  pt-1"
          >
            {menu.map((option, k) => {
              if (option.href) {
                return (
                  <a
                    href={option.href}
                    key={k}
                    className={classNames(
                      "inline-flex items-center rounded p-3 text-base uppercase",
                      "  hover:bg-primaryGreen hover:text-white"
                    )}
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
          <div className="hidden items-center justify-end space-x-4 md:flex-1 lg:flex lg:w-0">
            {social.map((soc, k) => (
              <div className="flex rounded-md shadow" key={k}>
                <a
                  href={soc.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`flex flex-row gap-1 w-32 items-center justify-center px-3 py-3 border border-transparent text-base font-medium rounded-md text-white ${soc.classes}`}
                >
                  <soc.icon />
                  <span className="inline ">{soc.name}</span>
                </a>
              </div>
            ))}
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
                  {menu.map((item, k) => {
                    if (item.href) {
                      return (
                        <a
                          key={k}
                          href={item.href}
                          className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                        >
                          <span className="ml-3 text-base font-medium text-gray-800">
                            {item.name}
                          </span>
                        </a>
                      );
                    }
                    if (item.submenu) {
                      return (
                        <>
                          {item.submenu.map((sub, k) => (
                            <a
                              key={k}
                              href={sub.href}
                              className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                            >
                              <span className="ml-3 text-base font-medium text-gray-800">
                                {sub.name}
                              </span>
                            </a>
                          ))}
                        </>
                      );
                    }
                    return null;
                  })}
                  <div className="flex flex-col gap-4">
                    {social.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="text-gray-400 hover:text-gray-500 flex gap-1"
                      >
                        <span className="sr-only">{item.name}</span>
                        <item.icon className="h-6 w-6" aria-hidden="true" />
                        <span className="inline ">{item.name}</span>
                      </a>
                    ))}
                  </div>
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
  const [isShowing, setIsShowing] = useState(false);
  return (
    <Popover className="relative inline-flex">
      {({ open }) => (
        <>
          <Popover.Button
            className={classNames(
              "relative inline-flex items-center p-3 rounded text-base  focus:outline-none uppercase after:content-[' '] after:block after:h-6 after:absolute after:-bottom-3 after:w-full",
              "  hover:bg-primaryGreen hover:text-white",
              isShowing ? "  bg-primaryGreen text-white" : ""
            )}
            onMouseEnter={() => setIsShowing(true)}
            onMouseLeave={() => setIsShowing(false)}
          >
            <span>{name}</span>
            <ChevronDownIcon
              className={`group-hover:text-primaryYellow  ml-2 h-5 w-5 `}
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
            show={isShowing}
          >
            <Popover.Panel
              className="absolute z-10 -ml-4 top-12 border-2 border-primaryGreen rounded transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
              onMouseLeave={() => setIsShowing(false)}
              onMouseEnter={() => setIsShowing(true)}
            >
              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                  {items.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                    >
                      <div className="ml-4">
                        <p className="text-base font-medium text-gray-500">
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
