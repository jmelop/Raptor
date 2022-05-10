import React from "react";
import '../App.css';
import Member from "./Member";
import './Team.css';

function Team() {
    return (
        <>
            <div className="flex flex-col">
                <div className="justify-center mx-auto my-24">
                    <div className="mb-10">
                        <h1 className="font-bold text-2xl">- Our Team -</h1>
                        <h3 className="mt-2 font-medium text-gray-600">Phasellus eget tincidunt enim. Pellentesque ut mauris nec lacus luctus fringilla nec a tortor.</h3>
                    </div>
                    <div className="inline-grid grid-cols-3 gap-4">
                        <div className="bg-slate-800 rounded-md w-72">
                            <Member
                                src='images/p1.jpg'
                                name='Kian'
                                lastname='Todd'
                                job='Senior Developer'
                            />
                        </div>
                        <div className="bg-slate-800 rounded-md w-72">
                            <Member
                                src='images/p2.jpg'
                                name='Sage'
                                lastname='Haas'
                                job='Creative Director'
                            />
                        </div>
                        <div className="bg-slate-800 rounded-md w-72">
                            <Member
                                src='images/p3.jpg'
                                name='Irene'
                                lastname='Freeman'
                                job='Senior Developer'
                            />
                        </div>
                        <div className="bg-slate-800 rounded-md w-72">
                            <Member
                                src='images/p4.jpg'
                                name='Kaylin'
                                lastname='Duke'
                                job='HR Manager'
                            />
                        </div>
                        <div className="bg-slate-800 rounded-md w-72">
                            <Member
                                src='images/p5.jpg'
                                name='Donald'
                                lastname='Bryan'
                                job='Junior Developer'
                            />
                        </div>
                        <div className="bg-slate-800 rounded-md w-72">
                            <Member
                                src='images/p6.jpg'
                                name='Noelle'
                                lastname='Miles'
                                job='Operations Manager'
                            />
                        </div>
                    </div>
                    <div class="hidden sm:block" aria-hidden="true">
                        <div class="py-5">
                            <div class="border-t border-gray-200"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Team;