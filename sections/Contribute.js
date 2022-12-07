import Locations from '../components/Locations'
import SubSections from '../components/SubSections'

const subSections = [
  { title: 'Contribuir em cabazes de natal', image:'/images/Assets/Cabaz.svg', body: 'De modo a envolver e apelar à participação de toda a comunidade académica, desde alunos, funcionários, professores a possíveis visitantes para ajudar quem mais precisa, por toda a Universidade do Minho, poderás encontrar cabazes, identificados com a iniciativa, para recolha de bens alimentares, porque por mais pequena que seja a nossa contribuição, todos juntos faremos a diferença.' },
  //{ title: 'Contribuir ao participar nos eventos listados', image:'/images/Gift.svg', body: 'Ainda de modo a criar um espírito de partilha e de solidariedade entre todos durante este mês, todos os Núcleos, Associações e Secções participantes nesta iniciativa irão também cobrar na participação nas suas atividades, ou num grupo de atividades específico, a doação de bens alimentares, peças de vestuário ou brinquedos num dos cabazes espalhados pela Universidade ou a doação por MB Way ou transferência para uma instituição de solidariedade à escolha. No MB Way já existe a opção de fazer doações em “Ser Solidário”.'},
]

const instituições = [
  { title: 'Gualtar', local: 'Departamento de Informática' },
  { title: 'Gualtar', local: 'Complexo Pedagógico 1' },
  { title: 'Gualtar', local: 'Complexo Pedagógico 2' },
  { title: 'Gualtar', local: 'Complexo Pedagógico 3' },
  { title: 'Gualtar', local: 'Escola de Direito' },
  { title: 'Gualtar', local: 'Escola de Medicina' },
  { title: 'Azurém', local: 'Nave Principal' },
  { title: 'Azurém', local: 'Escola de Engenharia' },
  { title: 'Azurém', local: 'Escola de Ciências' },
  { title: 'Azurém', local: 'Escola de Arquitetura' },
  { title: 'Couros', local: 'IDEGUI' },
  { title: 'Couros', local: 'Garagem avenida' },
  { title: 'Núcleos', local: 'Todas as salas dos núcleos organizadores' },
]

export default function Contribuir({id}){
  return(
    <div id={id} className="flex flex-col h-full px-6 pt-20 pb-52 sm:px-20 lg:px-52 xl:px-64 bg-primary">
      <h1 className="mx-auto text-secondary font-ontel text-7xl">Contribuir</h1>
      {subSections.map((item) => (
        <SubSections key={item.title} title={item.title} image={item.image} body={item.body} direction={`${ subSections.findIndex(obj => obj == item) % 2 != 0 ? "even" : "odd" }`} last={subSections[subSections.length - 1] == item ? true : false}/>
      ))}
      <div className="mb-6 sm:mb-10">
        <p className="text-justify text-secondary font-poppins_light">
          Locais onde podes encontrar os nossos cabazes:
        </p>
      </div>
      <div className="grid self-center w-10/12 grid-rows-5 gap-10 sm:grid-cols-2 sm:grid-rows-3">
        {instituições.map((item) => (
          <Locations key={item.title} title={item.title} local={item.local} parity={`${instituições.length % 2 == 0 ? "even" : "odd"}`} last={instituições[instituições.length -1] == item ? true : false} />
        ))}
      </div>
    </div>
  )
}