import Image from 'next/image'

export default function Hero() {
  return(
    <div className="w-full h-full bg-primary">
      <div className="flex flex-col items-center w-full pt-32 pb-64">
        <Image src="/images/Assets/Solidarium-branco.svg" alt="Logo" width={400} height={400}/>
        <p className="py-4 text-5xl text-white sm:text-6xl lg:text-7xl font-ontel">SolidariUM</p>
        <p className="text-xs tracking-wider text-white font-poppins_light sm:text-sm sm:tracking-widest">SolidariUM 2022 @ Universidade do Minho</p>
      </div>
    </div>
  )
}