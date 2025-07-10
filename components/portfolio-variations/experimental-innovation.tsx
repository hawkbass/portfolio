"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Mail, Linkedin, ExternalLink, Phone, Sparkles, Zap, Rocket, Star } from "lucide-react"
import { portfolioData } from "@/lib/data"
import { useRef } from "react"

export default function ExperimentalInnovation() {
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

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -300])
  const textY = useTransform(scrollYProgress, [0, 1], [0, -150])

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-gradient-to-br from-purple-950 via-indigo-950 to-black text-white font-mono overflow-hidden"
    >
      {/* Floating Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <motion.section className="min-h-screen flex items-center justify-center px-4 relative" style={{ y: textY }}>
        <div className="text-center max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, rotateX: -90 }}
            animate={{ opacity: 1, rotateX: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="mb-12"
          >
            <h1 className="text-8xl md:text-9xl font-black leading-none mb-8">
              {name.split("").map((char, index) => (
                <motion.span
                  key={index}
                  className="inline-block bg-gradient-to-r from-lime-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent"
                  initial={{ opacity: 0, y: 100, rotateZ: Math.random() * 360 }}
                  animate={{ opacity: 1, y: 0, rotateZ: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100,
                  }}
                  whileHover={{
                    scale: 1.2,
                    rotateZ: Math.random() * 20 - 10,
                    color: `hsl(${Math.random() * 360}, 70%, 60%)`,
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="relative mb-12"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-lime-400 to-purple-400 blur-xl opacity-30" />
            <p className="text-2xl md:text-3xl font-bold text-cyan-300 relative z-10 p-4 border border-cyan-400/30 backdrop-blur-sm">
              {title}
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-8 justify-center items-center"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <Link href="#contact">
              <motion.div
                whileHover={{
                  scale: 1.1,
                  rotateZ: 5,
                  boxShadow: "0 0 30px rgba(163, 230, 53, 0.5)",
                }}
                whileTap={{ scale: 0.9 }}
              >
                <Button className="px-12 py-4 bg-gradient-to-r from-lime-500 to-cyan-500 hover:from-lime-600 hover:to-cyan-600 text-black font-black text-xl transform skew-x-12 hover:skew-x-0 transition-all duration-300">
                  <Sparkles className="mr-2 h-5 w-5" />
                  COLLABORATE
                </Button>
              </motion.div>
            </Link>
            <Link href="#work">
              <motion.div
                whileHover={{
                  scale: 1.1,
                  rotateZ: -5,
                  boxShadow: "0 0 30px rgba(168, 85, 247, 0.5)",
                }}
                whileTap={{ scale: 0.9 }}
              >
                <Button
                  variant="outline"
                  className="px-12 py-4 border-2 border-purple-400 text-purple-300 hover:bg-purple-900/30 font-black text-xl transform -skew-x-12 hover:skew-x-0 transition-all duration-300 bg-transparent"
                >
                  <Rocket className="mr-2 h-5 w-5" />
                  EXPLORE
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* About Section */}
      <section className="py-32 px-4 relative">
        <motion.div
          style={{ y: backgroundY }}
          className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-cyan-900/20"
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1 }}
            className="mb-20"
          >
            <h2 className="text-7xl md:text-8xl font-black bg-gradient-to-r from-lime-400 to-purple-400 bg-clip-text text-transparent mb-8 transform -skew-x-12">
              ABOUT.EXE
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, rotateY: -90 }}
              whileInView={{ opacity: 1, rotateY: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1 }}
              className="p-8 bg-gradient-to-br from-purple-900/30 to-cyan-900/30 backdrop-blur-sm border border-lime-400/30 transform rotate-1"
            >
              <p className="text-lg leading-relaxed text-gray-300 mb-8">{professionalSummary}</p>
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  className="p-4 bg-lime-400/20 border border-lime-400/50 transform -rotate-2"
                  whileHover={{ rotate: 0, scale: 1.05 }}
                >
                  <Phone className="h-6 w-6 text-lime-400 mb-2" />
                  <p className="text-sm font-mono">{contact.phone}</p>
                </motion.div>
                <motion.div
                  className="p-4 bg-purple-400/20 border border-purple-400/50 transform rotate-2"
                  whileHover={{ rotate: 0, scale: 1.05 }}
                >
                  <Star className="h-6 w-6 text-purple-400 mb-2" />
                  <p className="text-sm font-mono">Glasgow, UK</p>
                </motion.div>
              </div>
            </motion.div>

            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 100, rotateZ: 10 }}
                  whileInView={{ opacity: 1, x: 0, rotateZ: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="p-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30 backdrop-blur-sm border border-cyan-400/30 transform hover:rotate-0 transition-transform duration-300"
                  style={{ transform: `rotate(${index % 2 === 0 ? "2deg" : "-2deg"})` }}
                  whileHover={{ scale: 1.02, rotate: 0 }}
                >
                  <h3 className="text-2xl font-bold text-lime-300 mb-2 font-mono">{edu.degree}</h3>
                  <p className="text-cyan-300 mb-2 font-mono">{edu.institution}</p>
                  <p className="text-sm text-gray-400 mb-4 font-mono">{edu.duration}</p>
                  <p className="text-sm text-gray-300">{edu.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Case Study Placeholder */}
      <section id="case-study" className="py-32 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1 }}
            className="text-center mb-20"
          >
            <h2 className="text-7xl md:text-8xl font-black bg-gradient-to-r from-cyan-400 to-lime-400 bg-clip-text text-transparent mb-8 transform skew-x-12">
              FEATURED.PROJECT
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-lime-400/10 to-purple-400/10 blur-xl" />
            <div
              className="relative p-12 bg-black/50 backdrop-blur-sm border-2 border-lime-400/30 transform hover:rotate-0 transition-transform duration-500"
              style={{ transform: "rotate(-1deg)" }}
            >
              <h3 className="text-4xl font-black text-lime-400 mb-8 font-mono transform skew-x-6">
                PROJECT.TITLE.PLACEHOLDER
              </h3>
              <p className="text-gray-300 mb-12 text-lg leading-relaxed">
                This section will showcase an in-depth case study of one of your significant projects. Please provide
                your GitHub repository or project details, and I'll integrate the comprehensive content including
                project overview, challenges, design process, technical implementation, and results.
              </p>

              <div className="aspect-video bg-gradient-to-br from-purple-900/50 to-cyan-900/50 mb-12 flex items-center justify-center border-2 border-cyan-400/30 relative overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                  animate={{ x: [-100, 400] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                />
                <span className="text-gray-400 text-2xl font-mono relative z-10">PROJECT.SCREENSHOT.LOADING...</span>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    icon: Zap,
                    title: "CHALLENGE.EXE",
                    desc: "Project challenge description will go here.",
                    color: "from-red-400 to-pink-400",
                  },
                  {
                    icon: Sparkles,
                    title: "SOLUTION.EXE",
                    desc: "Solution approach and methodology will be detailed here.",
                    color: "from-lime-400 to-cyan-400",
                  },
                  {
                    icon: Rocket,
                    title: "RESULTS.EXE",
                    desc: "Quantifiable outcomes and impact metrics will be shown here.",
                    color: "from-purple-400 to-blue-400",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, rotateX: -90 }}
                    whileInView={{ opacity: 1, rotateX: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    className="p-8 bg-gradient-to-br from-black/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 transform hover:scale-105 transition-all duration-300"
                    whileHover={{
                      rotateY: 10,
                      boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                    }}
                  >
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center mb-6`}
                    >
                      <item.icon className="h-8 w-8 text-black" />
                    </div>
                    <h4 className="font-black mb-4 text-white font-mono text-lg">{item.title}</h4>
                    <p className="text-sm text-gray-300">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="work" className="py-32 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1 }}
            className="text-center mb-20"
          >
            <h2 className="text-7xl md:text-8xl font-black bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-8 transform -skew-x-12">
              EXPERIENCE.LOG
            </h2>
          </motion.div>

          <div className="space-y-16">
            {experience.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, rotateY: index % 2 === 0 ? -90 : 90 }}
                whileInView={{ opacity: 1, rotateY: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1, delay: index * 0.2 }}
                className="grid md:grid-cols-[350px_1fr] gap-12 items-start"
              >
                <motion.div
                  className="p-8 bg-gradient-to-br from-lime-900/30 to-cyan-900/30 backdrop-blur-sm border border-lime-400/30 transform hover:rotate-0 transition-all duration-300"
                  style={{ transform: `rotate(${index % 2 === 0 ? "3deg" : "-3deg"})` }}
                  whileHover={{ scale: 1.05, rotate: 0 }}
                >
                  <p className="text-lime-400 font-black text-xl mb-2 font-mono">{job.duration}</p>
                  {job.location && <p className="text-cyan-300 font-mono text-sm">{job.location}</p>}
                </motion.div>

                <motion.div
                  className="p-8 bg-gradient-to-br from-purple-900/30 to-black/50 backdrop-blur-sm border border-purple-400/30 transform hover:rotate-0 transition-all duration-300"
                  style={{ transform: `rotate(${index % 2 === 0 ? "-2deg" : "2deg"})` }}
                  whileHover={{ scale: 1.02, rotate: 0 }}
                >
                  <h3 className="text-3xl font-black mb-2 text-lime-300 font-mono transform skew-x-6">{job.title}</h3>
                  <p className="text-2xl font-bold text-purple-300 mb-8 font-mono">{job.company}</p>
                  <ul className="space-y-4">
                    {job.description.map((desc, i) => (
                      <motion.li
                        key={i}
                        className="text-gray-300 leading-relaxed flex items-start gap-4"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                      >
                        <span className="w-3 h-3 bg-gradient-to-r from-lime-400 to-cyan-400 flex-shrink-0 mt-2 transform rotate-45" />
                        {desc}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-32 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1 }}
            className="text-center mb-20"
          >
            <h2 className="text-7xl md:text-8xl font-black bg-gradient-to-r from-lime-400 to-purple-400 bg-clip-text text-transparent mb-8 transform skew-x-12">
              SKILLS.DATABASE
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {Object.entries(skills).map(([category, skillList], index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, rotateZ: Math.random() * 360 }}
                whileInView={{ opacity: 1, rotateZ: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1, delay: index * 0.1 }}
                className="p-8 bg-gradient-to-br from-black/50 to-gray-900/50 backdrop-blur-sm border border-cyan-400/30 transform hover:rotate-0 transition-all duration-500"
                style={{ transform: `rotate(${Math.random() * 6 - 3}deg)` }}
                whileHover={{ scale: 1.05, rotate: 0 }}
              >
                <h3 className="text-2xl font-black text-cyan-300 mb-6 font-mono capitalize transform skew-x-6">
                  {category.replace(/([A-Z])/g, " $1").trim()}.EXE
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill, i) => (
                    <motion.span
                      key={i}
                      className="px-3 py-1 bg-gradient-to-r from-lime-400/20 to-purple-400/20 text-white text-sm font-mono border border-lime-400/30"
                      whileHover={{
                        scale: 1.1,
                        backgroundColor: "rgba(163, 230, 53, 0.3)",
                        rotate: Math.random() * 10 - 5,
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1 }}
            className="p-12 bg-gradient-to-r from-purple-900/30 to-cyan-900/30 backdrop-blur-sm border-2 border-lime-400/30 transform hover:rotate-0 transition-transform duration-500"
            style={{ transform: "rotate(1deg)" }}
          >
            <h3 className="text-3xl font-black text-lime-400 mb-8 font-mono transform skew-x-6">
              CORE.COMPETENCIES.ARRAY
            </h3>
            <div className="flex flex-wrap gap-4">
              {coreCompetencies.map((competency, i) => (
                <motion.span
                  key={i}
                  className="px-6 py-3 bg-gradient-to-r from-lime-400 to-cyan-400 text-black font-black font-mono transform hover:rotate-0 transition-all duration-300"
                  style={{ transform: `rotate(${Math.random() * 6 - 3}deg)` }}
                  whileHover={{
                    scale: 1.1,
                    rotate: 0,
                    boxShadow: "0 10px 20px rgba(163, 230, 53, 0.3)",
                  }}
                >
                  {competency}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-32 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, rotateX: -90 }}
            whileInView={{ opacity: 1, rotateX: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1 }}
            className="text-center mb-20"
          >
            <h2 className="text-7xl md:text-8xl font-black bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-8 transform -skew-x-12">
              PROJECTS.ARCHIVE
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0, rotateZ: 180 }}
                whileInView={{ opacity: 1, scale: 1, rotateZ: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1, delay: index * 0.2 }}
                className="p-8 bg-gradient-to-br from-black/50 to-gray-900/50 backdrop-blur-sm border border-purple-400/30 transform hover:rotate-0 transition-all duration-500 group"
                style={{ transform: `rotate(${Math.random() * 8 - 4}deg)` }}
                whileHover={{
                  scale: 1.05,
                  rotate: 0,
                  boxShadow: "0 20px 40px rgba(168, 85, 247, 0.2)",
                }}
              >
                <h3 className="text-2xl font-black text-lime-300 mb-4 font-mono group-hover:text-cyan-300 transition-colors transform skew-x-3">
                  {project.title.toUpperCase()}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                <Link
                  href={project.link}
                  className="inline-flex items-center gap-2 text-purple-400 hover:text-lime-400 font-black font-mono transition-colors"
                >
                  LAUNCH.PROJECT <ExternalLink className="h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-7xl md:text-8xl font-black bg-gradient-to-r from-lime-400 to-purple-400 bg-clip-text text-transparent mb-8 transform skew-x-12">
              CONTACT.INIT
            </h2>
            <p className="text-2xl font-bold mb-16 text-cyan-300 font-mono">READY.TO.CREATE.SOMETHING.EXTRAORDINARY?</p>

            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-16">
              <Link href={`mailto:${contact.email}`}>
                <motion.div
                  whileHover={{
                    scale: 1.1,
                    rotateZ: 5,
                    boxShadow: "0 0 40px rgba(163, 230, 53, 0.5)",
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Button className="px-12 py-4 bg-gradient-to-r from-lime-500 to-cyan-500 hover:from-lime-600 hover:to-cyan-600 text-black font-black text-xl font-mono transform skew-x-12 hover:skew-x-0 transition-all duration-300 flex items-center gap-4">
                    <Mail className="h-6 w-6" />
                    EMAIL.SEND
                  </Button>
                </motion.div>
              </Link>
              <Link href={contact.linkedin} target="_blank" rel="noopener noreferrer">
                <motion.div
                  whileHover={{
                    scale: 1.1,
                    rotateZ: -5,
                    boxShadow: "0 0 40px rgba(168, 85, 247, 0.5)",
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Button
                    variant="outline"
                    className="px-12 py-4 border-2 border-purple-400 text-purple-300 hover:bg-purple-900/30 font-black text-xl font-mono transform -skew-x-12 hover:skew-x-0 transition-all duration-300 flex items-center gap-4 bg-transparent"
                  >
                    <Linkedin className="h-6 w-6" />
                    LINKEDIN.CONNECT
                  </Button>
                </motion.div>
              </Link>
            </div>

            <motion.p
              className="text-sm text-gray-600 font-mono"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              &copy; {new Date().getFullYear()} {name.toUpperCase()}.ALL.RIGHTS.RESERVED
            </motion.p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
