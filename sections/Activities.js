import Ativity from '../components/Activity'

const atividades = [
  { title: 'Giveaway', data: '2 de dezembro', horas:'21h00', local: '', orador: '', organizador: 'CeSIUM', body: '', image: '/images/Ativities/Giveaway_web.svg' },
  { title: 'Periférico', data: '4 de dezembro', horas:'14h00', local: 'Youtube/Spotify/', orador: '', organizador: 'CeSIUM', body: '', image: '/images/Ativities/Periferico Publicações 5 Natal.svg' },
  { title: 'Guião Gloss', data: '6 de dezembro', horas:'21h00', local: 'Youtube', orador: 'Filipe Felício', organizador: 'CeSIUM', body: '', image: '/images/Ativities/Dezembro Solidário TBA.svg' },
  { title: 'Workshop Web Development', data: '7 de dezembro', horas:'21h00', local: 'Google Meet', orador: '', organizador: 'CeSIUM', body: '', image: '/images/Ativities/Workshop_WebD.svg' },
  { title: 'Periférico', data: '11 de dezembro', horas:'14h00', local: 'Youtube/Spotify/', orador: '', organizador: 'CeSIUM', body: '', image: '/images/Ativities/Periferico Publicações 6 Natal.svg' },
  { title: 'Hour of Code', data: '13 de dezembro', horas:'18h00', local: 'Google Meet', orador: '', organizador: 'CeSIUM', body: '', image: '/images/Ativities/Dezembro Solidário TBA.svg' },
  { title: 'Revisão do Projeto de CP', data: '14 de dezembro', horas:'TBA', local: 'TBA', orador: '', organizador: 'CeSIUM', body: '', image: '/images/Ativities/Dezembro Solidário TBA.svg' },
  { title: 'Torneio de Brawlhalla', data: '18 de dezembro', horas:'TBA', local: 'Discord CeSIUM', orador: '', organizador: 'CeSIUM', body: '', image: '/images/Ativities/Dezembro Solidário TBA.svg' },
  { title: 'Periférico', data: '18 de dezembro', horas:'14h00', local: 'Youtube/Spotify/', orador: '', organizador: 'CeSIUM', body: '', image: '/images/Ativities/Dezembro Solidário TBA.svg' },
  { title: 'Periférico', data: '25 de dezembro', horas:'14h00', local: 'Youtube/Spotify/', orador: '', organizador: 'CeSIUM', body: '', image: '/images/Ativities/Periferico Publicações 8 Natal.svg' },
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