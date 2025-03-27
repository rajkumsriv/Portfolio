export default function Blog() {
  return (
    <main className="min-h-screen bg-[#0A192F] text-white px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-teal-400 mb-10 text-center">
          Blog
        </h1>

        <div className="space-y-6">
          {/* Blog Post 1 */}
          <div className="bg-[#112240] p-6 rounded-lg shadow hover:shadow-teal-400/40 transition">
            <h2 className="text-2xl font-semibold text-blue-300 mb-2">
              How to Fine-Tune Threat Detection in SIEM
            </h2>
            <p className="text-gray-300">
              Learn how to build custom detection rules using Splunk and QRadar
              that reduce false positives and improve alert fidelity...
            </p>
            <a href="#" className="text-teal-400 underline hover:text-teal-300 mt-2 inline-block">
              Read more →
            </a>
          </div>

          {/* Blog Post 2 */}
          <div className="bg-[#112240] p-6 rounded-lg shadow hover:shadow-teal-400/40 transition">
            <h2 className="text-2xl font-semibold text-blue-300 mb-2">
              Chronicle SIEM vs QRadar: A Hands-On Comparison
            </h2>
            <p className="text-gray-300">
              A practical guide comparing data ingestion, rule engine, and search performance across two major SIEM platforms.
            </p>
            <a href="#" className="text-teal-400 underline hover:text-teal-300 mt-2 inline-block">
              Read more →
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
