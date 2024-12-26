import { FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="bg-light-green-400">
            <footer className="bg-gray-900 text-gray-100 py-10">
                <div className="container mx-auto text-center space-y-6">

                    <h2 className="text-2xl font-semibold">Connect socially with Youplay</h2>


                    <div className="flex justify-center space-x-8">
                        <Link
                            href="https://discord.com"
                            className="flex flex-col items-center space-y-2 hover:text-blue-500"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8">
                            </svg>
                            <span className="text-sm bg-black">Discord</span>
                        </Link>

                        <Link
                            href="https://twitch.tv"
                            className="flex flex-col items-center space-y-2 hover:text-purple-500"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8">
                            </svg>
                            <span className="text-sm">Twitch</span>
                        </Link>

                        <Link
                            href="https://youtube.com"
                            className="flex flex-col items-center space-y-2 hover:text-red-500"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8">
                                <span > <FaYoutube></FaYoutube></span>
                            </svg>
                            <span className="text-sm">YouTube</span>
                        </Link>

                        <Link
                            href="https://twitter.com"
                            className="flex flex-col items-center space-y-2 hover:text-blue-400"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                                <button className="bg-white"><FaTwitter /></button>                  </svg>
                            <span className="text-sm">Twitter</span>
                        </Link>
                    </div>


                    <p className="text-sm text-gray-400">© 2024 Youplay. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;