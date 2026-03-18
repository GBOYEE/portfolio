import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import HeroParticles from "@/components/hero-particles"
import ProjectCard from "@/components/project-card"
import Skills from "@/components/skills"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-gray-100">
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <HeroParticles />
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <p className="uppercase tracking-widest text-sm text-[#8b5cf6] mb-4">
            Full‑stack Engineer & AI Systems Architect
          </p>
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-8 leading-tight">
            Building autonomous AI agents <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0ea5e9] to-[#8b5cf6]">
              and secure blockchain infrastructure
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
            Deep expertise in multi‑agent orchestration, Web3 security, and large‑scale cloud‑native systems. Open‑source contributor, security‑first mindset.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="#projects"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-gradient-to-r from-[#0ea5e9] to-[#8b5cf6] font-semibold hover:scale-105 transition"
            >
              View Projects <ArrowRight size={18} />
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border border-gray-600 hover:border-[#0ea5e9] transition"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-24 px-6 bg-[#0d0d0d]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-serif font-bold mb-12 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="space-y-6 text-lg">
              <p className="text-gray-300">
                I’m a software engineer focused on building robust, high‑performance systems at the intersection of AI, blockchain, and cloud infrastructure. I thrive on turning complex requirements into clean, maintainable code that scales.
              </p>
              <p className="text-gray-300">
                Recent work includes the Xander Hive Framework — a self‑coordinating multi‑agent swarm with self‑repair capabilities — and a Web3 security suite that combines static analysis with on‑chain monitoring. I also develop DevOps tooling for secure, auditable deployments.
              </p>
              <p className="text-gray-400">
                Open source is a core part of my practice; I maintain several repositories covering AI alignment, vulnerability patching, and automated security pipelines.
              </p>
            </div>
            <div className="space-y-6">
              <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                <div className="text-sm text-gray-400 mb-2">Focus</div>
                <div className="text-2xl font-semibold text-[#0ea5e9]">AI Systems & Security</div>
              </div>
              <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                <div className="text-sm text-gray-400 mb-3">Stack</div>
                <div className="flex flex-wrap gap-2">
                  {["Node.js", "Python", "TypeScript", "React", "Solidity", "Docker/K8s"].map((tech) => (
                    <span key={tech} className="px-3 py-1.5 rounded-md bg-[#0ea5e9]/10 border border-[#0ea5e9] text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-serif font-bold mb-4 text-center">Featured Projects</h2>
          <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
            Open‑source tools and frameworks I’ve built or maintain.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="Xander Hive Framework"
              description="Multi‑agent orchestration with Redis pub/sub, autonomous negotiation, and self‑repair via LLM‑generated patches."
              tech={["Node.js", "Python", "Redis", "OpenRouter"]}
              github="GBOYEE/xander-hive-framework"
              stars={500}
            />
            <ProjectCard
              title="Web3 Security Scout"
              description="AI‑augmented security monitoring for Ethereum/Solidity. Fetches contracts, runs static analysis, and alerts on critical issues."
              tech={["Python", "web3.py", "Etherscan API", "Alchemy"]}
              github="GBOYEE/web3-security-scout"
              stars={320}
            />
            <ProjectCard
              title="HiveSec Ecosystem Hub"
              description="Streamlit dashboard uniting security tools: VulnFix‑Agent, EthicsAlign‑Auditor, AdaptiveRLHF‑Trainer."
              tech={["Python", "Streamlit", "fastai", "OpenAI"]}
              github="GBOYEE/HiveSec-Ecosystem-Hub"
              stars={180}
            />
            <ProjectCard
              title="VulnFix‑Agent"
              description="Automatically generates unified diff patches for vulnerable code using RLHF‑ranked fixes."
              tech={["Python", "OpenAI", "Git"]}
              github="GBOYEE/VulnFix-Agent"
              stars={120}
            />
            <ProjectCard
              title="SecureDeploy Orchestrator"
              description="Chain generate → fix → monitor → deploy pipeline with gated approvals and audit trails."
              tech={["Node.js", "Docker", "GitHub Actions"]}
              github="GBOYEE/SecureDeploy-Orchestrator"
              stars={90}
            />
            <ProjectCard
              title="Solana Degenbot"
              description="Autonomous meme‑coin trader for Solana. Scans new pools, applies liquidity checks, executes buys/sells."
              tech={["Node.js", "Solana Web3.js", "Jupiter API"]}
              github="GBOYEE/solana-degenbot"
              stars={45}
            />
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-24 px-6 bg-[#0d0d0d]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-serif font-bold mb-12 text-center">Technical Skills</h2>
          <Skills />
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-serif font-bold mb-6">Get in Touch</h2>
          <p className="text-gray-400 mb-10 text-lg">
            I’m open to engineering roles, advisory work, and speaking engagements. Let’s build something great together.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="mailto:gboyee@example.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-[#0ea5e9] text-[#0ea5e9] hover:bg-[#0ea5e9] hover:text-white transition"
            >
              <Mail size={18} /> Email
            </a>
            <a
              href="https://github.com/gboyee"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-gray-600 hover:border-[#8b5cf6] hover:text-[#8b5cf6] transition"
            >
              <Github size={18} /> GitHub
            </a>
            <a
              href="https://linkedin.com/in/gboyee"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-gray-600 hover:border-[#10b981] hover:text-[#10b981] transition"
            >
              <Linkedin size={18} /> LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center text-sm text-gray-500 border-t border-white/10">
        <p>© {new Date().getFullYear()} GBOYEE • Built with Next.js, Tailwind, and Shadcn/ui</p>
      </footer>
    </main>
  )
}
