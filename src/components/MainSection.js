import React from 'react';
import '../App.css';
import './MainSection.css';

function MainSection() {
    return (
        <div className="bg-white overflow-hidden">
            <div className="relative pt-16 pb-96 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
                    <div className="sm:max-w-lg">
                        <h1 className="text-4xl font font-extrabold tracking-tight text-gray-900 sm:text-6xl">
                            Results that Speak
                        </h1>
                        <p className="mt-4 text-xl text-gray-500">
                            Ut egestas justo nec molestie ullamcorper. Maecenas porttitor vestibulum dolor, quis venenatis ante pellentesque sit amet.
                        </p>
                    </div>
                    <div>
                        <div className="mt-20">
                            {/* Decorative image grid */}
                            <div aria-hidden="true"
                                className="pointer-events-none lg:absolute lg:inset-y-0 lg:max-w-7xl lg:mx-auto lg:w-full">
                                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                                    <div className="flex items-center space-x-6 lg:space-x-8">
                                        <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                                            <div className="w-44 h-64 rounded-lg overflow-hidden sm:opacity-0 lg:opacity-100">
                                                <img src="images/drone1.jpg"
                                                    alt=""
                                                    className="w-full h-full object-center object-cover" />
                                            </div>
                                        </div>
                                        <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                                            <div className="w-44 h-64 rounded-lg overflow-hidden">
                                                <img src="images/drone2.jpg"
                                                    alt=""
                                                    className="w-full h-full object-center object-cover" />
                                            </div>
                                            <div className="w-44 h-64 rounded-lg overflow-hidden">
                                                <img src="images/drone3.jpg"
                                                    alt=""
                                                    className="w-full h-full object-center object-cover" />
                                            </div>
                                        </div>
                                        <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                                            <div className="w-44 h-64 rounded-lg overflow-hidden">
                                                <img src="images/drone4.jpg"
                                                    alt=""
                                                    className="w-full h-full object-center object-cover" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <a href="/products" className="inline-block text-center bg-indigo-600 border border-transparent rounded-md py-3 
                            px-8 font-medium text-white hover:bg-indigo-700">
                                Shop Collection
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='relative max-w-7xl mx-auto mt-32'>
            <div class="sm:block" aria-hidden="true">
                <div class="py-5 mx-32">
                    <div class="border-t border-gray-200"></div>
                </div>
            </div>
                <div className='grid grid-cols-1 mt-10 gap-x-4 md:grid-cols-1 lg:grid-cols-2 px-4'>
                    <div className="aspect-h-4 aspect-w-3 right">
                        <img className='rounded object-cover m-auto' src='images/drone5.jpg' alt='' />
                    </div>
                    <div className='bg-slate-800 p-10 rounded-md'>
                        <h1 className='text-4xl font-bold mb-6 text-white'>Our Drones</h1>
                        <h4 className='mb-2 text-gray-200 font-semibold'>Type of drones</h4>
                        <p className='text-gray-400 font-medium'>Vestibulum accumsan sapien ut felis lacinia luctus. Cras dapibus, mi
                            sit amet egestas dictum, ligula metus convallis neque, vitae consequat turpis
                            eros in eros. Phasellus at auctor leo, quis dapibus ipsum. Vivamus a nulla
                            semper, condimentum eros vitae, mattis dui. Suspendisse bibendum urna nisl.
                            Morbi massa nibh, ullamcorper vitae blandit sed, faucibus in magna.</p>
                        <p className='text-gray-400 font-medium mt-4'>Cras ornare tellus vel luctus facilisis.
                            Maecenas ut egestas tellus, in fermentum lacus. Duis dolor justo, tristique sit amet odio in,
                            sollicitudin facilisis magna. Nam euismod mattis leo at posuere. Phasellus sit amet
                            dictum libero, sed sodales mauris. Nam tortor orci, blandit a justo quis, tincidunt tempor
                            ligula. Phasellus tempus nunc quis porta cursus.</p>
                        <ul class="list-disc text-gray-400 font-medium mt-4 ml-4">
                            <li>Nulla lacinia dui ullamcorper varius ullamcorper</li>
                            <li>Morbi eu eleifend tellus</li>
                            <li>Sed consectetur rhoncus tempus. Vestibulum vitae dictum ipsum</li>
                        </ul>
                        <h4 className='mt-4 mb-2 text-gray-200 font-semibold'>So, how do I use them?</h4>
                        <p className='text-gray-400 font-medium'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Vivamus sagittis sapien tempor, scelerisque odio eu, dapibus tellus. Quisque mauris lectus,
                            euismod ac dolor ut, consequat iaculis lorem. Vestibulum egestas elit at porttitor ornare. Aliquam
                            vulputate nisi at tortor maximus rutrum. Pellentesque tellus ligula, hendrerit nec augue eget, imperdiet
                            ullamcorper massa. Sed eu erat tempor, rhoncus libero et, mattis sem. Ut ultrices lobortis quam ac blandit.
                            Pellentesque malesuada mauris efficitur leo consectetur posuere. Aenean malesuada interdum orci,
                            ac facilisis arcu lobortis sit amet. Nunc nec dolor semper dolor facilisis condimentum.
                            Quisque aliquam molestie nunc eleifend sagittis. Cras ornare nisi sed felis hendrerit, sit amet interdum
                            nisi euismod. Nam rhoncus eget dolor ut pulvinar.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainSection