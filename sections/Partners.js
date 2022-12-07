import Image from 'next/image'

const partners = [
  {
    name: 'NEBQUM',
    href: 'https://nebquminho.wixsite.com/nebqum',
    imageSrc: '/images/Nucleos/nebqum.svg',
    imageAlt: 'Nebqum logo',
  },
  {
    name: 'AAUM',
    href: 'https://aaum.pt/',
    imageSrc: '/images/Nucleos/aaum.svg',
    imageAlt: 'Aaum logo',
  },
]


export default function Partners({id}){
  return(
    <div id={id} className="flex flex-col h-full px-6 pb-40 pt-52 sm:px-20 lg:px-52 xl:px-64 bg-primary">
      <div className="grid grid-cols-1 justify-items-center gap-y-10 md:grid-cols-2 lg:grid-cols-3 gap-x-6 ">
        {partners.map((item) => (
          <a key={item.name} href={item.href} className={`${partners[partners.length - 1] == item && (partners.length % 4 == 0 || partners.length == 1) ? 'sm:col-span-3' : undefined} w-40 group`}>
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