const categories = [
  {
    name: "Languages",
    items: ["JavaScript/TypeScript", "Python", "Solidity", "Rust", "Bash/SQL"]
  },
  {
    name: "Frameworks",
    items: ["Node.js", "FastAPI", "Next.js", "React", "Express", "Hardhat"]
  },
  {
    name: "Cloud & DevOps",
    items: ["AWS", "GCP", "Docker", "Kubernetes", "Terraform", "Nix"]
  },
  {
    name: "AI/ML",
    items: ["LangChain", "OpenAI API", "RLHF pipelines", "Vector DBs", "Hugging Face"]
  },
  {
    name: "Blockchain",
    items: ["Ethereum", "Solana", "web3.js", "Ethers.js", "DeFi protocols"]
  }
]

export default function Skills() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {categories.map((cat) => (
        <div key={cat.name}>
          <h3 className="text-lg font-semibold text-[#0ea5e9] mb-3">{cat.name}</h3>
          <div className="flex flex-wrap gap-2">
            {cat.items.map((skill) => (
              <span key={skill} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm hover:border-[#8b5cf6] transition">
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
