export default function Snowfall() {
  return(
    <>
      {[...Array(10).keys()].map(key => <div key={key} className="snowflake">❄</div>)}
    </>
  )
}