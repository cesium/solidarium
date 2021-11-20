import Image from 'next/image'

export default function Intro() {
  return(
    <div className="w-full h-full bg-primary">
      <div className="flex flex-col items-center w-full pb-64 pt-28">
        <Image src="/images/arvore.svg" alt="Logo" width={400} height={400}/>
        <p className="py-4 text-5xl text-white sm:text-6xl lg:text-7xl font-ontel">Dezembro Solidário</p>
        <p className="text-xs tracking-tight text-white sm:text-sm sm:tracking-normal lg:text-base lg:tracking-wider font-code_light">Dezembro Solidário 2021 @ Universidade do Minho</p>
      </div>
    </div>
  )
}