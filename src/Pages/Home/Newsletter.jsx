import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

export function Newsletter() {
  const [items, setItem] = useState([])
  useEffect(() => {
    fetch('item.json')
      .then(result => result.json())
      .then(data => setItem(data))

  }, [])
  console.log(items);
  return (
    <div>
      <div className="flex items-center justify-center mt-5 p-4">
        <Marquee>
          <h1 className="text-5xl font-bold hover:text-purple-500">Newsletter section</h1>
        </Marquee>

      </div>
      {
        items.map(item =>

          <div key={item._id} className="card lg:card-side bg-base-100 shadow-xl mt-5 mb-4">
            <figure>
              <img
                src={item.imageUrl}
                alt="Album" />
            </figure>
            <div className="card-body">
              <h1 className="text-4xl font-semibold">{item.blogName}</h1>

              <h2 className="card-title">{item.title}</h2>
              <h1>{item.category}</h1>
              <p>{item.longDescription}</p>
              <div className="card-actions justify-end">
              </div>
            </div>
          </div>

        )
      }
    </div>
  );
};

export default Newsletter;
