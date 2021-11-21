import { MenuIcon } from '@heroicons/react/outline'
import { Link, animateScroll as scroll } from "react-scroll";



export const navigation = [
  { name: 'Descrição', to: 'description' },
  { name: 'Contribuir', to: 'contribute' },
  { name: 'Atividades', to: '#' },
  { name: 'Organização', to: '#' },
  { name: 'Parceiros', to: '#' },
]

export default function Nav() {
  return (
    <nav className="grid grid-cols-2 md:grid-cols-6">
      <div className="hidden md:block"/>
      <div className="flex w-full my-2 ml-4 md:hidden md:w-auto">
        <a href="/">
          <span className="sr-only">Logo</span>
          <img
            className="w-auto h-10"
            src="/images/arvore.svg"
            alt="logo"
          />
        </a>
      </div>
      <div className="mx-4 my-2 justify-self-end md:hidden">
          <span className="sr-only">Open main menu</span>
          <MenuIcon className="w-10 h-10 text-white" aria-hidden="true" />
      </div>
      <div className="justify-center hidden h-10 col-span-4 my-4 space-x-4 text-center md:flex lg:space-x-6">
        {navigation.map((item) => (
          <Link
            to={item.to}
            smooth={true}
            durantion={1000}
            className="text-xs text-white lg:text-base font-code_light hover:text-secondary"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  )
}