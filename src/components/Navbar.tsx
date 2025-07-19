// src/components/Navbar.tsx
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const isActive = (path: string) =>
    location.pathname === path
      ? "text-blue-500 border-b-2 border-blue-500"
      : "text-gray-700 hover:text-blue-500";

  return (
    <nav className="bg-white w-full fixed top-0 left-0 shadow px-6 py-4 flex justify-between items-center">
      <div className="text-xl font-bold text-blue-600">cryptly</div>
      <div className="space-x-6">
        <Link to="/" className={`font-medium ${isActive("/")}`}>
          Home
        </Link>
        <Link to="/learn" className={`font-medium ${isActive("/learn")}`}>
          Learn
        </Link>
        <Link to="/tool" className={`font-medium ${isActive("/tool")}`}>
          Tool
        </Link>
      </div>
    </nav>
  );
}
