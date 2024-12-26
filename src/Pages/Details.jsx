import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Button } from "@material-tailwind/react";
import Swal from "sweetalert2";


const Details = () => {
    const { user } = useContext(AuthContext);
    const [blogs, setBlogs] = useState([]);
     const [comments,setComments]=useState([])
    const { id } = useParams()


    // SEND DATA 
    const handleCommentSubmit = e => {
        e.preventDefault()

        const Comments = e.target.Comment.value;
        const email = user.email;
        const displayName = user.displayName;
        const photoURL = user.photoURL;
        const BlogId = blogs._id


        const CommentData =  {Comments,email,displayName,photoURL,BlogId}
        axios.post('http://localhost:5000/comments',CommentData)
        .then(response => {
          console.log(response.data);
          if (response.data.insertedId) {
            console.log('successfully added');
            Swal.fire({
              title: 'Success!',
              text: 'added successfully',
              icon: 'success',
              confirmButtonText: 'Ok'
            });
            e.target.reset();
          }
            

        })
        .catch(error => console.error(error));
       

    }
 
console.log(comments);
    useEffect(() => {
        axios.get(`/http://localhost:5000/CommentData/${blogs.id}`)
            .then(response => setComments(response.data))
            .catch(error => console.error(error));
    }, [blogs._id]);

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
                {/* comment area */}
                <form onSubmit={handleCommentSubmit} className="bg-teal-400">
                    <div className='flex flex-col gap-2 mt-4'>
                        <label className='text-2xl font-semibold '>
                            Comment Section
                        </label>
                        <textarea
                            className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 '
                            name='Comment'
                            placeholder="Write a comment..."
                            // onChange={(e) => setComments(e.target.value)}
                            // value={comments}

                            id='description'
                        ></textarea>
                    </div>
                    <div className="flex items-center justify-center">
                        <button className="btn">Post Comment</button>

                    </div>
                </form>
            </div>

        </div>

    );
};

export default Details;
