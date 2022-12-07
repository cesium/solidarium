import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link } from "react-scroll";
import { useState } from "react";

export const navigation = [
  { name: "Descrição", id: "description" },
  { name: "Contribuir", id: "contribute" },
  { name: "Organização", id: "organization" },
  { name: "Parceiros", id: "partners" },
];

export default function Nav() {
  const [isSideBarOpen, setStatusSideBar] = useState(false);

  function toogleSideBarStatus() {
    setStatusSideBar((status) => !status);
  }

  return (
    <nav className="flex flex-col">
      <div
        className={`${
          isSideBarOpen ? "bg-white" : undefined
        } grid grid-cols-2 md:grid-cols-6 z-20`}
      >
        <div className="flex w-full my-2 ml-4 md:hidden md:w-auto">
          <a href="/">
            <span className="sr-only">Logo</span>
            <img
              className="w-auto h-10"
              src="/images/Assets/arvore.svg"
              alt="logo"
            />
          </a>
        </div>
        <div className="mx-4 my-2 justify-self-end md:hidden">
          <span className="sr-only">Open main menu</span>
          <button className="w-10 h-10" onClick={toogleSideBarStatus}>
            {isSideBarOpen ? (
              <XIcon className="w-10 h-10 text-primary" aria-hidden="true" />
            ) : (
              <MenuIcon
                className={`${
                  isSideBarOpen ? "text-primary" : undefined
                } w-10 h-10 text-white`}
                aria-hidden="true"
              />
            )}
          </button>
        </div>
      </div>

      <div
        className={`${
          !isSideBarOpen ? "-translate-y-64 md:translate-y-0" : undefined
        } relative z-10 transform duration-200 ease-in-out`}
      >
        <div
          className={`${
            isSideBarOpen
              ? "absolute py-3 w-full bg-white flex md:bg-transparent flex-col items-center md:flex-row md:col-span-4 md:my-4 md:space-x-4 md:text-center lg:space-x-6 md:h-6 md:justify-center"
              : "hidden h-6 justify-center md:bg-transparent self-center col-span-4 my-4 space-x-4 text-center md:flex lg:space-x-6"
          } `}
        >
          {navigation.map((item) => (
            <Link
              key={item.id}
              to={item.id}
              smooth={true}
              durantion={1000}
              className={`${
                isSideBarOpen ? "text-primary md:text-white my-2" : "text-white"
              } text-sm cursor-pointer font-poppins_light lg:text-base hover:text-secondary`}
              onClick={() => {
                setStatusSideBar(false);
              }}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
