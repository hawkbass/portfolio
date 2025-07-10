"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Mail, Linkedin, Phone, ArrowDown, ExternalLink } from "lucide-react"
import { portfolioData } from "@/lib/data"
import { useRef } from "react"

export default function FullScreenSections() {
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
  } = portfolioData

  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -100])

  return (
    <div ref={containerRef} className="bg-black text-white">
      {/* Hero Section - Full Screen */}
      <section className="h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20" />
        <motion.div style={{ y }} className="text-center z-10 px-4">
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="text-8xl md:text-9xl font-black mb-8 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
          >
            {name.split(" ")[0]}
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-8xl md:text-9xl font-black mb-12 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
          >
            {name.split(" ")[1]}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl md:text-3xl text-gray-300 mb-16 max-w-4xl mx-auto"
          >
            {title}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Link href="#about">
              <Button size="lg" className="px-12 py-4 bg-purple-600 hover:bg-purple-700 text-xl">
                Discover My Work
              </Button>
            </Link>
            <Link href={`mailto:${contact.email}`}>
              <Button
                size="lg"
                variant="outline"
                className="px-12 py-4 text-xl border-white text-white hover:bg-white hover:text-black bg-transparent"
              >
                Get In Touch
              </Button>
            </Link>
          </motion.div>
        </motion.div>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ArrowDown className="h-8 w-8 text-gray-400" />
        </motion.div>
      </section>

      {/* About Section - Full Screen */}
      <section id="about" className="h-screen flex items-center justify-center bg-gray-900 px-4">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
          className="max-w-6xl mx-auto text-center"
        >
          <h2 className="text-6xl md:text-7xl font-bold mb-16 text-white">About Me</h2>
          <p className="text-2xl md:text-3xl leading-relaxed text-gray-300 mb-16">{professionalSummary}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-purple-600/20 rounded-lg">
              <Phone className="h-12 w-12 text-purple-400 mx-auto mb-4" />
              <p className="text-lg">{contact.phone}</p>
            </div>
            <div className="p-8 bg-blue-600/20 rounded-lg">
              <Mail className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <p className="text-lg">{contact.email}</p>
            </div>
            <div className="p-8 bg-green-600/20 rounded-lg">
              <Linkedin className="h-12 w-12 text-green-400 mx-auto mb-4" />
              <p className="text-lg">Glasgow, UK</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Experience Section - Full Screen */}
      <section className="min-h-screen flex items-center justify-center bg-black px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-7xl font-bold mb-20 text-center text-white"
          >
            Experience
          </motion.h2>
          <div className="space-y-20">
            {experience.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="grid md:grid-cols-2 gap-12 items-center"
              >
                <div className={index % 2 === 0 ? "order-1" : "order-2"}>
                  <h3 className="text-4xl font-bold text-purple-400 mb-4">{job.title}</h3>
                  <p className="text-2xl text-blue-400 mb-4">{job.company}</p>
                  <p className="text-lg text-gray-400 mb-6">{job.duration}</p>
                  {job.location && <p className="text-lg text-gray-400 mb-6">{job.location}</p>}
                </div>
                <div className={index % 2 === 0 ? "order-2" : "order-1"}>
                  <ul className="space-y-4">
                    {job.description.map((desc, i) => (
                      <li key={i} className="text-lg text-gray-300 leading-relaxed">
                        • {desc}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section - Full Screen */}
      <section className="h-screen flex items-center justify-center bg-gray-900 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
          className="max-w-6xl mx-auto text-center"
        >
          <h2 className="text-6xl md:text-7xl font-bold mb-16 text-white">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {Object.entries(skills).map(([category, skillList], index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="p-8 bg-white/5 rounded-lg backdrop-blur-sm"
              >
                <h3 className="text-2xl font-bold text-purple-400 mb-6 capitalize">
                  {category.replace(/([A-Z])/g, " $1").trim()}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill, i) => (
                    <span key={i} className="px-3 py-1 bg-white/10 text-white text-sm rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            {coreCompetencies.map((competency, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-full text-lg"
              >
                {competency}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Featured Case Study Placeholder */}
      <section id="case-study" className="min-h-screen flex items-center justify-center bg-gray-900 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent mb-8">
              Featured Case Study
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="bg-white/5 backdrop-blur-sm p-12 rounded-3xl border border-white/10"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-4xl font-bold text-cyan-300 mb-6">Inclusive Design System</h3>
                <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                  A comprehensive accessibility-first component library built with React, TypeScript, and Tailwind CSS.
                  This project demonstrates advanced component architecture, accessibility implementation, and
                  systematic design thinking.
                </p>

                <div className="space-y-4 mb-8">
                  <div>
                    <h4 className="text-purple-400 font-semibold mb-2">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {["React 18", "TypeScript", "Tailwind CSS", "WCAG 2.1", "Storybook", "Jest"].map((tech, i) => (
                        <span key={i} className="px-3 py-1 bg-white/10 text-white text-sm rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <Link
                  href="https://github.com/hawkbass/InclusiveDesignSystem.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium text-lg"
                >
                  View on GitHub <ExternalLink className="h-5 w-5" />
                </Link>
              </div>

              <div>
                <div className="aspect-video bg-gradient-to-br from-purple-900/50 to-cyan-900/50 rounded-2xl mb-8 flex items-center justify-center border border-white/10">
                  <span className="text-gray-400 text-lg">Design System Components</span>
                </div>

                <div className="grid grid-cols-3 gap-6">
                  {[
                    { value: "100%", label: "WCAG Compliant", color: "text-green-400" },
                    { value: "40%", label: "Time Saved", color: "text-blue-400" },
                    { value: "15+", label: "Components", color: "text-purple-400" },
                  ].map((stat, index) => (
                    <div key={index} className="text-center p-4 bg-white/5 rounded-lg">
                      <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                      <div className="text-gray-400 text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section - Full Screen */}
      <section className="h-screen flex items-center justify-center bg-black px-4">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
          className="max-w-6xl mx-auto text-center"
        >
          <h2 className="text-6xl md:text-7xl font-bold mb-16 text-white">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="p-8 bg-white/5 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-purple-400 mb-4">{project.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                <Link
                  href={project.link}
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium"
                >
                  View Project <ExternalLink className="h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Contact Section - Full Screen */}
      <section className="h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 to-blue-900 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h2 className="text-6xl md:text-7xl font-bold mb-8 text-white">Let's Work Together</h2>
          <p className="text-2xl text-gray-300 mb-16 max-w-3xl mx-auto">
            Ready to bring your vision to life? Let's create something extraordinary together.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href={`mailto:${contact.email}`}>
              <Button size="lg" className="px-12 py-4 bg-white text-purple-900 hover:bg-gray-100 text-xl font-bold">
                <Mail className="mr-2 h-5 w-5" />
                Email Me
              </Button>
            </Link>
            <Link href={contact.linkedin} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                variant="outline"
                className="px-12 py-4 text-xl border-white text-white hover:bg-white hover:text-purple-900 font-bold bg-transparent"
              >
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
