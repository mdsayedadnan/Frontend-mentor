import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Tooltip } from "react-tooltip";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Wishlist = () => {
    const { user, logOut } = useContext(AuthContext);

    const [Blogs, setBlogs] = useState()
    useEffect(() => {
        fetch('https://frontend-mento-server.vercel.app/AllBlogs')
        // fetch(`https://frontend-mento-server.vercel.app/WishListBlog/${user?.email}`)
            .then(res => res.json())
            .then(data => setBlogs(data))

    }, [])
    // }, [user?.email])

 
    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://gamer-pro-server.vercel.app/AllBlogs/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data.deletedCount);
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });

                            const remainingUsers = reviews.filter(user => user._id !== id);
                            setBlogs(remainingUsers);
                        }
                    })
            }
        });
    }

    return (

        <div>
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-4xl font-bold p-4">MORE WISH BLOGS</h1>
                <p className="font-black p-2 mb-5">There are many most popular Blogs</p>

            </div>
            <div>

            </div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table p-5">
                        {/* head */}
                        <thead>
                            <tr>
                                <th className="border border-gray-300 px-4 py-2 text-left">#</th>
                                <th className="border border-gray-300 px-4 py-2 text-left text-xl">Name</th>
                                <th className="border border-gray-300 px-4 py-2 text-left">Title</th>
                                <th className="border border-gray-300 px-4 py-2 text-left">Category </th>
                                <th className="border border-gray-300 px-4 py-2 text-left"> Details </th>
                                <th className="border border-gray-300 px-4 py-2 text-left">Remove </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Blogs?.map((Blog, index) => (
                                    <tr
                                        key={Blog._id}
                                        className={`${index % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-gray-100`}
                                    >
                                        <th className="border border-gray-300 px-4 py-2">{index + 1}</th>
                                        <td className="border border-gray-300 font-bold px-4 py-2">{Blog.blogName}</td>
                                        <td className="border border-gray-300  px-4 py-2">{Blog.title}</td>
                                        <td className="border border-gray-300 px-4 py-2">{Blog.category}</td>

                                        <td className="border border-gray-300 px-4 py-2">
                                        <Link to={`/Details/${Blog._id}`}><button className="btn bg-gradient-to-r from-green-400 to-blue-500 hover:from-blue-500 hover:to-green-400 text-white py-2 px-6 rounded-lg mr-7">Details</button>
                                        </Link>
                                        </td>
                                        <td data-tooltip-id="my-tooltip" data-tooltip-content="If you delete the review please click"><button onClick={() => handleDelete(Blog._id)} className="btn btn-outline">Delate</button></td>

                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>


            </div>
            <Tooltip id="my-tooltip" />


        </div>
    );
};

export default Wishlist;