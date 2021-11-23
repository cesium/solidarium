import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

export default function Footer(){
  return(
    <div className="flex justify-center h-10 text-center bg-tertiary">
      <h1 className="py-1.5 tracking-widest text-center text-white font-code_light pr-2">Made with</h1>
      <FontAwesomeIcon className="self-center mb-1 text-primary font-code_light" icon={faHeart} />
      <h1 className="py-1.5 tracking-widest text-center text-white font-code_light pl-2">by CeSIUM</h1>
    </div>
  )
}