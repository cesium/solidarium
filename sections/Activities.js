import Ativity from '../components/Activity'

const atividades = [
  { title: 'Worshop de Adobe Illustrador', data: '8 de dezembro', horas:'21h00', local: 'DI', orador: 'Luis Araujo', organizador: 'CeSIUM', body: 'Workshop sobre ferramenta Adobe Illustrator no qual ser apresentada uma vista global, começando por conceitos básicos desde fonts, cores (CMKY e RGB) ou objetos e layers. Evoluindo depois para as diferentes ferramentas Shape Tolls e Curvature Toll. Por fim, serão apresentandos alguns efeitos e truques mais avançados tais como Drop Shadow, Feather, Inner Glow, entre outros.', image: '/images/cabaz.svg' },
  { title: 'CAOS Launch Program', data: '7 de dezembro', horas:'18h00', local: 'TBA', orador: '', organizador: 'CeSIUM', body: 'Programa de aprendizagem faseado e estruturado cujo objetivo é o desenvolvimento de competências na área de Web Development. Os alunos podem ingressar em um de três percursos distintos: Miners Guild (FullStack com Ruby e a Framework Rails), Order of the Phoenix (Backend com Elixir e a Framework Phoenix) e Fallout Institute (Frontend com JavaScript e a Framework React), onde podem ganhar skills específicas numa fase inicial para depois se juntarem a uma Launch Team e desenvolver projetos para o CeSIUM.', image: '/images/cabaz.svg' },
  { title: 'Worshop de Adobe Illustrador3', data: '8 de dezembro', horas:'21h00', local: 'DI', orador: '', organizador: 'CeSIUM', body: '', image: '/images/cabaz.svg' },
  { title: 'Worshop de Adobe Illustrador4', data: '8 de dezembro', horas:'21h00', local: 'DI', orador: 'Luis Araujo', organizador: 'CeSIUM', body: '', image: '/images/cabaz.svg' },
]

export default function Atividades({id}) {
  return(
    <div id={id} className="flex flex-col h-full px-6 py-52 sm:px-20 lg:px-52 xl:px-64 bg-tertiary">
      {atividades.map((item) => (
        <Ativity key={item.title} direction={`${ atividades.findIndex(obj => obj == item) % 2 != 0 ? "even" : "odd" }`} title={item.title} body={item.body} data={item.data} horas={item.horas} local={item.local} orador={item.orador} organizador={item.organizador} image={item.image}/>
      ))}
    </div>
  )
}