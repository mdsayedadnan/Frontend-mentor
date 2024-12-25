import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Add = () => {
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleSubmit = async e => {
        e.preventDefault()
        const form = e.target
        const name = form.blog_name.value
        const title = form.blog_title.value
        const email = form.email.value
        const category = form.category.value
        const longDescription = form.long_description.value
        const description = form.des.value
         const  imageUrl = form.image_url.value;

        console.log(name, title, email, category, description, longDescription);
        const formData = {
            name,
            title,
            email,
            category,
            description,
            longDescription,
             imageUrl
        }
        fetch('https://frontend-mento-server.vercel.app/Blogs', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(formData)
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
    return (
        <div>
            <div className='flex justify-center items-center my-12'>
                <section className=' p-2 md:p-6 mx-auto bg-white rounded-md shadow-md '>
                    <h2 className='text-lg font-semibold text-gray-700  '>
                        Add Blog
                    </h2>

                    <form onSubmit={handleSubmit}>
                        <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>
                            <div>
                                <label className='text-gray-700 '>
                                    Blog Name
                                </label>
                                <input
                                    id='blog_name'
                                    name='blog_name'
                                    type='text'
                                    className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 '
                                />
                            </div>
                            <div>
                                <label className='text-gray-700 '>
                                    Blog Title
                                </label>
                                <input
                                    id='blog_title'
                                    name='blog_title'
                                    type='text'
                                    className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 '
                                />
                            </div>

                            <div>
                                <label className='text-gray-700 '>
                                    Email Address
                                </label>
                                <input
                                    id='emailAddress'
                                    type='email'
                                    name='email'
                                    defaultValue={user?.email}
                                    disabled={true}
                                    className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 '
                                />
                            </div>

                            <div className='flex flex-col gap-2 '>
                                <label className='text-gray-700 '>
                                    Category
                                </label>
                                <select
                                    name='category'
                                    id='category'
                                    className='border p-2 rounded-md'
                                >
                                    <option value='Development'>Development</option>
                                    <option value='Technology'>Technology</option>
                                    <option value='Web Design'>Web Design</option>
                                </select>
                            </div>

                        </div>
                        <div className='flex flex-col gap-2 mt-4'>
                            <label className='text-gray-700 '>
                                Description
                            </label>
                            <textarea
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 '
                                name='des'
                                id='des'
                            ></textarea>
                        </div>
                        <div className='flex flex-col gap-2 mt-4'>
                            <label className='text-gray-700 '>
                                Long Description
                            </label>
                            <textarea
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 '
                                name='long_description'
                                id='description'
                            ></textarea>
                        </div>
                        <div className="mb-4">
                            <label className="label text-gray-300">
                                <span className="label-text"> Image URL</span>
                            </label>
                            <input
                                type="text"
                                name="image_url"
                          

                                placeholder="Enter image URL"
                                className="input text-black input-bordered w-full "
                                required
                            />
                        </div>
                        <div className='flex justify-center mt-6'>
                            <button className='px-8 leading-5 text-white btn bg-green-600 rounded-md hover:bg-gray-600'>
                                Submit
                            </button>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    );
};

export default Add;