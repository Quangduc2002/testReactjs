import React, { useState } from 'react';
import { axiosPatch } from '../Services/UseServices';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
function EditPost(props) {
    const { getTags, setShowEdit, editPost, hanldeGetPosts, toast } = props;
    const [editTitle, setEditTitle] = useState(editPost[0]?.title);
    const [editDes, setEditDes] = useState(editPost[0]?.description);
    const [editTags, setEditTags] = useState(editPost[0]?.tags);
    const handleCheckBoxTags = (value, checked) => {
        if (checked) {
            setEditTags([...editTags, value]);
        } else {
            setEditTags(editTags.filter((tag) => tag !== value));
        }
    };

    const handlEdit = async () => {
        await axiosPatch(`posts/${editPost[0]?.id}`, {
            title: editTitle,
            description: editDes,
            tags: editTags,
        })
            .then((res) => {
                hanldeGetPosts();
                setShowEdit(false);
                toast.success('Sửa thành công !');
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <div className="main-modal bg-[#050505b3] fixed w-full inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster">
            <div className="border border-blue-500  modal-container bg-white md:w-4/12 xs:w-[300px] md:max-w-11/12 mx-auto rounded-xl shadow-lg z-50 overflow-y-auto">
                <div className="modal-content py-4 text-left px-6">
                    <div className="flex justify-between items-center pb-3">
                        <p className="text-2xl font-bold text-gray-500">Edit posts</p>
                        <div className="modal-close cursor-pointer z-50">
                            <FontAwesomeIcon
                                onClick={() => setShowEdit(false)}
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
                                        value={editTitle}
                                        onChange={(e) => setEditTitle(e.target.value)}
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
                                        value={editDes}
                                        onChange={(e) => setEditDes(e.target.value)}
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
                                                        checked={editTags.includes(tag)}
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
                    <div className="flex justify-end pt-2 ">
                        <button
                            onClick={() => setShowEdit(false)}
                            className="px-4 bg-gray-200 p-3 rounded text-black hover:bg-gray-300 font-semibold"
                        >
                            Hủy
                        </button>
                        <button
                            onClick={handlEdit}
                            className="px-4 bg-blue-500 p-3 ml-3 rounded-lg text-white hover:bg-teal-400"
                        >
                            Sửa
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditPost;
