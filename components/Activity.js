import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt, faClock, faMapMarkedAlt, faUser, faUsers } from '@fortawesome/free-solid-svg-icons'

export default function Activity({data, horas, local, orador, organizador, direction, title, image, body}) {
  const info = [
    {"type": data , "icon": faCalendarAlt },
    {"type": horas, "icon": faClock},
    {"type": local, "icon": faMapMarkedAlt},
    {"type": orador, "icon": faUser},
    {"type": organizador, "icon": faUsers}
  ];

  return(
    <div className={`flex mb-40 flex-col w-full ${direction == "even" ? 'md:flex-row' : 'md:flex-row-reverse' }`}>
      <div className={`${direction == "even" ? 'md:mr-10' : 'md:ml-10' } relative w-full px-3 text-center h-52 md:h-64 md:w-1/4 max-h-64`}>
        <Image src={image} alt="Atividade" layout="fill"/>
      </div>
      <div className="flex flex-col md:w-3/4">
        <p className="pb-4 text-xl text-center text-white sm:text-2xl font-poppins_regular">{title}</p>
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
            {body}
          </p>
        </div>
      </div>
    </div>
  )
}