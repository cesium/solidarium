import Snowfall from '../components/Snowfall'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import SectionDivider from '../components/SectionDivider'
import Descrição from '../components/Descrição'
import Contribuir from '../components/Contribuir'

export default function Home() {
  return (
    <div className="bg-primary">

      <Snowfall />
      
      <Nav />

      <Hero />

      <SectionDivider img="/images/sticker.svg" titulo="Descrição"/>

      <Descrição />

      <SectionDivider img="/images/sticker.svg" titulo="Contribuir"/>

      <Contribuir />

    </div>
  );
}
