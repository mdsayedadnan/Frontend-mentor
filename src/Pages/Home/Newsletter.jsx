import { useContext, useState } from "react";
import Swal from "sweetalert2";


const NewsLetter = () => {
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
      e.preventDefault();
  
      if (email) {
        Swal.fire({
          icon: "success",
          title: "Subscribed",
          text: "Thank you for subscribing to our newsletter!",
          timer: 3000,
          timerProgressBar: true,
          showConfirmButton: false,
          toast: true,
          position: "top-end",
        });
  
        setEmail(""); 
      }
    };
  

 return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
    <div className="bg-white p-6 rounded-md shadow-md w-full max-w-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Subscribe to our Newsletter
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600"
        >
          Subscribe
        </button>
      </form>
    </div>
  </div>
    );
};

export default NewsLetter;