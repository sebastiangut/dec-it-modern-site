'use client'

import { motion } from 'framer-motion'
import { Award, Users, Zap } from 'lucide-react'

export default function DesprePage() {
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
              Despre <span className="text-blue-600 dark:text-blue-400">DEC-IT</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Cu peste 30 de ani de experiență în domeniul IT, DEC-IT este liderul în soluții integrate 
              de securitate și automatizare din România.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Povestea Noastră
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                Fondată în 1991, DEC-IT a început ca o companie mică cu o viziune mare: 
                să transforme modul în care companiile din România abordează tehnologia și securitatea.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                De-a lungul anilor, am crescut și ne-am adaptat la schimbările tehnologice, 
                rămânând întotdeauna în fruntea inovației și oferind soluții de vârf clienților noștri.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Astăzi, suntem mândri să fim partenerii de încredere pentru sute de companii 
                din diverse industrii, de la hoteluri și spitale la evenimente și centre de afaceri.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Cifre Cheie
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-300">Ani de experiență</span>
                  <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">30+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-300">Clienți mulțumiți</span>
                  <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">500+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-300">Proiecte finalizate</span>
                  <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">1000+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-300">Echipa de specialiști</span>
                  <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">25+</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Valorile Noastre
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Principiile care ne ghidează în tot ceea ce facem
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center"
            >
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Excelență
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Ne străduim să oferim întotdeauna soluții de cea mai înaltă calitate, 
                depășind așteptările clienților noștri.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center"
            >
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Parteneriat
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Construim relații pe termen lung cu clienții noștri, 
                fiind partenerii lor de încredere în transformarea digitală.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center"
            >
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Inovație
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Adoptăm cele mai noi tehnologii și metodologii pentru a oferi 
                soluții moderne și eficiente.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
