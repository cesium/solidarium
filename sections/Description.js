import Image from 'next/image'

export default function Descrição({id}) {
  return(
    <section id={id} className="h-full px-6 py-52 bg-tertiary sm:px-20 lg:px-52 xl:px-64">
      <div className="flex flex-col items-center w-full">
        <div className="mb-10 ">
          <h1 className="text-center text-primary text-7xl font-ontel">O que é o SolidariUM?</h1>
        </div>
        <div className="relative w-full h-40 px-3 mb-4 text-center">
          <Image src="/images/Assets/Solidarium.svg" alt="Logo" layout="fill"/>
        </div>
        <div className="w-1/2 py-2 my-10 text-center ">
          <p className="text-center text-primary font-poppins_light">O SolidariUM é um movimento dinamizado por diversos núcleos de estudantes da Universidade do Minho tendo como principal objetivo organizar atividades de cariz social no seio da comunidade académica. Procura o nosso selo nas atividades do teu núcleo para saberes se estás a contribuir para esta causa! Não percas tempo e vem ser SolidariUM connosco! </p>
        </div>
      </div>
    </section>
  )
}