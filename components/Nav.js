import { MenuIcon } from '@heroicons/react/outline'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

export default function Nav() {
  return (
    <div className="flex items-center flex-1">
      <div className="flex items-center justify-between w-full mx-4 my-2 md:w-auto">
        <a href="/">
          <span className="sr-only">Logo</span>
          <img
            className="w-auto h-10 sm:h-10"
            src="/images/arvore.svg"
            alt="logo"
          />
        </a>
        <div className="flex items-center -mr-2 md:hidden">
          <span className="sr-only">Open main menu</span>
          <MenuIcon className="w-10 h-10 text-white" aria-hidden="true" />
        </div>
      </div>
      <div className="hidden space-x-8 md:flex md:ml-10">
        {navigation.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="text-base font-medium text-white hover:text-gray-300"
          >
            {item.name}
          </a>
        ))}
      </div>
    </div>
  )
}