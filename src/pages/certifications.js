export default function Certifications() {
  return (
    <main className="min-h-screen bg-[#0A192F] text-white px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-teal-400 mb-10 text-center">
          Certifications
        </h1>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-[#112240] p-6 rounded-lg shadow-md hover:shadow-teal-400/40 transition">
            <h2 className="text-xl font-semibold text-blue-300 mb-1">SC-200</h2>
            <p className="text-gray-400">Microsoft Certified Security Analyst Associate (2022)</p>
          </div>

          <div className="bg-[#112240] p-6 rounded-lg shadow-md hover:shadow-teal-400/40 transition">
            <h2 className="text-xl font-semibold text-blue-300 mb-1">SC-900</h2>
            <p className="text-gray-400">Microsoft Azure Fundamentals (2022)</p>
          </div>

          <div className="bg-[#112240] p-6 rounded-lg shadow-md hover:shadow-teal-400/40 transition">
            <h2 className="text-xl font-semibold text-blue-300 mb-1">CEH</h2>
            <p className="text-gray-400">EC-Council Certified Ethical Hacker (2017)</p>
          </div>

          <div className="bg-[#112240] p-6 rounded-lg shadow-md hover:shadow-teal-400/40 transition">
            <h2 className="text-xl font-semibold text-blue-300 mb-1">ECSA</h2>
            <p className="text-gray-400">EC-Council Certified Security Analyst (2018)</p>
          </div>

          <div className="bg-[#112240] p-6 rounded-lg shadow-md hover:shadow-teal-400/40 transition">
            <h2 className="text-xl font-semibold text-blue-300 mb-1">Splunk</h2>
            <p className="text-gray-400">Splunk Certified Power User (2017)</p>
          </div>

          <div className="bg-[#112240] p-6 rounded-lg shadow-md hover:shadow-teal-400/40 transition">
            <h2 className="text-xl font-semibold text-blue-300 mb-1">QRadar</h2>
            <p className="text-gray-400">IBM QRadar Certified Analyst (2018)</p>
          </div>

          <div className="bg-[#112240] p-6 rounded-lg shadow-md hover:shadow-yellow-400/40 transition">
            <h2 className="text-xl font-semibold text-yellow-300 mb-1">CISSP (In Progress)</h2>
            <p className="text-gray-400">Expected Dec 2024</p>
          </div>

        </div>
      </div>
    </main>
  );
}
