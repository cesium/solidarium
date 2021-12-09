import Image from 'next/image'

export default function Descrição({id}) {
  return(
    <section id={id} className="h-full px-6 py-52 bg-tertiary sm:px-20 lg:px-52 xl:px-64">
      <div className="flex flex-col items-center w-full">
        <div className="mb-10 ">
          <h1 className="text-3xl text-center text-white sm:text-4xl font-poppins_regular">O que é o Dezembro Solidário?</h1>
        </div>
        <div className="relative w-full h-40 px-3 mb-4 text-center">
          <Image src="/images/Assets/Arvore.svg" alt="Logo" layout="fill"/>
        </div>
        <div className="w-full py-2 my-10 text-center ">
          <p className="text-center text-white font-poppins_light">O Dezembro Solidário é um projeto de cariz social que tem como objetivo trazer uma maior celebração da época natalícia à Universidade do Minho através de incentivos à união da comunidade académica, espalhando decorações e unindo as nossas associações de estudantes num espírito de solidariedade e partilha. No final do mês, todos os bens alimentares recolhidos durante a atividade serão oferecidos a uma instituição social de ajuda aos mais necessitados. </p>
        </div>
      </div>
    </section>
  )
}