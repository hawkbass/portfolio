"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Mail,
  Linkedin,
  Phone,
  MapPin,
  ExternalLink,
  User,
  Briefcase,
  Code,
  GraduationCap,
  FolderOpen,
} from "lucide-react"
import { portfolioData } from "@/lib/data"
import { useState } from "react"

export default function SidebarPortfolio() {
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

  const [activeSection, setActiveSection] = useState("about")

  const menuItems = [
    { id: "about", label: "About", icon: User },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "skills", label: "Skills", icon: Code },
    { id: "projects", label: "Projects", icon: FolderOpen },
    { id: "education", label: "Education", icon: GraduationCap },
  ]

  const renderContent = () => {
    switch (activeSection) {
      case "about":
        return (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">About Me</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">{professionalSummary}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Phone className="h-5 w-5 text-blue-600" />
                    <span className="font-medium">Phone</span>
                  </div>
                  <p className="text-gray-700">{contact.phone}</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Mail className="h-5 w-5 text-blue-600" />
                    <span className="font-medium">Email</span>
                  </div>
                  <p className="text-gray-700">{contact.email}</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <MapPin className="h-5 w-5 text-blue-600" />
                    <span className="font-medium">Location</span>
                  </div>
                  <p className="text-gray-700">Glasgow, UK</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Linkedin className="h-5 w-5 text-blue-600" />
                    <span className="font-medium">LinkedIn</span>
                  </div>
                  <Link
                    href={contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700"
                  >
                    Connect with me
                  </Link>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        )

      case "experience":
        return (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Work Experience</h2>
            <div className="space-y-6">
              {experience.map((job, index) => (
                <Card key={index} className="border-l-4 border-l-blue-600">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl text-gray-900">{job.title}</CardTitle>
                        <p className="text-lg text-blue-600 font-medium">{job.company}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-600">{job.duration}</p>
                        {job.location && <p className="text-sm text-gray-500">{job.location}</p>}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {job.description.map((desc, i) => (
                        <li key={i} className="text-gray-700 leading-relaxed">
                          • {desc}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        )

      case "skills":
        return (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Skills & Technologies</h2>
            <div className="space-y-6">
              {Object.entries(skills).map(([category, skillList], index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-xl text-gray-900 capitalize">
                      {category.replace(/([A-Z])/g, " $1").trim()}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill, i) => (
                        <Badge key={i} variant="secondary" className="text-sm">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
              <Card className="bg-blue-50">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">Core Competencies</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {coreCompetencies.map((competency, i) => (
                      <Badge key={i} className="bg-blue-600 text-white">
                        {competency}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        )

      case "projects":
        return (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {additionalProjects.map((project, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl text-gray-900">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4 leading-relaxed">{project.description}</p>
                    <Link
                      href={project.link}
                      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
                    >
                      View Project <ExternalLink className="h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
            <Card className="mt-6 bg-gray-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Case Study Placeholder</h3>
                <p className="text-gray-700 mb-4">
                  This section will showcase an in-depth case study of one of your significant projects. Please provide
                  your GitHub repository or project details, and I'll integrate the comprehensive content including
                  project overview, challenges, design process, technical implementation, and results.
                </p>
                <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-gray-500">Project Screenshot Placeholder</span>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Challenge</h4>
                    <p className="text-sm text-gray-600">Project challenge description will go here.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Solution</h4>
                    <p className="text-sm text-gray-600">Solution approach and methodology will be detailed here.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Results</h4>
                    <p className="text-sm text-gray-600">
                      Quantifiable outcomes and impact metrics will be shown here.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )

      case "education":
        return (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Education</h2>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="border-l-4 border-l-green-600">
                  <CardHeader>
                    <CardTitle className="text-xl text-gray-900">{edu.degree}</CardTitle>
                    <p className="text-lg text-green-600 font-medium">{edu.institution}</p>
                    <p className="text-sm text-gray-600">{edu.duration}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 leading-relaxed">{edu.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-80 bg-white shadow-lg flex flex-col">
        {/* Profile Section */}
        <div className="p-8 border-b">
          <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mb-4">
            <span className="text-2xl font-bold text-white">
              {name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </span>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">{name}</h1>
          <p className="text-gray-600 leading-relaxed">{title}</p>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => setActiveSection(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                    activeSection === item.id ? "bg-blue-600 text-white" : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <item.icon className="h-5 w-5" />
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact CTA */}
        <div className="p-4 border-t">
          <Link href={`mailto:${contact.email}`}>
            <Button className="w-full bg-blue-600 hover:bg-blue-700">
              <Mail className="mr-2 h-4 w-4" />
              Get In Touch
            </Button>
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 overflow-y-auto">{renderContent()}</div>
    </div>
  )
}
