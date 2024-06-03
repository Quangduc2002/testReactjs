import React, { useState } from 'react';
import { axiosPost } from '../Services/UseServices';
import { useNavigate } from 'react-router-dom';
import baseURL from '../Services/CutomizeAxios';

function Login(props) {
    const { toast } = props;
    const [username, setUsername] = useState('');

    const navigate = useNavigate();
    const hanldeSubmit = async (e) => {
        e.preventDefault();
        await axiosPost('/auth/login', {
            username: username,
        })
            .then((res) => {
                console.log(res);
                localStorage.setItem('accessToken', res.data.accessToken);
                baseURL.defaults.headers.common['Authorization'] = `Bearer ${res.data.accessToken}`;
                navigate('/');
                toast.success('Đăng nhập thành công !');
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className="xl:w-[1120px] xs:w-auto xl:m-auto xs:mx-10 py-16 h-screen">
            <div className="flex items-end gap-2">
                <div className="bg-[#9C69E2] w-[20px] h-[20px] rounded-[20px]"></div>
                <div className="bg-[#F063B8] w-[20px] h-[35px] rounded-[20px]"></div>
            </div>

            <div className="flex items-center justify-center h-full ">
                <div>
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
                        onClick={hanldeSubmit}
                        className="w-full py-3 text-white bg-[#9C69E2] hover:bg-[#F063B8] hover:transition-all hover:duration-300 cursor-pointer  rounded-[50px]"
                    >
                        Sign In
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Login;
