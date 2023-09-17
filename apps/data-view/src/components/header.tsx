'use client';

import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface Data  {
  href: string;
  title: string;
  key: string | number
}


interface Props {
  navigation: Array<Data>
};




export function Header(props: Props): JSX.Element {
 const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
 const { navigation } = props;

 setMobileMenuOpen
 
 return (
  <header className="absolute inset-x-0 top-0 z-50">
  <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
    <div className="flex lg:flex-1">
      <Link className="-m-1.5 p-1.5" href="/">
        <span className="sr-only">Your Company</span>
{/*         <Image
          alt=""
          className="h-8 w-auto"
          fill
          src=""
        /> */}
      </Link>
    </div>
    <div className="flex lg:hidden">
      <button
        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-50"
        onClick={() => { setMobileMenuOpen(true); }}
        type="button"
      >
        <span className="sr-only">Open main menu</span>
        <Bars3Icon aria-hidden="true" className="h-6 w-6" />
      </button>
    </div>
    <div className="hidden lg:flex lg:gap-x-12">
      {navigation.map((item) => (
        <Link 
          className="text-sm font-semibold leading-6 text-white" 
          href={item.href} 
          key={item.key}
         >
          {item.title}
        </Link>
      ))}
    </div>
    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
      <Link className="text-sm font-semibold leading-6 text-white" href="/algo">
        Log in <span aria-hidden="true">&rarr;</span>
      </Link>
    </div>
  </nav>
  
  <Dialog as="div" className="lg:hidden" onClose={setMobileMenuOpen} open={mobileMenuOpen}>
    <div className="fixed inset-0 z-50" />
    <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-zinc-800 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
      <div className="flex items-center justify-between">
        <Link className="-m-1.5 p-1.5" href="/nada">
          <span className="sr-only">Your Company</span>
          <Image
            alt=""
            className="h-8 w-auto"
            src=""
            width={25}
          />
        </Link>
        <button
          className="-m-2.5 rounded-md p-2.5 text-gray-50"
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
                className="ease-in duration-75 -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-100 hover:bg-red-400 hover:text-black"
                href={item.href}
                key={item.key}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Dialog.Panel>
  </Dialog>
</header>
 )
}