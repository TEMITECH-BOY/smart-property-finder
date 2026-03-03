import Container from "./Container";

export default function Navbar() {
  return (
    <nav className="bg-white border-b">
      <Container>
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between">
        <h1 className="font-bold text-xl">PropertyFinder</h1>

        <div className="space-x-6">
          <a href="/properties">Properties</a>
          <a href="/favorites">Favorites</a>
          <a href="/dashboard">Dashboard</a>
        </div>
      </div>
      </Container>
    </nav>
  );
}
