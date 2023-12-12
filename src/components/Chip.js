"use client";

import React from "react";
import Link from "next/link";

import { usePathname } from "next/navigation";

import {
  HomeIcon,
  PuzzlePieceIcon,
  BanknotesIcon,
  XCircleIcon,
  Bars4Icon,
  UserGroupIcon,
  NewspaperIcon,
} from "@heroicons/react/24/outline";

const items = [
  {
    Name: "Home",
    href: "/",
    icon: <HomeIcon className="h-6 w-6 text-white" />,
  },
  {
    Name: "Services",
    href: "/services",
    icon: <PuzzlePieceIcon className="h-6 w-6 text-white" />,
  },
  {
    Name: "Clients",
    href: "/clients",
    icon: <UserGroupIcon className="h-6 w-6 text-white" />,
  },
  {
    Name: "About Us",
    href: "/about",
    icon: <NewspaperIcon className="h-6 w-6 text-white" />,
  },
];

const Chip = () => {
  const pathname = usePathname();
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <div className="md:hidden flex items-center justify-end p-4">
        <Bars4Icon onClick={toggleDrawer} className="h-8 w-8 text-white" />
      </div>
      {isDrawerOpen && (
        <div className="fixed top-0 right-0 bottom-0 w-3/4 max-w-sm bg-gray-950 shadow-lg z-50 overflow-auto flex flex-col">
          <button onClick={toggleDrawer} className="my-10 mx-6 font-bold ">
            <XCircleIcon className="h-6 w-6 inline-block mr-2" /> Close
          </button>

          <div className="flex-grow">
            {items.map((item, index) => (
              <Link key={index} href={item.href} passHref>
                <div
                  className={`flex items-center justify-start pl-6 pr-3 py-2 cursor-pointer font-bold ${
                    pathname === item.href
                      ? "bg-rose-500 text-white"
                      : "text-rose-500"
                  }`}
                  onClick={toggleDrawer}
                >
                  {item.icon}
                  <span className="ml-2">{item.Name}</span>
                </div>
              </Link>
            ))}
          </div>

          <div className="p-6 bg-rose-500 flex items-center justify-start pl-6 pr-3 py-2 cursor-pointer font-bold">
            <BanknotesIcon className="text-white w-6 h-6" />
            <button className=" text-white px-5 py-2 font-semibold rounded w-full">
              Donate
            </button>
          </div>
        </div>
      )}

      <div className="hidden md:flex md:flex-col gap-4 overflow-auto md:h-48 max-w-full">
        {items.map((item, index) => (
          <Link key={index} href={item.href} passHref>
            <div
              className={`flex items-center justify-center mr-5 cursor-pointer whitespace-nowrap border text-rose-500 text-2xl font-semibold px-3 py-1.5 rounded-md hover:bg-rose-500 hover:text-white transition-colors duration-150 ease-in-out transform ${
                pathname === item.href
                  ? "scale-100 bg-rose-500 text-white"
                  : "scale-90"
              }`}
              role="button"
            >
              {item.icon}
              <span className="ml-2">{item.Name}</span>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Chip;
