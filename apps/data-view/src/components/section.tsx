'use client'

import Link from 'next/link'
import { useState } from 'react'
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


export function Section(): JSX.Element {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-black relative overflow-hidden">
      <div className="absolute left-[calc(-5% + 3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(-5%+36rem)] sm:w-[122.1875rem] blur-[0.2px]" style={{
             backgroundImage: "linear-gradient(#ffffff23 2px, transparent 2px), linear-gradient(to right, #ffffff23 2px, #121212 2px)",
             backgroundSize: "100px 100px",
             backgroundOrigin: "content-box",
        
      }} />
      <header className="absolute inset-x-0 top-0 z-50">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <Link className="-m-1.5 p-1.5" href="#">
              <span className="sr-only">Your Company</span>
              <Image
                alt=""
                className="h-8 w-auto"
                fill
                src=""
              />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => { setMobileMenuOpen(true); }}
              type="button"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link className="text-sm font-semibold leading-6 text-white" href={item.href} key={item.name}>
                {item.name}
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link className="text-sm font-semibold leading-6 text-white" href="#">
              Log in <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </nav>
        
        <Dialog as="div" className="lg:hidden" onClose={setMobileMenuOpen} open={mobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link className="-m-1.5 p-1.5" href="#">
                <span className="sr-only">Your Company</span>
                <Image
                  alt=""
                  className="h-8 w-auto"
                  src=""
                  width={25}
                />
              </Link>
              <button
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => { setMobileMenuOpen(false); }}
                type="button"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      href={item.href}
                      key={item.name}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  <Link
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    href="#"
                  >
                    Log in
                  </Link>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
         />
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
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
