import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import axios from "axios";

const AllBlogs = () => {
    const { user } = useContext(AuthContext);
    const [filter, setFilter] = useState('');
    const [search, setSearch] = useState('');
    const [items, setItem] = useState([])
    const Navigate = useNavigate()

    console.log(search);
    useEffect(() => {
        const AllBlog = async () => {
            const data = await axios.get(`https://frontend-mento-server.vercel.app/AllBlogs?filter=${filter}&search=${search}`)
            setItem(data.data)
        }
        AllBlog()

    }, [filter, search])

    const handleAddToWishList = async e => {
        const id = e._id
        const name = e.blogName
        const title = e.title
        const email = user?.email
        console.log(email);
        const category = e.category
        const longDescription = e.longDescription
        const description = e.shortDescription
        const imageUrl = e.imageUrl

        const Data = {
            id,
            name,
            title,
            email,
            category,
            description,
            longDescription,
            imageUrl
        }
        // console.log(blogName,title,mageUrl,category,shortDescription,longDescription,_id);
        fetch('https://frontend-mento-server.vercel.app/WishList', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(Data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    console.log('successfully added');
                    Navigate('/Wishlist')
                    Swal.fire({
                        title: 'Success!',
                        text: 'added successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    });
                    e.target.reset();
                }
            })
    }


    const handleReset = () => {
        setFilter("");
        setSearch("");
    };
    return (
        <div>
            <div>
                <div className="flex flex-col md:flex-row justify-center items-center gap-5 p-5">
                    <div>
                        <select
                            name="category"
                            id="category"
                            className="border p-4 rounded-lg"
                            onChange={(e) => setFilter(e.target.value)}
                            value={filter}
                        >
                            <option disabled value="">Filter by Category</option>
                            <option value="Development">Development</option>
                            <option value="Web Design">Web Design</option>
                            <option value="Technology">Technology</option>
                        </select>
                    </div>

                    <div className="flex p-1 overflow-hidden border rounded-lg focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
                        <input
                            className="px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent"
                            type="text"
                            name="search"
                            onChange={(e) => setSearch(e.target.value)}
                            value={search}
                            placeholder="Enter Blog Title"
                            aria-label="Enter Blog Title"
                        />
                        <button className="px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none">
                            Search
                        </button>
                    </div>

                    <button onClick={handleReset} className="btn">
                        Reset
                    </button>

                </div>
            </div>



            <div className=" mt-4 grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    items?.map(item => <div key={item._id}

                        className="hero border bg-base-100 min-h-screen mt-5 ">
                        <div className="card bg-base-100 w-96 shadow-xl">
                            <figure>
                                <img className="rounded-2xl mt-6"
                                    src={item.imageUrl}
                                    alt={item.title} />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    {item.title}
                                    <div className="badge badge-secondary">{item.category}</div>
                                </h2>
                                <p>{item.shortDescription}</p>
                                <p>{item.longDescription}</p>
                                <div className="card-actions justify-center">
                                    <div>
                                        <Link to={`/Details/${item._id}`}><button className="btn bg-gradient-to-r from-green-400 to-blue-500 hover:from-blue-500 hover:to-green-400 text-white py-2 px-6 rounded-lg mr-7">Details</button>
                                        </Link>
                                        <button onClick={() => handleAddToWishList(item)} class="btn bg-gradient-to-r from-yellow-200 via-orange-900 to-red-500 hover:from-red-500 hover:to-orange-500 text-white py-2 px-4 rounded-lg w-full sm:w-auto">
                                            Wishlist

                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    )

                }

            </div>



        </div>
    );
};

export default AllBlogs;