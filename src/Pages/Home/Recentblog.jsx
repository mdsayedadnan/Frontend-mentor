import { useContext, useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";

export function Recentblog() {
  const { user } = useContext(AuthContext)

  const [items, setItem] = useState([])
  useEffect(() => {
    fetch('item.json')
      .then(result => result.json())
      .then(data => setItem(data))

  }, [])
  const handleAddToWishList = async e => {
    const name = e.blogName
    const title = e.title
    const email = user.email
    const category = e.category
    const longDescription = e.longDescription
    const description = e.shortDescription
    const imageUrl = e.imageUrl
    console.log(e);
    const Data = {
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
  // console.log(items);
  return (
    <div>
      <div className="flex items-center justify-center mt-5 p-4">
        <Marquee cla>
          <div className="flex flex-col justify-center items-center bg-blue-gray-100 rounded-xl">
            <h1 className="text-5xl font-semibold hover:text-green-700">Recent blog </h1>
            <p className='font-bold text-2xl p-3'>Explore our collection of the recent added blogs. Dive in and discover your next favorite blog! </p>
          </div>

        </Marquee>

      </div>
      {
        items.map(item =>

          <div key={item._id}

            className="card lg:card-side bg-base-100 shadow-xl mt-5 mb-4 p-4">
            <figure>
              <img
                src={item.imageUrl}
                alt="Album" />
            </figure>
            <div className="card-body">
              <h1 className="text-4xl font-semibold">{item.blogName}</h1>

              <h2 className="card-title">{item.title}</h2>
              <h1 className=" rounded-full">{item.category}</h1>
              <p>{item.longDescription}</p>

              <div class="card-actions flex flex-col sm:flex-row sm:space-x-2 sm:space-y-0 space-y-2 justify-end">
                <Link to={`/Details/${item._id}`}><button className="btn bg-gradient-to-r from-green-400 to-blue-500 hover:from-blue-500 hover:to-green-400 text-white py-2 px-6 rounded-lg mr-7">Details</button>
                </Link>
                <button onClick={() => handleAddToWishList(item)} class="btn bg-gradient-to-r from-yellow-200 via-orange-900 to-red-500 hover:from-red-500 hover:to-orange-500 text-white py-2 px-4 rounded-lg w-full sm:w-auto">
                  Wishlist

                </button>
              </div>
              <div className="card-actions justify-end">

              </div>
            </div>
          </div>

        )
      }
    </div>
  );
};

export default Recentblog;

