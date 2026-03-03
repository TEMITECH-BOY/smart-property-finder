export default function DashboardPage() {
  return (
    <div className="grid md:grid-cols-4 gap-8">
      <aside className="bg-white rounded-2xl shadow-sm p-6">
        <ul className="space-y-4">
          <li className="font-semibold">Overview</li>
          <li className="text-gray-500">Saved</li>
          <li className="text-gray-500">Settings</li>
        </ul>
      </aside>

      <section className="md:col-span-3 space-y-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm">
          <h2 className="font-semibold">Welcome Back 👋</h2>
          <p className="text-gray-500 mt-2">Here’s your activity summary.</p>
        </div>
      </section>
    </div>
  );
}
