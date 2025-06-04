'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Home, ArrowLeft, Search, Mail } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* 404 Icon */}
          <div className="w-32 h-32 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-8">
            <Search className="w-16 h-16 text-blue-600 dark:text-blue-400" />
          </div>

          {/* Error Message */}
          <h1 className="text-6xl md:text-8xl font-bold text-gray-900 dark:text-white mb-4">
            404
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
            Pagina nu a fost găsită
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
            Ne pare rău, dar pagina pe care o căutați nu există sau a fost mutată.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/"
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200"
            >
              <Home className="w-5 h-5 mr-2" />
              Înapoi la Pagina Principală
            </Link>
            
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 font-medium rounded-lg transition-colors duration-200"
            >
              <Mail className="w-5 h-5 mr-2" />
              Contactează-ne
            </Link>
          </div>

          {/* Quick Links */}
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
              Pagini Populare
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <Link
                href="/solutii"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Soluții IT
              </Link>
              <Link
                href="/industrii"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Industrii
              </Link>
              <Link
                href="/despre"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Despre Noi
              </Link>
              <Link
                href="/contact"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Company Info */}
          <div className="mt-8 text-sm text-gray-500 dark:text-gray-400">
            <p>DEC-IT - Soluții IT integrate și sisteme de securitate</p>
            <p>România's leading provider of IT security solutions</p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
