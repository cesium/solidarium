const snowflakes = [...Array(10).keys()].map(key => <div className="snowflake">❄</div>)

export default function Snowfall() {
  return(
    <>
      {snowflakes}
    </>
  )
}