
export default function Locations(props){
  return(
    <div key={props.title} className={`${props.last && (props.parity == "odd") ? 'sm:col-span-2' : undefined} m-2.5 p-4 text-center bg-white rounded-xl text-primary font-poppins_light`}>
      <div className="mb-4">
        <a key={props.title}>
          <span className="text-xl font-poppins_regular">{props.title}</span>
        </a>
      </div>
      <div>
        <a key={props.local}>
          <span className="font-poppins_regular">{props.local}</span> 
        </a>
      </div>
      {/*
      <div>
        <a key={props.iban} href={props.href}>
          <span className="font-poppins_regular">IBAN</span> {props.iban}
        </a>
      </div>
      */}
    </div>
  )
}