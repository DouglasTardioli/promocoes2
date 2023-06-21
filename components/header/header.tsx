
import { Dancing_Script } from 'next/font/google'


const dancing = Dancing_Script({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
 })


export function Header() {
  return (
    <div className="flex justify-center font-semibold bg-zinc-950 items-center w-screen py-6 border-b-2 border-zinc-800">
     <h1 className={`${dancing.className}
     md:text-7xl text-3xl font-bold text-stone-100 
     
     `}>Promoções Malucas</h1>
 
    </div>
  )
}