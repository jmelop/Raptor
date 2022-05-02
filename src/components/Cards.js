import React from "react";
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
    return (
        <>
            <div className="flex justify-center my-24">
                <div className="mx-8">
                    <CardItem
                        src='images/MVC.jpg'
                        dron='MVC Solar 1.v'
                        stars='5'
                        description='Sed posuere porta vestibulum. Etiam commodo, ante et imperdiet.'
                        price='$499'
                    />
                </div>
                <div className="mx-8">
                    <CardItem
                        src='images/MVC acc.jpg'
                        dron='MVC Pack'
                        stars='4.5'
                        description='Nullam efficitur diam vel arcu dignissim, a porta leo lacinia. Nulla mollis enim vel.'
                        price='$699'
                    />
                </div>
                <div className="mx-8">
                    <CardItem
                        src='images/MVC cam.jpg'
                        dron='MVC Camera'
                        stars='5'
                        description='Aenean semper ac lorem vel bibendum. Praesent lorem mi, suscipit id libero ac.'
                        price='$799'
                    />
                </div>
            </div>
        </>
    )
}

export default Cards;