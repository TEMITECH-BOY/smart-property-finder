export default function ComparePage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Compare Properties</h1>

      <div className="bg-white rounded-2xl shadow-sm p-6 overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b">
              <th className="py-3">Feature</th>
              <th>Property A</th>
              <th>Property B</th>
            </tr>
          </thead>
          <tbody className="space-y-4">
            <tr>
              <td className="py-3">Price</td>
              <td>₦85M</td>
              <td>₦250M</td>
            </tr>
            <tr>
              <td className="py-3">Bedrooms</td>
              <td>3</td>
              <td>5</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
