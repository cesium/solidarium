import Image from 'next/image'

const partners = [
  {
    name: 'NEBQUM',
    href: 'https://nebquminho.wixsite.com/nebqum',
    imageSrc: '/images/Nucleos/nebqum.svg',
    imageAlt: 'NEBQUM logo',
  },
  {
    name: 'AAUM',
    href: 'https://aaum.pt/',
    imageSrc: '/images/Nucleos/aaum.svg',
    imageAlt: 'AAUM logo',
  },
  {
    name: 'ACE',
    href: 'https://www.instagram.com/acejunioragency/',
    imageSrc: '/images/Nucleos/ACE.svg',
    imageAlt: 'ACE logo',
  },
  {
    name: 'NAECUM',
    href: 'https://www.instagram.com/naecum/',
    imageSrc: '/images/Nucleos/naecum.jpg',
    imageAlt: 'NAECUM logo',
  },
  {
    name: 'AEMODUM',
    href: 'https://www.instagram.com/aemodum/',
    imageSrc: '/images/Nucleos/AEMODUM.svg',
    imageAlt: 'AEMODUM logo',
  },
  {
    name: 'CEAP',
    href: 'https://www.instagram.com/ceapuminho/',
    imageSrc: '/images/Nucleos/CEAP.png',
    imageAlt: 'CEAP logo',
  },
  {
    name: 'NECONT',
    href: 'https://www.instagram.com/necont.um/',
    imageSrc: '/images/Nucleos/necont.png',
    imageAlt: 'NECONT logo',
  },
  {
    name: 'GAEB',
    href: 'https://www.instagram.com/gaeb.uminho/',
    imageSrc: '/images/Nucleos/gaeb.svg',
    imageAlt: 'GAEB logo',
  },
  {
    name: 'GEOPLAN',
    href: 'https://www.instagram.com/geoplanum/',
    imageSrc: '/images/Nucleos/geopaln.png',
    imageAlt: 'GEOPLAN logo',
  },
  {
    name: 'NADPUM',
    href: 'https://www.instagram.com/nadp.uminho/',
    imageSrc: '/images/Nucleos/nadpum.png',
    imageAlt: 'NADPUM logo',
  }, 
  {
    name: 'NEEGIUM',
    href: 'https://www.instagram.com/neegium/',
    imageSrc: '/images/Nucleos/neegium.svg',
    imageAlt: 'NEEGIUM logo',
  },
  {
    name: 'FSUminho',
    href: 'https://www.instagram.com/fsuminho/',
    imageSrc: '/images/Nucleos/fsuminho.png',
    imageAlt: 'FSUminho logo',
  },
  {
    name: 'NECP',
    href: 'https://www.instagram.com/necp/',
    imageSrc: '/images/Nucleos/NECP.svg',
    imageAlt: 'NECP logo',
  },
  {
    name: 'GACCUM',
    href: 'https://www.instagram.com/gaccum/',
    imageSrc: '/images/Nucleos/gaccum.png',
    imageAlt: 'GACCUM logo',
  },
  {
    name: 'NENIUM',
    href: 'https://www.instagram.com/neni.um/',
    imageSrc: '/images/Nucleos/nenium.jpg',
    imageAlt: 'NENIUM logo',
  },
  {
    name: 'NEEMAT',
    href: 'https://www.instagram.com/neemat.uminho/',
    imageSrc: '/images/Nucleos/neemat.svg',
    imageAlt: 'NEEMAT logo',
  },
  {
    name: 'NECAUM',
    href: 'https://www.instagram.com/necaum/',
    imageSrc: '/images/Nucleos/necaum.svg',
    imageAlt: 'NECAUM logo',
  },
  {
    name: 'NEEB',
    href: 'https://www.instagram.com/neeb.um/',
    imageSrc: '/images/Nucleos/neeb.png',
    imageAlt: 'NEEB logo',
  },
  {
    name: 'ELSA',
    href: 'https://www.instagram.com/elsauminho/',
    imageSrc: '/images/Nucleos/elsa.png',
    imageAlt: 'ELSA logo',
  },
]


export default function Partners({id}){
  return(
    <div id={id} className="flex flex-col h-full px-6 pb-40 pt-20 pb-52 sm:px-20 lg:px-52 xl:px-64 bg-primary">
      <h1 className="mx-auto mb-32 text-secondary text-7xl font-ontel">Parceiros</h1>
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