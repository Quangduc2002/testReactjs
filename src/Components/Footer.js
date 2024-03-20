import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return (
        <div className="bg-white dark:bg-gray-900 border-t-2 mb-10">
            <div className="mx-auto w-full max-w-screen-xl">
                <div className="grid grid-cols-2 gap-8  py-10 lg:py-8 md:grid-cols-4">
                    <div>
                        <div className="flex flex-wrap items-center gap-3 mb-6">
                            <div className="flex items-end gap-2">
                                <div className="bg-[#9C69E2] w-[20px] h-[20px] rounded-[20px]"></div>
                                <div className="bg-[#F063B8] w-[20px] h-[35px] rounded-[20px]"></div>
                            </div>
                            <h2 className=" text-sm font-bold text-gray-900 uppercase dark:text-white ">
                                DataWarehouse
                            </h2>
                        </div>
                        <ul className="text-gray-500 dark:text-gray-400 font-medium">
                            <li className="mb-4">
                                <Link href="#" className="hover:underline">
                                    Warehouse Society, 234 Bahagia Ave Street PRBW 29281
                                </Link>
                            </li>
                            <li className="mb-4">
                                <Link href="#" className="hover:underline">
                                    info@warehouse.project 1-232-3434 (Main)
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-bold text-gray-900 uppercase dark:text-white">About</h2>
                        <ul className="text-gray-500 dark:text-gray-400 font-medium">
                            <li className="mb-4">
                                <Link href="#" className="hover:underline">
                                    Profile
                                </Link>
                            </li>
                            <li className="mb-4">
                                <Link href="#" className="hover:underline">
                                    Features
                                </Link>
                            </li>
                            <li className="mb-4">
                                <Link href="#" className="hover:underline">
                                    Careers
                                </Link>
                            </li>
                            <li className="mb-4">
                                <Link href="#" className="hover:underline">
                                    DW News
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-bold text-gray-900 uppercase dark:text-white">Help</h2>
                        <ul className="text-gray-500 dark:text-gray-400 font-medium">
                            <li className="mb-4">
                                <Link href="#" className="hover:underline">
                                    Support
                                </Link>
                            </li>
                            <li className="mb-4">
                                <Link href="#" className="hover:underline">
                                    Sign up
                                </Link>
                            </li>
                            <li className="mb-4">
                                <Link href="#" className="hover:underline">
                                    Guide
                                </Link>
                            </li>
                            <li className="mb-4">
                                <Link href="#" className="hover:underline">
                                    Reports
                                </Link>
                            </li>
                            <li className="mb-4">
                                <Link href="#" className="hover:underline">
                                    Q&A
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-bold text-gray-900 uppercase dark:text-white">Social Media</h2>
                        <ul className="text-gray-500 dark:text-gray-400 font-medium flex gap-3">
                            <li className="w-12 h-12 bg-[#e5e7eb] rounded-full"></li>
                            <li className="w-12 h-12 bg-[#e5e7eb] rounded-full"></li>
                            <li className="w-12 h-12 bg-[#e5e7eb] rounded-full"></li>
                        </ul>
                    </div>
                </div>
                <div className="md:w-[360px] md:flex md:items-center md:justify-between">
                    <span className="text-sm text-gray-500 dark:text-gray-300 ">
                        © Datawarehouse™, 2020. All rights reserved. Company Registration Number: 21479524.
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Footer;
