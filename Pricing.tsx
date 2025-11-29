export default function Pricing() {
  return (
    <section className="px-6 py-20">
      <h2 className="text-3xl font-semibold text-center mb-10">Pricing</h2>

      <div className="max-w-md mx-auto bg-white shadow p-8 rounded-xl text-center">
        <h3 className="text-2xl font-bold mb-3">Pro Plan</h3>
        <p className="text-gray-600 mb-6">Perfect for new developers.</p>
        <p className="text-4xl font-bold mb-6">₹499/mo</p>
        <button className="px-6 py-3 bg-black text-white rounded-full hover:opacity-80">
          Choose Plan
        </button>
      </div>
    </section>
  );
}
