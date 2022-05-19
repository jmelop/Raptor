import React from "react";
import '../App.css';
import './Project.css';

function Project() {
    return (
        <>
            <div className="relative mb-44">
                <div className="justify-center mx-auto my-24 max-w-2xl px-4 sm:px-6 lg:max-w-5xl lg:px-8">
                    <div className="mb-10 text-center">
                        <h1 className="font-bold text-4xl mb-4">- Our projects -</h1>
                        <h3 className="mt-2 font-semibold text-gray-600">Aenean non laoreet nulla. Praesent vel lacus luctus urna aliquam gravida.</h3>
                        <p className="mt-4 font-semibold text-gray-400">Fusce vel arcu elit. Phasellus lorem justo, laoreet fringilla pellentesque eu, dictum sit amet ex.
                            Nunc consequat lectus vel massa fermentum feugiat. Nulla vel mollis neque. Donec a mauris accumsan, bibendum lorem sed,
                            imperdiet urna. Sed a cursus est, sed viverra urna. Pellentesque interdum purus sit amet turpis iaculis, eget
                            vehicula risus semper. Cras lectus nibh, hendrerit at accumsan a, sagittis ac odio. Fusce tristique nunc sapien, et eleifend
                            est dictum eu.</p>
                    </div>
                </div>
                <div className="relative mt-24 m-auto mx-4 md:mx-12 lg:mx-52 grid grid-cols-1 mt-10 md:grid-cols-1 lg:grid-cols-2 px-4 justify-center">
                    <div className="">
                        <h1 className="font-bold text-1xl text-gray-600 drop-shadow-sm text-left">Project Nº1: Laser drone</h1>
                        <p className="p-2 mr-6 mt-2 text-gray-400 font-medium text-left">Phasellus tempor in sem id posuere. Maecenas sit amet hendrerit lectus. Ut fermentum
                            facilisis odio, sed eleifend justo. Pellentesque ultricies vulputate enim, ac eleifend magna pretium eu.
                            Aliquam cursus sagittis nibh, at tempus nulla fermentum a.</p>
                    </div>
                    <div className="mt-6 md:mt-0">
                        <img src="./images/drone-laser.jpg" className="rounded object-cover	h-48 w-11/12" alt="" />
                    </div>
                </div>
                <div className="relative mt-24 m-auto mx-4 md:mx-12 lg:mx-52 grid grid-cols-1 mt-10 md:grid-cols-1 lg:grid-cols-2 px-4 justify-center">
                    <div className="mb-6 md:mb-0">
                        <img src="./images/drone-code.jpg" className="rounded object-cover	h-48 w-11/12" alt="" />
                    </div>
                    <div>
                        <h1 className="font-bold text-1xl text-gray-600 drop-shadow-sm text-right mr-6">Project Nº2: Public API</h1>
                        <p className="p-2 mr-6 mt-2 text-gray-400 font-medium text-right">Aenean condimentum ultrices libero, non sagittis
                            eros venenatis feugiat. Donec vehicula eleifend ligula. Class aptent taciti sociosqu
                            ad litora torquent per conubia nostra, per inceptos himenaeos. Donec venenatis purus ante, non euismod velit
                            finibus at. Maecenas vestibulum at lacus eu congue.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Project;