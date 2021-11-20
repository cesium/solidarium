import Image from 'next/image'


export default function SectionDivider (){
  return(
    <div className="absolute flex items-center justify-center w-64 h-64 -mt-32 -ml-32 bg-gray-300 bg-opacity-25 border-black rounded-full left-1/2">
      <div className="flex flex-col items-center justify-center rounded-full bg-secondary w-52 h-52">
        <Image src="/images/sticker.svg" alt="Sticker" width={150} height={150}/>
        <p className="text-white font-code_regular">Descrição</p>
      </div>
    </div>
  )
}