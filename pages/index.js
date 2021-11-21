import Snowfall from '../components/Snowfall'
import Nav, { navigation } from '../components/Nav'
import Hero from '../components/Hero'
import SectionDivider from '../components/SectionDivider'
import Descrição from '../components/Descrição'
import Contribuir from '../components/Contribuir'

function getSectionId(name){
  return navigation.find(obj => obj.name == name).to
}

export default function Home() {
  return (
    <div className="bg-primary">

      <Snowfall />
      
      <Nav />

      <Hero />

      <SectionDivider img="/images/sticker.svg" titulo="Descrição"/>

      <Descrição id={getSectionId("Descrição")} />

      <SectionDivider img="/images/sticker.svg" titulo="Contribuir"/>

      <Contribuir id={getSectionId("Contribuir")}/>

    </div>
  );
}
