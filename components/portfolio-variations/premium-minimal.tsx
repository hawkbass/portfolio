"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, Mail, Phone, MapPin, Github, ExternalLink } from "lucide-react"
import { portfolioData } from "@/lib/data"
import { useRef } from "react"

export default function PremiumMinimal() {
  const {
    name,
    title,
    professionalSummary,
    experience,
    skills,
    coreCompetencies,
    additionalProjects,
    education,
    contact,
    caseStudy,
  } = portfolioData

  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const headerY = useTransform(scrollYProgress, [0, 1], [0, -100])
  const headerOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])

  return (
    <div ref={containerRef} className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-xl border-b border-gray-100"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="max-w-7xl mx-auto px-8 py-6">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="text-xl font-semibold tracking-tight text-gray-900">{name}</h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-8"
            >
              <Link href="#work" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                Work
              </Link>
              <Link href="#about" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                About
              </Link>
              <Link href="#contact" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                Contact
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div style={{ y: headerY, opacity: headerOpacity }} className="max-w-4xl">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-gray-900 leading-[0.9] mb-8"
            >
              Senior Design
              <br />
              <span className="font-medium">& Development</span>
              <br />
              Leader
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
              className="text-xl text-gray-600 leading-relaxed max-w-2xl mb-12"
            >
              {professionalSummary.split(".")[0]}.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
              className="flex items-center gap-6"
            >
              <Link href="#work">
                <Button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105">
                  View Work
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href={`mailto:${contact.email}`}>
                <Button
                  variant="outline"
                  className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 rounded-full font-medium transition-all duration-300 bg-transparent"
                >
                  Get in Touch
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Case Study */}
      <section id="work" className="py-24 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-light tracking-tight text-gray-900 mb-4">Featured Work</h2>
            <p className="text-lg text-gray-600">A comprehensive design system built for accessibility and scale</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <div>
              <div className="aspect-[4/3] bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl mb-8 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-indigo-600 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                      <div className="w-8 h-8 bg-white rounded-lg"></div>
                    </div>
                    <p className="text-indigo-600 font-medium">Design System Components</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-medium tracking-tight text-gray-900 mb-6">{caseStudy.title}</h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">{caseStudy.overview}</p>

              <div className="space-y-6 mb-8">
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-3">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {caseStudy.technologies.slice(0, 6).map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-6">
                  <div>
                    <div className="text-2xl font-semibold text-gray-900 mb-1">100%</div>
                    <div className="text-sm text-gray-600">WCAG Compliant</div>
                  </div>
                  <div>
                    <div className="text-2xl font-semibold text-gray-900 mb-1">40%</div>
                    <div className="text-sm text-gray-600">Time Saved</div>
                  </div>
                  <div>
                    <div className="text-2xl font-semibold text-gray-900 mb-1">15+</div>
                    <div className="text-sm text-gray-600">Components</div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Link href={caseStudy.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Button className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-2 rounded-full font-medium transition-all duration-300">
                    <Github className="mr-2 h-4 w-4" />
                    View Code
                  </Button>
                </Link>
                <Link href="#case-study">
                  <Button
                    variant="outline"
                    className="border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-2 rounded-full font-medium transition-all duration-300 bg-transparent"
                  >
                    Case Study
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-24 px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-light tracking-tight text-gray-900 mb-4">Experience</h2>
            <p className="text-lg text-gray-600">Leading design and development across multiple industries</p>
          </motion.div>

          <div className="space-y-16">
            {experience.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
                className="grid lg:grid-cols-3 gap-8 items-start"
              >
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{job.title}</h3>
                  <p className="text-lg text-gray-600 mb-2">{job.company}</p>
                  <p className="text-sm text-gray-500 mb-1">{job.duration}</p>
                  {job.location && <p className="text-sm text-gray-500">{job.location}</p>}
                </div>
                <div className="lg:col-span-2">
                  <ul className="space-y-3">
                    {job.description.map((desc, i) => (
                      <li key={i} className="text-gray-700 leading-relaxed flex items-start">
                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2.5 mr-4 flex-shrink-0"></span>
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-24 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-light tracking-tight text-gray-900 mb-4">Capabilities</h2>
            <p className="text-lg text-gray-600">Core competencies and technical expertise</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {Object.entries(skills).map(([category, skillList], index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
                className="space-y-4"
              >
                <h3 className="text-lg font-semibold text-gray-900 capitalize">
                  {category.replace(/([A-Z])/g, " $1").trim()}
                </h3>
                <div className="space-y-2">
                  {skillList.map((skill, i) => (
                    <div key={i} className="text-gray-600">
                      {skill}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Core Competencies</h3>
            <div className="flex flex-wrap gap-3">
              {coreCompetencies.map((competency, i) => (
                <span key={i} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full font-medium">
                  {competency}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-8 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">Let's work together</h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Ready to bring your vision to life? I'd love to hear about your project and explore how we can create
                something exceptional together.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Mail className="h-5 w-5 text-gray-400" />
                  <span className="text-gray-300">{contact.email}</span>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="h-5 w-5 text-gray-400" />
                  <span className="text-gray-300">{contact.phone}</span>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="h-5 w-5 text-gray-400" />
                  <span className="text-gray-300">Glasgow, UK</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <Link href={`mailto:${contact.email}`}>
                <Button className="w-full bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 rounded-full font-medium text-lg transition-all duration-300">
                  Send Message
                  <ArrowUpRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href={contact.linkedin} target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  className="w-full border-gray-600 text-white hover:bg-gray-800 px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 bg-transparent"
                >
                  LinkedIn
                  <ExternalLink className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
