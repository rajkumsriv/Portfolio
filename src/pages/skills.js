export default function Skills() {
  return (
    <main className="min-h-screen bg-[#0A192F] text-white px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-teal-400 mb-10 text-center">
          Key Skills
        </h1>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* SIEM Solutions */}
          <div>
            <h2 className="text-xl font-semibold text-blue-400 mb-2">SIEM Solutions</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>Splunk</li>
              <li>QRadar</li>
              <li>Google Chronicle</li>
            </ul>
          </div>

          {/* EDR / AV */}
          <div>
            <h2 className="text-xl font-semibold text-blue-400 mb-2">EDR / Antivirus</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>CrowdStrike</li>
              <li>Microsoft Defender</li>
              <li>McAfee ePO</li>
            </ul>
          </div>

          {/* Security Domains */}
          <div>
            <h2 className="text-xl font-semibold text-blue-400 mb-2">Security Domains</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>Email Security</li>
              <li>Network Security</li>
              <li>Cloud Security</li>
              <li>Risk & Vulnerability Management</li>
            </ul>
          </div>

          {/* Compliance */}
          <div>
            <h2 className="text-xl font-semibold text-blue-400 mb-2">Compliance & Frameworks</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>GDPR</li>
              <li>ISO 27001</li>
              <li>NIST</li>
            </ul>
          </div>

          {/* Tools */}
          <div>
            <h2 className="text-xl font-semibold text-blue-400 mb-2">Security Tools</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>Proofpoint</li>
              <li>KnowBe4</li>
              <li>Netskope</li>
              <li>OSQuery</li>
            </ul>
          </div>

          {/* Others */}
          <div>
            <h2 className="text-xl font-semibold text-blue-400 mb-2">Other Skills</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>Process Improvement</li>
              <li>Project Management</li>
              <li>Security Awareness Training</li>
            </ul>
          </div>

        </div>
      </div>
    </main>
  );
}
