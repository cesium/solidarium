import Image from 'next/image'

const navigation = [
  { title: 'Cruz Vermelha', mbway: '918 391 794', iban:'PT50 0035 0027 0002 5871 9322 7' , href: 'https://braga.cruzvermelha.pt/' },
  { title: 'Operação Nariz Vermelho', mbway: '918 391 794', iban:'PT50 0035 0027 0002 5871 9322 7' , href: 'https://braga.cruzvermelha.pt/' },
  { title: 'Banco Alimentar Braga', mbway: '918 391 794', iban:'PT50 0035 0027 0002 5871 9322 7' , href: 'https://braga.cruzvermelha.pt/' },
  { title: 'Aldeias de Crianças SOS', mbway: '918 391 794', iban:'PT50 0035 0027 0002 5871 9322 7' , href: 'https://braga.cruzvermelha.pt/' },
  { title: 'Liga Portuguesa Contra o Cancro', mbway: '918 391 794', iban:'PT50 0035 0027 0002 5871 9322 7' , href: 'https://braga.cruzvermelha.pt/' },
]

export default function Contribuir(){
  return(
    <div className="flex flex-col h-full px-6 py-52 sm:px-20 lg:px-52 xl:px-64 bg-primary">
      <div className="flex flex-col items-center w-full mb-40 md:flex-row-reverse">
        <div className="relative w-full px-3 text-center md:ml-10 h-52 md:h-64 md:w-1/3 max-h-64">
          <Image src="/images/Cabaz.svg" alt="Logo" layout="fill"/>
        </div>
        <div className="flex flex-col space-y-6 md:w-3/4">
          <h1 className="text-2xl text-center text-white sm:text-3xl font-code_regular">Contribuir em cabazes de natal</h1>
          <p className="text-justify text-white font-code_light">
          De modo a envolver e apelar à participação de toda a comunidade académica, desde alunos, funcionários, professores a possíveis visitantes para ajudar quem mais precisa, por toda a Universidade do Minho, poderás encontrar cabazes, identificados com a iniciativa, para recolha de bens alimentares, peças de vestuário e brinquedos, porque por mais pequena que seja a nossa contribuição, todos juntos faremos a diferença.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center w-full mb-4 md:flex-row">
        <div className="relative w-full px-3 text-center md:mr-10 h-52 md:h-64 md:w-1/3 max-h-64">
          <Image src="/images/Cabaz.svg" alt="Logo" layout="fill"/>
        </div>
        <div className="flex flex-col space-y-6 md:w-3/4">
          <h1 className="text-2xl text-center text-white sm:text-3xl font-code_regular">Contribuir ao participar nos eventos listados</h1>
          <p className="text-justify text-white font-code_light">
          Ainda de modo a criar um espírito de partilha e de solidariedade entre todos durante este mês, todos os Núcleos, Associações e Secções participantes nesta iniciativa irão também cobrar na participação nas suas atividades, ou num grupo de atividades específico, a doação de bens alimentares, peças de vestuário ou brinquedos num dos cabazes espalhados pela Universidade ou a doação por MB Way ou transferência para uma instituição de solidariedade à escolha. No MB Way já existe a opção de fazer doações em “Ser Solidário”.
          </p>
        </div>
      </div>
      <div className="mb-6 sm:mb-10">
        <p className="text-justify text-white font-code_light">
          Estas são 5 das inúmeras instituições para as quais podem ser feitas as doações nas atividades ao longo de todo o mês de dezembro:
        </p>
      </div>
      <div className="grid self-center w-10/12 h-full grid-rows-5 gap-10 sm:grid-cols-2 sm:grid-rows-3">
        {navigation.map((item) => (
              <div className={`${
                (navigation[navigation.length - 1] == item) && (navigation.length % 2 != 0) ? 'sm:col-span-2' : undefined
              } m-2.5 p-4 text-center bg-white rounded-xl text-primary font-code_light`}
              >
                <div className="mb-4">
                  <a key={item.title} href={item.href}>
                    <span className="text-xl font-code_regular">{item.title}</span>
                  </a>
                </div>
                <div>
                  <a key={item.mbway} href={item.href}>
                  <span className="font-code_regular">MBWAY</span> {item.mbway}
                  </a>
                </div>
                <div>
                  <a key={item.iban} href={item.href}>
                    <span className="font-code_regular">IBAN</span> {item.iban}
                  </a>
                </div>
              </div>
            ))}
      </div>
    </div>
  )
}