"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Download, ExternalLink, MapPin, Calendar, Users, Award, Code, Palette, Zap } from "lucide-react"
import { portfolioData } from "@/lib/data"
import Header from "@/components/header"
import AnimatedBackground from "@/components/animated-background"
import HeroSection from "@/components/hero-section"
import SectionTitle from "@/components/section-title"

export default function AboutPage() {
  const { name, title, professionalSummary, experience, education, skills, coreCompetencies, contact } = portfolioData

  return (
    <>
      <Header />
      <div className="min-h-screen bg-white">
        <AnimatedBackground />

        <HeroSection
          title="About Me"
          description={professionalSummary}
        />

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
            >
              {[
                { icon: Calendar, value: "10+", label: "Years Experience", color: "from-blue-500 to-cyan-500" },
                { icon: Users, value: "15+", label: "People Led", color: "from-purple-500 to-pink-500" },
                { icon: Award, value: "50+", label: "Projects Delivered", color: "from-green-500 to-emerald-500" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="text-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg`}
                  >
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className={`text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                    {stat.value}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20"
            >
              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg transition-all duration-300">
                  <Download className="mr-2 h-5 w-5" />
                  Download CV
                </Button>
              </motion.div>
              <Link href={contact.linkedin} target="_blank" rel="noopener noreferrer">
                <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="outline"
                    className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 bg-white/80 backdrop-blur-sm hover:border-blue-400 hover:text-blue-600"
                  >
                    LinkedIn Profile
                    <ExternalLink className="ml-2 h-5 w-5" />
                  </Button>
                </motion.div>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Professional Journey */}
        <section className="py-20 px-8 bg-gradient-to-br from-gray-50/80 to-blue-50/60 relative">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl font-bold tracking-tight mb-6">
                <span className="bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Professional Journey
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                A decade of leading design and development across diverse industries
              </p>
            </motion.div>

            <div className="space-y-12">
              {experience.map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-purple-50/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-10 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500">
                    <div className="grid lg:grid-cols-4 gap-8 items-start">
                      <div className="lg:col-span-1">
                        <motion.h3
                          className="text-2xl font-bold mb-3 text-gray-900"
                          whileHover={{ scale: 1.02, color: "#2563eb" }}
                          transition={{ duration: 0.3 }}
                        >
                          {job.title}
                        </motion.h3>
                        <p className="text-xl text-blue-600 font-semibold mb-3">{job.company}</p>
                        <p className="text-sm text-gray-500 mb-2 font-medium">{job.duration}</p>
                        {job.location && (
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <MapPin className="h-4 w-4" />
                            {job.location}
                          </div>
                        )}
                      </div>
                      <div className="lg:col-span-3">
                        <ul className="space-y-4">
                          {job.description.map((desc, i) => (
                            <motion.li
                              key={i}
                              className="text-gray-700 leading-relaxed flex items-start text-lg"
                              initial={{ opacity: 0.8 }}
                              whileInView={{ opacity: 1 }}
                              transition={{ duration: 0.3 }}
                            >
                              <motion.span
                                className="w-3 h-3 rounded-full mt-2 mr-4 flex-shrink-0 bg-gradient-to-r from-blue-500 to-purple-500"
                                whileHover={{ scale: 1.3 }}
                                transition={{ duration: 0.2 }}
                              />
                              {desc}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="py-20 px-8 bg-white relative">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl font-bold tracking-tight mb-6">
                <span className="bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Education
                </span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100 hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{edu.degree}</h3>
                  <p className="text-lg text-blue-600 font-semibold mb-2">{edu.institution}</p>
                  <p className="text-gray-600">{edu.year}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills & Expertise */}
        <section className="py-20 px-8 bg-gradient-to-br from-gray-50/80 to-blue-50/60 relative">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl font-bold tracking-tight mb-6">
                <span className="bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Skills & Expertise
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                A comprehensive toolkit built over years of hands-on experience
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {Object.entries(skills).map(([category, skillList], index) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl mr-4 flex items-center justify-center">
                      {category === "Frontend Development" && <Code className="h-6 w-6 text-white" />}
                      {category === "Design & UX" && <Palette className="h-6 w-6 text-white" />}
                      {category === "Backend & Tools" && <Zap className="h-6 w-6 text-white" />}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {skillList.map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        className="px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 rounded-full font-medium text-sm border border-blue-100 hover:from-blue-100 hover:to-purple-100 transition-all duration-300"
                        whileHover={{ scale: 1.05, y: -2 }}
                        transition={{ duration: 0.2 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Competencies */}
        <section className="py-20 px-8 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20" />

          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-64 h-64 bg-white/10 rounded-full blur-3xl"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  x: [0, Math.random() * 200 - 100, 0],
                  y: [0, Math.random() * 200 - 100, 0],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 20 + Math.random() * 10,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl font-bold tracking-tight mb-6 text-white">Core Competencies</h2>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                The foundation of my approach to design and development
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coreCompetencies.map((competency, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <h3 className="text-xl font-bold text-white mb-4">{competency}</h3>
                  <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-white to-blue-200 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: index * 0.1 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-8 bg-white relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="text-5xl font-bold tracking-tight mb-8">
                <span className="bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Let's Work Together
                </span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-12 max-w-2xl mx-auto">
                Ready to bring your vision to life? I'd love to discuss your project and explore how we can create
                something amazing together.
              </p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-6"
              >
                <Link href="/contact">
                  <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                    <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 rounded-full font-semibold text-lg shadow-lg transition-all duration-300">
                      Get in Touch
                      <ExternalLink className="ml-2 h-5 w-5" />
                    </Button>
                  </motion.div>
                </Link>
                <Link href="/portfolio">
                  <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      variant="outline"
                      className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 bg-white/80 backdrop-blur-sm hover:border-blue-400 hover:text-blue-600"
                    >
                      View My Work
                    </Button>
                  </motion.div>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}
