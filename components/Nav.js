import { MenuIcon } from '@heroicons/react/outline'

const navigation = [
  { name: 'Decrição', href: '#' },
  { name: 'Contribuir', href: '#' },
  { name: 'Atividades', href: '#' },
  { name: 'Organização', href: '#' },
  { name: 'Parceiros', href: '#' },
]

export default function Nav() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-6">
      <div className="flex w-full my-2 ml-4 md:w-auto">
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
      <div className="justify-center hidden col-span-4 md:flex">
        <div className="flex h-10 my-4 space-x-4 text-center lg:space-x-6">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-xs text-white lg:text-base font-code_light hover:text-gray-300"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}