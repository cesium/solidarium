import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link } from "react-scroll";
import { useState } from "react";

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
                <img className="w-auto h-10" src="/images/arvore.svg" alt="logo" />
              </a>
            </div>
            <div className="mx-4 my-2 justify-self-end md:hidden">
              <span className="sr-only">Open main menu</span>
              <button className="w-10 h-10" onClick={toogleSideBarStatus}>
                {isSideBarOpen ?
                <XIcon className="w-10 h-10 text-primary" aria-hidden="true" />
                : <MenuIcon
                  className={`${
                    isSideBarOpen ? "text-primary" : undefined
                  } w-10 h-10 text-white`}
                  aria-hidden="true"
                />
                }
              </button>
            </div>
          </div>

          <div className={`${ !isSideBarOpen ? '-translate-y-64 opacity-0' : undefined } relative z-10 transform -translate-y-1 opacity-100 duration-200 ease-in-out`}>
            <div
              className={`${
                isSideBarOpen
                  ? 'absolute py-3 w-full bg-white flex md:bg-transparent flex-col items-center md:flex-row md:col-span-4 md:my-4 md:space-x-4 md:text-center lg:space-x-6 md:h-6 md:justify-center'
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
                  } text-sm cursor-pointer font-poppins_light lg:text-base hover:text-secondary`}
                  onClick={() => {setStatusSideBar(false)}}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </nav>
      );
    }
    
    /*
    <Popover as="nav" className="absolute z-10 w-full" >
      {({ open }) => (
        <div className={`${open ? 'bg-white sm:bg-transparent' : 'bg-transparent'}`}>
          <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-12">
              <div className="flex w-full my-2 ml-4 sm:hidden sm:w-auto">
                <a href="/">
                  <span className="sr-only">Logo</span>
                  <img className="w-auto h-10" src="/images/arvore.svg" alt="logo" />
                </a>
              </div>
              <Popover.Button className="inline-flex items-center justify-center p-2 rounded-md sm:hidden">
                <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block w-6 h-6 text-primary" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block w-6 h-6 text-white" aria-hidden="true" />
                  )}
                </Popover.Button>
              <div className="flex items-center justify-center flex-1 sm:items-stretch">
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                      key={item.id}
                      to={item.id}
                      smooth={true}
                      durantion={1000}
                      className={`${
                        open ? 'text-primary my-2 sm:text-white' : 'text-white'
                      } text-xs cursor-pointer font-poppins_light lg:text-base hover:text-secondary`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

            <Transition as={Fragment}
                        enter="transition ease-out duration-500"
                        enterFrom="opacity-0 -translate-y-2"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-75"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 -translate-y-2"
                        className="flex flex-col items-center px-2 pt-2 pb-3">
          <Popover.Panel className="sm:hidden">
              
              {navigation.map((item) => (
                <Link
                  key={item.id}
                  to={item.id}
                  smooth={true}
                  durantion={1000}
                  className={`${
                    open ? 'text-primary my-2' : 'text-white'
                  } text-sm cursor-pointer font-poppins_regular lg:text-base hover:text-secondary`}   
                >
                  {item.name}
                </Link>
              ))}
            </Popover.Panel>
            </Transition>
        </div>
      )}
    </Popover>
  
  */