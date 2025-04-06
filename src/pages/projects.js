import { useState } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

const projectsData = [
  {
    title: "Chronicle SIEM Deployment",
    details: `
<span class="text-lg font-bold">🧾 Project Overview</span>
Led and successfully executed the enterprise-wide migration of a U.S.-based financial services firm from IBM QRadar to Google Chronicle SIEM. This initiative aimed to modernize the organization's threat detection capabilities, reduce operational overhead, and enable high-speed, cloud-native analytics across security operations.

<span class="text-lg font-bold">🛠️ What Was Done</span>
End-to-end Deployment of Google Chronicle as the centralized SIEM platform across all business units and geographic locations.
Data Onboarding: Integrated diverse log sources—firewalls, proxies, EDRs, DLP, cloud, and application logs—into Chronicle using custom parsers and ingestion pipelines.
Custom Dashboards: Delivered role-based dashboards for SOC analysts, threat hunters, and CISOs, aligning with MITRE ATT&CK and use-case-specific KPIs.
Detection Engineering: Built and fine-tuned YARA-L rules to create robust and scalable threat detection logic tailored to the organization's risk profile.
Threat Intelligence Integration: Ingested external threat intel feeds and mapped them to real-time detection pipelines.

<span class="text-lg font-bold">⚙️ How It Was Done</span>
Discovery & Planning Phase: Assessed existing QRadar architecture and detection gaps. Collaborated with stakeholders to define migration scope and critical use cases.
Data Normalization: Developed and validated parsers to normalize log formats for Chronicle’s UDM (Unified Data Model).
Security Use Case Mapping: Translated QRadar correlation rules into Chronicle's YARA-L syntax, improving detection logic accuracy.
Operational Readiness Testing: Conducted UAT, threat simulations, and alert testing with blue team and incident response teams.
Training & Handover: Delivered technical documentation, and conducted enablement sessions for internal teams.

<span class="text-lg font-bold">🚧 Challenges Faced</span>
Legacy data inconsistencies and custom QRadar rules with limited documentation.
Log source compatibility issues with Chronicle’s ingestion requirements.
Organizational resistance to tool transition—required stakeholder buy-in and team training.
Detection tuning to reduce false positives in the early stages of migration.

<span class="text-lg font-bold">✅ Key Benefits & Outcomes</span>
80% reduction in infrastructure overhead due to Chronicle's serverless, cloud-native design.
Improved detection coverage and alert quality through enriched context and tailored YARA-L rules.
Achieved 98% log source onboarding within agreed timelines.

<span class="text-lg font-bold">🔍 Observations</span>
Unified Data Model significantly improves cross-platform correlation and search performance.
SOC teams became more agile post-deployment due to faster alert triage and improved visualization.

<span class="text-lg font-bold">📘 Lessons Learned</span>
Early involvement of SOC teams accelerates adoption and reduces change resistance.
Automated validation scripts and playbooks reduce onboarding errors and ensure consistency.
Real-time collaboration between detection engineers, threat hunters, and cloud architects is key to success in SIEM transformations.

<span class="text-lg font-bold">🏆 Achievement Highlight</span>
Delivered a fully operational, cloud-native SIEM solution in under 12 weeks, positioning the organization for next-gen security operations with scalable threat detection, reduced TCO, and high-speed analytics—well ahead of projected timelines.
    `,
  },
  {
    title: "Custom Log Shipper for Netskope",
    details: `
- Developed a lightweight, resilient shipper in Python for Netskope.
- Normalized log formats to ensure compatibility with SIEM UDM.
- Improved visibility into cloud traffic and shadow IT behaviors.
    `,
  },
  {
    title: "POCs for SOAR and EDR Tools",
    details: `
- Conducted proof-of-concepts for automation and endpoint visibility tools.
- Evaluated scalability, detection fidelity, and integration with existing SOC tools.
- Created side-by-side comparisons and dashboards for management decisions.
    `,
  },
  {
    title: "Data Protection: BitLocker Migration",
    details: `
- Ensured compliance with internal encryption standards.
- Rolled out in phases across departments with zero data loss incidents.
- Created SOPs and automation scripts to simplify future deployments.
    `,
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const router = useRouter();

  return (
    <motion.main
      className="min-h-screen bg-[#0A192F] text-white px-4 py-12"
      initial={{ y: 30 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Breadcrumb Navigation */}
        <div className="text-sm text-gray-400 mb-4">
          <nav className="flex items-center space-x-2">
            <span
              onClick={() => router.push("/")}
              className="hover:text-teal-400 cursor-pointer"
            >
              Home
            </span>
            <span>/</span>
            <span
              onClick={() => setSelectedProject(null)}
              className={`hover:text-teal-400 cursor-pointer ${
                !selectedProject && "text-white"
              }`}
            >
              Projects
            </span>
            {selectedProject && (
              <>
                <span>/</span>
                <span className="text-white">{selectedProject.title}</span>
              </>
            )}
          </nav>
        </div>

        {/* Page Heading (always visible) */}
        <h1 className="text-4xl font-bold text-teal-400 mb-6 text-center">
          Key Projects & Achievements
        </h1>

        {/* Project List (First Layer) */}
        {!selectedProject && (
          <div className="grid gap-8">
            {projectsData.map((project, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedProject(project)}
                className="bg-[#112240] p-6 rounded-lg shadow-md hover:shadow-teal-400/40 transition cursor-pointer"
              >
                <h2 className="text-2xl font-semibold text-blue-300">
                  {project.title}
                </h2>
              </div>
            ))}
          </div>
        )}

        {/* Project Details (Second Layer) */}
        {selectedProject && (
          <>
            {/* Project Title outside the box */}
            <h2 className="text-3xl font-semibold text-blue-300 mb-4 mt-10 text-center">
              {selectedProject.title}
            </h2>

            <motion.div
              key="details"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-[#112240] p-6 rounded-lg shadow-lg"
            >
              <div
                className="text-gray-300 whitespace-pre-wrap font-sans text-base"
                dangerouslySetInnerHTML={{ __html: selectedProject.details }}
              />
            </motion.div>
          </>
        )}
      </div>
    </motion.main>
  );
}
