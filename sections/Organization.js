import Image from 'next/image'

const organizators = [
  {
    name: 'CeSIUM1',
    href: '#',
    imageSrc: '/images/CeSIUM.svg',
    imageAlt: '',
  },
  {
    name: 'CeSIUM2',
    href: '#',
    imageSrc: '/images/CeSIUM.svg',
    imageAlt: '',
  },
  {
    name: 'CeSIUM3',
    href: '#',
    imageSrc: '/images/CeSIUM.svg',
    imageAlt: '',
  },
  {
    name: 'CeSIUM4',
    href: '#',
    imageSrc: '/images/CeSIUM.svg',
    imageAlt: '',
  },
  
]

export default function Organization({id}){
  return(
    <div id={id} className="flex flex-col h-full px-6 py-52 sm:px-20 lg:px-52 xl:px-64 bg-primary">
      <div className="grid grid-cols-1 justify-items-center gap-y-10 md:grid-cols-2 lg:grid-cols-3 gap-x-6 ">
        {organizators.map((item) => (
          <a key={item.name} href={item.href} className="w-40 group">
            <div className="relative w-full h-20 overflow-hidden">
              <Image
                src={item.imageSrc}
                alt={item.imageAlt}
                layout="fill"
                className="object-center w-full h-full group-hover:opacity-75"
              />
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}