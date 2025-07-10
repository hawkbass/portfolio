"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, ExternalLink, Calendar, Building } from "lucide-react"
import { portfolioData } from "@/lib/data"

export default function MinimalistGrid() {
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
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Name Card */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Card className="h-full bg-white shadow-sm border-0">
              <CardContent className="p-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-2">{name}</h1>
                <p className="text-lg text-gray-600 leading-relaxed">{title}</p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card className="h-full bg-white shadow-sm border-0">
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-700">{contact.email}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-700">{contact.phone}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-700">Glasgow, UK</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="h-full bg-blue-600 text-white shadow-sm border-0">
              <CardContent className="p-8 flex flex-col justify-center">
                <p className="text-blue-100 mb-4">Ready to collaborate?</p>
                <div className="space-y-2">
                  <Link href={`mailto:${contact.email}`} className="block">
                    <Button className="w-full bg-white text-blue-600 hover:bg-blue-50">Get in Touch</Button>
                  </Link>
                  <Link href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="block">
                    <Button
                      variant="outline"
                      className="w-full border-white text-white hover:bg-white/10 bg-transparent"
                    >
                      LinkedIn
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* About Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-8"
        >
          <Card className="bg-white shadow-sm border-0">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">About</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">{professionalSummary}</p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Featured Case Study */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-8"
        >
          <Card className="bg-white shadow-sm border-0">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">Featured Case Study</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Inclusive Design System</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    A comprehensive accessibility-first component library built with React, TypeScript, and Tailwind
                    CSS. This project demonstrates advanced component architecture, accessibility implementation, and
                    systematic design thinking.
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">React 18</Badge>
                      <Badge variant="secondary">TypeScript</Badge>
                      <Badge variant="secondary">Tailwind CSS</Badge>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">WCAG 2.1</Badge>
                      <Badge variant="secondary">Storybook</Badge>
                      <Badge variant="secondary">Jest</Badge>
                    </div>
                  </div>
                  <Link
                    href="https://github.com/hawkbass/InclusiveDesignSystem.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 text-sm font-medium"
                  >
                    View on GitHub <ExternalLink className="h-3 w-3" />
                  </Link>
                </div>
                <div>
                  <div className="aspect-video bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-gray-500">Design System Components</span>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-green-600">100%</div>
                      <div className="text-xs text-gray-600">WCAG Compliant</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-600">40%</div>
                      <div className="text-xs text-gray-600">Time Saved</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-purple-600">15+</div>
                      <div className="text-xs text-gray-600">Components</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Experience Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {experience.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
            >
              <Card className="h-full bg-white shadow-sm border-0">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg text-gray-900">{job.title}</CardTitle>
                      <div className="flex items-center gap-2 text-gray-600 mt-1">
                        <Building className="h-4 w-4" />
                        <span className="text-sm">{job.company}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1 text-gray-500">
                        <Calendar className="h-4 w-4" />
                        <span className="text-xs">{job.duration}</span>
                      </div>
                      {job.location && (
                        <div className="flex items-center gap-1 text-gray-500 mt-1">
                          <MapPin className="h-3 w-3" />
                          <span className="text-xs">{job.location}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {job.description.slice(0, 2).map((desc, i) => (
                      <li key={i} className="text-sm text-gray-600 leading-relaxed">
                        • {desc}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {Object.entries(skills).map(([category, skillList], index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
            >
              <Card className="h-full bg-white shadow-sm border-0">
                <CardHeader>
                  <CardTitle className="text-lg text-gray-900 capitalize">
                    {category.replace(/([A-Z])/g, " $1").trim()}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillList.slice(0, 6).map((skill, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                    {skillList.length > 6 && (
                      <Badge variant="outline" className="text-xs">
                        +{skillList.length - 6} more
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {additionalProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
            >
              <Card className="h-full bg-white shadow-sm border-0 hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg text-gray-900">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                  <Link
                    href={project.link}
                    className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 text-sm font-medium"
                  >
                    View Project <ExternalLink className="h-3 w-3" />
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
            >
              <Card className="h-full bg-white shadow-sm border-0">
                <CardHeader>
                  <CardTitle className="text-lg text-gray-900">{edu.degree}</CardTitle>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Building className="h-4 w-4" />
                    <span className="text-sm">{edu.institution}</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-500">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm">{edu.duration}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 leading-relaxed">{edu.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
