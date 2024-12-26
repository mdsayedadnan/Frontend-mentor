import axios from "axios";
import { useEffect, useState } from "react";


const Featured = () => {

    const [data, setData] = useState([]); 

    useEffect(() => {
        axios.get('https://frontend-mento-server.vercel.app/top-posts')
            .then(response => {
              
                setData(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [data]); 

    return (
        <div>
        <div className="flex justify-center items-center">
            <h1 className="text-4xl font-semibold">Featured</h1>
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
                                data?.map((d, index) => (
                                    <tr
                                        key={d._id}
                                        className={`${index % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-gray-100`}
                                    >
                                        <th className="border border-gray-300 px-4 py-2">{index + 1}</th>
                                        <td className="border border-gray-300 font-bold px-4 py-2">{d.blogName}</td>
                                        <td className="border border-gray-300  px-4 py-2">{d.title}</td>
                                        <td className="border border-gray-300 px-4 py-2">{d?.category}</td>

                                     

                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>

        </div>
        </div>
    );
};

export default Featured;
