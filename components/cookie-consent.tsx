'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { XMarkIcon } from '@heroicons/react/24/outline'

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent')
    if (!consent) {
      setShowConsent(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted')
    setShowConsent(false)
    // Initialize analytics here
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': 'granted'
      })
    }
  }

  const declineCookies = () => {
    localStorage.setItem('cookieConsent', 'declined')
    setShowConsent(false)
    // Disable analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': 'denied'
      })
    }
  }

  return (
    <AnimatePresence>
      {showConsent && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4"
        >
          <div className="container-max">
            <div className="glass rounded-lg p-6 shadow-xl">
              <div className="flex items-start justify-between">
                <div className="flex-1 mr-4">
                  <h3 className="text-lg font-semibold mb-2">
                    Utilizăm Cookie-uri
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    Folosim cookie-uri pentru a îmbunătăți experiența ta pe site. 
                    Acestea ne ajută să înțelegem cum utilizezi site-ul nostru și 
                    să îți oferim conținut relevant.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <button
                      onClick={acceptCookies}
                      className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-sm font-medium"
                    >
                      Accept toate
                    </button>
                    <button
                      onClick={declineCookies}
                      className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-sm font-medium"
                    >
                      Doar esențiale
                    </button>
                    <Link
                      href="/legal/cookies"
                      className="px-4 py-2 text-primary-600 dark:text-primary-400 hover:underline text-sm font-medium"
                    >
                      Detalii
                    </Link>
                  </div>
                </div>
                <button
                  onClick={() => setShowConsent(false)}
                  className="p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors"
                >
                  <XMarkIcon className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
