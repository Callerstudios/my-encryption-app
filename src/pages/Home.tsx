import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen w-screen bg-gray-50 flex flex-col items-center text-center px-6 py-10">
      <Navbar />

      <main className="flex-1 flex flex-col items-center justify-center">
        <h1 className="text-5xl font-extrabold text-blue-900 mb-6">
          Welcome to Cryptly 🔐
        </h1>

        <p className="text-xl text-gray-700 max-w-2xl mb-8">
          Understand the basics of encryption through hands-on tools and fun
          experiments. Explore Caesar ciphers, modern encryption, and why data
          security matters.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <Link
            to="/tool"
            className="px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 transition rounded-xl font-medium shadow-md"
          >
            🔧 Try the Tool
          </Link>
          <Link
            to="/learn"
            className="px-6 py-3 text-blue-700 bg-white border border-blue-500 hover:bg-blue-50 transition rounded-xl font-medium shadow"
          >
            📚 Learn More
          </Link>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 text-sm">
          <a
            href="https://github.com/Callerstudios/simple-encrypt#readme"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 .5C5.4.5 0 5.9 0 12.4c0 5.3 3.4 9.8 8 11.3.6.1.8-.2.8-.6v-2c-3.2.7-3.9-1.6-3.9-1.6-.6-1.4-1.5-1.7-1.5-1.7-1.2-.9.1-.9.1-.9 1.3.1 2 1.4 2 1.4 1.2 2 3.1 1.4 3.8 1 .1-.9.5-1.4.9-1.7-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.3-3.2-.2-.3-.6-1.6.1-3.4 0 0 1-.3 3.3 1.2a11.1 11.1 0 016 0c2.3-1.5 3.3-1.2 3.3-1.2.7 1.8.3 3.1.1 3.4.8.9 1.3 2 1.3 3.2 0 4.6-2.7 5.5-5.3 5.8.5.4 1 1.2 1 2.4v3.5c0 .4.2.7.8.6 4.6-1.5 8-6 8-11.3C24 5.9 18.6.5 12 .5z" />
            </svg>
            GitHub Repository
          </a>

          <a
            href="https://www.npmjs.com/package/simple-encrypt-decrypt-cipher"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0L0 4.5v15L12 24l12-4.5v-15L12 0zM6 17.1l6 2.2 6-2.2V6.9L12 4.7 6 6.9v10.2zM11 10h2v5h-2v-5z" />
            </svg>
            View on npm
          </a>
        </div>
      </main>
    </div>
  );
}
