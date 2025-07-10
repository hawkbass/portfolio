import Link from "next/link"
import { motion } from "framer-motion"

export default function Header() {
  return (
    <motion.nav
      className="fixed top-8 left-8 right-8 z-50"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="bg-white/80 backdrop-blur-2xl rounded-2xl px-8 py-4 shadow-2xl shadow-blue-500/10 border border-white/20">
        <div className="flex items-center justify-between">
          <motion.div
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            CJH
          </motion.div>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              About
            </Link>
            {/* <Link href="/portfolio" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Portfolio
            </Link> */}
            <Link href="/case-study" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Case Study
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>
  )
} 