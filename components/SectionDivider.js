import Image from 'next/image'


export default function SectionDivider (props){
  return(
    <div className="absolute flex items-center justify-center w-64 h-64 -ml-32 bg-white bg-opacity-25 border-black rounded-full -mt-36 left-1/2">
      <div className="flex flex-col items-center justify-center rounded-full bg-secondary w-52 h-52">
        <Image src={props.img} alt="Sticker" width={150} height={150}/>
        <p className="text-white font-code_regular">{props.titulo}</p>
      </div>
    </div>
  )
}