import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllBlogs = () => {

    const [items, setItem] = useState([])
    useEffect(() => {
        fetch('item.json')
            .then(result => result.json())
            .then(data => setItem(data))

    }, [])

    return (
        <div>
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
                               
                                    <button className="btn bg-gradient-to-r from-yellow-700 to-red-500 hover:from-red-500 hover:to-yellow-400 text-white py-2 px-6 rounded-lg">
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