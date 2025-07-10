"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { LucideIcon } from "lucide-react"

interface ContactMethodCardProps {
  icon: LucideIcon
  title: string
  value: string
  href: string
  color: string
  description: string
  index: number
}

export default function ContactMethodCard({
  icon: Icon,
  title,
  value,
  href,
  color,
  description,
  index,
}: ContactMethodCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="group"
    >
      <Link href={href} target={href.startsWith("http") ? "_blank" : undefined}>
        <motion.div
          className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-300 text-center cursor-pointer"
          whileHover={{ scale: 1.05, y: -5 }}
        >
          <div
            className={`w-16 h-16 bg-gradient-to-r ${color} rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
          >
            <Icon className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600 mb-2">{description}</p>
          <p className="text-blue-600 font-semibold">{value}</p>
        </motion.div>
      </Link>
    </motion.div>
  )
} 