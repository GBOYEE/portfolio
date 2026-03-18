import { Github, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function ProjectCard({ title, description, tech, github, stars = 0 }: {
  title: string
  description: string
  tech: string[]
  github: string
  stars?: number
}) {
  return (
    <div className="group relative rounded-2xl p-6 bg-white/5 border border-white/10 hover:border-[#0ea5e9] transition-all duration-300 hover:shadow-[0_20px_40px_-15px_rgba(14,165,233,0.15)] h-full flex flex-col">
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-xl font-semibold text-white leading-tight">{title}</h3>
        <Link href={`https://github.com/${github}`} target="_blank" rel="noopener" className="text-gray-400 hover:text-[#0ea5e9] shrink-0">
          <ExternalLink size={18} />
        </Link>
      </div>
      <p className="text-gray-400 mb-6 flex-1 leading-relaxed">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((t) => (
          <span key={t} className="px-2.5 py-1.5 rounded-md text-sm bg-[#8b5cf6]/10 border border-[#8b5cf6] text-[#8b5cf6]">
            {t}
          </span>
        ))}
      </div>
      <div className="flex items-center text-sm text-gray-500 mt-auto">
        <Github size={14} className="mr-1.5" /> {stars} stars
      </div>
    </div>
  )
}
