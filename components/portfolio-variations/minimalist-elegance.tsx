"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Linkedin, ExternalLink, Phone, MapPin } from "lucide-react"
import { portfolioData } from "@/lib/data"

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function MinimalistElegance() {
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

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-stone-100 via-stone-50 to-amber-50/30" />
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center max-w-4xl mx-auto relative z-10"
        >
          <motion.h1
            className="text-6xl md:text-8xl font-light tracking-tight mb-6 text-stone-800"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {name}
          </motion.h1>
          <motion.div
            className="w-24 h-px bg-amber-600 mx-auto mb-8"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          />
          <motion.p
            className="text-xl md:text-2xl text-stone-600 font-light mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {title}
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Link href="#contact">
              <Button className="px-8 py-3 bg-stone-800 hover:bg-stone-700 text-white rounded-none font-light text-lg transition-all duration-300">
                Get in Touch
              </Button>
            </Link>
            <Link href="#work">
              <Button
                variant="outline"
                className="px-8 py-3 border-stone-300 text-stone-700 hover:bg-stone-100 rounded-none font-light text-lg transition-all duration-300 bg-transparent"
              >
                View My Work
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={fadeInUp}>
              <h2 className="text-4xl md:text-5xl font-light mb-8 text-stone-800">About Me</h2>
              <div className="w-16 h-px bg-amber-600 mb-8" />
              <p className="text-lg leading-relaxed text-stone-600 mb-8">{professionalSummary}</p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2 text-stone-600">
                  <Phone className="h-4 w-4" />
                  <span className="text-sm">{contact.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-stone-600">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">Glasgow, UK</span>
                </div>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp} className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="border-stone-200 shadow-sm">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg font-medium text-stone-800">{edu.degree}</CardTitle>
                    <p className="text-stone-600">{edu.institution}</p>
                    <p className="text-sm text-stone-500">{edu.duration}</p>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-sm text-stone-600">{edu.description}</p>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Case Study Placeholder */}
      <section id="case-study" className="py-24 px-4 bg-stone-100">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-light mb-4 text-stone-800">Featured Case Study</h2>
            <div className="w-16 h-px bg-amber-600 mx-auto" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white p-12 shadow-sm"
          >
            <h3 className="text-2xl font-light mb-6 text-stone-800">Project Title Placeholder</h3>
            <p className="text-stone-600 mb-8 leading-relaxed">
              This section will showcase an in-depth case study of one of your significant projects. Please provide your
              GitHub repository or project details, and I'll integrate the comprehensive content including project
              overview, challenges, design process, technical implementation, and results.
            </p>
            <div className="aspect-video bg-stone-200 rounded mb-8 flex items-center justify-center">
              <span className="text-stone-500">Project Screenshot Placeholder</span>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-medium mb-2 text-stone-800">Challenge</h4>
                <p className="text-sm text-stone-600">Project challenge description will go here.</p>
              </div>
              <div>
                <h4 className="font-medium mb-2 text-stone-800">Solution</h4>
                <p className="text-sm text-stone-600">Solution approach and methodology will be detailed here.</p>
              </div>
              <div>
                <h4 className="font-medium mb-2 text-stone-800">Results</h4>
                <p className="text-sm text-stone-600">Quantifiable outcomes and impact metrics will be shown here.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="work" className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-light mb-4 text-stone-800">Professional Experience</h2>
            <div className="w-16 h-px bg-amber-600 mx-auto" />
          </motion.div>
          <div className="space-y-12">
            {experience.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="grid md:grid-cols-[200px_1fr] gap-8 items-start"
              >
                <div className="text-right">
                  <p className="text-sm text-stone-500 font-medium">{job.duration}</p>
                  {job.location && <p className="text-xs text-stone-400 mt-1">{job.location}</p>}
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-1 text-stone-800">{job.title}</h3>
                  <p className="text-stone-600 mb-4">{job.company}</p>
                  <ul className="space-y-2">
                    {job.description.map((desc, i) => (
                      <li key={i} className="text-stone-600 text-sm leading-relaxed flex items-start gap-2">
                        <span className="w-1 h-1 bg-amber-600 rounded-full mt-2 flex-shrink-0" />
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

      {/* Skills Section */}
      <section className="py-24 px-4 bg-stone-100">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-light mb-4 text-stone-800">Skills & Expertise</h2>
            <div className="w-16 h-px bg-amber-600 mx-auto" />
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {Object.entries(skills).map(([category, skillList], index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="h-full border-stone-200 shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-lg font-medium text-stone-800 capitalize">
                      {category.replace(/([A-Z])/g, " $1").trim()}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill, i) => (
                        <span key={i} className="px-3 py-1 bg-stone-200 text-stone-700 text-xs rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="border-stone-200 shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg font-medium text-stone-800">Core Competencies</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {coreCompetencies.map((competency, i) => (
                    <span key={i} className="px-4 py-2 bg-amber-100 text-amber-800 text-sm rounded-full font-medium">
                      {competency}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-light mb-4 text-stone-800">Selected Projects</h2>
            <div className="w-16 h-px bg-amber-600 mx-auto" />
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="h-full border-stone-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg font-medium text-stone-800">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-stone-600 text-sm mb-4">{project.description}</p>
                    <Link
                      href={project.link}
                      className="inline-flex items-center gap-1 text-amber-600 hover:text-amber-700 text-sm font-medium"
                    >
                      View Project <ExternalLink className="h-3 w-3" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 bg-stone-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-light mb-4">Let's Work Together</h2>
            <div className="w-16 h-px bg-amber-600 mx-auto mb-8" />
            <p className="text-xl text-stone-300 mb-12 leading-relaxed">
              Ready to bring your vision to life? Let's discuss how we can create something extraordinary together.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <Link href={`mailto:${contact.email}`}>
                <Button className="px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-none font-light text-lg transition-all duration-300 flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  Email Me
                </Button>
              </Link>
              <Link href={contact.linkedin} target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  className="px-8 py-3 border-stone-400 text-stone-300 hover:bg-stone-700 rounded-none font-light text-lg transition-all duration-300 flex items-center gap-2 bg-transparent"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </Button>
              </Link>
            </div>
            <p className="text-sm text-stone-400">
              &copy; {new Date().getFullYear()} {name}. All rights reserved.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
