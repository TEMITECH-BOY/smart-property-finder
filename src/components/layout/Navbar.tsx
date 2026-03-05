import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold">
          SmartProperty
        </Link>

        {/* Main Nav Links */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/properties" className="hover:text-gray-600">
            Properties
          </Link>
          <Link href="/compare" className="hover:text-gray-600">
            Compare
          </Link>
          <Link href="/favorites" className="hover:text-gray-600">
            Favorites
          </Link>
        </nav>

        {/* Auth Links */}
        <div className="flex items-center gap-4">
          <Link href="/auth/login" className="text-sm hover:text-gray-600">
            Login
          </Link>
          <Link
            href="/auth/register"
            className="bg-black text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-800 transition"
          >
            Register
          </Link>
        </div>
      </div>
    </header>
  );
}
