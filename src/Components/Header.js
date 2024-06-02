import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../assets/Image/image1.png';
import logo1 from '../assets/Image/img5.png';
import path from './Path';
import { axiosDelete } from '../Services/UseServices';

function Header(props) {
    const navigate = useNavigate();
    const hanldeLogout = async () => {
        await axiosDelete('/auth/logout')
            .then((res) => {
                localStorage.removeItem('accessToken');
                navigate('/login');
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div>
            <div className="h-[50px] flex flex-wrap gap-3 xxs:justify-between xs:justify-center items-center mb-16 mt-10">
                <div className="flex items-end  gap-2">
                    <div className="bg-[#9C69E2] w-[20px] h-[20px] rounded-[20px]"></div>
                    <div className="bg-[#F063B8] w-[20px] h-[35px] rounded-[20px]"></div>
                </div>
                {!localStorage.accessToken ? (
                    <NavLink className="h-full" to={path.Login}>
                        <div className="  xs:w-28 bg-[#9C69E2] hover:bg-[#F063B8] hover:transition-all hover:duration-300 cursor-pointer  rounded-[50px] h-full flex items-center justify-center">
                            <li className=" text-white">Sign in</li>
                        </div>
                    </NavLink>
                ) : (
                    <div className="flex h-full  gap-3 ">
                        <NavLink className="h-full" to={path.Profile}>
                            <div className=" xs:w-28 bg-[#9C69E2] hover:bg-[#F063B8] hover:transition-all hover:duration-300 cursor-pointer  rounded-[50px] h-full flex items-center justify-center">
                                <li className=" text-white">Profile</li>
                            </div>
                        </NavLink>
                        <div
                            onClick={hanldeLogout}
                            className=" xs:w-28 bg-[#9C69E2] hover:bg-[#F063B8] hover:transition-all hover:duration-300 cursor-pointer  rounded-[50px] h-full flex items-center justify-center"
                        >
                            <li className=" text-white">Logout</li>
                        </div>
                    </div>
                )}
            </div>

            <div className="lg:flex max-lg:text-center relative lg:h-[402px]">
                <div className="xl:w-[640px] xs:w-auto z-10 m-2.5">
                    <h1 className="text-[#212353] leading-none text-3xl  xl:text-[80px] font-bold">
                        Save your data storage here.
                    </h1>
                    <p className="text-[#4B5D68] lg:w-[378px] xs:w-auto  text-lg my-4">
                        Data Warehouse is a data storage area that has been tested for security, so you can store your
                        data here safely but not be afraid of being stolen by others.
                    </p>
                    <button className="bg-[#9C69E2] hover:bg-[#F063B8] hover:transition-all hover:duration-300 text-white h-[50px] w-[168px] rounded-[50px]">
                        Learn more
                    </button>
                </div>

                <div className="lg:w-[700px] xs:w-full lg:absolute right-0 ">
                    <img src={logo} alt="" />
                </div>
            </div>

            <div className="lg:flex xs:block max-lg:m-auto bg-[#f063b826] rounded-[50px] max-sm:px-10 px-20 py-10 my-20 gap-4 items-center">
                <img src={logo1} alt="" />
                <div>
                    <h1 className="text-4xl font-bold mb-6">We are a high-level data storage bank</h1>
                    <p>
                        The place to store various data that you can access at any time through the internet and where
                        you can carry it. This very flexible storage area has a high level of security. To enter into
                        your own data you must enter the password that you created when you registered in this Data
                        Warehouse.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Header;
