"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Github,
  Mail,
  MapPin,
  Calendar,
  Users,
  Code,
  Palette,
  Award,
  ChevronDown,
  Menu,
  X,
} from "lucide-react"
import { portfolioData } from "@/lib/data"
import { getImagePath } from "@/lib/utils"
import { useState, useRef } from "react"
import { Wrench, Accessibility } from "lucide-react"
import Header from "@/components/header"

export default function ModernInteractive() {
  const { name, title, professionalSummary, skills, contact, caseStudy } = portfolioData
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const inclusiveDesignProject = caseStudy

  return (
    <div ref={containerRef} className="min-h-screen bg-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-400/10 via-purple-400/8 to-pink-400/6 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-cyan-400/10 via-blue-400/8 to-purple-400/6 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Navigation */}
      <Header />

      {/* Hero Section */}
      <div className="relative">
        {/* Animated Gradient Background + Starfield */}
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Starfield/Particles */}
          <svg className="absolute inset-0 w-full h-full" style={{ pointerEvents: 'none' }}>
            {Array.from({ length: 32 }).map((_, i) => (
              <circle
                key={i}
                cx={Math.random() * 100 + '%'}
                cy={Math.random() * 100 + '%'}
                r={Math.random() * 1.5 + 0.5}
                fill="#fff"
                opacity={Math.random() * 0.3 + 0.1}
              >
                <animate
                  attributeName="cy"
                  values={`0;100;0`}
                  dur={`${8 + Math.random() * 8}s`}
                  repeatCount="indefinite"
                  begin={`${Math.random() * 8}s`}
                />
              </circle>
            ))}
          </svg>
          {/* Animated Blobs */}
          <motion.div
            className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-gradient-to-br from-blue-400/40 via-purple-400/30 to-pink-400/40 rounded-full blur-3xl"
            animate={{
              x: [0, 60, 0],
              y: [0, 40, 0],
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-gradient-to-tr from-cyan-400/30 via-blue-400/20 to-purple-400/30 rounded-full blur-3xl"
            animate={{
              x: [0, -50, 0],
              y: [0, -30, 0],
              scale: [1, 0.9, 1],
            }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-gradient-to-br from-fuchsia-400/30 via-blue-300/20 to-purple-400/30 rounded-full blur-2xl"
            style={{ translateX: '-50%', translateY: '-50%' }}
            animate={{
              x: [0, 40, -40, 0],
              y: [0, -40, 40, 0],
              scale: [1, 1.1, 0.95, 1],
            }}
            transition={{
              duration: 28,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-1/4 right-1/3 w-[300px] h-[300px] bg-gradient-to-br from-yellow-300/30 via-pink-300/20 to-purple-300/30 rounded-full blur-2xl"
            animate={{
              x: [0, 30, -30, 0],
              y: [0, 30, -30, 0],
              scale: [1, 1.08, 0.92, 1],
            }}
            transition={{
              duration: 24,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
        <motion.section
          style={{ y: heroY, opacity: heroOpacity }}
          className="min-h-screen flex items-center justify-center px-8 relative z-10"
        >
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              className="inline-block mb-8"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Badge className="bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 border-blue-200 px-6 py-2 text-lg font-semibold">
                Frontend Developer & UX Designer
              </Badge>
            </motion.div>

            <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-8">
              <span className="bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                {name}
              </span>
            </h1>

            <p className="text-2xl md:text-3xl text-gray-600 mb-12 leading-relaxed max-w-4xl mx-auto">{title}</p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
            >
              <Link href="/portfolio">
                <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 rounded-full font-semibold text-lg shadow-lg">
                    View My Work
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </motion.div>
              </Link>
              <Link href="/contact">
                <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="outline"
                    className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 bg-white/80 backdrop-blur-sm hover:border-blue-400 hover:text-blue-600"
                  >
                    Get in Touch
                    <Mail className="ml-2 h-5 w-5" />
                  </Button>
                </motion.div>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="flex items-center justify-center"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                className="text-gray-400 cursor-pointer"
              >
                <ChevronDown className="h-8 w-8" />
              </motion.div>
            </motion.div>
          </div>
        </motion.section>
      </div>

      {/* Why Work With Me */}
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
                Why Work With Me
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              I bring a unique combination of design thinking, technical expertise, and leadership experience to create
              exceptional digital experiences.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white/90 backdrop-blur-sm rounded-3xl p-10 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500 group"
              whileHover={{ scale: 1.02, y: -8 }}
            >
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl mb-8 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                <Users className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Leadership Experience</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Led teams of 15+ developers and designers, bringing strategic vision and collaborative leadership to
                complex projects.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-white/90 backdrop-blur-sm rounded-3xl p-10 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500 group"
              whileHover={{ scale: 1.02, y: -8 }}
            >
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl mb-8 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                <Award className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Proven Results</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Delivered 50+ successful projects across diverse industries, consistently exceeding client expectations
                and business goals.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white/90 backdrop-blur-sm rounded-3xl p-10 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500 group"
              whileHover={{ scale: 1.02, y: -8 }}
            >
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl mb-8 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                <Code className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Frontend Excellence</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Specialized in modern frontend development with React, TypeScript, and cutting-edge accessibility
                practices that create inclusive user experiences.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Technologies */}
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
                Core Technologies
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              My expertise spans modern frontend development, design systems, and accessibility-first approaches. Here's
              the technology stack that powers exceptional user experiences.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-16">
            {[
              {
                category: "Frontend Frameworks",
                icon: <Code className="h-8 w-8 text-white" />,
                technologies: ["React", "Next.js", "TypeScript", "JavaScript ES6+", "React 18", "Vite"],
                color: "from-blue-500 to-cyan-500",
                description: "Building scalable, performant user interfaces",
              },
              {
                category: "Styling & Design",
                icon: <Palette className="h-8 w-8 text-white" />,
                technologies: ["Tailwind CSS", "CSS3", "Sass/SCSS", "Styled Components", "CSS Custom Properties", "Responsive Design"],
                color: "from-purple-500 to-pink-500",
                description: "Crafting beautiful, responsive designs",
              },
              {
                category: "Development Tools",
                icon: <Wrench className="h-8 w-8 text-white" />,
                technologies: ["Storybook", "Vite", "Webpack", "Git", "Component Documentation", "Accessibility Testing"],
                color: "from-green-500 to-emerald-500",
                description: "Streamlined development workflows",
              },
              {
                category: "Design & Accessibility",
                icon: <Accessibility className="h-8 w-8 text-white" />,
                technologies: ["Figma", "WCAG 2.1", "ARIA", "Screen Readers"],
                color: "from-orange-500 to-red-500",
                description: "Inclusive design for everyone",
              },
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-300 group"
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="text-center mb-6">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${tech.color} rounded-2xl mx-auto mb-4 flex items-center justify-center text-2xl shadow-lg group-hover:shadow-xl transition-all duration-300`}
                  >
                    {tech.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{tech.category}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{tech.description}</p>
                </div>
                <div className="space-y-3">
                  {tech.technologies.map((item, i) => (
                    <motion.div
                      key={i}
                      className="px-4 py-2 bg-gradient-to-r from-gray-50 to-blue-50 rounded-full text-center font-medium text-gray-700 border border-gray-100 hover:from-blue-50 hover:to-purple-50 hover:border-blue-200 transition-all duration-300"
                      whileHover={{ scale: 1.05, y: -2 }}
                      transition={{ duration: 0.2 }}
                    >
                      {item}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Featured Case Study */}
          {inclusiveDesignProject && (
            <section className="py-20 px-8 bg-white relative">
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
                      Featured Case Study
                    </span>
                  </h2>
                  <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    Deep dive into my comprehensive design system project
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8 }}
                  className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-12 border border-blue-100 hover:shadow-2xl transition-all duration-500"
                  whileHover={{ scale: 1.01, y: -5 }}
                >
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                          <Palette className="h-6 w-6 text-white" />
                        </div>
                        <Badge className="bg-blue-100 text-blue-700 border-blue-200 px-4 py-1 font-semibold">
                          Design System
                        </Badge>
                      </div>

                      <h3 className="text-4xl font-bold text-gray-900 mb-6">{inclusiveDesignProject.title}</h3>
                      <p className="text-lg text-gray-600 leading-relaxed mb-8">{inclusiveDesignProject.overview}</p>

                      <div className="flex flex-wrap gap-3 mb-8">
                        {inclusiveDesignProject.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="px-4 py-2 bg-white/80 text-blue-700 rounded-full font-medium text-sm border border-blue-200 hover:bg-white transition-all duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                          href="https://github.com/hawkbass/InclusiveDesignSystem"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold">
                              <Github className="mr-2 h-4 w-4" />
                              View on GitHub
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                          </motion.div>
                        </Link>
                        <Link href="/case-study">
                          <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                            <Button
                              variant="outline"
                              className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 rounded-full font-semibold transition-all duration-300 bg-white/80 backdrop-blur-sm hover:border-blue-400 hover:text-blue-600"
                            >
                              Full Case Study
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                          </motion.div>
                        </Link>
                      </div>
                    </div>

                    <motion.div
                      className="aspect-[4/3] bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 rounded-2xl overflow-hidden relative group cursor-pointer shadow-2xl border border-gray-100 flex items-center justify-center"
                      whileHover={{ scale: 1.02, rotateY: 2 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <img
                        src={getImagePath("/images/inclusive-design-system-homepage.png")}
                        alt="Inclusive Design System Homepage Screenshot"
                        className="object-cover w-full h-full rounded-2xl border border-gray-200 shadow-lg"
                        style={{ maxHeight: '100%', maxWidth: '100%' }}
                      />
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </section>
          )}
        </div>
      </section>

      {/* Contact Section */}
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

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-5xl font-bold tracking-tight mb-8 text-white">Let's Create Something Amazing</h2>
            <p className="text-xl text-blue-100 leading-relaxed mb-12 max-w-2xl mx-auto">
              Ready to bring your vision to life? I'd love to discuss your project and explore how we can work together.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12"
            >
              <Link href="/contact">
                <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                  <Button className="bg-white text-blue-600 hover:bg-blue-50 px-10 py-4 rounded-full font-semibold text-lg shadow-lg transition-all duration-300">
                    Start a Project
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </motion.div>
              </Link>
              <Link href={`mailto:${contact.email}`}>
                <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="outline"
                    className="border-2 border-white/30 text-white hover:bg-white/10 px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 bg-white/5 backdrop-blur-sm"
                  >
                    <Mail className="mr-2 h-5 w-5" />
                    Send Email
                  </Button>
                </motion.div>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex items-center justify-center gap-8 text-blue-100"
            >
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                <span className="font-medium">Glasgow, UK</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span className="font-medium">Available for projects</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
