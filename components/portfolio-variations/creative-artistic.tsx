"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Mail, Linkedin, Phone, ExternalLink, Sparkles, Zap, Star, Heart } from "lucide-react"
import { portfolioData } from "@/lib/data"
import { useRef } from "react"

export default function CreativeArtistic() {
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

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-indigo-100 overflow-hidden"
    >
      {/* Floating Decorative Elements */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 180, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          >
            {i % 4 === 0 && <Sparkles className="h-6 w-6 text-pink-400 opacity-60" />}
            {i % 4 === 1 && <Star className="h-4 w-4 text-purple-400 opacity-60" />}
            {i % 4 === 2 && <Zap className="h-5 w-5 text-indigo-400 opacity-60" />}
            {i % 4 === 3 && <Heart className="h-4 w-4 text-rose-400 opacity-60" />}
          </motion.div>
        ))}
      </div>

      {/* Hero Section - Artistic Layout */}
      <section className="min-h-screen flex items-center justify-center relative px-4">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div style={{ rotate, scale }} className="mb-12">
            <div className="relative inline-block">
              <motion.h1
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, type: "spring", stiffness: 100 }}
                className="text-8xl md:text-9xl font-black leading-none"
              >
                {name.split("").map((char, index) => (
                  <motion.span
                    key={index}
                    className="inline-block"
                    style={{
                      color: `hsl(${(index * 30) % 360}, 70%, 60%)`,
                    }}
                    animate={{
                      y: [0, -20, 0],
                      rotate: [0, 10, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: index * 0.1,
                    }}
                    whileHover={{
                      scale: 1.3,
                      rotate: Math.random() * 20 - 10,
                      transition: { duration: 0.2 },
                    }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </motion.h1>
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-pink-400/20 via-purple-400/20 to-indigo-400/20 blur-xl -z-10"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                }}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative mb-12"
          >
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-white/50 transform rotate-2 hover:rotate-0 transition-transform duration-300">
              <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                {title}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Link href="#about">
              <motion.div whileHover={{ scale: 1.1, rotate: 5 }} whileTap={{ scale: 0.95 }}>
                <Button className="px-10 py-4 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white rounded-full text-lg font-bold shadow-lg">
                  <Sparkles className="mr-2 h-5 w-5" />
                  Explore My World
                </Button>
              </motion.div>
            </Link>
            <Link href={`mailto:${contact.email}`}>
              <motion.div whileHover={{ scale: 1.1, rotate: -5 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  className="px-10 py-4 border-2 border-purple-400 text-purple-600 hover:bg-purple-50 rounded-full text-lg font-bold shadow-lg bg-white/80 backdrop-blur-sm"
                >
                  <Heart className="mr-2 h-5 w-5" />
                  Let's Connect
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Section - Scattered Cards Layout */}
      <section id="about" className="py-32 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1 }}
            className="text-6xl md:text-7xl font-black text-center mb-20 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent"
          >
            About Me
          </motion.h2>

          <div className="relative">
            {/* Main About Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1 }}
              className="bg-white/90 backdrop-blur-sm p-12 rounded-3xl shadow-2xl border border-white/50 mb-16 transform hover:rotate-1 transition-transform duration-300"
            >
              <p className="text-xl leading-relaxed text-gray-700">{professionalSummary}</p>
            </motion.div>

            {/* Scattered Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Phone,
                  label: "Phone",
                  value: contact.phone,
                  color: "from-pink-400 to-rose-400",
                  rotation: "rotate-3",
                },
                {
                  icon: Mail,
                  label: "Email",
                  value: contact.email,
                  color: "from-purple-400 to-indigo-400",
                  rotation: "-rotate-2",
                },
                {
                  icon: Linkedin,
                  label: "Location",
                  value: "Glasgow, UK",
                  color: "from-indigo-400 to-blue-400",
                  rotation: "rotate-1",
                },
                {
                  icon: Star,
                  label: "Status",
                  value: "Available",
                  color: "from-green-400 to-emerald-400",
                  rotation: "-rotate-3",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50, rotate: Math.random() * 20 - 10 }}
                  whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/50 transform ${item.rotation} hover:rotate-0 transition-all duration-300 hover:scale-105`}
                >
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center mb-4 mx-auto`}
                  >
                    <item.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-center mb-2">{item.label}</h3>
                  <p className="text-gray-700 text-center text-sm">{item.value}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section - Timeline with Artistic Elements */}
      <section className="py-32 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1 }}
            className="text-6xl md:text-7xl font-black text-center mb-20 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent"
          >
            My Journey
          </motion.h2>

          <div className="relative">
            {/* Artistic Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-pink-400 via-purple-400 to-indigo-400 rounded-full" />

            <div className="space-y-20">
              {experience.map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                  className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                >
                  <div className="flex-1 px-8">
                    <div
                      className={`bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-white/50 transform ${index % 2 === 0 ? "rotate-1" : "-rotate-1"} hover:rotate-0 transition-transform duration-300`}
                    >
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{job.title}</h3>
                      <p className="text-xl text-purple-600 font-semibold mb-2">{job.company}</p>
                      <p className="text-gray-600 mb-4">{job.duration}</p>
                      {job.location && <p className="text-gray-500 mb-4">{job.location}</p>}
                      <ul className="space-y-2">
                        {job.description.slice(0, 2).map((desc, i) => (
                          <li key={i} className="text-gray-700 leading-relaxed">
                            • {desc}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="relative z-10">
                    <div className="w-8 h-8 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full border-4 border-white shadow-lg" />
                  </div>

                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section - Floating Bubbles */}
      <section className="py-32 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1 }}
            className="text-6xl md:text-7xl font-black text-center mb-20 bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent"
          >
            Skills & Magic
          </motion.h2>

          <div className="relative">
            {/* Floating Skill Bubbles */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {Object.entries(skills).map(([category, skillList], categoryIndex) =>
                skillList.map((skill, skillIndex) => (
                  <motion.div
                    key={`${category}-${skillIndex}`}
                    initial={{ opacity: 0, scale: 0, y: 100 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                      duration: 0.8,
                      delay: (categoryIndex * skillList.length + skillIndex) * 0.05,
                      type: "spring",
                      stiffness: 100,
                    }}
                    whileHover={{
                      scale: 1.2,
                      rotate: Math.random() * 20 - 10,
                      y: -10,
                    }}
                    className="relative"
                  >
                    <div
                      className="bg-white/90 backdrop-blur-sm p-6 rounded-full shadow-xl border border-white/50 text-center transform hover:rotate-0 transition-all duration-300"
                      style={{
                        transform: `rotate(${Math.random() * 10 - 5}deg)`,
                        background: `linear-gradient(135deg, hsl(${(categoryIndex * 60 + skillIndex * 20) % 360}, 70%, 85%), hsl(${(categoryIndex * 60 + skillIndex * 20 + 60) % 360}, 70%, 90%))`,
                      }}
                    >
                      <p className="font-bold text-gray-800 text-sm">{skill}</p>
                    </div>
                  </motion.div>
                )),
              )}
            </div>

            {/* Core Competencies - Special Section */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mt-20"
            >
              <h3 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Core Superpowers
              </h3>
              <div className="flex flex-wrap justify-center gap-6">
                {coreCompetencies.map((competency, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{
                      scale: 1.1,
                      rotate: 5,
                      boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                    }}
                    className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-bold shadow-lg transform hover:rotate-0 transition-all duration-300"
                    style={{ transform: `rotate(${Math.random() * 6 - 3}deg)` }}
                  >
                    {competency}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section - Creative Gallery */}
      <section className="py-32 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, rotate: -10 }}
            whileInView={{ opacity: 1, rotate: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1 }}
            className="text-6xl md:text-7xl font-black text-center mb-20 bg-gradient-to-r from-pink-600 to-indigo-600 bg-clip-text text-transparent"
          >
            Creative Works
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {additionalProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 100, rotate: Math.random() * 20 - 10 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1, delay: index * 0.2 }}
                whileHover={{
                  scale: 1.05,
                  rotate: Math.random() * 10 - 5,
                  y: -10,
                }}
                className="relative group"
              >
                <div className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border border-white/50 transform hover:rotate-0 transition-all duration-500">
                  <div className="aspect-video bg-gradient-to-br from-pink-200 to-purple-200 rounded-2xl mb-6 flex items-center justify-center">
                    <Sparkles className="h-12 w-12 text-purple-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{project.title}</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">{project.description}</p>
                  <Link
                    href={project.link}
                    className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-bold group-hover:scale-110 transition-transform"
                  >
                    Explore Project <ExternalLink className="h-4 w-4" />
                  </Link>
                </div>
                <motion.div
                  className="absolute -inset-2 bg-gradient-to-r from-pink-400/20 to-purple-400/20 rounded-3xl blur-xl -z-10"
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: index * 0.5,
                  }}
                />
              </motion.div>
            ))}
          </div>

          {/* Case Study Placeholder - Artistic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-20"
          >
            <div className="bg-white/90 backdrop-blur-sm p-12 rounded-3xl shadow-2xl border border-white/50 transform rotate-1 hover:rotate-0 transition-transform duration-500">
              <h3 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Featured Case Study
              </h3>
              <p className="text-xl text-gray-700 text-center mb-8 leading-relaxed">
                This magical space awaits your most spectacular project story. Share your GitHub repository or project
                details, and I'll transform it into an enchanting case study showcase.
              </p>
              <div className="aspect-video bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center mb-8">
                <div className="text-center">
                  <Star className="h-16 w-16 text-purple-400 mx-auto mb-4" />
                  <span className="text-purple-600 font-bold text-lg">Your Amazing Project Goes Here</span>
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { title: "Challenge", desc: "The creative problem you solved", color: "from-pink-400 to-rose-400" },
                  { title: "Solution", desc: "Your innovative approach", color: "from-purple-400 to-indigo-400" },
                  { title: "Impact", desc: "The magical results achieved", color: "from-indigo-400 to-blue-400" },
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                    >
                      <Zap className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education Section - Artistic Diplomas */}
      <section className="py-32 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1 }}
            className="text-6xl md:text-7xl font-black text-center mb-20 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
          >
            Learning Journey
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, rotate: index % 2 === 0 ? -10 : 10, scale: 0.8 }}
                whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1, delay: index * 0.3 }}
                whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 2 : -2 }}
                className="relative"
              >
                <div className="bg-white/90 backdrop-blur-sm p-10 rounded-3xl shadow-2xl border border-white/50 transform hover:rotate-0 transition-all duration-500">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Star className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{edu.degree}</h3>
                    <p className="text-xl text-purple-600 font-semibold mb-2">{edu.institution}</p>
                    <p className="text-gray-600">{edu.duration}</p>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-center">{edu.description}</p>
                </div>
                <motion.div
                  className="absolute -inset-3 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-3xl blur-xl -z-10"
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: index * 1,
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - Magical CTA */}
      <section className="py-32 px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <motion.div
              className="absolute -inset-8 bg-gradient-to-r from-pink-400/30 via-purple-400/30 to-indigo-400/30 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
              }}
            />

            <div className="relative bg-white/90 backdrop-blur-sm p-16 rounded-3xl shadow-2xl border border-white/50">
              <h2 className="text-5xl md:text-6xl font-black mb-8 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Let's Create Magic Together
              </h2>
              <p className="text-2xl text-gray-700 mb-12 leading-relaxed">
                Ready to turn your wildest ideas into stunning reality? Let's collaborate and make something
                extraordinary!
              </p>

              <div className="flex flex-col sm:flex-row gap-8 justify-center mb-12">
                <Link href={`mailto:${contact.email}`}>
                  <motion.div whileHover={{ scale: 1.1, rotate: 5 }} whileTap={{ scale: 0.95 }}>
                    <Button className="px-12 py-4 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white rounded-full text-xl font-bold shadow-xl">
                      <Mail className="mr-3 h-6 w-6" />
                      Send Magic Message
                    </Button>
                  </motion.div>
                </Link>
                <Link href={contact.linkedin} target="_blank" rel="noopener noreferrer">
                  <motion.div whileHover={{ scale: 1.1, rotate: -5 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      variant="outline"
                      className="px-12 py-4 border-2 border-purple-400 text-purple-600 hover:bg-purple-50 rounded-full text-xl font-bold shadow-xl bg-white/80 backdrop-blur-sm"
                    >
                      <Linkedin className="mr-3 h-6 w-6" />
                      Connect on LinkedIn
                    </Button>
                  </motion.div>
                </Link>
              </div>

              <motion.p
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                className="text-gray-500 font-medium"
              >
                ✨ &copy; {new Date().getFullYear()} {name}. Crafted with love and creativity. ✨
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
