import React from "react";
import { Link } from "react-router-dom";
const DontionButton = () => {
    return (
        <div className="bg-white overflow-y-hidden">
            {/* Code block starts */}
                <div className="bg-white">
                    <div className="container mx-auto flex flex-col items-center py-12 sm:py-24">
                        <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col  mb-5 sm:mb-10">
                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-gray-800 font-black leading-7 md:leading-10">
                                Donate &
                                <span className="text-indigo-700">Join Us</span>
                            </h1>
                            <p className="mt-5 sm:mt-10 lg:w-10/12 text-gray-400 font-normal text-center text-sm sm:text-lg">Your small Donation can create a huge differnce in someone's life </p>
                        </div>
                        <div className="flex justify-center items-center">
                            <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 lg:text-xl lg:font-bold  rounded text-white px-4 sm:px-10 border border-indigo-700 py-2 sm:py-4 text-sm"><Link to={'/Donate'}>Donate</Link></button>
                            <button className="ml-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-transparent transition duration-150 ease-in-out hover:border-indigo-600 lg:text-xl lg:font-bold  hover:text-indigo-600 rounded border border-indigo-700 text-indigo-700 px-4 sm:px-10 py-2 sm:py-4 text-sm"><Link to={'/JoinUs'}>Join Us</Link></button>
                        </div>
                    </div>
                </div>
            {/* Code block ends */}
        </div>

    );
}

export default DontionButton;
