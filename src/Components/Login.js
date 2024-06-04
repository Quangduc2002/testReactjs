import React, { useState } from 'react';
import { axiosPost } from '../Services/UseServices';
import { NavLink, useNavigate } from 'react-router-dom';
import baseURL from '../Services/CutomizeAxios';

function Login(props) {
    const { toast } = props;
    const [username, setUsername] = useState('');

    const navigate = useNavigate();
    const hanldeSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axiosPost('/auth/login', {
                username: username,
            });

            if (res && res.data && res.data.accessToken) {
                localStorage.setItem('accessToken', res.data.accessToken);
                localStorage.setItem('refreshToken', res.data.refreshToken);
                baseURL.defaults.headers.common['Authorization'] = `Bearer ${res.data.accessToken}`;
                navigate('/');
                toast.success('Đăng nhập thành công !');
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="xl:w-[1120px] xs:w-auto xl:m-auto xs:mx-10 py-16 h-screen">
            <NavLink to={'/'} className="flex items-end gap-2">
                <div className="bg-[#9C69E2] w-[20px] h-[20px] rounded-[20px]"></div>
                <div className="bg-[#F063B8] w-[20px] h-[35px] rounded-[20px]"></div>
            </NavLink>

            <div className="flex items-center justify-center h-full ">
                <form onSubmit={hanldeSubmit}>
                    <h1 className="font-normal text-4xl text-center">Sign In</h1>
                    <div className="my-6">
                        <label htmlFor="username" className="text-base">
                            Username
                        </label>
                        <br />
                        <input
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            id="username"
                            placeholder="Nhập username"
                            className="border border-[#000000] hover:border-indigo-500/75  rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-violet-300 "
                        />
                    </div>
                    <button
                        // onClick={hanldeSubmit}
                        type="submit"
                        className="w-full py-3 text-white bg-[#9C69E2] hover:bg-[#F063B8] hover:transition-all hover:duration-300 cursor-pointer  rounded-[50px]"
                    >
                        Sign In
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;
