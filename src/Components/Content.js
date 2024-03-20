import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import image3 from '../assets/Image/image3.png';
import image4 from '../assets/Image/image4.png';
import image5 from '../assets/Image/image5.png';
import image6 from '../assets/Image/image6.png';

function Content(props) {
    const Features = [
        {
            id: 1,
            image: image3,
            title: 'Search Data',
            text: 'Don’t worry if your data is very large, the Data Warehoue provides a search engine, which is useful for making it easier to find data effectively saving time.',
        },

        {
            id: 2,
            image: image4,
            title: '24 Hours Access',
            text: 'Access is given 24 hours a full morning to night and meet again in the morning, giving you comfort when you need data when urgent.',
        },

        {
            id: 3,
            image: image5,
            title: 'Print Out',
            text: 'Print out service gives you convenience if someday you need print data, just edit it all and just print it.',
        },

        {
            id: 4,
            image: image6,
            title: 'Security Code',
            text: 'Data Security is one of our best facilities. Allows for your files to be safer. The file can be secured with a code or password that you created, so only you can open the file.',
        },
    ];
    return (
        <div className="my-20">
            <div className="sm:w-[576px] xs:w-auto text-center m-auto">
                <h1 className="text-[40px] font-bold">Features</h1>
                <p className="text-lg text-[#4B5D68] my-10">
                    Some of the features and advantages that we provide for those of you who store data in this Data
                    Warehouse.
                </p>
            </div>
            <div className="grid lg:grid-cols-2 xs:grid-cols-1 gap-8">
                {Features.map((feature) => {
                    return (
                        <div key={feature.id} className="flex sm:h-[340px] xs:h-[500px] items-center relative">
                            <div
                                className={`sm:px-10 xs:p-10 rounded-[50px] absolute h-full flex items-center ${
                                    feature.id === 1
                                        ? `bg-[#e4fffb]`
                                        : feature.id === 2
                                        ? `bg-[#ede0ff]`
                                        : feature.id === 3
                                        ? `bg-[#ffe9f6]`
                                        : feature.id === 4
                                        ? `bg-[#c8ebff]`
                                        : ''
                                }
                    `}
                            >
                                <div className="xs:block sm:flex gap-4 items-center">
                                    <img
                                        className="sm:w-[200px]  xs:m-auto sm:m-0 sm:h-[200px] xs:w-[100px] xs:h-[100px] z-10"
                                        src={feature.image}
                                        alt=""
                                    ></img>
                                    <div>
                                        <h2 className="text-[#212353] text-2xl">{feature.title}</h2>
                                        <p className="text-[#4B5D68] text-base my-3">{feature.text}</p>
                                        <div className="flex items-center">
                                            <span className="text-[#212353] hover:text-[#9C69E2] cursor-pointer hover:transition-all hover:duration-300">
                                                Learn more
                                            </span>
                                            &nbsp;&nbsp;
                                            <FontAwesomeIcon className="text-[#9C69E2]" icon={faArrowRight} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Content;
