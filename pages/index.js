import Header from '../components/Header'
import Nav from '../components/Nav'
import Intro from '../components/Intro'
import SectionDivider from '../components/SectionDivider'
import Descrição from '../components/Descrição'
import Snowfall from '../components/Snowfall'

export default function Home() {
  return (
    <div className="bg-primary">
      
      <Header />

      <Snowfall />

      <Nav />

      <Intro />

      <SectionDivider />

      <Descrição />

    </div>
  );
}
