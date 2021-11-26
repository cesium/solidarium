import { MenuIcon } from "@heroicons/react/outline";
import { useState } from "react";
import { Link } from "react-scroll";

export const navigation = [
  { name: "Descrição", id: "description" },
  { name: "Contribuir", id: "contribute" },
  { name: "Atividades", id: "activities" },
  { name: "Organização", id: "organization" },
  { name: "Parceiros", id: "partners" },
];

export default function Nav() {
  const [isSideBarOpen, setStatusSideBar] = useState(false);

  function toogleSideBarStatus() {
    setStatusSideBar((status) => !status);
    console.log(isSideBarOpen);
  }

  return (
    <nav className="flex flex-col">
      <div
        className={`${
          isSideBarOpen ? "bg-white" : undefined
        } grid grid-cols-2 md:grid-cols-6`}
      >
        <div className="flex w-full my-2 ml-4 md:hidden md:w-auto">
          <a href="/">
            <span className="sr-only">Logo</span>
            <img className="w-auto h-10" src="/images/arvore.svg" alt="logo" />
          </a>
        </div>
        <div className="mx-4 my-2 justify-self-end md:hidden">
          <span className="sr-only">Open main menu</span>
          <button className="w-10 h-10" onClick={toogleSideBarStatus}>
            <MenuIcon
              className={`${
                isSideBarOpen ? "text-primary" : undefined
              } w-10 h-10 text-white`}
              aria-hidden="true"
            />
          </button>
        </div>
      </div>

      <div className="relative">
        <div
          className={`${
            isSideBarOpen
              ? 'absolute h-40 w-full -translate-y-1 bg-white flex md:bg-transparent flex-col items-center z-10 md:flex-row md:col-span-4 md:my-4 md:space-x-4 md:text-center lg:space-x-6 md:h-6 md:justify-center'
              : 'hidden h-6 justify-center md:bg-transparent self-center col-span-4 my-4 space-x-4 text-center md:flex lg:space-x-6'
          } `}
        >
          {navigation.map((item) => (
            <Link
              key={item.id}
              to={item.id}
              smooth={true}
              durantion={1000}
              className={`${
                isSideBarOpen ? 'text-primary md:text-white my-2' : 'text-white'
              } text-xs cursor-pointer font-poppins_light lg:text-base hover:text-secondary`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
