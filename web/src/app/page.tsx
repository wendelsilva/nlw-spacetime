import { User } from 'lucide-react'
import Image from 'next/image'
import nlwlogo from '../assets/nlw-spacetime-logo.svg'

export default function Home() {
  return (
    <main className="grid grid-cols-2 min-h-screen">
      {/* Left */}
      <div className="relative flex flex-col items-start justify-between px-28 py-16 overflow-hidden border-r border-white/10">

        <div className="absolute right-0 top-1/2 h-[288px] w-[525px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-full" />

        <div className="absolute right-2 top-0 bottom-0 w-2 bg-stripes" />

        <a href="" className="flex items-center gap-3 text-left hover:text-gray-50 transition-colors">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400">
            <User className='h-5 w-5 text-gray-500'/>

            <p className='text-sm leading-snug max-w-[140px]'><span className='underline'>Crie sua conta</span> e salve suas memórias!</p>
          </div>
        </a>

        <div>
          <Image src={nlwlogo} alt="NLW spacetime" />
        </div>
      </div>
      {/* right */}
      <div className="flex flex-col p-16">
        <div className="flex flex-1 items-center justify-center">
          <p className="text-center leading-relaxed w-[360px]">
            Você ainda não registrou nenhuma lembrança, come a{' '}
            <a href="" className="underline hover:text-gray-50">criar agora</a>
            !
          </p>
        </div>
      </div>
    </main>
  )
}
