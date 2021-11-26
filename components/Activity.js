import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt, faClock, faMapMarkedAlt, faUser, faUsers } from '@fortawesome/free-solid-svg-icons'

export default function Atividade(props) {
  const info = [
    {"type": props.data , "icon": faCalendarAlt },
    {"type": props.horas, "icon": faClock},
    {"type": props.local, "icon": faMapMarkedAlt},
    {"type": props.orador, "icon": faUser},
    {"type": props.organizador, "icon": faUsers}
  ];

  return(
    <div className={`flex mb-40 flex-col w-full ${props.direction == "even" ? 'md:flex-row' : 'md:flex-row-reverse' }`}>
      <div className={`${props.direction == "even" ? 'md:mr-10' : 'md:ml-10' } relative w-full px-3 text-center h-52 md:h-64 md:w-1/4 max-h-64`}>
        <Image src={props.image} alt="Atividade" layout="fill"/>
      </div>
      <div className="flex flex-col md:w-3/4">
        <p className="pb-4 text-xl text-center text-white sm:text-2xl font-poppins_regular">{props.title}</p>
        <div className="self-start justify-self-start">
          {info.map((item) => (
            <div key={item.icon} className="flex items-center">
            {item.type != '' &&
              <>
                <FontAwesomeIcon className="text-white font-poppins_light" icon={item.icon} />
                <p className="px-2 text-white font-poppins_light">
                  {item.type}
                </p>
              </>
            }
            </div>
          ))}
        </div>
        <div className="pt-2">
          <p className="text-white font-poppins_light">
            {props.body}
          </p>
        </div>
      </div>
    </div>
  )
}