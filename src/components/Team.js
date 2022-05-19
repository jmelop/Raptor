import React from "react";
import '../App.css';
import Member from "./Member";
import './Team.css';

function Team() {
    return (
        <>
            <div className="relative">
                <div className="justify-center mx-auto my-24 max-w-2xl px-4 sm:px-6 lg:max-w-5xl lg:px-8">
                    <div className="mb-10">
                        <h1 className="font-bold text-2xl">- Our Team -</h1>
                        <h3 className="mt-2 font-medium text-gray-600">Phasellus eget tincidunt enim. Pellentesque ut mauris nec lacus luctus fringilla nec a tortor.</h3>
                    </div>
                    <div className="relative grid grid-cols justify-center gap-y-8 sm:grid-cols-2 gap-x-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-6">
                        <div className="bg-slate-800 rounded-md w-72 shadow-lg shadow-gray-600">
                            <Member
                                src='images/p1.jpg'
                                name='Kian'
                                lastname='Todd'
                                job='Senior Developer'
                            />
                        </div>
                        <div className="bg-slate-800 rounded-md w-72 shadow-lg shadow-gray-600">
                            <Member
                                src='images/p2.jpg'
                                name='Sage'
                                lastname='Haas'
                                job='Creative Director'
                            />
                        </div>
                        <div className="bg-slate-800 rounded-md w-72 shadow-lg shadow-gray-600">
                            <Member
                                src='images/p3.jpg'
                                name='Irene'
                                lastname='Freeman'
                                job='Senior Developer'
                            />
                        </div>
                        <div className="bg-slate-800 rounded-md w-72 shadow-lg shadow-gray-600">
                            <Member
                                src='images/p4.jpg'
                                name='Kaylin'
                                lastname='Duke'
                                job='HR Manager'
                            />
                        </div>
                        <div className="bg-slate-800 rounded-md w-72 shadow-lg shadow-gray-600">
                            <Member
                                src='images/p5.jpg'
                                name='Donald'
                                lastname='Bryan'
                                job='Junior Developer'
                            />
                        </div>
                        <div className="bg-slate-800 rounded-md w-72 shadow-lg shadow-gray-600">
                            <Member
                                src='images/p6.jpg'
                                name='Noelle'
                                lastname='Miles'
                                job='Operations Manager'
                            />
                        </div>
                    </div>
                    <div className="mt-16">
                        <div className="sm:block" aria-hidden="true">
                            <div className="py-5">
                                <div className="border-t border-gray-300"></div>
                            </div>
                        </div>
                        <div className="my-12">
                            <h1 className="text-2xl font-medium text-gray-600">The best drones to record movies or series</h1>
                            <p className="mt-4 text-base text-gray-500">
                                Fusce mollis hendrerit eros, nec maximus nisl aliquet ac. Morbi at elit nisi. Aliquam hendrerit dui enim,
                                id volutpat velit tempor a. Fusce tristique diam lacus, eget condimentum lorem luctus volutpat.
                                Curabitur mattis nulla a euismod fringilla. Donec aliquet orci in nisi convallis ultricies. Fusce luctus purus
                                eu massa consequat fringilla et non mauris.
                            </p>
                            <h4 className="text-1xl font-medium text-gray-600 mt-4">Noelle Miles</h4>
                            <p className="text-base text-gray-500">- Operations Manager</p>
                        </div>
                        <div className="sm:block" aria-hidden="true">
                            <div className="py-5">
                                <div className="border-t border-gray-300"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Team;