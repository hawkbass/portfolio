"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Mail, Linkedin, Phone, ArrowRight, Target, Lightbulb, TrendingUp } from "lucide-react"
import { portfolioData } from "@/lib/data"

export default function BoldContemporary() {
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
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
        {/* Geometric Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-red-500 transform rotate-45 opacity-20" />
          <div className="absolute top-40 right-32 w-24 h-24 bg-yellow-400 rounded-full opacity-30" />
          <div className="absolute bottom-32 left-40 w-40 h-40 bg-blue-500 transform rotate-12 opacity-25" />
          <div className="absolute bottom-20 right-20 w-28 h-28 bg-green-400 transform -rotate-45 opacity-20" />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center max-w-6xl mx-auto relative z-10"
        >
          <motion.h1
            className="text-8xl md:text-9xl font-black uppercase tracking-tighter leading-none mb-8"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="block text-white">{name.split(" ")[0]}</span>
            <span className="block text-red-500 -mt-4">{name.split(" ")[1]}</span>
          </motion.h1>

          <motion.div
            className="w-32 h-2 bg-yellow-400 mx-auto mb-8"
            initial={{ width: 0 }}
            animate={{ width: 128 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          />

          <motion.p
            className="text-2xl md:text-3xl font-bold text-gray-300 mb-12 uppercase tracking-wide"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {title}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <Link href="#contact">
              <Button className="px-12 py-4 bg-red-500 hover:bg-red-600 text-white font-black text-xl uppercase tracking-wide transform hover:scale-105 transition-all duration-300">
                Work With Me
              </Button>
            </Link>
            <Link href="#work">
              <Button
                variant="outline"
                className="px-12 py-4 border-2 border-white text-white hover:bg-white hover:text-black font-black text-xl uppercase tracking-wide transform hover:scale-105 transition-all duration-300 bg-transparent"
              >
                See My Work
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-4 bg-white text-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <div>
              <h2 className="text-6xl md:text-7xl font-black uppercase mb-8">About</h2>
              <div className="w-24 h-2 bg-red-500 mb-8" />
              <p className="text-xl leading-relaxed mb-8 font-medium">{professionalSummary}</p>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 bg-black text-white">
                  <Phone className="h-8 w-8 text-yellow-400 mb-4" />
                  <p className="font-bold">{contact.phone}</p>
                </div>
                <div className="p-6 bg-red-500 text-white">
                  <Mail className="h-8 w-8 mb-4" />
                  <p className="font-bold">Glasgow, UK</p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="p-8 bg-gray-100 border-l-8 border-blue-500"
                >
                  <h3 className="text-2xl font-black mb-2">{edu.degree}</h3>
                  <p className="text-lg font-bold text-gray-700 mb-2">{edu.institution}</p>
                  <p className="text-sm font-medium text-gray-600 mb-4">{edu.duration}</p>
                  <p className="text-gray-800">{edu.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Case Study Placeholder */}
      <section id="case-study" className="py-32 px-4 bg-red-500 text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-6xl md:text-7xl font-black uppercase mb-8">Featured Work</h2>
            <div className="w-32 h-2 bg-yellow-400 mx-auto" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="bg-black p-12 border-8 border-white"
          >
            <h3 className="text-4xl font-black mb-8 text-yellow-400 uppercase">Project Title Placeholder</h3>
            <p className="text-xl mb-12 leading-relaxed">
              This section will showcase an in-depth case study of one of your significant projects. Please provide your
              GitHub repository or project details, and I'll integrate the comprehensive content including project
              overview, challenges, design process, technical implementation, and results.
            </p>

            <div className="aspect-video bg-gray-800 mb-12 flex items-center justify-center border-4 border-yellow-400">
              <span className="text-gray-400 text-2xl font-bold">PROJECT SCREENSHOT</span>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Target,
                  title: "CHALLENGE",
                  desc: "Project challenge description will go here.",
                  color: "bg-red-600",
                },
                {
                  icon: Lightbulb,
                  title: "SOLUTION",
                  desc: "Solution approach and methodology will be detailed here.",
                  color: "bg-yellow-500",
                },
                {
                  icon: TrendingUp,
                  title: "RESULTS",
                  desc: "Quantifiable outcomes and impact metrics will be shown here.",
                  color: "bg-green-500",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`p-8 ${item.color} text-black`}
                >
                  <item.icon className="h-12 w-12 mb-6" />
                  <h4 className="font-black text-xl mb-4 uppercase">{item.title}</h4>
                  <p className="font-medium">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="work" className="py-32 px-4 bg-white text-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-6xl md:text-7xl font-black uppercase mb-8">Experience</h2>
            <div className="w-32 h-2 bg-red-500 mx-auto" />
          </motion.div>

          <div className="space-y-16">
            {experience.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="grid md:grid-cols-[300px_1fr] gap-12 items-start"
              >
                <div className="p-8 bg-black text-white">
                  <p className="text-yellow-400 font-black text-lg mb-2 uppercase">{job.duration}</p>
                  {job.location && <p className="text-gray-300 font-medium">{job.location}</p>}
                </div>

                <div className="p-8 bg-gray-100 border-l-8 border-blue-500">
                  <h3 className="text-3xl font-black mb-2 uppercase">{job.title}</h3>
                  <p className="text-xl font-bold text-red-500 mb-6 uppercase">{job.company}</p>
                  <ul className="space-y-4">
                    {job.description.map((desc, i) => (
                      <li key={i} className="text-gray-800 leading-relaxed flex items-start gap-4 font-medium">
                        <span className="w-3 h-3 bg-red-500 flex-shrink-0 mt-2" />
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
      <section className="py-32 px-4 bg-yellow-400 text-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-6xl md:text-7xl font-black uppercase mb-8">Skills</h2>
            <div className="w-32 h-2 bg-black mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {Object.entries(skills).map(([category, skillList], index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="p-8 bg-black text-white"
              >
                <h3 className="text-2xl font-black mb-6 text-yellow-400 uppercase">
                  {category.replace(/([A-Z])/g, " $1").trim()}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill, i) => (
                    <span key={i} className="px-4 py-2 bg-white text-black text-sm font-bold uppercase">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="p-12 bg-red-500 text-white border-8 border-black"
          >
            <h3 className="text-3xl font-black mb-8 uppercase">Core Competencies</h3>
            <div className="flex flex-wrap gap-4">
              {coreCompetencies.map((competency, i) => (
                <span key={i} className="px-6 py-3 bg-black text-yellow-400 font-black uppercase text-lg">
                  {competency}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-32 px-4 bg-white text-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-6xl md:text-7xl font-black uppercase mb-8">Projects</h2>
            <div className="w-32 h-2 bg-red-500 mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="p-8 bg-gray-100 border-l-8 border-blue-500 hover:bg-gray-200 transition-colors duration-300"
              >
                <h3 className="text-2xl font-black mb-4 uppercase">{project.title}</h3>
                <p className="text-gray-800 mb-6 font-medium leading-relaxed">{project.description}</p>
                <Link
                  href={project.link}
                  className="inline-flex items-center gap-2 text-red-500 hover:text-red-600 font-black uppercase"
                >
                  View Project <ArrowRight className="h-5 w-5" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-4 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-6xl md:text-7xl font-black uppercase mb-8">Contact</h2>
            <div className="w-32 h-2 bg-yellow-400 mx-auto mb-12" />
            <p className="text-2xl font-bold mb-16 uppercase tracking-wide">
              Ready to create something bold? Let's make it happen.
            </p>

            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-16">
              <Link href={`mailto:${contact.email}`}>
                <Button className="px-12 py-4 bg-red-500 hover:bg-red-600 text-white font-black text-xl uppercase tracking-wide transform hover:scale-105 transition-all duration-300 flex items-center gap-4">
                  <Mail className="h-6 w-6" />
                  Email Me
                </Button>
              </Link>
              <Link href={contact.linkedin} target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  className="px-12 py-4 border-2 border-white text-white hover:bg-white hover:text-black font-black text-xl uppercase tracking-wide transform hover:scale-105 transition-all duration-300 flex items-center gap-4 bg-transparent"
                >
                  <Linkedin className="h-6 w-6" />
                  LinkedIn
                </Button>
              </Link>
            </div>

            <p className="text-sm text-gray-500 uppercase tracking-widest">
              &copy; {new Date().getFullYear()} {name}. All rights reserved.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
