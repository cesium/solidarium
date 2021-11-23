import Image from 'next/image'

export default function SubSections(props){
  return(
    <div key={props.title} className={`${ props.direction == "even" ? 'md:flex-row' : 'md:flex-row-reverse' } flex flex-col items-center w-full ${props.last ? 'mb-4' : 'mb-40' }`}>
      <div className={`${ props.direction == "even" ? 'md:mr-10' : 'md:ml-10' } relative w-full px-3 text-center h-52 md:h-64 md:w-1/3 max-h-64`}>
        <Image src={props.image} alt="Logo" layout="fill"/>
      </div>
      <div className="flex flex-col space-y-6 md:w-3/4">
        <h1 className="text-2xl text-center text-white sm:text-3xl font-code_regular">{props.title}</h1>
        <p className="text-justify text-white font-code_light">
          {props.body}
        </p>
      </div>
    </div>
  )
}