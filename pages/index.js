import Snowfall from '../components/Snowfall'
import Nav, { navigation } from '../components/Nav'
import Hero from '../components/Hero'
import SectionDivider from '../components/SectionDivider'
import Description from '../sections/Description'
import Contribute from '../sections/Contribute'
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

      <Description id={getSectionId("Descrição")} />

      <Contribute id={getSectionId("Contribuir")}/>

{/*<Activities id={getSectionId("Atividades")} />*/}

      <Organization id={getSectionId("Organização")} />

      <Partners id={getSectionId("Parceiros")} />

      <Footer />
    </div>
  );
}
