"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, Mail, Phone, MapPin, Github, ExternalLink, Sparkles } from "lucide-react"
import { portfolioData } from "@/lib/data"
import { useRef } from "react"

export default function SophisticatedDark() {
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

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -300])
  const textY = useTransform(scrollYProgress, [0, 1], [0, -100])

  return (
    <div ref={containerRef} className="min-h-screen bg-neutral-950 text-white">
      {/* Ambient Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          style={{ y: backgroundY }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-amber-500/10 to-orange-600/5 rounded-full blur-3xl"
        />
        <motion.div
          style={{ y: backgroundY }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-blue-500/10 to-purple-600/5 rounded-full blur-3xl"
        />
      </div>

      {/* Navigation */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 bg-neutral-950/80 backdrop-blur-xl border-b border-neutral-800"
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
              <h1 className="text-xl font-medium tracking-tight text-white">{name}</h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-8"
            >
              <Link
                href="#work"
                className="text-sm font-medium text-neutral-400 hover:text-white transition-colors duration-300"
              >
                Work
              </Link>
              <Link
                href="#about"
                className="text-sm font-medium text-neutral-400 hover:text-white transition-colors duration-300"
              >
                About
              </Link>
              <Link
                href="#contact"
                className="text-sm font-medium text-neutral-400 hover:text-white transition-colors duration-300"
              >
                Contact
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-8 relative">
        <motion.div style={{ y: textY }} className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="mb-8"
          >
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-extralight tracking-tighter text-white leading-[0.85] mb-8">
              Design
              <br />
              <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent font-light">
                Excellence
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.7 }}
            className="text-2xl md:text-3xl text-neutral-300 font-light leading-relaxed mb-12 max-w-4xl mx-auto"
          >
            Crafting digital experiences that merge aesthetic sophistication with functional precision
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.9 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link href="#work">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white px-10 py-4 rounded-full font-medium text-lg shadow-2xl transition-all duration-300">
                  Explore Work
                  <Sparkles className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
            </Link>
            <Link href="#contact">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  className="border-neutral-600 text-neutral-300 hover:bg-neutral-800 hover:border-neutral-500 px-10 py-4 rounded-full font-medium text-lg transition-all duration-300 bg-transparent"
                >
                  Let's Connect
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Case Study */}
      <section id="work" className="py-32 px-8 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-extralight tracking-tight text-white mb-6">Featured Work</h2>
            <p className="text-xl text-neutral-400 max-w-2xl">
              A comprehensive exploration of accessibility-first design principles
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-3xl p-12 hover:bg-neutral-900/70 transition-all duration-500"
          >
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <motion.div
                  className="aspect-[4/3] bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-2xl overflow-hidden relative group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-orange-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-2xl">
                        <div className="w-10 h-10 bg-white rounded-lg opacity-90"></div>
                      </div>
                      <p className="text-amber-400 font-medium text-lg">Design System Architecture</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              <div>
                <motion.h3
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-4xl font-light tracking-tight text-white mb-6"
                >
                  {caseStudy.title}
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="text-lg text-neutral-300 leading-relaxed mb-8"
                >
                  {caseStudy.overview}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="space-y-6 mb-8"
                >
                  <div>
                    <h4 className="text-sm font-semibold text-amber-400 uppercase tracking-wider mb-4">
                      Core Technologies
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {caseStudy.technologies.slice(0, 6).map((tech, index) => (
                        <motion.span
                          key={index}
                          className="px-4 py-2 bg-neutral-800 text-neutral-200 rounded-full font-medium text-sm border border-neutral-700 hover:border-amber-500/50 transition-colors duration-300"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.2 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-6">
                    {[
                      { value: "100%", label: "WCAG Compliant", color: "text-green-400" },
                      { value: "40%", label: "Efficiency Gain", color: "text-amber-400" },
                      { value: "15+", label: "Components", color: "text-blue-400" },
                    ].map((stat, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                        className="text-center"
                      >
                        <div className={`text-3xl font-light ${stat.color} mb-2`}>{stat.value}</div>
                        <div className="text-sm text-neutral-400 font-medium">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="flex items-center gap-4"
                >
                  <Link href={caseStudy.githubUrl} target="_blank" rel="noopener noreferrer">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white px-6 py-3 rounded-full font-medium transition-all duration-300">
                        <Github className="mr-2 h-4 w-4" />
                        View Code
                      </Button>
                    </motion.div>
                  </Link>
                  <Link href="#case-study">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        variant="outline"
                        className="border-neutral-600 text-neutral-300 hover:bg-neutral-800 hover:border-neutral-500 px-6 py-3 rounded-full font-medium transition-all duration-300 bg-transparent"
                      >
                        Deep Dive
                        <ArrowUpRight className="ml-2 h-4 w-4" />
                      </Button>
                    </motion.div>
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience */}
      <section id="about" className="py-32 px-8 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-extralight tracking-tight text-white mb-6">Experience</h2>
            <p className="text-xl text-neutral-400 max-w-2xl">
              A decade of crafting exceptional digital experiences across industries
            </p>
          </motion.div>

          <div className="space-y-8">
            {experience.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
                className="bg-neutral-900/30 backdrop-blur-sm border border-neutral-800 rounded-2xl p-8 hover:bg-neutral-900/50 hover:border-neutral-700 transition-all duration-500"
                whileHover={{ y: -5 }}
              >
                <div className="grid lg:grid-cols-4 gap-8 items-start">
                  <div>
                    <h3 className="text-xl font-medium text-white mb-2">{job.title}</h3>
                    <p className="text-lg text-amber-400 mb-2">{job.company}</p>
                    <p className="text-sm text-neutral-500 mb-1">{job.duration}</p>
                    {job.location && <p className="text-sm text-neutral-500">{job.location}</p>}
                  </div>
                  <div className="lg:col-span-3">
                    <ul className="space-y-3">
                      {job.description.map((desc, i) => (
                        <li key={i} className="text-neutral-300 leading-relaxed flex items-start">
                          <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2.5 mr-4 flex-shrink-0"></span>
                          {desc}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-32 px-8 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-extralight tracking-tight text-white mb-6">Capabilities</h2>
            <p className="text-xl text-neutral-400 max-w-2xl">Technical expertise and creative competencies</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {Object.entries(skills).map(([category, skillList], index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
                className="bg-neutral-900/30 backdrop-blur-sm border border-neutral-800 rounded-2xl p-8 hover:bg-neutral-900/50 hover:border-neutral-700 transition-all duration-500"
              >
                <h3 className="text-lg font-medium text-amber-400 mb-6 capitalize">
                  {category.replace(/([A-Z])/g, " $1").trim()}
                </h3>
                <div className="space-y-3">
                  {skillList.map((skill, i) => (
                    <div key={i} className="text-neutral-300 font-light">
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
            className="bg-gradient-to-r from-neutral-900/50 to-neutral-800/50 backdrop-blur-sm border border-neutral-700 rounded-2xl p-8"
          >
            <h3 className="text-lg font-medium text-white mb-6">Core Competencies</h3>
            <div className="flex flex-wrap gap-3">
              {coreCompetencies.map((competency, i) => (
                <motion.span
                  key={i}
                  className="px-4 py-2 bg-gradient-to-r from-amber-500/20 to-orange-600/20 text-amber-300 border border-amber-500/30 rounded-full font-medium hover:from-amber-500/30 hover:to-orange-600/30 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  {competency}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-32 px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-5xl md:text-6xl font-extralight tracking-tight text-white mb-8">
              Let's Create Together
            </h2>
            <p className="text-xl text-neutral-300 leading-relaxed mb-12 max-w-2xl mx-auto">
              Ready to elevate your digital presence? Let's discuss how we can bring your vision to life with
              sophisticated design and flawless execution.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12"
            >
              <Link href={`mailto:${contact.email}`}>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white px-10 py-4 rounded-full font-medium text-lg shadow-2xl transition-all duration-300">
                    <Mail className="mr-2 h-5 w-5" />
                    Start Conversation
                  </Button>
                </motion.div>
              </Link>
              <Link href={contact.linkedin} target="_blank" rel="noopener noreferrer">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="outline"
                    className="border-neutral-600 text-neutral-300 hover:bg-neutral-800 hover:border-neutral-500 px-10 py-4 rounded-full font-medium text-lg transition-all duration-300 bg-transparent"
                  >
                    LinkedIn
                    <ExternalLink className="ml-2 h-5 w-5" />
                  </Button>
                </motion.div>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex items-center justify-center gap-8 text-neutral-500"
            >
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span className="text-sm">{contact.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">Glasgow, UK</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
