import Link from "next/link";

export default function HomePage() {
  return (
    <div className="space-y-24">
      {/* ================= HERO ================= */}
      <section className="text-center pt-20 pb-16">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight">
          Discover Your <span className="text-gray-400">Dream Home</span>
        </h1>

        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          Explore premium properties across Lagos and beyond. Smart search,
          seamless experience.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <Link
            href="/properties"
            className="bg-black text-white px-8 py-3 rounded-xl hover:bg-gray-800 transition"
          >
            Browse Properties
          </Link>

          <Link
            href="/auth/register"
            className="border px-8 py-3 rounded-xl hover:bg-gray-100 transition"
          >
            Create Account
          </Link>
        </div>
      </section>

      {/* ================= SEARCH BAR ================= */}
      <section className="bg-white p-6 rounded-2xl shadow-sm max-w-4xl mx-auto">
        <div className="grid md:grid-cols-4 gap-4">
          <input
            placeholder="Location"
            className="border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
          />
          <input
            placeholder="Property Type"
            className="border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
          />
          <input
            placeholder="Max Price"
            className="border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
          />
          <button className="bg-black text-white rounded-xl py-3 hover:bg-gray-800 transition">
            Search
          </button>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="grid md:grid-cols-3 gap-8 text-center">
        <div className="bg-white p-8 rounded-2xl shadow-sm">
          <h2 className="text-3xl font-bold">500+</h2>
          <p className="text-gray-500 mt-2">Properties Listed</p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-sm">
          <h2 className="text-3xl font-bold">120+</h2>
          <p className="text-gray-500 mt-2">Trusted Agents</p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-sm">
          <h2 className="text-3xl font-bold">98%</h2>
          <p className="text-gray-500 mt-2">Customer Satisfaction</p>
        </div>
      </section>

      {/* ================= FEATURED PROPERTIES ================= */}
      <section>
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-semibold">Featured Listings</h2>
          <Link href="/properties" className="text-sm hover:underline">
            View all
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="bg-white rounded-2xl shadow-sm hover:shadow-md transition overflow-hidden"
            >
              <div className="h-48 bg-gray-200" />

              <div className="p-6">
                <h3 className="font-semibold text-lg">
                  Modern Apartment in Lekki
                </h3>

                <p className="text-gray-500 text-sm mt-1">Lekki, Lagos</p>

                <p className="mt-4 font-bold text-xl">₦85,000,000</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CALL TO ACTION ================= */}
      <section className="bg-black text-white rounded-2xl p-16 text-center">
        <h2 className="text-3xl font-bold">Ready to Find Your Next Home?</h2>

        <p className="mt-4 text-gray-300">
          Join thousands of satisfied clients discovering properties daily.
        </p>

        <Link
          href="/auth/register"
          className="inline-block mt-8 bg-white text-black px-8 py-3 rounded-xl font-medium hover:bg-gray-200 transition"
        >
          Get Started Today
        </Link>
      </section>
    </div>
  );
}
