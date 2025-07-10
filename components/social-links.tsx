"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { LucideIcon } from "lucide-react"

interface SocialLink {
  href: string
  icon: LucideIcon
  color: string
  label: string
}

interface SocialLinksProps {
  links: SocialLink[]
}

export default function SocialLinks({ links }: SocialLinksProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="text-center"
    >
      <h3 className="text-2xl font-bold text-gray-900 mb-8">Find Me Online</h3>
      <div className="flex items-center justify-center gap-6">
        {links.map((link, index) => (
          <Link key={index} href={link.href} target="_blank" rel="noopener noreferrer">
            <motion.div
              className={`w-14 h-14 bg-gradient-to-r ${link.color} rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300`}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <link.icon className="h-6 w-6 text-white" />
            </motion.div>
          </Link>
        ))}
      </div>
    </motion.div>
  )
} 