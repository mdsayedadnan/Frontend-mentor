import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const Recentblog = () => {
    const [items, setItem] = useState([])
    useEffect(() => {
        fetch('item.json')
            .then(result => result.json())
            .then(data => setItem(data))

    }, [])
    return (
        <div>
            <div className="flex items-center justify-center">
                <Marquee>
                    <h1 className="text-5xl font-semibold hover:text-green-700">Recent blog </h1>
                </Marquee>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
                {
                    items.map(item => <div key={item._id} className="">
                        <div class="card w-full max-w-sm bg-base-100 shadow-xl mt-4 p-3">
                            <figure>
                                <img src={item.imageUrl} alt="Card image" class="w-full h-48 object-cover" />
                            </figure>
                            <div class="card-body">
                                <h2 class="card-title">{item.title}</h2>
                                <p>{item.longDescription}</p>
                                <div class="card-actions flex flex-col sm:flex-row sm:space-x-2 sm:space-y-0 space-y-2 justify-end">
                                    <button class="btn bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 text-white py-2 px-4 rounded-lg w-full sm:w-auto">
                                        Details
                                    </button>
                                    <button class="btn bg-gradient-to-r from-yellow-200 via-orange-900 to-red-500 hover:from-red-500 hover:to-orange-500 text-white py-2 px-4 rounded-lg w-full sm:w-auto">
                                        Wishlist
                                    </button>
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

export default Recentblog;