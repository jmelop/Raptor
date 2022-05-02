import React from "react";

function CardItem(props) {
    return (
        <>
            <div className="max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                <img className="p-8 rounded-t-lg h-80" src={props.src} alt="dron" />
                <div className="px-5 pb-5">
                    <a href="/">
                        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{props.dron}</h5>
                    </a>
                    <div className="flex items-center mt-2.5 mb-5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFBA33" class="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">{props.stars}</span>
                    </div>
                    <div className="flex items-center mt-2.5 mb-5">
                        <p className="text-white">{props.description}</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-3xl font-bold text-gray-900 dark:text-white mr-4">{props.price}</span>
                        <a href="/" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">Add to cart</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardItem;