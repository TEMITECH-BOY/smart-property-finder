export default function PropertiesPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">All Properties</h1>
        <p className="text-gray-500 mt-2">Explore available listings</p>
      </div>

      <div className="grid grid-cols-12 gap-8">
        {/* Sidebar */}
        <aside className="col-span-3 bg-white p-6 rounded-2xl shadow-sm h-fit">
          <h3 className="font-semibold mb-4">Filters</h3>
          <div className="space-y-4">
            <input
              className="w-full border rounded-xl p-2"
              placeholder="Location"
            />
            <input
              className="w-full border rounded-xl p-2"
              placeholder="Max Price"
            />
            <button className="w-full bg-black text-white py-2 rounded-xl">
              Apply
            </button>
          </div>
        </aside>

        {/* Grid */}
        <section className="col-span-9 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="bg-white rounded-2xl shadow-sm hover:shadow-md transition p-4"
            >
              <div className="h-40 bg-gray-200 rounded-xl mb-4" />
              <h3 className="font-semibold">Luxury Duplex</h3>
              <p className="text-gray-500 text-sm">Ikoyi, Lagos</p>
              <p className="mt-2 font-bold">₦250,000,000</p>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
