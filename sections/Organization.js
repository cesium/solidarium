import Image from 'next/image'

const organizators = [
  {
    name: 'CeSIUM',
    href: 'https://cesium.di.uminho.pt/',
    imageSrc: '/images/Nucleos/CeSIUM.svg',
    imageAlt: 'CeSIUM logo',
  },
  {
    name: 'NECC',
    href: 'https://necc.di.uminho.pt/',
    imageSrc: '/images/Nucleos/necc.svg',
    imageAlt: 'Necc logo',
  },
  {
    name: 'NEEEICUM',
    href: 'https://neeeicum.dei.uminho.pt/',
    imageSrc: '/images/Nucleos/neeeicum.svg',
    imageAlt: 'Neeeicum logo',
  },
]

export default function Organization({id}){
  return(
    <div id={id} className="flex flex-col h-full px-6 pt-20 pb-52 sm:px-20 lg:px-52 xl:px-64 bg-secondary">
      <h1 className="mx-auto mb-32 text-primary text-7xl font-ontel">Organizadores</h1>
      <div className="grid grid-cols-1 justify-items-center gap-y-10 md:grid-cols-2 lg:grid-cols-3 gap-x-6 ">
        {organizators.map((item) => (
          <a key={item.name} href={item.href} className={`${organizators[organizators.length - 1] == item && (organizators.length % 4 == 0 || organizators.length == 1) ? 'sm:col-span-3' : undefined} w-40 group `}>
            <div className="relative w-full h-20 overflow-hidden">
              <Image
                src={item.imageSrc}
                alt={item.imageAlt}
                layout="fill"
                className="object-center w-full h-full  group-hover:opacity-75"
              />
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}