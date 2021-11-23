import Snowfall from '../components/Snowfall'
import Nav, { navigation } from '../components/Nav'
import Hero from '../components/Hero'
import SectionDivider from '../components/SectionDivider'
import Description from '../sections/Description'
import Contribuir from '../sections/Contribuir'
import Activities from '../sections/Activities'
import Organization from '../sections/Organization'
import Partners from '../sections/Partners'
import Footer from '../components/Footer'

function getSectionId(name){
  return navigation.find(obj => obj.name == name).id
}

export default function Home() {
  return (
    <div className="bg-primary">

      <Snowfall />
      
      <Nav />

      <Hero />

      <SectionDivider img="/images/sticker.svg" titulo="Descrição"/>

      <Description id={getSectionId("Descrição")} />

      <SectionDivider img="/images/Charity.svg" titulo="Contribuir"/>

      <Contribuir id={getSectionId("Contribuir")}/>

      <SectionDivider img="/images/Gifts.svg" titulo="Atividades"/>

      <Activities id={getSectionId("Atividades")} />

      <SectionDivider img="/images/Organization.svg" titulo="Organização"/>

      <Organization id={getSectionId("Organização")} />

      <SectionDivider img="/images/Partners.svg" titulo="Parceiros"/>

      <Partners id={getSectionId("Parceiros")} />

      <Footer />
    </div>
  );
}
