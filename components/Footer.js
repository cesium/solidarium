import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

export default function Footer(){
  return(
    <div className="flex justify-center h-10 text-center bg-primary">
      <h1 className="py-1.5 tracking-widest text-center text-white font-poppins_light pr-2">Made with</h1>
      <FontAwesomeIcon className="self-center mb-1 font-poppins_light text-secondary" icon={faHeart} />
      <h1 className="py-1.5 tracking-widest text-center text-white font-poppins_light pl-2">by</h1>
      <a href="https://cesium.di.uminho.pt/" alt="Site do CeSIUM" className="py-1.5 tracking-widest text-center text-white font-poppins_light pl-2">CeSIUM</a>
    </div>
  )
}