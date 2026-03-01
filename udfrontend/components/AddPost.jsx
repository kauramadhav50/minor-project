import { useState } from "react";
import { NavLink } from "react-router-dom";

const AddPost = ({ addPost }) => {

    const [text, setText] = useState("");

    function handlePost() {

        if (text.trim() === "") return;

        addPost(text);
        setText("");

        alert("Post Added Successfully");

    }

    return (

        <div className="pt-20">

            <div className="max-w-[600px] mx-auto">

                <div className="bg-white border rounded-lg p-4">

                    {/* Profile */}

                    <div className="flex gap-3 items-center mb-4">

                        <img
                            src="/logo.png"
                            className="w-12 h-12 rounded-full"
                        />

                        <div>

                            <p className="font-semibold">
                                Devanshu Gupta
                            </p>

                            <p className="text-xs text-gray-500">
                                Post to Anyone
                            </p>

                        </div>

                    </div>


                    {/* Text Area */}

                    <textarea
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder="What do you want to talk about?"
                        className="w-full h-40 outline-none resize-none text-lg"
                    />


                    {/* Button */}

                    <div className="flex justify-end mt-4">

                        <NavLink to="/">

                            <button
                                onClick={handlePost}
                                className="bg-blue-600 text-white
                                px-5 py-1.5 rounded-full">

                                Post

                            </button>

                        </NavLink>

                    </div>

                </div>

            </div>

        </div>

    )
}

export default AddPost;