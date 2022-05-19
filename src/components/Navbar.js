import './Navbar.css';
import { Fragment, useState } from 'react'
import { Dialog, Popover, Transition } from '@headlessui/react'
import { MenuIcon, SearchIcon, ShoppingBagIcon, XIcon } from '@heroicons/react/outline'

const navigation = {
    pages: [
        { name: 'Shop', href: '/' },
        { name: 'Products', href: '/products' },
        { name: 'About Us', href: '/about-us' },
    ],
}

function Navbar() {
    const [open, setOpen] = useState(false)
    return (
        <div className="bg-white">
            {/* Mobile menu */}
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="fixed inset-0 flex z-40 lg:hidden" onClose={setOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="transition-opacity ease-linear duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity ease-linear duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0">
                        <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>
                    <Transition.Child
                        as={Fragment}
                        enter="transition ease-in-out duration-300 transform"
                        enterFrom="-translate-x-full"
                        enterTo="translate-x-0"
                        leave="transition ease-in-out duration-300 transform"
                        leaveFrom="translate-x-0"
                        leaveTo="-translate-x-full">
                        <div className="relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto">
                            <div className="px-4 pt-5 pb-2 flex">
                                <button
                                    type="button"
                                    className="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400"
                                    onClick={() => setOpen(false)}>
                                    <span className="sr-only">Close menu</span>
                                    <XIcon className="h-6 w-6" aria-hidden="true" />
                                </button>
                            </div>
                            <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                                {navigation.pages.map((page) => (
                                    <div key={page.name} className="flow-root">
                                        <a href={page.href} className="-m-2 p-2 block font-medium text-gray-900">
                                            {page.name}
                                        </a>
                                    </div>
                                ))}
                            </div>
                            <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                                <div className="flow-root">
                                    <a href="/" className="-m-2 p-2 block font-medium text-gray-900">
                                        Sign in
                                    </a>
                                </div>
                                <div className="flow-root">
                                    <a href="/" className="-m-2 p-2 block font-medium text-gray-900">
                                        Create account
                                    </a>
                                </div>
                            </div>
                            <div className="border-t border-gray-200 py-6 px-4">
                                <a href="/" className="-m-2 p-2 flex items-center">
                                    <img
                                        src="https://tailwindui.com/img/flags/flag-canada.svg"
                                        alt=""
                                        className="w-5 h-auto block flex-shrink-0" />
                                    <span className="ml-3 block text-base font-medium text-gray-900">CAD</span>
                                    <span className="sr-only">, change currency</span>
                                </a>
                            </div>
                        </div>
                    </Transition.Child>
                </Dialog>
            </Transition.Root>
            <header className="relative bg-white">
                <p className="bg-indigo-600 h-10 flex items-center justify-center text-sm font-medium text-white px-4 sm:px-6 lg:px-8">
                    Get free delivery on orders over $100
                </p>
                <nav aria-label="Top" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="h-16 flex items-center">
                        <button
                            type="button"
                            className="bg-white p-2 rounded-md text-gray-400 lg:hidden"
                            onClick={() => setOpen(true)}>
                            <span className="sr-only">Open menu</span>
                            <MenuIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                        <div className='relative w-full'>
                            <div className='grid grid-cols-1 mt-10 gap-x-4 md:grid-cols-1 lg:grid-cols-3 px-4'>
                                <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch mb-4 border-b border-gray-200">
                                    <div className="h-full flex space-x-8">
                                        {navigation.pages.map((page) => (
                                            <a
                                                key={page.name}
                                                href={page.href}
                                                className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">
                                                {page.name}
                                            </a>
                                        ))}
                                    </div>
                                </Popover.Group>
                                <div className="hidden lg:ml-4 lg:flex lg:ml-0 justify-center mb-4">
                                    <a href="/">
                                        <span className="sr-only">Dron</span>
                                        <img
                                            className="h-8 w-auto"
                                            src="images/drone.png"
                                            alt="" />
                                    </a>
                                </div>
                                <div className="ml-auto flex items-center mb-4 w-full border-b border-gray-200">
                                    <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                                        <a href="/login" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                                            Sign in
                                        </a>
                                        <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                                    </div>
                                    <div className="hidden lg:ml-8 lg:flex">
                                        <a href="/" className="text-gray-700 hover:text-gray-800 flex items-center">
                                            <img
                                                src="https://tailwindui.com/img/flags/flag-canada.svg"
                                                alt=""
                                                className="w-5 h-auto block flex-shrink-0" />
                                            <span className="ml-3 block text-sm font-medium">CAD</span>
                                            <span className="sr-only">, change currency</span>
                                        </a>
                                    </div>
                                    <div className="hidden lg:ml-6 lg:flex">
                                        <a href="/" className="p-2 text-gray-400 hover:text-gray-500">
                                            <span className="sr-only">Search</span>
                                            <SearchIcon className="w-6 h-6" aria-hidden="true" />
                                        </a>
                                    </div>
                                    <div className="hidden lg:ml-4 lg:flex">
                                        <a href="/" className="group -m-2 p-2 flex items-center">
                                            <ShoppingBagIcon
                                                className="flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500"
                                                aria-hidden="true" />
                                            <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
                                            <span className="sr-only">items in cart, view bag</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Navbar;