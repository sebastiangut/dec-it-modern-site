'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  Shield,
  Video,
  Ticket,
  Building2,
  Cross,
  Users,
  ChevronRight
} from 'lucide-react'

export default function HomePage() {
  const solutions = [
    {
      id: 'control-acces',
      title: 'Control Acces & Pontaj',
      description: 'Sisteme avansate de control acces cu carduri, biometrie și pontaj electronic pentru securitatea maximă.',
      icon: Shield,
      features: ['Carduri RFID/NFC', 'Biometrie (amprente, față)', 'Pontaj electronic', 'Rapoarte detaliate'],
      color: 'blue'
    },
    {
      id: 'supraveghere-video',
      title: 'Supraveghere Video',
      description: 'Soluții complete de supraveghere video cu camere HD/4K, înregistrare și monitorizare în timp real.',
      icon: Video,
      features: ['Camere HD/4K', 'Înregistrare cloud', 'Monitorizare remotă', 'Analiză video AI'],
      color: 'green'
    },
    {
      id: 'ticketing',
      title: 'Sisteme Ticketing',
      description: 'Platforme complete pentru vânzarea și validarea biletelor la evenimente, transport și acces controlat.',
      icon: Ticket,
      features: ['Vânzare online', 'Validare QR/NFC', 'Rapoarte vânzări', 'Integrare POS'],
      color: 'purple'
    },
    {
      id: 'hotel-management',
      title: 'Management Hotelier',
      description: 'Sisteme integrate pentru managementul hotelurilor: rezervări, check-in/out, facturare.',
      icon: Building2,
      features: ['Rezervări online', 'Check-in digital', 'Facturare automată', 'Integrare booking'],
      color: 'orange'
    },
    {
      id: 'spitale',
      title: 'Soluții Spitalicești',
      description: 'Sisteme specializate pentru spitale: managementul pacienților, programări, evidența medicală.',
      icon: Cross,
      features: ['Evidența pacienților', 'Programări online', 'Fișe medicale', 'Rapoarte medicale'],
      color: 'red'
    },
    {
      id: 'flux-clienti',
      title: 'Managementul Fluxului de Clienți',
      description: 'Soluții pentru optimizarea fluxului de clienți în magazine, bănci și instituții publice.',
      icon: Users,
      features: ['Sistem de cozi', 'Programări online', 'Analiză flux', 'Notificări SMS'],
      color: 'indigo'
    }
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400',
      green: 'bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400',
      purple: 'bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400',
      orange: 'bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-400',
      red: 'bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400',
      indigo: 'bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400'
    }
    return colors[color as keyof typeof colors] || colors.blue
  }
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Soluții IT Inteligente &<br />
              <span className="text-blue-600 dark:text-blue-400">Sisteme de Securitate</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              DEC-IT oferă soluții IT integrate și sisteme de securitate din 1991. 
              Specializați în control acces, ticketing, supraveghere video și automatizare.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/solutii"
                className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Explorează Soluțiile
              </Link>
              <Link
                href="/contact"
                className="px-8 py-3 border border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors font-medium"
              >
                Contactează-ne
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* All Solutions */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Soluțiile Noastre Complete
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Descoperă gama completă de soluții IT și sisteme de securitate pe care le oferim
              pentru a transforma și optimiza afacerea ta
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className={`w-16 h-16 rounded-lg flex items-center justify-center mb-4 ${getColorClasses(solution.color)}`}>
                  <solution.icon className="w-8 h-8" />
                </div>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {solution.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {solution.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                    Caracteristici principale:
                  </h4>
                  <ul className="space-y-1">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-600 dark:text-gray-300 flex items-center">
                        <span className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={`/solutii/${solution.id}`}
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
                >
                  Află mai multe
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 dark:bg-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Gata să Începem?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Contactează-ne astăzi pentru o consultație gratuită și descoperă cum te putem ajuta
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-medium"
            >
              Contactează-ne Acum
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
