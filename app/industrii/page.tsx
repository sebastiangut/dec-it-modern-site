'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  Building2,
  Cross,
  Theater,
  Dumbbell,
  Building,
  ShoppingBag,
  ChevronRight
} from 'lucide-react'

export default function IndustriiPage() {
  const industries = [
    {
      id: 'hoteluri',
      title: 'Hoteluri & Turism',
      description: 'Soluții complete pentru industria hotelieră: rezervări, check-in digital, control acces camere, sisteme POS.',
      icon: Building2,
      solutions: ['Management rezervări', 'Check-in/out digital', 'Control acces camere', 'Sisteme POS', 'Supraveghere'],
      benefits: ['Eficiență operațională', 'Experiență client îmbunătățită', 'Securitate sporită', 'Reducerea costurilor'],
      color: 'blue'
    },
    {
      id: 'sanatate',
      title: 'Sănătate & Spitale',
      description: 'Sisteme specializate pentru unități medicale: evidența pacienților, programări, control acces, supraveghere.',
      icon: Cross,
      solutions: ['Evidența pacienților', 'Programări online', 'Control acces secții', 'Supraveghere medicală', 'Rapoarte medicale'],
      benefits: ['Îmbunătățirea îngrijirii', 'Eficiență administrativă', 'Securitate pacienți', 'Conformitate GDPR'],
      color: 'red'
    },
    {
      id: 'evenimente',
      title: 'Evenimente & Divertisment',
      description: 'Platforme pentru managementul evenimentelor: ticketing, control acces, supraveghere, sisteme audio-video.',
      icon: Theater,
      solutions: ['Sisteme ticketing', 'Control acces evenimente', 'Supraveghere crowd', 'Sisteme AV', 'Managementul cozilor'],
      benefits: ['Vânzări optimizate', 'Securitate evenimente', 'Experiență participanți', 'Analiză în timp real'],
      color: 'purple'
    },
    {
      id: 'sport',
      title: 'Sport & Fitness',
      description: 'Soluții pentru centre sportive: control acces, abonamente, rezervări, monitorizare echipamente.',
      icon: Dumbbell,
      solutions: ['Control acces membri', 'Managementul abonamentelor', 'Rezervări facilități', 'Monitorizare echipamente', 'Aplicații mobile'],
      benefits: ['Automatizare procese', 'Satisfacția membrilor', 'Optimizare resurse', 'Creșterea veniturilor'],
      color: 'green'
    },
    {
      id: 'business',
      title: 'Birouri & Corporate',
      description: 'Sisteme integrate pentru mediul corporate: control acces, pontaj, supraveghere, managementul vizitatorilor.',
      icon: Building,
      solutions: ['Control acces angajați', 'Sisteme pontaj', 'Managementul vizitatorilor', 'Supraveghere perimetru', 'Integrare HR'],
      benefits: ['Securitate sporită', 'Conformitate legală', 'Eficiență HR', 'Reducerea costurilor'],
      color: 'indigo'
    },
    {
      id: 'retail',
      title: 'Retail & Comerț',
      description: 'Soluții pentru magazine și centre comerciale: sisteme POS, control acces, supraveghere, analiză flux clienți.',
      icon: ShoppingBag,
      solutions: ['Sisteme POS avansate', 'Supraveghere magazine', 'Analiză flux clienți', 'Control acces depozite', 'Managementul stocurilor'],
      benefits: ['Prevenirea pierderilor', 'Optimizare vânzări', 'Analiză comportament', 'Eficiență operațională'],
      color: 'orange'
    }
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400',
      red: 'bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400',
      purple: 'bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400',
      green: 'bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400',
      indigo: 'bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400',
      orange: 'bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-400'
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
              Industrii <span className="text-blue-600 dark:text-blue-400">Deservite</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Oferim soluții specializate pentru diverse industrii, adaptate perfect 
              la nevoile și cerințele specifice ale fiecărui domeniu.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-16 h-16 rounded-lg flex items-center justify-center flex-shrink-0 ${getColorClasses(industry.color)}`}>
                    <industry.icon className="w-8 h-8" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                      {industry.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      {industry.description}
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-3">
                          Soluții oferite:
                        </h4>
                        <ul className="space-y-2">
                          {industry.solutions.map((solution, idx) => (
                            <li key={idx} className="text-sm text-gray-600 dark:text-gray-300 flex items-center">
                              <span className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full mr-2"></span>
                              {solution}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-3">
                          Beneficii:
                        </h4>
                        <ul className="space-y-2">
                          {industry.benefits.map((benefit, idx) => (
                            <li key={idx} className="text-sm text-gray-600 dark:text-gray-300 flex items-center">
                              <span className="w-1.5 h-1.5 bg-green-600 dark:bg-green-400 rounded-full mr-2"></span>
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <Link
                      href={`/industrii/${industry.id}`}
                      className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
                    >
                      Află mai multe despre această industrie
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Nu vezi industria ta aici?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Avem experiență în multe alte domenii și putem adapta soluțiile noastre 
              pentru orice tip de business. Contactează-ne pentru o consultație personalizată.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Discută cu experții noștri
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
