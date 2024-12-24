import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const AllBlogs = () => {
    const { user } = useContext(AuthContext);
    const [filter, setFilter] = useState([]);
    const [search, setSearch] = useState([]);

    const [items, setItem] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/AllBlogs?filter')
            .then(result => result.json())
            .then(data => setItem(data))

    }, [])

    // useEffect(() => {
    //     const AllBlog = async()=>{
    //       const data = await axios.get(`http://localhost:5000/AllBlogs?filter=${filter}&serch=${search}`)
    //       setItem(data)
    //     }
    //      AllBlog()     
  
    //   }, [])

    const handleReset = () => {
        setFilter("");
        setSearch("");
    };
    return (
        <div>
            <div>
                <div className="flex flex-col md:flex-row justify-center items-center gap-5">
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
                            <option value="Graphics Design">Graphics Design</option>
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
                            placeholder="Enter Job Title"
                            aria-label="Enter Job Title"
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



            <div className=" mt-4">
                {
                    items.map(item => <div key={item._id}

                        className="hero bg-base-200 min-h-screen mt-5">
                        <div className="hero-content flex-col lg:flex-row">
                            <img
                                src={item.imageUrl}
                                className="max-w-sm rounded-lg shadow-2xl" />
                            <div>
                                <h1 className="text-3xl font-bold">{item.blogName}</h1>
                                <h1 className="text-2xl font-bold">{item.title}</h1>
                                <p className="py-1"> {item.category} </p>
                                <p className="py-3"> {item.shortDescription} </p>


                                <div>
                                    <Link to={`/Details/${item._id}`}><button className="btn bg-gradient-to-r from-green-400 to-blue-500 hover:from-blue-500 hover:to-green-400 text-white py-2 px-6 rounded-lg mr-7">Details</button>
                                    </Link>

                                    <button onClick={()=>handleAddToWish(item._id)} className="btn bg-gradient-to-r from-yellow-700 to-red-500 hover:from-red-500 hover:to-yellow-400 text-white py-2 px-6 rounded-lg">
                                        Wishlist
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>)
                }

            </div>
        </div>
    );
};

export default AllBlogs;