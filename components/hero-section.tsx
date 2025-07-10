"use client"

import { motion } from "framer-motion"

interface HeroSectionProps {
  title: string
  description: string
  className?: string
}

export default function HeroSection({ title, description, className = "pt-32 pb-20" }: HeroSectionProps) {
  return (
    <section className={`${className} px-8 relative`}>
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-6xl md:text-7xl font-bold tracking-tight mb-8">
            <span className="bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              {title}
            </span>
          </h1>
          <p className="text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-12">
            {description}
          </p>
        </motion.div>
      </div>
    </section>
  )
} 