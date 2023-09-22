'use client'

import Link from 'next/link'
import { PropsWithChildren, ReactNode, ReactPropTypes, useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

const navigation = [
  { name: 'Features', href: '#' },
  { name: 'Algoritimos', href: '/algoritimos' },
  { name: 'Meu Perfil', href: '/perfil' },
]


 /* 
 
 linear-gradient(#0000003b 2px, transparent 2px), linear-gradient(to right, #0000003b 2px, #e5e5f7 1px)
 */

interface PropsSections {
  header: ReactNode,
}


export function Section({ header }: PropsSections): JSX.Element {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-black relative overflow-hidden">
      <div className="absolute left-[calc(-5% + 3rem)] min-h-full aspect-[1155/678] w-[106.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(-5%+36rem)] sm:w-[122.1875rem] blur-[0.2px]" style={{
             backgroundImage: "linear-gradient(#ffffff23 2px, transparent 2px), linear-gradient(to right, #ffffff23 2px, #121212 2px)",
             backgroundSize: "100px 100px",
             backgroundOrigin: "content-box",
        
      }} />
    
     {header}

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
         />
        <div className="mx-auto max-h max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-white ring-1 ring-gray-100/20 hover:ring-gray-100/30">
              Descubra mais sobre mim no meu {'  '}
              <Link className="font-semibold text-rose-600" href="#">
                <span aria-hidden="true" className="absolute inset-0" />
                GitHub <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Estruturas de dados e alguns exemplos de código.
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Estudos sobre ciência da computação, algoritimos, e alguns <strong>snippets</strong> de código.

            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                className="rounded-md bg-rose-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-rose-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600"
                href="/algorithms"
              >
                Algoritimos
              </Link>
              <Link className="text-sm font-semibold leading-6 text-gray-100" href="/algorithms">
                Lista de Estruturas{" "}
                 <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
         />
      </div>
    </div>
  )
}
