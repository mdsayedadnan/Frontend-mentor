import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Button } from "@material-tailwind/react";


const Details = () => {
    const { user } = useContext(AuthContext);

    const [blogs, setBlogs] = useState([])
    const { id } = useParams()
    useEffect(() => {
        fetchBlogData()


    }, [])
    const fetchBlogData = async () => {
        const { data } = await axios.get(
            `https://frontend-mento-server.vercel.app/details/${id}`
        )
        setBlogs(data)
    }



    return (
        <div>
            <div className="flex items-center justify-center mb-6">
                <h1 className="text-4xl font-bold text-gray-800 mt-5 p-4">Details The Blog</h1>
            </div>
            <div className=" mx-auto p-6">


                <div className="bg-white shadow-lg p-4 rounded-lg overflow-hidden">

                    <div className="flex justify-center items-center">
                        <img
                            className="w-[500px] h-72 object-cover rounded-xl"
                            src={blogs.imageUrl}
                            alt={blogs.title}
                        />
                    </div>

                    <div className="p-6">
                        <h2 className="text-3xl font-bold text-gray-800 mb-2">{blogs.blogName}</h2>
                        <h3 className="text-2xl font-semibold text-gray-700 mb-2"> {blogs.title}</h3>
                        <p className="text-gray-600 mb-2">
                            <span className="font-semibold"></span> {blogs.category}
                        </p>
                        <p className="text-gray-600 mb-4">{blogs.shortDescription}</p>
                        <p className="text-gray-600">{blogs.longDescription}</p>


                    </div >
                    <div className="flex items-center mt-6 justify-center ">
                    <Button className=" btn bg-gradient-to-r from-green-400 to-blue-500 hover:from-blue-500 hover:to-green-400 text-white py-2 px-6 rounded-lg mr-7" variant="outlined ">Update</Button>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default Details;
