
export default function Institutions(props){
  return(
    <div key={props.title} className={`${props.last && (props.parity == "odd") ? 'sm:col-span-2' : undefined} m-2.5 p-4 text-center bg-white rounded-xl text-primary font-code_light`}>
      <div className="mb-4">
        <a key={props.title} href={props.href}>
          <span className="text-xl font-code_regular">{props.title}</span>
        </a>
      </div>
      <div>
        <a key={props.mbway} href={props.href}>
          <span className="font-code_regular">MBWAY</span> {props.mbway}
        </a>
      </div>
      <div>
        <a key={props.iban} href={props.href}>
          <span className="font-code_regular">IBAN</span> {props.iban}
        </a>
      </div>
    </div>
  )
}