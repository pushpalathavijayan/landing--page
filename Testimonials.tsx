export default function Testimonials() {
  const data = [
    { name: "Aparna", text: "Amazing UI and super clean design!" },
    { name: "Rahul", text: "Vercel v0 made development very easy." },
    { name: "Zara", text: "Loved the responsiveness!" }
  ];

  return (
    <section className="px-6 py-20 bg-gray-100">
      <h2 className="text-3xl font-semibold text-center mb-10">Testimonials</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {data.map((t, i) => (
          <div key={i} className="p-6 bg-white rounded-xl shadow">
            <p className="italic mb-3">"{t.text}"</p>
            <h4 className="font-bold">{t.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}
