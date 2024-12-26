import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";


const Details = () => {
    const { user } = useContext(AuthContext);
    const [blogs, setBlogs] = useState([]);
     const [comments,setComments]=useState([])
    const { id } = useParams()
const Owner = comments.find(c=>c.email=== user.email)

    // SEND DATA 
    const handleCommentSubmit = e => {
        e.preventDefault()

        const Comments = e.target.Comment.value;
        const email = user.email;
        const displayName = user.displayName;
        const photoURL = user.photoURL;
        const BlogId = blogs._id


        const CommentData =  {Comments,email,displayName,photoURL,BlogId}
        axios.post('https://frontend-mento-server.vercel.app/comments',CommentData)
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
        axios.get(`https://frontend-mento-server.vercel.app/CommentData`)
            .then(data => 
            {
                const filter = data.data.filter(f=>f.BlogId === blogs._id)
                setComments(filter)
            }
            )
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
                    </div>
                </div>
                {/* comment area */}

              {
                Owner ? <div>
                    <h1 className="text-2xl font-bold">Can not comment on own blog</h1>
                    <Link to={`/Update/${blogs._id}`}>
                    <button className=" btn bg-gradient-to-r from-green-400 to-blue-500 hover:from-blue-500 hover:to-green-400 text-white py-2 px-6 rounded-lg mr-7" variant="outlined ">Update</button>

                    </Link>
                    </div> : 
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
              }
                <div>
                    {
                
                            
                <section className='p-6 border-[#C39C5D] border text-white rounded-md shadow-md flex-1 '>
                <h2 className='text-lg font-semibold capitalize '>
                    Students Review*
                </h2>
                <div className="mt-8 space-y-4">
                    {
                        comments.length <= 0 ? <div className=" p-5 rounded-lg">
                            <div className="flex items-center justify-center">
                                <h4 className="text-lg font-semibold text-center md:text-left">No Review</h4>
                            </div>
                        </div> :
                            comments.map(cmt => <div key={cmt._id} className="p-5 rounded-lg text-black">
                                <div className="flex flex-col space-y-4 md:space-y-0">
                                    <div className="flex items-center mb-3 gap-3">
                                        <img src={cmt.photoURL} alt="" className="self-center flex-shrink-0 w-12 h-12 border-[#C39C5D] border-2 rounded-full md:justify-self-start dark:bg-gray-500 dark:border-gray-300" />
                                        <div className="font-bold ">
                                            <h4 className="text-lg font-semibold text-center md:text-left">{cmt.displayName}</h4>
                                        </div>
                                    </div>
                                    <p className=""><span className="">Comments:</span> {cmt.Comments}</p>
                                </div>
                            </div>)
                    }
                </div>
            </section>
                    }
                </div>
            </div>

        </div>

    );
};

export default Details;
