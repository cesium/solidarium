import { MenuIcon } from '@heroicons/react/outline'
import { Link } from "react-scroll";

export const navigation = [
  { name: 'Descrição', id: 'description' },
  { name: 'Contribuir', id: 'contribute' },
  { name: 'Atividades', id: 'activities' },
  { name: 'Organização', id: 'organization' },
  { name: 'Parceiros', id: 'partners' },
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
            key={item.id}
            to={item.id}
            smooth={true}
            durantion={1000}
            className="text-xs text-white cursor-pointer font-poppins_light lg:text-base hover:text-secondary"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  )
}