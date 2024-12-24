
const DetailsCard = () => {
    
    return (
        <div>
        <div className="flex items-center justify-center">
          <h1 className="text-4xl">Details of the Blog</h1>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img
              className="w-96"
              src={detailsData.imageUrl || "https://via.placeholder.com/300x200"}
              alt={detailsData.title || "Blog Image"}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              <div>
                <h1 className="text-3xl font-bold">Blog Name: {detailsData.blogName}</h1>
                <h1 className="text-2xl font-bold">Title: {detailsData.title}</h1>
                <p className="py-1">Category: {detailsData.category}</p>
                <p className="py-3">Description: {detailsData.shortDescription}</p>
              </div>
            </h2>
            <p>{detailsData.longDescription}</p>
            <div className="card-actions justify-end">
              <div className="badge badge-secondary">NEW</div>
              <div className="badge badge-outline">Fashion</div>
              <div className="badge badge-outline">Products</div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default DetailsCard;