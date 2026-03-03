export default function FavoritesPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Saved Properties</h1>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl shadow-sm p-4">
          <div className="h-40 bg-gray-200 rounded-xl mb-4" />
          <h3 className="font-semibold">Saved Property</h3>
        </div>
      </div>
    </div>
  );
}
