import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import image3 from '../assets/Image/image3.png';
import image4 from '../assets/Image/image4.png';
import image5 from '../assets/Image/image5.png';
import image6 from '../assets/Image/image6.png';
import img1 from '../assets/Image/img1.png';
import img2 from '../assets/Image/img2.png';
import img3 from '../assets/Image/img3.png';
import img4 from '../assets/Image/img4.png';

function Content(props) {
    const Features = [
        {
            id: 1,
            image: image3,
            bgImage: img1,
            title: 'Search Data',
            text: 'Don’t worry if your data is very large, the Data Warehoue provides a search engine, which is useful for making it easier to find data effectively saving time.',
        },

        {
            id: 2,
            image: image4,
            bgImage: img2,
            title: '24 Hours Access',
            text: 'Access is given 24 hours a full morning to night and meet again in the morning, giving you comfort when you need data when urgent.',
        },

        {
            id: 3,
            image: image5,
            bgImage: img3,
            title: 'Print Out',
            text: 'Print out service gives you convenience if someday you need print data, just edit it all and just print it.',
        },

        {
            id: 4,
            image: image6,
            bgImage: img4,
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
            <div className="grid md:grid-cols-2 xs:grid-cols-1 gap-8">
                {Features.map((feature) => {
                    return (
                        <div
                            key={feature.id}
                            className="w-full max-w-[530px] h-[358px] relative flex max-lg:flex-col items-center justify-center xl:flex-row xl:justify-start mx-auto aos-init aos-animate"
                        >
                            <div className="max-lg:hidden flex absolute top-0 right-0 -z-10">
                                <img src={feature.bgImage} alt="" />
                            </div>
                            <div className="max-lg:max-w-[120px] xl:mr-7 max-w-[232px] ">
                                <img src={feature.image} alt="" />
                            </div>
                            <div className="max-w-[220px]">
                                <h3 className="h3 mb-4 max-lg:text-center">{feature.title}</h3>
                                <p className="font-light italic mb-4">{feature.text}</p>
                                <div className="flex items-center gap-x-2 group max-lg:justify-center">
                                    <div className="flex items-center ">
                                        <span className="text-[#212353] hover:text-[#9C69E2] cursor-pointer hover:transition-all hover:duration-300">
                                            Learn more
                                        </span>
                                        &nbsp;&nbsp;
                                        <FontAwesomeIcon className="text-[#9C69E2]" icon={faArrowRight} />
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
