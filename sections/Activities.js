import Ativity from '../components/Activity'

const atividades = [
  { title: 'Giveaway', data: '2 de dezembro', horas:'21h00', local: '', orador: '', organizador: 'CeSIUM', body: 'De 2 a 16 de dezembro vamos estar a sortear um hoodie. Cada bem alimentar depositado nos nossos cabazes corresponderá a uma entrada no sorteio.', image: '/images/Ativities/Giveaway_web.svg' },
  { title: 'Guião Gloss', data: '6 de dezembro', horas:'21h00', local: 'Youtube', orador: 'Filipe Felício', organizador: 'CeSIUM', body: 'Vídeos que irão exemplificar o uso da ferramenta juntamente com slides explicativos para poderem ser consultados futuramente.', image: '/images/Ativities/Dezembro Solidário TBA.svg' },
  { title: 'Workshop Web Development', data: '7 de dezembro', horas:'21h00', local: 'Google Meet', orador: '', organizador: 'CeSIUM', body: 'Workshop em que, numa primeira parte, o/a orador/a apresenta os fundamentos de HTML e CSS de uma forma mais teórica. A segunda parte consiste numa aplicação prática dos conceitos abordados, na qual será criada uma simples página usando os conhecimentos adquiridos.', image: '/images/Ativities/Workshop_WebD.svg' },
  { title: 'Hour of Code', data: '13 de dezembro', horas:'18h00', local: 'Google Meet', orador: '', organizador: 'CeSIUM', body: 'Atividade em que introduzimos os conceitos da programação e como devem ser usados. Para tal, serão apresentados alguns desafios para assimilar os conteúdos abordados.', image: '/images/Ativities/Dezembro Solidário TBA.svg' },
  { title: 'Revisão do Projeto de CP', data: '14 de dezembro', horas:'TBA', local: 'TBA', orador: '', organizador: 'CeSIUM', body: 'Atividade onde estudantes mais experientes que já fizeram a unidade curricular revêem projetos de anos anteriores com os alunos atualmente inscritos.', image: '/images/Ativities/Dezembro Solidário TBA.svg' },
  { title: 'Torneio de Brawlhalla', data: '17 de dezembro', horas:'TBA', local: 'Discord CeSIUM', orador: '', organizador: 'CeSIUM', body: `Torneio num "fighting plataform" onde poderás competir em equipas de 2, sendo que pelo menos um dos partecipantes tem de pertencer à universade do Minho.`, image: '/images/Ativities/Dezembro Solidário TBA.svg' },
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