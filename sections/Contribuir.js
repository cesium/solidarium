import Institutions from '../components/Institutions'
import SubSections from '../components/SubSections'

const subSections = [
  { title: 'Contribuir em cabazes de natal', image:'/images/Cabaz.svg', body: 'De modo a envolver e apelar à participação de toda a comunidade académica, desde alunos, funcionários, professores a possíveis visitantes para ajudar quem mais precisa, por toda a Universidade do Minho, poderás encontrar cabazes, identificados com a iniciativa, para recolha de bens alimentares, peças de vestuário e brinquedos, porque por mais pequena que seja a nossa contribuição, todos juntos faremos a diferença.' },
  { title: 'Contribuir ao participar nos eventos listados', image:'/images/Gift.svg', body: 'Ainda de modo a criar um espírito de partilha e de solidariedade entre todos durante este mês, todos os Núcleos, Associações e Secções participantes nesta iniciativa irão também cobrar na participação nas suas atividades, ou num grupo de atividades específico, a doação de bens alimentares, peças de vestuário ou brinquedos num dos cabazes espalhados pela Universidade ou a doação por MB Way ou transferência para uma instituição de solidariedade à escolha. No MB Way já existe a opção de fazer doações em “Ser Solidário”.'},
]

const instituições = [
  { title: 'Cruz Vermelha', mbway: '918 391 794', iban:'PT50 0035 0027 0002 5871 9322 7' , href: 'https://braga.cruzvermelha.pt/' },
  { title: 'Operação Nariz Vermelho', mbway: '918 391 794', iban:'PT50 0035 0027 0002 5871 9322 7' , href: 'https://braga.cruzvermelha.pt/' },
  { title: 'Banco Alimentar Braga', mbway: '918 391 794', iban:'PT50 0035 0027 0002 5871 9322 7' , href: 'https://braga.cruzvermelha.pt/' },
  { title: 'Aldeias de Crianças SOS', mbway: '918 391 794', iban:'PT50 0035 0027 0002 5871 9322 7' , href: 'https://braga.cruzvermelha.pt/' },
  { title: 'Liga Portuguesa Contra o Cancro', mbway: '918 391 794', iban:'PT50 0035 0027 0002 5871 9322 7' , href: 'https://braga.cruzvermelha.pt/' },
]

export default function Contribuir({id}){
  return(
    <div id={id} className="flex flex-col h-full px-6 py-52 sm:px-20 lg:px-52 xl:px-64 bg-primary">
      {subSections.map((item) => (
        <SubSections key={item.title} title={item.title} image={item.image} body={item.body} direction={`${ subSections.findIndex(obj => obj == item) % 2 != 0 ? "even" : "odd" }`} last={subSections[subSections.length - 1] == item ? true : false}/>
      ))}
      <div className="mb-6 sm:mb-10">
        <p className="text-justify text-white font-poppins_light">
          Estas são 5 das inúmeras instituições para as quais podem ser feitas as doações nas atividades ao longo de todo o mês de dezembro:
        </p>
      </div>
      <div className="grid self-center w-10/12 h-full grid-rows-5 gap-10 sm:grid-cols-2 sm:grid-rows-3">
        {instituições.map((item) => (
          <Institutions key={item.title} title={item.title} mbway={item.mbway} iban={item.mbway} href={item.href} parity={`${instituições.length % 2 == 0 ? "even" : "odd"}`} last={instituições[instituições.length -1] == item ? true : false} />
        ))}
      </div>
    </div>
  )
}