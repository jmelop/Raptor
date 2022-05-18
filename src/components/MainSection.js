import React from 'react';
import '../App.css';
import './MainSection.css';

function MainSection() {
    return (
        <>
            <div className='bg-white overflow-hidden'>
                <div className='relative pt-16 pb-96 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48'>
                    <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static'>
                        <div className='sm:max-w-lg'>
                            <h1 className='text-4xl font font-extrabold tracking-tight text-gray-900 sm:text-6xl'>
                                Results that Speak
                            </h1>
                            <p className='mt-4 text-xl text-gray-500'>
                                Ut egestas justo nec molestie ullamcorper. Maecenas porttitor vestibulum dolor, quis venenatis ante pellentesque sit amet.
                            </p>
                        </div>
                        <div>
                            <div className='mt-20'>
                                {/* Decorative image grid */}
                                <div aria-hidden='true'
                                    className='pointer-events-none lg:absolute lg:inset-y-0 lg:max-w-7xl lg:mx-auto lg:w-full'>
                                    <div className='absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8'>
                                        <div className='flex items-center space-x-6 lg:space-x-8'>
                                            <div className='flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8'>
                                                <div className='w-44 h-64 rounded-lg overflow-hidden sm:opacity-0 lg:opacity-100'>
                                                    <img src='images/drone1.jpg'
                                                        alt=''
                                                        className='w-full h-full object-center object-cover' />
                                                </div>
                                            </div>
                                            <div className='flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8'>
                                                <div className='w-44 h-64 rounded-lg overflow-hidden'>
                                                    <img src='images/drone2.jpg'
                                                        alt=''
                                                        className='w-full h-full object-center object-cover' />
                                                </div>
                                                <div className='w-44 h-64 rounded-lg overflow-hidden'>
                                                    <img src='images/drone3.jpg'
                                                        alt=''
                                                        className='w-full h-full object-center object-cover' />
                                                </div>
                                            </div>
                                            <div className='flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8'>
                                                <div className='w-44 h-64 rounded-lg overflow-hidden'>
                                                    <img src='images/drone4.jpg'
                                                        alt=''
                                                        className='w-full h-full object-center object-cover' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <a href='/products' className='inline-block text-center bg-indigo-600 border border-transparent rounded-md py-3 
                            px-8 font-medium text-white hover:bg-indigo-700'>
                                    Shop Collection
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class='hidden sm:block' aria-hidden='true'>
                    <div class='py-5 mx-64'>
                        <div class='border-t border-gray-200'></div>
                    </div>
                </div>
                <div className='relative max-w-7xl mx-auto mt-28 mb-16 bg-slate-800 rounded-md'>
                    <div className='grid grid-cols-1 mt-10 gap-x-4 md:grid-cols-1 lg:grid-cols-2 px-4'>
                        <div className='bg-slate-800 p-10 rounded-md'>
                            <h1 className='text-5xl font-bold mb-2 text-white'>Find out about our</h1>
                            <h1 className='text-5xl font-bold mb-6 text-indigo-500'>newest offerings</h1>
                            <h4 className='mb-2 text-gray-200 font-semibold'>Praesent sit amet vehicula urna</h4>
                            <p className='text-gray-400 font-medium'>Nunc auctor, enim tempor semper euismod,
                                tellus augue molestie enim, sed aliquet dolor nisi ut nulla. Morbi sem nisl,
                                elementum eu mi vitae, luctus dictum est.</p>
                            <p className='mt-4 text-gray-100 font-semibold'>Enter your email to get $10 OFF Immediately!</p>
                            <div className='grid grid-cols-2 mt-2 gap-x-4 px-4'>
                                <div className='pb-4'>
                                    <input className='rounded-md w-full h-full placeholder-gray-500 border indent-0.5 lg:indent-2.5' placeholder='Enter your email' />
                                </div>
                                <div className='pb-4'>
                                    <a href='/products' className='inline-block text-center bg-indigo-600 border border-transparent rounded-md py-3 
                            px-8 font-medium text-white hover:bg-indigo-700 h-full'>
                                        Send
                                    </a>
                                </div>
                            </div>
                            <p className='mt-0.5 text-gray-400 font-semibold'>*By submitting this form I agree to the <a href='/' className='text-indigo-500 underline underline-offset-1'>
                                Terms</a> and <a href='/' className='text-indigo-500 underline underline-offset-1'>Conditions</a> and
                                <a href='/' className='text-indigo-500 underline underline-offset-1'> Privacy Policy.</a></p>
                        </div>
                        <div className='bg-slate-800 p-10 lg:m-auto'>
                            <video className='rounded-md' width='320' height='240' src='video/drone.mp4' controls />
                        </div>
                    </div>
                </div>
                <div className='relative mx-auto mt-32 mb-16'>
                    <div className='py-8 text-center bg-indigo-600'>
                        <div>
                            <h1 className='font-extrabold text-4xl text-2xl sm:text-4xl md:text-4xl text-gray-100'>Ready to fly a drone?</h1>
                            <h1 className='font-extrabold text-4xl text-2xl sm:text-4xl md:text-4xl text-gray-100'>Choose and buy a drone right now</h1>
                            <p className='mt-6 font-medium text-gray-200 drop-shadow-2xl'>Duis scelerisque suscipit enim id mollis. Maecenas sagittis sem sagittis, viverra lorem vitae, condimentum nibh.</p>
                            <p className='mt-1 font-medium text-gray-200 drop-shadow-2xl'>Proin fermentum nisl sit amet sem hendrerit, quis feugiat velit laoreet. Ut a ipsum ante.</p>
                            <p className='mt-1 font-medium text-gray-200 drop-shadow-2xl'>Quisque consequat enim arcu, a vulputate quam fringilla at.</p>
                        </div>
                        <div className='mt-8'>
                            <a href='/products' className='drop-shadow-2xl inline-block text-center bg-white border border-transparent rounded-md py-3 
                            px-8 font-medium text-indigo-700 hover:bg-gray-200'>
                                Shop Collection
                            </a>
                        </div>
                    </div>
                </div>
                <div className='relative max-w-7xl mx-auto mt-28 mb-16'>
                    <div className='grid grid-cols-1 mt-10 gap-x-4 md:grid-cols-1 lg:grid-cols-2 px-4'>
                        <div className='aspect-h-4 aspect-w-3 right'>
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
                            <ul class='list-disc text-gray-400 font-medium mt-4 ml-4'>
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
        </>
    )
}

export default MainSection