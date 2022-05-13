import React from "react";
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
    return (
        <>
            <div className="relative justify-center my-24">
                <div className="relative grid grid-cols-4 gap-x-4 lg:grid-cols-12 lg:gap-x-6 mx-auto max-w-7xl gap-y-16">
                    <div className="col-span-4">
                        <CardItem
                            src='images/MVC.jpg'
                            dron='MVC Solar 1.v'
                            stars='5'
                            description='Sed posuere porta vestibulum. Etiam commodo, ante et imperdiet.'
                            price='$499'
                        />
                    </div>
                    <div className="col-span-4">
                        <CardItem
                            src='images/MVC acc.jpg'
                            dron='MVC Pack'
                            stars='4.5'
                            description='Nullam efficitur diam vel arcu dignissim, a porta leo lacinia. Nulla mollis enim vel.'
                            price='$699'
                        />
                    </div>
                    <div className="col-span-4">
                        <CardItem
                            src='images/MVC cam.jpg'
                            dron='MVC Camera'
                            stars='5'
                            description='Aenean semper ac lorem vel bibendum. Praesent lorem mi, suscipit id libero ac.'
                            price='$799'
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards;