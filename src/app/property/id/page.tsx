export default function PropertyDetails() {
  return (
    <div className="space-y-10">
      <div className="h-96 bg-gray-200 rounded-2xl" />

      <div className="grid md:grid-cols-3 gap-10">
        <div className="md:col-span-2 space-y-6">
          <h1 className="text-3xl font-bold">Modern Apartment in Lekki</h1>

          <p className="text-gray-600">
            Beautiful home with sea view and premium amenities.
          </p>

          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <h3 className="font-semibold mb-4">Amenities</h3>
            <ul className="grid grid-cols-2 gap-4 text-gray-600">
              <li>✔ Pool</li>
              <li>✔ Gym</li>
              <li>✔ Security</li>
              <li>✔ Parking</li>
            </ul>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm h-fit">
          <p className="text-2xl font-bold">₦85,000,000</p>
          <button className="mt-6 w-full bg-black text-white py-3 rounded-xl">
            Contact Agent
          </button>
        </div>
      </div>
    </div>
  );
}
