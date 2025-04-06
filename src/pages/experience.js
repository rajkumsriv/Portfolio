// src/pages/experience.js
import { useState } from "react";
import { motion } from "framer-motion";

export default function Experience() {
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [selectedRole, setSelectedRole] = useState(null);

  const companies = [
    "Tata Consultancy Services",
    "Wipro Technologies",
    "Xplore Tech Private Ltd."
  ];

  const rolesByCompany = {
    "Tata Consultancy Services": [
      "Information Security Lead",
      "Security Consultant"
    ],
    "Wipro Technologies": [
      "Security Assistant Consultant",
      "Senior Security Analyst",
      "Security Analyst"
    ],
    "Xplore Tech Private Ltd.": [
      "Transcriber"
    ]
  };

  const experienceDetails = {
    "Information Security Lead": {
      date: "April 2023 – Present | Hamburg, Germany",
      points: [
        "Leading a 20-member team across key cybersecurity functions including Security Operations Center (SOC), Vulnerability Management, Endpoint Security, Network Security, and Public Key Infrastructure (PKI), ensuring comprehensive security coverage for enterprise environments.",
        "Implemented a Security Incident Response Plan and Policy based on the NIST framework, enhancing consistency and efficiency in incident handling across the SOC.",
        "Acted as the primary liaison for cybersecurity with the client, ensuring seamless service delivery and alignment with business objectives and compliance mandates.",
        "Conducted risk assessments and developed mitigation strategies that aligned with business goals, reducing exposure and enhancing organizational resilience.",
        "Collaborated with cross-functional stakeholders to align cybersecurity initiatives with business objectives and regulatory mandates such as GDPR, improving compliance and operational synergy.",
        "Streamlined security processes and optimized tool usage, resulting in faster incident response, higher operational efficiency, and measurable cost reductions.",
        "Performed risk and gap assessments, which informed the creation of a robust security management strategy, significantly strengthening the organization’s security posture.",
        "Directed enterprise risk management efforts by identifying, evaluating, and mitigating threats to IT infrastructure, ensuring alignment with evolving business and threat landscapes.",
        "Acted as the primary client interface for all cybersecurity service matters, maintaining high client satisfaction through consistent service quality and compliance with contractual SLAs and regulatory standards.",
        "Produced detailed executive-level dashboards and reports, delivering visibility into threat trends, compliance status, and SOC performance metrics for strategic decision-making.",
        "Functioned as the central point of contact for Vulnerability Management, consulting with infrastructure and application teams to assess identified vulnerabilities and guide timely remediation efforts within their respective scopes."
      ]
    },
    "Security Consultant": {
      date: "May 2019 – August 2023 | Mumbai, India",
      points: [
        "Led a 15-member cybersecurity team responsible for managing SOC operations, Vulnerability Management, Endpoint and Network Security, and Public Key Infrastructure (PKI), ensuring 24/7 protection of enterprise assets.",
        "Migrated the SIEM platform from IBM QRadar to Google Chronicle, significantly reducing operational costs while enabling faster threat detection and eliminating event loss concerns.",
        "Implemented and managed Netskope cloud security to safeguard sensitive data and enforce secure cloud access policies, contributing to improved cloud governance and risk reduction.",
        "Formulated and executed a comprehensive Vulnerability Management Plan, including lifecycle oversight from scan scheduling to remediation, which improved patching timelines and reduced critical vulnerabilities across the environment.",
        "Designed and delivered detailed dashboards and compliance reports for executive leadership, enabling data-driven decision-making on risk posture and SOC performance.",
        "Performed in-depth security gap assessments across technical domains, identifying operational risks and coordinating remediation efforts with internal and external stakeholders.",
        "Guided offshore teams in SOC and vulnerability operations, driving quality deliverables through mentoring, skill gap identification, and hands-on training programs.",
        "Consulted on security technologies and engineering best practices, ensuring effective deployment of tools related to threat detection, PKI, and vulnerability management.",
        "Led incident management and change consultation processes, including root cause analysis for major incidents (MIs), reducing recurrence and improving SLA adherence.",
        "Spearheaded coordination with third-party vendors for issue remediation and corrective action planning, strengthening compliance and operational efficiency.",
        "Authored and maintained security SOPs, Known Error Databases (KEDBs), and SMTDs, and managed the cybersecurity risk register to ensure continuous control tracking and audit readiness.",
        "Regularly reported SLA compliance, investigation backlogs, and project health updates to Olympus and TCS leadership, enabling transparency and proactive risk handling.",
        "Completed and enforced mandatory cybersecurity certifications for the team, enhancing skills, maintaining compliance, and improving service quality."
      ]
    },
    "Security Assistant Consultant": {
      date: "January 2018 – April 2019 | Eindhoven, The Netherlands",
      points: [
        "Monitored and administered Splunk for real-time threat detection and incident response, ensuring uninterrupted security operations and quick remediation of critical alerts.",
        "Investigated phishing emails, malicious domains, and IPs using open-source intelligence, leading to proactive blocking and a reduction in user-targeted threats.",
        "Collaborated with cross-functional teams to perform vulnerability assessments and drive remediation across enterprise applications and infrastructure, reducing security exposure significantly.",
        "Conducted deep-dive forensic analysis and root cause investigations on complex security incidents, enabling containment and prevention of similar future attacks.",
        "Contributed to security compliance initiatives, supporting audits and aligning operations with ISO 27001, NIST, and internal policies.",
        "Authored and maintained critical documentation, including SOPs, Playbooks, KEDBs, and SMTDs, standardizing SOC workflows and improving operational maturity.",
        "Ensured full SIEM health monitoring, log source integration, and real-time alert management, increasing the accuracy and reliability of security event detection.",
        "Designed and implemented custom use cases and correlation rules to identify new and emerging threats, enhancing SOC’s detection capability.",
        "Delivered structured phishing analysis reports with mitigation recommendations, reducing recurrence and increasing awareness among users.",
        "Supported threat intelligence sharing by distributing IOCs and advisories to clients, enabling proactive blocking and enhanced situational awareness.",
        "Managed project governance tasks such as SLA tracking, issue escalation, and reporting through weekly and monthly updates to internal and client leadership.",
        "Coordinated with vendors on remediation plans and advised on corrective actions to close identified risks, contributing to successful issue resolution.",
        "Conducted training sessions to upskill team members based on observed needs, improving team performance and delivery quality."
      ]
    },
    "Senior Security Analyst": {
      date: "September 2015 – December 2017 | Pune, India",
      points: [
        "Configured and customized SIEM tools such as QRadar, Splunk, and Google Chronicle based on business and client requirements, improving detection capabilities and log management efficiency.",
        "Ensured seamless integration and operational handover of new security services into SOC monitoring, supporting scalability and service continuity.",
        "Monitored over 50+ networks and endpoints for anomalies and threats with a 100% incident detection and response rate during tenure, showcasing strong operational effectiveness.",
        "Investigated cybersecurity incidents and breaches, performing root cause analysis and forensic investigation, and led resolution efforts to minimize downtime and impact.",
        "Integrated log sources and conducted SIEM troubleshooting, improving visibility and correlation accuracy across the environment.",
        "Developed and fine-tuned custom use cases and detection rules, enhancing threat identification for specific attack vectors and emerging risks.",
        "Generated security dashboards and tailored reports to meet client requirements, aiding in executive visibility and strategic decision-making.",
        "Implemented and maintained core security controls including firewalls, encryption systems, and endpoint protection to safeguard critical infrastructure.",
        "Conducted regular testing and vulnerability assessments to identify and resolve weaknesses, driving continuous improvement of security posture.",
        "Stayed abreast of evolving cybersecurity threats and industry best practices, incorporating them into ongoing operational enhancements and security recommendations.",
        "Authored and maintained process documentation, including incident reports, tuning guides, and playbooks, enabling knowledge transfer and standardization across teams."
      ]
    },
    "Security Analyst": {
      date: "September 2011 – August 2015 | Kolkata, Bangalore, Hyderabad, Pune, India",
      points: [
        "Delivered 24/7/365 security monitoring and incident analysis for multiple global clients as part of a Managed Security Services Provider (MSSP) model, ensuring uninterrupted protection across critical infrastructure.",
        "Monitored and analyzed security events using QRadar, detecting anomalies and investigating indicators of compromise (IOCs) such as suspicious IPs, domains, and file hashes to mitigate threats.",
        "Played a key role in incident response, conducting root cause analysis and forensic investigations to contain threats and implement preventive strategies that reduced repeat incidents.",
        "Managed integration and fine-tuning of SIEM correlation rules and developed custom use cases, significantly improving detection accuracy for evolving attack vectors.",
        "Coordinated with firewall, DNS, email, and endpoint teams to investigate and block intrusion attempts, enhancing layered security across environments.",
        "Authored and maintained SOPs, Playbooks, and Known Error Databases (KEDBs), driving consistency and readiness in security operations.",
        "Maintained and regularly updated the security risk register, supporting proactive risk management and regulatory adherence.",
        "Designed and implemented shift handover reports and MoM practices, improving communication and operational continuity across rotating shifts.",
        "Generated weekly, monthly, and quarterly security reports for internal and client review, providing transparency and performance insights.",
        "Researched and shared threat intelligence updates with clients, including IoCs from internal sources, to prevent potential compromises and stay ahead of emerging threats.",
        "Demonstrated understanding of regulatory and compliance frameworks such as PCI DSS, SOX, HIPAA, DMCA, FISMA, and security standards including ISO/IEC 27001:2013, OWASP, and others."
      ]
    },
    "Transcriber": {
      date: "April 2008 – August 2011 | Kolkata, India",
      points: [
        "Transcribed audio recordings into accurate, well-formatted text documents, meeting strict client specifications on formatting, notation, and confidentiality.",
        "Ensured high-quality deliverables by thoroughly reviewing grammar, punctuation, and spelling, maintaining a consistent accuracy rate above client-defined thresholds.",
        "Actively collaborated with clients and project leads to clarify transcription requirements and implement feedback for continuous quality improvement.",
        "Adapted to evolving transcription tools and software, suggesting upgrades and optimizations to improve productivity and transcription turnaround time.",
        "Managed timely completion of assignments under tight deadlines, demonstrating strong time management and attention to detail.",
        "Proactively corrected errors and inconsistencies, contributing to a reputation for reliability and precision in documentation.",
        "Maintained and improved typing proficiency through regular drills and self-assessments, ensuring sustained typing speed and accuracy over time."
      ]
    },
  };

  const handleBack = () => {
    if (selectedRole) {
      setSelectedRole(null);
    } else {
      setSelectedCompany(null);
    }
  };

  const handleNextRole = () => {
    const currentRoles = rolesByCompany[selectedCompany];
    const currentIndex = currentRoles.indexOf(selectedRole);
    if (currentIndex < currentRoles.length - 1) {
      setSelectedRole(currentRoles[currentIndex + 1]); window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePreviousRole = () => {
    const currentRoles = rolesByCompany[selectedCompany];
    const currentIndex = currentRoles.indexOf(selectedRole);
    if (currentIndex > 0) {
      setSelectedRole(currentRoles[currentIndex - 1]); window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <motion.main
      className="min-h-screen bg-[#0A192F] text-white px-4 py-12"
      initial={{ y: 30 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
    >
      <div className="max-w-screen-2xl mx-auto">
        <h1 className="text-4xl font-bold text-teal-400 mb-10 text-center">
          Professional Experience
        </h1>

                {!selectedCompany ? (
          <div className="flex flex-wrap justify-center gap-6">
            {companies.map((company) => (
              <button
                key={company}
                onClick={() => { setSelectedCompany(company); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="px-16 py-8 text-xl font-semibold bg-[#112240] hover:bg-[#1a2d45] transition-colors p-6 rounded-xl text-left shadow-md hover:shadow-teal-500/30"
              >
                {company}
              </button>
            ))}
          </div>
        ) : (
          <div>
            <div className="flex justify-between items-center mb-6">
              <button
                onClick={handleBack}
                className="px-4 py-2 bg-gray-600 rounded hover:bg-gray-500"
              >
                ← Back
              </button>
              <h2 className="text-xl font-bold text-teal-400 text-center w-full">
                {selectedCompany}
              </h2>
              {selectedRole && (
                <div className="flex gap-2">
                  <button
                    onClick={handlePreviousRole}
                    className="px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-600"
                    disabled={
                      rolesByCompany[selectedCompany].indexOf(selectedRole) === 0
                    }
                  >
                    Previous
                  </button>
                  <button
                    onClick={handleNextRole}
                    className="px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-600"
                    disabled={
                      rolesByCompany[selectedCompany].indexOf(selectedRole) ===
                      rolesByCompany[selectedCompany].length - 1
                    }
                  >
                    Next
                  </button>
                </div>
              )}
            </div>

            {!selectedRole ? (
              <div className="flex flex-wrap justify-center gap-6">
                {rolesByCompany[selectedCompany].map((role) => (
                  <button
                    key={role}
                    onClick={() => { setSelectedRole(role); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    className="px-16 py-8 text-xl font-semibold bg-[#112240] hover:bg-[#1a2d45] transition-colors p-6 rounded-xl text-left shadow-md hover:shadow-teal-500/30"
                  >
                    {role}
                  </button>
                ))}
              </div>
            ) : experienceDetails[selectedRole] ? (
              <div>
                <h3 className="text-2xl font-semibold text-teal-300 mb-4 text-center">
                  {selectedRole}
                </h3>
                <div className="bg-[#112240] p-10 rounded-lg shadow-md w-full max-w-screen-2xl mx-auto">
                  <h4 className="text-lg font-bold text-white mb-4">
                    {experienceDetails[selectedRole].date}
                  </h4>
                  <ul className="list-disc pl-6 pr-2 space-y-4 text-gray-300 text-justify">
                    {experienceDetails[selectedRole].points.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : null}
          </div>
        )}
      </div>
    </motion.main>
  );
}
