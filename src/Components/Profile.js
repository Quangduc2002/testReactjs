import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import _ from 'lodash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faTrash,
    faPen,
    faXmark,
    faArrowUpShortWide,
    faArrowDownShortWide,
    faBars,
} from '@fortawesome/free-solid-svg-icons';
import { axiosDelete, axiosGet, axiosPatch, axiosPost } from '../Services/UseServices';
import Pagination from './Pagination';
import path from './Path';
function Profile(props) {
    const [posts, setPosts] = useState([]);
    const [getTags, setGetTags] = useState([]);
    const [showAdd, setShowAdd] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [tags, setTags] = useState([]);
    const [totalProduct, setTotalProduct] = useState(0);
    const [totalPage, setTotalPage] = useState(0);
    const [totalPageSize, setTotalPageSize] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchs, setSearchs] = useState('');
    const [succeSearch, setSucceSearch] = useState([]);
    const [showSort, setShowSort] = useState(true);
    const [showMenu, setShowMenu] = useState(false);

    const navigate = useNavigate();
    useEffect(() => {
        hanldeGetPosts();
        // bỏ warning React Hook useEffect has a missing dependency
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentPage]);

    const hanldeGetPosts = async () => {
        await axiosGet(`/posts?page=${currentPage}`)
            .then((res) => {
                setPosts(res.data.posts);
                setTotalProduct(res.data.total);
                setTotalPage(res.data.total_page);
                setTotalPageSize(res.data.page_size);
                setCurrentPage(res.data.current_page);
            })
            .catch((err) => {
                console.log(err);
            });

        await axiosGet('/posts/tags')
            .then((res) => {
                setGetTags(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const handlEdit = async (id) => {
        await axiosPatch(`posts/${id}`, {
            title: 'Edit title',
            description: 'Edit description',
        })
            .then((res) => {
                hanldeGetPosts();
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const handlDelete = async (id) => {
        await axiosDelete(`posts/${id}`)
            .then((res) => {
                setPosts(posts.filter((post) => post.id !== id));
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const handlAddPosts = async () => {
        await axiosPost(`posts`, {
            title: title,
            description: description,
            tags: tags,
        })
            .then((res) => {
                setShowAdd(false);
                setDescription('');
                setTitle('');
                setTags('');
                hanldeGetPosts();
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const handleCheckBoxTags = (value, checked) => {
        if (checked) {
            setTags([...tags, value]);
        } else {
            setTags(tags.filter((tag) => tag !== value));
        }
    };

    const filteredPosts = posts.filter((item) => {
        return item.title.toLowerCase().includes(searchs.toLowerCase());
    });

    const HandleSearch = () => {
        setSucceSearch(filteredPosts);
        setSearchs('');
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            HandleSearch();
        }
    };
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

    const hanldeSort = (sort, sortField) => {
        const sortOrderBy = _.orderBy(posts, [sortField], [sort]);
        setPosts(sortOrderBy);
        setShowSort(!showSort);
    };

    return (
        <div className="flex w-screen h-screen text-gray-700">
            {showMenu && (
                <div
                    onClick={() => setShowMenu(false)}
                    className="main-modal bg-[#050505b3] fixed w-full inset-0 z-10 overflow-hidden flex justify-center items-center animated fadeIn faster"
                ></div>
            )}
            <div
                className={`lg:flex flex-col z-20 w-56 border-r border-gray-300 pt-10 bg-gray-200  xs:hidden xs:top-0 xs:bottom-0`}
            >
                <div className="flex items-end gap-2 justify-center">
                    <div className="bg-[#9C69E2] w-[20px] h-[20px] rounded-[20px]"></div>
                    <div className="bg-[#F063B8] w-[20px] h-[35px] rounded-[20px]"></div>
                </div>
                <div className="flex flex-col flex-grow py-4 overflow-auto">
                    <NavLink
                        className="flex px-6 hover:text-black items-center flex-shrink-0 h-10 px-2 text-sm font-medium rounded hover:bg-gray-300"
                        to={path.Home}
                    >
                        <span className="leading-none">Home</span>
                    </NavLink>
                    <NavLink
                        className="flex px-6 hover:text-black items-center flex-shrink-0 h-10 px-2 text-sm font-medium rounded hover:bg-gray-300"
                        to={path.Profile}
                    >
                        <span className="leading-none">Posts</span>
                    </NavLink>
                    <li
                        className="flex cursor-pointer px-6 items-center flex-shrink-0 h-10 px-2 text-sm font-medium rounded hover:bg-gray-300"
                        onClick={hanldeLogout}
                    >
                        <span className="leading-none">Logout</span>
                    </li>
                </div>
            </div>

            <div
                className={`flex flex-col z-20 lg:hidden ${
                    showMenu ? 'current' : 'menu'
                }   w-56 border-r border-gray-300 pt-10 bg-gray-200 lg:relative xs:absolute xs:top-0 xs:bottom-0`}
            >
                <FontAwesomeIcon
                    className=" text-[#9C69E2] top-3 right-3 absolute  cursor-pointer hover:text-[#F063B8] hover:transition-all hover:duration-300"
                    icon={faXmark}
                    onClick={() => setShowMenu(false)}
                />
                <div className="flex items-end gap-2 justify-center">
                    <div className="bg-[#9C69E2] w-[20px] h-[20px] rounded-[20px]"></div>
                    <div className="bg-[#F063B8] w-[20px] h-[35px] rounded-[20px]"></div>
                </div>
                <div className="flex flex-col flex-grow py-4 overflow-auto">
                    <NavLink
                        className="flex px-6 hover:text-black items-center flex-shrink-0 h-10 px-2 text-sm font-medium rounded hover:bg-gray-300"
                        to={path.Home}
                    >
                        <span className="leading-none">Home</span>
                    </NavLink>
                    <NavLink
                        className="flex px-6 hover:text-black items-center flex-shrink-0 h-10 px-2 text-sm font-medium rounded hover:bg-gray-300"
                        to={path.Profile}
                    >
                        <span className="leading-none">Posts</span>
                    </NavLink>
                    <li
                        className="flex cursor-pointer px-6 items-center flex-shrink-0 h-10 px-2 text-sm font-medium rounded hover:bg-gray-300"
                        onClick={hanldeLogout}
                    >
                        <span className="leading-none">Logout</span>
                    </li>
                </div>
            </div>

            <div className="flex flex-col flex-grow overflow-scroll">
                <div className="flex-grow m-12 overflow-auto">
                    <div className="flex flex-wrap gap-3 justify-between mb-6">
                        <div>
                            <FontAwesomeIcon
                                className="lg:hidden xs:inline-block text-[#9C69E2] cursor-pointer hover:text-[#F063B8] hover:transition-all hover:duration-300"
                                icon={faBars}
                                onClick={() => setShowMenu(true)}
                            />
                            &nbsp; &nbsp; &nbsp;
                            <button
                                onClick={() => setShowAdd(true)}
                                className="bg-[#9C69E2] hover:bg-[#F063B8] hover:transition-all hover:duration-300 text-white h-[40px] w-[168px] rounded-[50px]"
                            >
                                Add new
                            </button>
                        </div>
                        <input
                            placeholder="title"
                            value={searchs}
                            onChange={(event) => setSearchs(event.target.value)}
                            onKeyDown={handleKeyPress}
                            className="border border-[#000000] hover:border-indigo-500/75  rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-violet-300 "
                        />
                    </div>

                    <div className="grid  gap-6">
                        <table className={'border-collapse border-black border p-2  '}>
                            <thead className="border-collapse border-black border p-2 ">
                                <tr className="border-collapse border-black border p-2 p-2">
                                    <th className="bg-[#ddd]  text-center border-collapse border-black border p-2">
                                        ID
                                    </th>
                                    <th className="bg-[#ddd] text-center border-collapse border-black border p-2">
                                        Title &nbsp;
                                        {showSort ? (
                                            <FontAwesomeIcon
                                                className="text-[#9C69E2] cursor-pointer hover:text-[#F063B8] hover:transition-all hover:duration-300"
                                                icon={faArrowDownShortWide}
                                                onClick={() => hanldeSort('asc', 'title')}
                                            />
                                        ) : (
                                            <FontAwesomeIcon
                                                className="text-[#9C69E2] cursor-pointer hover:text-[#F063B8] hover:transition-all hover:duration-300"
                                                icon={faArrowUpShortWide}
                                                onClick={() => hanldeSort('desc', 'title')}
                                            />
                                        )}
                                    </th>
                                    <th className="bg-[#ddd] text-center border-collapse border-black border p-2 w-[500px]">
                                        Description
                                    </th>
                                    <th className="bg-[#ddd] text-center border-collapse border-black border p-2">
                                        Tags
                                    </th>
                                    <th className="text-center bg-[#ddd] text-center border-collapse border-black border p-2 text-center">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {succeSearch.length > 0
                                    ? succeSearch.map((post, index) => (
                                          <tr key={post.id} className="border-collapse border-black border  p-2 p-2">
                                              <td className="border-collapse border-black border border p-2 text-center">
                                                  {index + 1}
                                                  {post.id}
                                              </td>
                                              <td className="border-collapse border-black border p-2 text-center">
                                                  {post.title}
                                              </td>
                                              <td className="border-collapse border-black border p-2 ">
                                                  {post.description}
                                              </td>
                                              <td className="border-collapse border-black border p-2 text-center">
                                                  {post.tags.map((tag, index) => (
                                                      <span key={index}>{index === 0 ? `${tag}` : `, ${tag}`}</span>
                                                  ))}
                                              </td>
                                              <td className="border-collapse border-black border p-2 text-center">
                                                  <div className="flex justify-around">
                                                      <FontAwesomeIcon
                                                          className="text-[#9C69E2] cursor-pointer hover:text-[#F063B8] hover:transition-all hover:duration-300"
                                                          icon={faPen}
                                                          onClick={() => handlEdit(post.id)}
                                                      />
                                                      <FontAwesomeIcon
                                                          className="text-[#9C69E2] cursor-pointer hover:text-[#F063B8] hover:transition-all hover:duration-300"
                                                          icon={faTrash}
                                                          onClick={() => handlDelete(post.id)}
                                                      />
                                                  </div>
                                              </td>
                                          </tr>
                                      ))
                                    : posts.map((post, index) => (
                                          <tr key={post.id} className="border-collapse border-black border  p-2 p-2">
                                              <td className="border-collapse border-black border border p-2 text-center">
                                                  {index + 1}
                                                  {post.id}
                                              </td>
                                              <td className="border-collapse border-black border p-2 text-center">
                                                  {post.title}
                                              </td>
                                              <td className="border-collapse border-black border p-2 ">
                                                  {post.description}
                                              </td>
                                              <td className="border-collapse border-black border p-2 text-center">
                                                  {post.tags.map((tag, index) => (
                                                      <span key={index}>{index === 0 ? `${tag}` : `, ${tag}`}</span>
                                                  ))}
                                              </td>
                                              <td className="border-collapse border-black border p-2 text-center">
                                                  <div className="flex justify-around">
                                                      <FontAwesomeIcon
                                                          className="text-[#9C69E2] cursor-pointer hover:text-[#F063B8] hover:transition-all hover:duration-300"
                                                          icon={faPen}
                                                          onClick={() => handlEdit(post.id)}
                                                      />
                                                      <FontAwesomeIcon
                                                          className="text-[#9C69E2] cursor-pointer hover:text-[#F063B8] hover:transition-all hover:duration-300"
                                                          icon={faTrash}
                                                          onClick={() => handlDelete(post.id)}
                                                      />
                                                  </div>
                                              </td>
                                          </tr>
                                      ))}
                            </tbody>
                        </table>
                    </div>
                    <Pagination
                        totalPage={totalPage}
                        currentPage={currentPage}
                        totalPageSize={totalPageSize}
                        totalProduct={totalProduct}
                        setCurrentPage={setCurrentPage}
                    />
                </div>
            </div>

            {showAdd && (
                <div className="main-modal bg-[#050505b3] fixed w-full inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster">
                    <div className="border border-blue-500 shadow-lg modal-container bg-white md:w-4/12 xs:w-[300px] md:max-w-11/12 mx-auto rounded-xl shadow-lg z-50 overflow-y-auto">
                        <div className="modal-content py-4 text-left px-6">
                            <div className="flex justify-between items-center pb-3">
                                <p className="text-2xl font-bold text-gray-500">Add posts</p>
                                <div className="modal-close cursor-pointer z-50">
                                    <FontAwesomeIcon
                                        onClick={() => setShowAdd(false)}
                                        className="text-[#9C69E2] cursor-pointer hover:text-[#F063B8] hover:transition-all hover:duration-300"
                                        icon={faXmark}
                                    />
                                </div>
                            </div>
                            <div className="my-5 mr-5 ml-5 flex justify-center">
                                <form className="w-full">
                                    <div className="">
                                        <div className="">
                                            <label htmlFor="title" className="text-md text-gray-600">
                                                Title
                                            </label>
                                        </div>
                                        <div className="">
                                            <input
                                                value={title}
                                                onChange={(e) => setTitle(e.target.value)}
                                                type="text"
                                                id="title"
                                                name="title"
                                                className="h-3 p-6 w-full border-2 border-gray-300 mb-5 rounded-md"
                                            />
                                        </div>

                                        <div className="">
                                            <label htmlFor="description" className="text-md text-gray-600">
                                                Description
                                            </label>
                                        </div>
                                        <div className="">
                                            <input
                                                value={description}
                                                onChange={(e) => setDescription(e.target.value)}
                                                type="text"
                                                id="description"
                                                name="description"
                                                className="h-3 p-6 w-full border-2 border-gray-300 mb-5 rounded-md"
                                            />
                                        </div>

                                        <div className="">
                                            <label htmlFor="Tags" className="text-md text-gray-600">
                                                Tags
                                            </label>
                                        </div>
                                        <div className="grid xxs:grid-cols-2 ">
                                            {getTags.map((tag, index) => {
                                                return (
                                                    <li key={index}>
                                                        <label className={'flex items-center'}>
                                                            <input
                                                                style={{ width: 16, height: 16 }}
                                                                // checked={isCheckedMaterial.includes(material.id)}
                                                                value={tag}
                                                                type="checkbox"
                                                                onChange={(e) =>
                                                                    handleCheckBoxTags(e.target.value, e.target.checked)
                                                                }
                                                            />
                                                            &nbsp;&nbsp;{tag}
                                                        </label>
                                                    </li>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="flex justify-end pt-2 space-x-14">
                                <button
                                    onClick={() => setShowAdd(false)}
                                    className="px-4 bg-gray-200 p-3 rounded text-black hover:bg-gray-300 font-semibold"
                                >
                                    Hủy
                                </button>
                                <button
                                    onClick={handlAddPosts}
                                    className="px-4 bg-blue-500 p-3 ml-3 rounded-lg text-white hover:bg-teal-400"
                                >
                                    Thêm
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Profile;
