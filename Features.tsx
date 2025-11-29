
export default function Features() {
  const features = [
    { title: "Fast", desc: "Ultra-fast performance with Next.js." },
    { title: "Responsive", desc: "Looks perfect on all screen sizes." },
    { title: "AI Powered", desc: "Generated using Vercel v0." }
  ];

  return (
    <section className="px-6 py-20">
      <h2 className="text-3xl font-semibold text-center mb-10">Features</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <div key={i} className="p-6 bg-white rounded-xl shadow">
            <h3 className="text-xl font-bold mb-2">{f.title}</h3>
            <p className="text-gray-600">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
