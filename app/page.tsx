'use client';

import { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sun, Moon, ChevronDown, ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ThemeToggle } from '@/components/theme-toggle';

const projects = [
  {
    title: 'OpenClaw AI',
    description: 'Autonomous multi-agent orchestration platform with hive messaging and self-repair.',
    tags: ['Next.js', 'Python', 'Redis', 'OpenRouter'],
    link: 'https://github.com/openclaw',
    github: 'https://github.com/openclaw',
  },
  {
    title: 'HiveSec Ecosystem',
    description: 'Suite of 10 integrated open-source AI security tools, alignment frameworks, and dashboards.',
    tags: ['FastAPI', 'React', 'Streamlit', 'Docker'],
    link: 'https://github.com/GBOYEE',
    github: 'https://github.com/GBOYEE',
  },
  {
    title: 'DegenTrader',
    description: 'Autonomous Solana meme coin trader using Pump.fun and on-chain AI signals.',
    tags: ['Python', 'Solana', 'Pump.fun', 'Birdeye'],
    link: '#',
    github: 'https://github.com/GBOYEE',
  },
];

export default function Home() {
  const [isDark, setIsDark] = useState(false);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 100]);

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* Navigation */}
      <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-bold tracking-tight"
          >
            Gboyee
          </motion.h1>
          <nav className="hidden md:flex gap-8 items-center">
            {['About', 'Projects', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                {item}
              </a>
            ))}
            <ThemeToggle />
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent" />
        </motion.div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
          >
            AI-Powered Fullstack Engineer
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
          >
            Building the future with OpenClaw, HiveSec, and Web3. Crafting pixel-perfect, production-ready interfaces that scale.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button asChild size="lg">
              <a href="#projects">View Work</a>
            </Button>
          </motion.div>
        </div>
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <ChevronDown className="w-6 h-6 text-muted-foreground" />
        </motion.div>
      </section>

      {/* About */}
      <section id="about" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-6"
          >
            About Me
          </motion.h3>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4 text-lg text-muted-foreground"
          >
            <p>
              I’m a software engineer with a focus on AI, blockchain, and modern web experiences. 
              I build scalable systems, beautiful UIs, and autonomous agents that push the boundaries of what’s possible.
            </p>
            <p>
              Currently orchestrating the HiveSec ecosystem and shipping production-grade applications with Next.js, TypeScript, and Solid.
            </p>
            <p>
              When I’m not coding, I’m researching new agent architectures or optimizing DeFi strategies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-10 text-center"
          >
            Featured Projects
          </motion.h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="h-full flex flex-col">
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="gap-2">
                    <Button asChild variant="outline" size="sm">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    {project.link !== '#' && (
                      <Button asChild size="sm">
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live
                        </a>
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 max-w-xl">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-6 text-center"
          >
            Get In Touch
          </motion.h3>
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
              <input
                id="name"
                type="text"
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
              <input
                id="email"
                type="email"
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
              <textarea
                id="message"
                rows={4}
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="What’s on your mind?"
              />
            </div>
            <Button type="submit">Send Message</Button>
          </motion.form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border text-center text-sm text-muted-foreground">
        <div className="container mx-auto px-4">
          <p>© {new Date().getFullYear()} Gboyee. Built with Next.js, Tailwind, and shadcn/ui.</p>
        </div>
      </footer>
    </div>
  );
}