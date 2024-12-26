import { IoIosStar } from "react-icons/io";
import img from '../../../src/assets/1.png'
const MostDescrioption = () => {
    return (
        <div className="mt-5 p-5">
            <div className="
            flex justify-center items-center">
                <h1 className="text-4xl font-semibold mt-5 p-4 mb-4">Most Popular Comment  </h1>
            </div>
            <div className="grid text-white gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <div className="bg-[#1B1616] italic text-center rounded-sm">
                    <div className="py-12 px-8">
                        <div className="flex gap-3 items-center text-xl text-yellow-500 justify-center">
                            <IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar />
                        </div>
                        <h1 className="py-7 text-xl md:text-2xl font-medium">“Great post! Your explanation of modular architecture was clear and practical. Do you have any tips for documenting large systems effectively? Would love to hear your thoughts”</h1>
                        <div className="flex justify-center py-7 items-center"><img src={img} className="w-16 rounded-full border-[#c59d5f] border-2 p-1" alt="" /></div>
                        <p>- Adnan Farabi</p>
                    </div>
                </div>
                <div className="bg-[#1B1616] italic text-center rounded-sm">
                    <div className="py-12 px-8">
                        <div className="flex gap-3 items-center text-xl text-yellow-500 justify-center">
                            <IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar />
                        </div>
                        <h1 className="py-7  text-xl md:text-2xl font-medium">“Loved this! The React performance tips were very helpful, especially memoization. Have you considered covering common debugging techniques for React ”</h1>
                        <div className="flex justify-center py-7 items-center"><img src={img} className="w-16 rounded-full border-[#c59d5f] border-2 p-1" alt="" /></div>
                        <p>- Abu Naim</p>
                    </div>
                </div>
                <div className="bg-[#1B1616] italic text-center rounded-sm">
                    <div className="py-12 px-8">
                        <div className="flex gap-3 items-center text-xl text-yellow-500 justify-center">
                            <IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar />
                        </div>
                        <h1 className="py-7 text-xl md:text-2xl font-medium">“ I really enjoyed your take on modern development frameworks. As someone who's recently transitioned to using Next.js,and react tawlind css or relavent most popular farmWark ”</h1>
                        <div className="flex justify-center pb-7 items-center"><img src={img} className="w-16 rounded-full border-[#c59d5f] border-2 p-1" alt="" /></div>
                        <p>- Farhan Adnan</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MostDescrioption;