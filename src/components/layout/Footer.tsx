import Container from "./Container";

export default function Footer() {
  return (
    <footer className="bg-white border-t mt-16">
      <Container>
        <div className="py-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-gray-600">
          {/* Brand */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900">
              PropertyFinder
            </h2>
            <p className="mt-2">
              Discover premium properties across Nigeria with ease.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/properties" className="hover:text-black">
                  Properties
                </a>
              </li>
              <li>
                <a href="/favorites" className="hover:text-black">
                  Favorites
                </a>
              </li>
              <li>
                <a href="/dashboard" className="hover:text-black">
                  Dashboard
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Contact</h3>
            <p>Email: support@propertyfinder.com</p>
            <p>Phone: +234 800 000 0000</p>
          </div>
        </div>

        <div className="border-t py-4 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} PropertyFinder. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
