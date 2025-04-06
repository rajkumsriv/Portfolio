import { useState } from "react";
import { motion } from "framer-motion";

const projectsData = [
  {
    title: "Chronicle SIEM Deployment",
    sections: [
      {
        heading: "🧾 Project Overview",
        content:
          "Led and successfully executed the enterprise-wide migration of a U.S.-based financial services firm from IBM QRadar to Google Chronicle SIEM. This initiative aimed to modernize the organization's threat detection capabilities, reduce operational overhead, and enable high-speed, cloud-native analytics across security operations."
      },
      {
        heading: "🛠️ What Was Done",
        content:
          "End-to-end deployment of Google Chronicle as the centralized SIEM platform across all business units and geographic locations. Data onboarding included integration of diverse log sources—firewalls, proxies, EDRs, DLP, cloud, and application logs—using custom parsers and ingestion pipelines. Delivered role-based dashboards for SOC analysts, threat hunters, and CISOs, aligned with MITRE ATT&CK and specific KPIs. Developed and fine-tuned YARA-L rules to create robust detection logic. Integrated external threat intel feeds into real-time detection pipelines."
      },
      {
        heading: "⚙️ How It Was Done",
        content:
          "During the discovery and planning phase, existing QRadar architecture and detection gaps were assessed. Log formats were normalized for Chronicle’s UDM (Unified Data Model). QRadar correlation rules were translated into YARA-L syntax. UAT, threat simulations, and alert testing were conducted, followed by enablement sessions and technical documentation for internal teams."
      },
      {
        heading: "🚧 Challenges Faced",
        content:
          "Legacy data inconsistencies and undocumented custom QRadar rules. Compatibility issues with Chronicle’s ingestion requirements. Organizational resistance requiring stakeholder engagement and training. Initial false positives that required iterative tuning."
      },
      {
        heading: "✅ Key Benefits & Outcomes",
        content:
          "Achieved 80% reduction in infrastructure overhead due to Chronicle's serverless architecture. Enhanced detection and alert quality with contextualized YARA-L rules. Completed 98% of log source onboarding within timelines."
      },
      {
        heading: "🔍 Observations",
        content:
          "Chronicle's Unified Data Model improved cross-platform correlation and query speed. SOC teams became more agile, with faster alert triage and better visualization."
      },
      {
        heading: "📘 Lessons Learned",
        content:
          "Involving SOC teams early accelerates tool adoption. Automation via validation scripts and playbooks ensures consistency. Real-time collaboration between detection engineers, threat hunters, and architects is critical for SIEM success."
      },
      {
        heading: "🏆 Achievement Highlight",
        content:
          "Delivered a fully operational, cloud-native SIEM in under 12 weeks, enabling scalable threat detection, reduced TCO, and high-speed analytics—well ahead of schedule."
      }
    ]
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const nextCard = () => {
    if (!selectedProject) return;
    setActiveIndex((prev) => (prev + 1) % selectedProject.sections.length);
  };

  const prevCard = () => {
    if (!selectedProject) return;
    setActiveIndex((prev) =>
      prev === 0 ? selectedProject.sections.length - 1 : prev - 1
    );
  };

  return (
    <motion.main
      className="min-h-screen bg-[#0A192F] text-white px-4 py-12"
      initial={{ y: 30 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
    >
      <div className="max-w-5xl mx-auto">
        {selectedProject && (
          <div className="mb-6 flex justify-start">
            <button
              onClick={() => {
                setSelectedProject(null);
                setActiveIndex(0);
              }}
              className="bg-gray-600 hover:bg-teal-700 text-white px-6 py-3 rounded-md text-base flex flex-col items-center"
            >
              <span className="text-lg">←</span>
              <span>Back</span>
            </button>
          </div>
        )}

        <h1 className="text-4xl font-bold text-teal-400 mb-6 text-left">
          Key Projects & Achievements
        </h1>

        {!selectedProject && (
          <div className="grid gap-8">
            {projectsData.map((project) => (
              <div
                key={project.title}
                onClick={() => setSelectedProject(project)}
                className="bg-[#112240] p-6 rounded-lg shadow-md hover:shadow-teal-400/40 transition cursor-pointer"
              >
                <h2 className="text-2xl font-semibold text-blue-300 text-left">
                  {project.title}
                </h2>
              </div>
            ))}
          </div>
        )}

        {selectedProject && (
          <>
            <h2 className="text-3xl font-semibold text-blue-300 mb-4 mt-6 text-left">
              {selectedProject.title}
            </h2>

            <div className="relative bg-[#112240] p-8 rounded-lg shadow-lg min-h-[300px]">
              <button
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-6xl"
                onClick={prevCard}
              >
                {"<"}
              </button>

              <motion.div
                key={activeIndex}
                initial={{ rotateY: 90, opacity: 0 }}
                animate={{ rotateY: 0, opacity: 1 }}
                exit={{ rotateY: -90, opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="text-gray-300 text-left"
              >
                <h3 className="text-xl font-bold mb-2">
                  {selectedProject?.sections?.[activeIndex]?.heading}
                </h3>
                <p className="text-base whitespace-pre-line">
                  {selectedProject?.sections?.[activeIndex]?.content}
                </p>
              </motion.div>

              <button
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-6xl"
                onClick={nextCard}
              >
                {">"}
              </button>
            </div>
          </>
        )}
      </div>
    </motion.main>
  );
}
