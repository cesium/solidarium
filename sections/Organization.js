import Image from 'next/image'

const organizators = [
  {
    name: 'CeSIUM',
    href: 'https://cesium.di.uminho.pt/',
    imageSrc: '/images/Núcleos/CeSIUM.svg',
    imageAlt: 'CeSIUM logo',
  },
  {
    name: 'gaeb',
    href: 'http://www.gaeb.pt/',
    imageSrc: '/images/Núcleos/gaeb.svg',
    imageAlt: 'Gaeb logo',
  },
  {
    name: 'NEEEICUM',
    href: 'https://neeeicum.dei.uminho.pt/',
    imageSrc: '/images/Núcleos/neeeicum.svg',
    imageAlt: 'Neeeicum logo',
  },
  {
    name: 'NEEGIUM',
    href: 'https://www.neegium.dps.uminho.pt/',
    imageSrc: '/images/Núcleos/neegium.svg',
    imageAlt: 'Neegium logo',
  },
  {
    name: 'ACE',
    href: 'https://www.instagram.com/neemat.uminho/',
    imageSrc: '/images/Núcleos/ACE.svg',
    imageAlt: 'Ace logo',
  },
  {
    name: 'NEEMAT',
    href: 'https://neeeicum.dei.uminho.pt/',
    imageSrc: '/images/Núcleos/neemat.svg',
    imageAlt: 'Neemat logo',
  },
]

export default function Organization({id}){
  return(
    <div id={id} className="flex flex-col h-full px-6 py-52 sm:px-20 lg:px-52 xl:px-64 bg-primary">
      <div className="grid grid-cols-1 justify-items-center gap-y-10 md:grid-cols-2 lg:grid-cols-3 gap-x-6 ">
        {organizators.map((item) => (
          <a key={item.name} href={item.href} className={`${organizators[organizators.length - 1] == item && (organizators.length % 4 == 0 || organizators.length == 1) ? 'sm:col-span-3' : undefined} w-40 group `}>
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