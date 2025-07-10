"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, Mail, Phone, MapPin, Github, ExternalLink, Award, TrendingUp, Users } from "lucide-react"
import { portfolioData } from "@/lib/data"
import { useRef } from "react"

export default function ExecutivePresentation() {
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

  const headerY = useTransform(scrollYProgress, [0, 1], [0, -50])

  return (
    <div ref={containerRef} className="min-h-screen bg-white">
      {/* Executive Header */}
      <motion.header
        style={{ y: headerY }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-gray-100"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="max-w-8xl mx-auto px-12 py-8">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-6"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">
                  {name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{name}</h1>
                <p className="text-sm text-gray-600 font-medium">{title.split(",")[0]}</p>
              </div>
            </motion.div>

            <motion.nav
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-12"
            >
              <Link
                href="#overview"
                className="text-sm font-semibold text-gray-900 hover:text-blue-600 transition-colors"
              >
                Overview
              </Link>
              <Link
                href="#experience"
                className="text-sm font-semibold text-gray-600 hover:text-blue-600 transition-colors"
              >
                Experience
              </Link>
              <Link
                href="#capabilities"
                className="text-sm font-semibold text-gray-600 hover:text-blue-600 transition-colors"
              >
                Capabilities
              </Link>
              <Link href="#contact">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300">
                  Contact
                </Button>
              </Link>
            </motion.nav>
          </div>
        </div>
      </motion.header>

      {/* Executive Summary */}
      <section id="overview" className="pt-32 pb-20 px-12 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-8xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            >
              <div className="mb-8">
                <h1 className="text-6xl md:text-7xl font-bold tracking-tight text-gray-900 leading-[0.9] mb-6">
                  Senior Design
                  <br />
                  <span className="text-blue-600">Leadership</span>
                </h1>
                <p className="text-2xl text-gray-600 font-light leading-relaxed">
                  Driving digital transformation through strategic design and development excellence
                </p>
              </div>

              <div className="grid grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">10+</div>
                  <div className="text-sm text-gray-600 font-semibold uppercase tracking-wide">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-600 mb-2">50+</div>
                  <div className="text-sm text-gray-600 font-semibold uppercase tracking-wide">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">35%</div>
                  <div className="text-sm text-gray-600 font-semibold uppercase tracking-wide">Avg ROI Increase</div>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <Link href="#experience">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                    View Portfolio
                    <ArrowUpRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href={`mailto:${contact.email}`}>
                  <Button
                    variant="outline"
                    className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 bg-transparent"
                  >
                    Schedule Meeting
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
              className="bg-white rounded-2xl p-10 shadow-xl border border-gray-100"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Executive Summary</h3>
              <p className="text-gray-700 leading-relaxed mb-8">{professionalSummary}</p>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Award className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Strategic Leadership</div>
                    <div className="text-sm text-gray-600">Cross-functional team management</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <TrendingUp className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Business Growth</div>
                    <div className="text-sm text-gray-600">Conversion optimization & ROI</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <Users className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Client Relations</div>
                    <div className="text-sm text-gray-600">Stakeholder management</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="py-20 px-12 bg-white">
        <div className="max-w-8xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">Featured Case Study</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive design system implementation resulting in measurable business impact
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-12 border border-blue-100"
          >
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="aspect-[4/3] bg-white rounded-2xl shadow-lg overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5"></div>
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-xl">
                        <div className="w-12 h-12 bg-white rounded-xl opacity-90"></div>
                      </div>
                      <p className="text-blue-600 font-bold text-lg">Inclusive Design System</p>
                      <p className="text-gray-600 text-sm mt-2">React • TypeScript • Accessibility</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">{caseStudy.title}</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">{caseStudy.overview}</p>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                    <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
                    <div className="text-sm text-gray-600 font-semibold">WCAG 2.1 AA Compliance</div>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                    <div className="text-3xl font-bold text-blue-600 mb-2">40%</div>
                    <div className="text-sm text-gray-600 font-semibold">Development Time Reduction</div>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                    <div className="text-3xl font-bold text-purple-600 mb-2">15+</div>
                    <div className="text-sm text-gray-600 font-semibold">Reusable Components</div>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                    <div className="text-3xl font-bold text-orange-600 mb-2">5</div>
                    <div className="text-sm text-gray-600 font-semibold">Team Members Trained</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Link href={caseStudy.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300">
                      <Github className="mr-2 h-4 w-4" />
                      View Repository
                    </Button>
                  </Link>
                  <Link href="#case-study">
                    <Button
                      variant="outline"
                      className="border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-3 rounded-lg font-semibold transition-all duration-300 bg-transparent"
                    >
                      Full Case Study
                      <ArrowUpRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Professional Experience */}
      <section id="experience" className="py-20 px-12 bg-gray-50">
        <div className="max-w-8xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">
              Professional Experience
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A track record of delivering exceptional results across diverse industries and company scales
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
                className="bg-white rounded-2xl p-10 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
              >
                <div className="grid lg:grid-cols-4 gap-8 items-start">
                  <div className="lg:col-span-1">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-sm">{index + 1}</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{job.title}</h3>
                        <p className="text-lg font-semibold text-blue-600 mb-2">{job.company}</p>
                        <p className="text-sm text-gray-600 font-medium mb-1">{job.duration}</p>
                        {job.location && <p className="text-sm text-gray-500">{job.location}</p>}
                      </div>
                    </div>
                  </div>
                  <div className="lg:col-span-3">
                    <div className="grid md:grid-cols-2 gap-6">
                      {job.description.map((desc, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-gray-700 leading-relaxed">{desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section id="capabilities" className="py-20 px-12 bg-white">
        <div className="max-w-8xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">Core Capabilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive skill set spanning strategic leadership, technical execution, and business development
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {Object.entries(skills).map(([category, skillList], index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-8 hover:bg-gray-100 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-6 capitalize">
                  {category.replace(/([A-Z])/g, " $1").trim()}
                </h3>
                <div className="space-y-3">
                  {skillList.map((skill, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-gray-700 font-medium">{skill}</span>
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
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-10 text-white text-center"
          >
            <h3 className="text-2xl font-bold mb-8">Strategic Competencies</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {coreCompetencies.map((competency, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="font-semibold text-sm">{competency}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-12 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Ready to Collaborate?</h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Let's discuss how strategic design leadership can drive your business objectives and create measurable
                impact.
              </p>

              <div className="space-y-6 mb-10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">{contact.email}</div>
                    <div className="text-sm text-gray-400">Primary Contact</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">{contact.phone}</div>
                    <div className="text-sm text-gray-400">Direct Line</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Glasgow, UK</div>
                    <div className="text-sm text-gray-400">Available for Remote & On-site</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-10 text-gray-900">
              <h3 className="text-2xl font-bold mb-6">Schedule a Consultation</h3>
              <p className="text-gray-600 mb-8">
                Book a strategic consultation to discuss your project requirements and explore collaboration
                opportunities.
              </p>

              <div className="space-y-4">
                <Link href={`mailto:${contact.email}`}>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                    <Mail className="mr-2 h-5 w-5" />
                    Send Email
                  </Button>
                </Link>
                <Link href={contact.linkedin} target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    className="w-full border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 bg-transparent"
                  >
                    LinkedIn Profile
                    <ExternalLink className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
