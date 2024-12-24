import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useParams } from "react-router-dom";
import axios from "axios";

const Details = () => {
    const { user } = useContext(AuthContext);

    const [blogs, setBlogs] = useState([])
    const { id } = useParams()
    useEffect(() => {
        fetchBlogData()


    }, [])
    const fetchBlogData = async () => {
        const { data } = await axios.get(
            `http://localhost:5000/details/${id}`
        )
        setBlogs(data)
        // setStartDate(new Date(data.deadline))
    }
 
   

    return (
        <div>

            {/* card section */}
            <div>
                <div>
                    <div className="flex items-center justify-center mt-7">
                        <h1 className="text-4xl">Details of the Blog</h1>
                    </div>
                    <div className=" flex-col lg:flex-row bg-base-100 shadow-xl">
                        <div className="flex justify-center items-center">
                            <figure>
                                <img
                                    className="w-96"
                                    src={blogs.imageUrl || "https://via.placeholder.com/300x200"}
                                    alt={blogs.title || "Blog Image"}
                                />
                            </figure>
                        </div>
                        <div className="">
                            <h2 className="">
                                <div>
                                    <h1 className="text-3xl font-bold">Blog Name: {blogs.blogName}</h1>
                                    <h1 className="text-2xl font-bold">Title: {blogs.title}</h1>
                                    <p className="py-1">Category: {blogs.category}</p>
                                    <p className="py-3">Description: {blogs.shortDescription}</p>
                                </div>
                            </h2>
                            <p>{blogs.longDescription}</p>
                            <div className="justify-end">
                                <div className="badge badge-outline">Fashion</div>
                                <div className="badge badge-outline">Products</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Details;
