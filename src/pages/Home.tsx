import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen w-screen bg-gray-50 flex flex-col justify-center items-center text-center px-4">
      <Navbar />
      <h1 className="text-4xl font-bold mb-4 text-blue-950">
        Welcome to Cryptly 🔐
      </h1>
      <p className="text-lg mb-6 max-w-xl text-gray-700">
        Learn how encryption works and try it out using simple tools. Explore
        Caesar ciphers, key-based encryption, and why securing your data is
        important.
      </p>
      <div className="flex space-x-4">
        <Link
          to="/tool"
          className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          Try the Tool
        </Link>
        <Link
          to="/learn"
          className="px-6 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
}
