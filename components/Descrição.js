import Image from 'next/image'

export default function Descrição() {
  return(
    <div className="h-full px-6 py-40 my-auto bg-green sm:px-20 lg:px-64">
      <div className="flex flex-col items-center w-full">
        <div className="mb-10 ">
          <h1 className="text-3xl text-center text-white sm:text-4xl font-code_regular">O que é o Dezembro Solidário?</h1>
        </div>
        <div className="relative w-full h-40 px-3 mb-4 text-center">
          <Image src="/images/arvore.svg" alt="Logo" layout="fill"/>
        </div>
        <div className="w-full py-2 mt-10 text-center ">
          <p className="text-justify text-white font-code_light">O Dezembro Solidário é um projeto de cariz social, que tem como objetivo trazer uma maior celebração da época natalícia à Universidade do Minho através de incentivos à união da comunidade académica, espalhando decorações e unindo as nossas associações de estudantes num espírito de solidariedade e partilha, já que no final do mês todos os bens recolhidos durante a atividade serão oferecidos a uma instituição social de ajuda aos mais necessitados. Para além disso, ao longo de todo o mês de dezembro os participantes nas atividades inseridas no projeto são incentivados a fazerem doações a instituições de solidariedade. Durante esta iniciativa, todas as atividades participantes serão identificadas pelo símbolo do Dezembro Solidário.</p>
        </div>
      </div>
    </div>
  )
}