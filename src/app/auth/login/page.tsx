export default function LoginPage() {
  return (
    <div className="flex justify-center items-center min-h-[80vh]">
      <div className="bg-white p-8 rounded-2xl shadow-sm w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6">Login</h1>

        <div className="space-y-4">
          <input className="w-full border rounded-xl p-3" placeholder="Email" />
          <input
            className="w-full border rounded-xl p-3"
            placeholder="Password"
            type="password"
          />
          <button className="w-full bg-black text-white py-3 rounded-xl">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
