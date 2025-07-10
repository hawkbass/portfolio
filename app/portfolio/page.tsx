"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, ExternalLink, Github, Calendar } from "lucide-react"
import { portfolioData } from "@/lib/data"
import Header from "@/components/header"
import { getImagePath } from "@/lib/utils"

const portfolioProjects = [
  {
    id: "inclusive-design-system",
    title: "Inclusive Design System",
    subtitle: "Accessibility-First Component Library",
    description:
      "A comprehensive React component library built with TypeScript and Tailwind CSS, focusing on WCAG compliance and inclusive design principles.",
    image: "/images/inclusive-design-system-homepage.png",
    tags: ["React", "TypeScript", "Tailwind CSS", "Accessibility", "Storybook"],
    year: "2024",
    status: "Featured",
    link: "/case-study",
    github: "https://github.com/hawkbass/InclusiveDesignSystem.git",
    color: "from-blue-500 to-purple-600",
  },
  {
    id: "ecommerce-redesign",
    title: "E-commerce Platform Redesign",
    subtitle: "Complete UX/UI Overhaul",
    description:
      "Complete redesign of a major e-commerce platform, implementing modern design systems and improving conversion rates by 35% through strategic UX improvements.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["UI/UX", "Figma", "User Research", "Conversion Optimization"],
    year: "2023",
    status: "Completed",
    link: "#",
    github: "#",
    color: "from-green-500 to-teal-600",
  },
  {
    id: "brand-identity-system",
    title: "Brand Identity & Digital Ecosystem",
    subtitle: "Comprehensive Brand Development",
    description:
      "End-to-end brand development including logo design, brand guidelines, and complete digital presence across multiple touchpoints.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Branding", "Logo Design", "Brand Guidelines", "Digital Strategy"],
    year: "2023",
    status: "Completed",
    link: "#",
    github: "#",
    color: "from-purple-500 to-pink-600",
  },
  {
    id: "educational-platform",
    title: "Educational Platform UI/UX",
    subtitle: "Learning Management System",
    description:
      "Designed and developed user interface for online learning platform, focusing on accessibility and user engagement optimization.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Education", "UI/UX", "Accessibility", "User Engagement"],
    year: "2022",
    status: "Completed",
    link: "#",
    github: "#",
    color: "from-orange-500 to-red-600",
  },
  {
    id: "fintech-dashboard",
    title: "FinTech Dashboard Design",
    subtitle: "Financial Data Visualization",
    description:
      "Complex data visualization dashboard for financial technology platform, featuring real-time analytics and intuitive user workflows.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["FinTech", "Data Visualization", "Dashboard", "Analytics"],
    year: "2022",
    status: "Completed",
    link: "#",
    github: "#",
    color: "from-cyan-500 to-blue-600",
  },
  {
    id: "mobile-app-design",
    title: "Mobile App Design System",
    subtitle: "Cross-Platform Mobile Experience",
    description:
      "Comprehensive mobile app design system for iOS and Android, featuring consistent design patterns and seamless user experience.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Mobile", "iOS", "Android", "Design System"],
    year: "2021",
    status: "Completed",
    link: "#",
    github: "#",
    color: "from-indigo-500 to-purple-600",
  },
]

export default function PortfolioPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-white">


        {/* Hero Section */}
        <section className="pt-32 pb-20 px-8 bg-gradient-to-br from-blue-50 via-white to-purple-50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-center mb-16"
            >
              <h1 className="text-6xl md:text-7xl font-bold tracking-tight mb-6">
                <span className="bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Portfolio
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                A curated collection of projects showcasing design excellence, technical innovation, and measurable
                business impact across diverse industries.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap justify-center gap-4 mb-16"
            >
              {["All", "Design Systems", "UI/UX", "Branding", "Development"].map((filter, index) => (
                <Button
                  key={filter}
                  variant={index === 0 ? "default" : "outline"}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                    index === 0
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                      : "border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent"
                  }`}
                >
                  {filter}
                </Button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="py-20 px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-500">
                    {/* Project Image */}
                    <div className="aspect-[4/3] relative overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10`} />
                      <div className="w-full h-full flex items-center justify-center bg-gray-50">
                        <div className="text-center">
                          <div
                            className={`w-16 h-16 bg-gradient-to-br ${project.color} rounded-2xl mx-auto mb-4 flex items-center justify-center`}
                          >
                            <div className="w-8 h-8 bg-white rounded-lg opacity-90" />
                          </div>
                          <p className="text-gray-600 font-medium">{project.title}</p>
                        </div>
                      </div>

                      {/* Status Badge */}
                      {project.status === "Featured" && (
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold rounded-full">
                            Featured
                          </span>
                        </div>
                      )}

                      {/* Year Badge */}
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-700 text-xs font-medium rounded-full">
                          {project.year}
                        </span>
                      </div>

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="flex gap-4">
                          <Link href={project.link}>
                            <Button className="bg-white text-gray-900 hover:bg-gray-100 px-4 py-2 rounded-full font-medium">
                              View Project
                              <ArrowUpRight className="ml-2 h-4 w-4" />
                            </Button>
                          </Link>
                          {project.github !== "#" && (
                            <Link href={project.github} target="_blank" rel="noopener noreferrer">
                              <Button
                                variant="outline"
                                className="border-white text-white hover:bg-white/10 px-4 py-2 rounded-full font-medium bg-transparent"
                              >
                                <Github className="h-4 w-4" />
                              </Button>
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Project Info */}
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Calendar className="h-4 w-4 text-gray-400" />
                        <span className="text-sm text-gray-500">{project.year}</span>
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-gray-600 font-medium mb-3">{project.subtitle}</p>
                      <p className="text-gray-700 leading-relaxed mb-4 text-sm">{project.description}</p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.slice(0, 3).map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 3 && (
                          <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full font-medium">
                            +{project.tags.length - 3} more
                          </span>
                        )}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex items-center gap-3">
                        <Link href={project.link} className="flex-1">
                          <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white py-2 rounded-lg font-medium transition-all duration-300">
                            View Details
                          </Button>
                        </Link>
                        {project.github !== "#" && (
                          <Link href={project.github} target="_blank" rel="noopener noreferrer">
                            <Button
                              variant="outline"
                              className="border-gray-300 text-gray-700 hover:bg-gray-50 p-2 rounded-lg transition-all duration-300 bg-transparent"
                            >
                              <Github className="h-4 w-4" />
                            </Button>
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-8 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Ready to Start Your Project?</h2>
              <p className="text-xl text-blue-100 leading-relaxed mb-8 max-w-2xl mx-auto">
                Let's discuss how we can bring your vision to life with exceptional design and development.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/#contact">
                  <Button className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300">
                    Get In Touch
                    <ArrowUpRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    className="border-white text-white hover:bg-white/10 px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 bg-transparent"
                  >
                    LinkedIn
                    <ExternalLink className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}
