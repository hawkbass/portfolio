"use client"

import type React from "react"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Github, ExternalLink, Send, MessageCircle, Briefcase } from "lucide-react"
import { portfolioData } from "@/lib/data"
import { useState } from "react"
import Header from "@/components/header"
import AnimatedBackground from "@/components/animated-background"
import HeroSection from "@/components/hero-section"
import SectionTitle from "@/components/section-title"
import ContactMethodCard from "@/components/contact-method-card"
import SocialLinks from "@/components/social-links"

export default function ContactPage() {
  const { contact } = portfolioData
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  return (
    <>
      <Header />
      <div className="min-h-screen bg-white">
        <AnimatedBackground />

        <HeroSection
          title="Let's Connect"
          description="Ready to bring your vision to life? I'd love to discuss your project and explore how we can create something amazing together."
        />

        {/* Contact Methods */}
        <section className="py-20 px-8 bg-gradient-to-br from-gray-50/80 to-blue-50/60 relative">
          <div className="max-w-6xl mx-auto">
            <SectionTitle
              title="Get in Touch"
              subtitle="Choose the method that works best for you"
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {[
                {
                  icon: Mail,
                  title: "Email",
                  value: contact.email,
                  href: `mailto:${contact.email}`,
                  color: "from-blue-500 to-cyan-500",
                  description: "Send me a message",
                },
                {
                  icon: Phone,
                  title: "Phone",
                  value: contact.phone,
                  href: `tel:${contact.phone}`,
                  color: "from-green-500 to-emerald-500",
                  description: "Give me a call",
                },
                {
                  icon: MapPin,
                  title: "Location",
                  value: "Glasgow, UK",
                  href: "#",
                  color: "from-purple-500 to-pink-500",
                  description: "Based in Scotland",
                },
                {
                  icon: MessageCircle,
                  title: "LinkedIn",
                  value: "Connect",
                  href: contact.linkedin,
                  color: "from-orange-500 to-red-500",
                  description: "Professional network",
                },
              ].map((method, index) => (
                <ContactMethodCard
                  key={index}
                  icon={method.icon}
                  title={method.title}
                  value={method.value}
                  href={method.href}
                  color={method.color}
                  description={method.description}
                  index={index}
                />
              ))}
            </div>

            {/* Social Links */}
            <SocialLinks
              links={[
                {
                  href: contact.linkedin,
                  icon: ExternalLink,
                  color: "from-blue-600 to-blue-700",
                  label: "LinkedIn",
                },
                ...(contact.github ? [{
                  href: contact.github,
                  icon: Github,
                  color: "from-gray-800 to-gray-900",
                  label: "GitHub",
                }] : []),
                {
                  href: "/portfolio",
                  icon: Briefcase,
                  color: "from-purple-600 to-purple-700",
                  label: "Portfolio",
                },
              ]}
            />
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-20 px-8 bg-white relative">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold tracking-tight mb-6">
                <span className="bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Start a Project
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Tell me about your project and let's discuss how we can work together
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white/90 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border border-white/50"
            >
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-gray-900 mb-3">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-gray-50/50"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-gray-900 mb-3">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-gray-50/50"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label htmlFor="company" className="block text-sm font-bold text-gray-900 mb-3">
                      Company/Organization
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-gray-50/50"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label htmlFor="projectType" className="block text-sm font-bold text-gray-900 mb-3">
                      Project Type *
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      required
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-gray-50/50"
                    >
                      <option value="">Select project type</option>
                      <option value="web-development">Web Development</option>
                      <option value="ui-ux-design">UI/UX Design</option>
                      <option value="consulting">Consulting</option>
                      <option value="full-stack">Full-Stack Development</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label htmlFor="budget" className="block text-sm font-bold text-gray-900 mb-3">
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-gray-50/50"
                    >
                      <option value="">Select budget range</option>
                      <option value="under-5k">Under £5,000</option>
                      <option value="5k-15k">£5,000 - £15,000</option>
                      <option value="15k-30k">£15,000 - £30,000</option>
                      <option value="30k-plus">£30,000+</option>
                      <option value="discuss">Let's discuss</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="timeline" className="block text-sm font-bold text-gray-900 mb-3">
                      Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-gray-50/50"
                    >
                      <option value="">Select timeline</option>
                      <option value="asap">ASAP</option>
                      <option value="1-3-months">1-3 months</option>
                      <option value="3-6-months">3-6 months</option>
                      <option value="6-plus-months">6+ months</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-gray-900 mb-3">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-gray-50/50 resize-none"
                    placeholder="Tell me about your project, goals, and any specific requirements..."
                  />
                </div>

                <motion.div className="text-center" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    type="submit"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-4 rounded-full font-bold text-lg shadow-lg transition-all duration-300"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </motion.div>
              </form>
            </motion.div>
          </div>
        </section>

        {/* Working Together */}
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
              <h2 className="text-5xl font-bold tracking-tight mb-6 text-white">How We'll Work Together</h2>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                A collaborative approach focused on delivering exceptional results
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Discovery & Planning",
                  description:
                    "We'll start with a detailed discussion about your goals, requirements, and vision for the project.",
                },
                {
                  step: "02",
                  title: "Design & Development",
                  description:
                    "I'll create designs and develop your solution with regular check-ins and feedback sessions.",
                },
                {
                  step: "03",
                  title: "Launch & Support",
                  description: "After thorough testing, we'll launch your project with ongoing support and maintenance.",
                },
              ].map((phase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mx-auto mb-6 flex items-center justify-center border border-white/30">
                    <span className="text-2xl font-bold text-white">{phase.step}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{phase.title}</h3>
                  <p className="text-blue-100 leading-relaxed">{phase.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
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
                  Ready to Get Started?
                </span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-12 max-w-2xl mx-auto">
                I'm excited to learn about your project and discuss how we can bring your vision to life.
              </p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-6"
              >
                <Link href={`mailto:${contact.email}`}>
                  <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                    <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 rounded-full font-semibold text-lg shadow-lg transition-all duration-300">
                      <Mail className="mr-2 h-5 w-5" />
                      Send Email
                    </Button>
                  </motion.div>
                </Link>
                <Link href={`tel:${contact.phone}`}>
                  <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      variant="outline"
                      className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 bg-white/80 backdrop-blur-sm hover:border-blue-400 hover:text-blue-600"
                    >
                      <Phone className="mr-2 h-5 w-5" />
                      Call Now
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
