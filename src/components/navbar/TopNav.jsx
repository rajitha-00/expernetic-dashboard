import React from 'react'
import { Disclosure,  } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import routes from "routes.js";

const navigation = [
    { name: 'Dashboard', href: '/', current: true },
    { name: 'Faculty List', href: '/admin/courses', current: false },

]
const TopNav = () => {
  return (
    <>
      <div className="min-h-full w-full dark:bg-white ">
        <Disclosure as="nav" className="navbar relative z-50 mx-5 dark:bg-white bg-navy-50 mt-2 rounded-[10px]">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-[1920px] px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        className="h-7 "
                        src="https://img.logoipsum.com/297.svg"

                      />
                    </div>
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        {navigation.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            className='text-navy-500 font-semibold hover:text-navy-900'
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="-mr-2 flex md:hidden">
                    <Disclosure.Button className="relative inline-flex items-center justify-center  p-2 text-navy-500  dark:text-navy-900 ">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      aria-current={item.current ? 'page' : undefined}
                    >
                        <ul className='text-navy-500 font-semibold hover:text-navy-900'>{item.name}</ul>
                   
                    </Disclosure.Button>
                  ))}
                </div>

              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

      </div>
    </> 

  )
}

export default TopNav
