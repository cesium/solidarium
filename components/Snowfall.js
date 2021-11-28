export default function Snowfall() {
  return(
    <>
      {[...Array(10).keys()].map(key => <div key={key} className="text-white snowflake">{
        key % 2 == 0 ?  
      '❅'
      :
      '❆'
      }</div>)}
    </>
  )
}