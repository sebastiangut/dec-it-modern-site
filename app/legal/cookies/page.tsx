'use client'

import { motion } from 'framer-motion'
import { Cookie, Settings, BarChart3, Shield, Users, Calendar, CheckCircle, AlertTriangle, Mail, Phone, MapPin } from 'lucide-react'

export default function CookiesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-amber-100 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="w-20 h-20 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mx-auto mb-6">
              <Cookie className="w-10 h-10 text-orange-600 dark:text-orange-400" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Politica de <span className="text-orange-600 dark:text-orange-400">Cookie-uri</span>
            </h1>
            <div className="flex items-center justify-center space-x-2 text-gray-600 dark:text-gray-300">
              <Calendar className="w-5 h-5" />
              <p>Ultima actualizare: {new Date().toLocaleDateString('ro-RO')}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12"
          >

            <div className="space-y-8">
              {/* Section 1 */}
              <div className="border-l-4 border-orange-500 pl-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                  <Cookie className="w-6 h-6 text-orange-500 mr-3" />
                  1. Ce sunt Cookie-urile?
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Cookie-urile sunt fișiere text mici care sunt plasate pe computerul
                  sau dispozitivul dvs. mobil atunci când vizitați un site web. Sunt
                  utilizate pe scară largă pentru a face site-urile web să funcționeze
                  mai eficient și pentru a furniza informații proprietarilor site-ului.
                </p>
              </div>

              {/* Section 2 */}
              <div className="border-l-4 border-orange-500 pl-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <Settings className="w-6 h-6 text-orange-500 mr-3" />
                  2. Cum Utilizăm Cookie-urile
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  Site-ul nostru utilizează următoarele tipuri de cookie-uri:
                </p>

                {/* Essential Cookies */}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                    <Shield className="w-5 h-5 text-green-500 mr-2" />
                    2.1 Cookie-uri Esențiale
                  </h3>
                  <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      Aceste cookie-uri sunt necesare pentru funcționarea site-ului.
                      Includ cookie-uri care vă permit să vă autentificați în zone
                      securizate ale site-ului nostru.
                    </p>
                  </div>
                </div>

                {/* Performance Cookies */}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                    <BarChart3 className="w-5 h-5 text-blue-500 mr-2" />
                    2.2 Cookie-uri de Performanță
                  </h3>
                  <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      Aceste cookie-uri ne permit să numărăm vizitele și sursele de
                      trafic pentru a măsura și îmbunătăți performanța site-ului nostru.
                    </p>
                  </div>
                </div>

                {/* Functionality Cookies */}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                    <Settings className="w-5 h-5 text-purple-500 mr-2" />
                    2.3 Cookie-uri de Funcționalitate
                  </h3>
                  <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      Aceste cookie-uri sunt utilizate pentru a recunoaște când reveniți
                      pe site-ul nostru și ne permit să personalizăm conținutul pentru dvs.
                    </p>
                  </div>
                </div>

                {/* Marketing Cookies */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                    <Users className="w-5 h-5 text-red-500 mr-2" />
                    2.4 Cookie-uri de Marketing
                  </h3>
                  <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      Aceste cookie-uri sunt utilizate pentru a vă oferi reclame relevante
                      pentru dvs. și interesele dvs.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 3 */}
              <div className="border-l-4 border-orange-500 pl-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                  <Users className="w-6 h-6 text-orange-500 mr-3" />
                  3. Cookie-uri Terță Parte
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  Utilizăm servicii de la terți care pot seta cookie-uri:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="flex items-center space-x-3 p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                    <BarChart3 className="w-5 h-5 text-orange-500 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Google Analytics</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                    <Settings className="w-5 h-5 text-orange-500 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Google Tag Manager</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                    <Users className="w-5 h-5 text-orange-500 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Facebook Pixel</span>
                  </div>
                </div>
              </div>

              {/* Section 4 */}
              <div className="border-l-4 border-orange-500 pl-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                  <Settings className="w-6 h-6 text-orange-500 mr-3" />
                  4. Controlul Cookie-urilor
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  Puteți controla și/sau șterge cookie-urile după cum doriți. Puteți
                  șterge toate cookie-urile care sunt deja pe computerul dvs. și
                  puteți seta majoritatea browserelor să împiedice plasarea lor.
                </p>

                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Setări Browser:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="flex items-center space-x-3 p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Chrome: Setări → Confidențialitate și securitate</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Firefox: Opțiuni → Confidențialitate</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Safari: Preferințe → Confidențialitate</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Edge: Setări → Confidențialitate</span>
                  </div>
                </div>
              </div>

              {/* Section 5 */}
              <div className="border-l-4 border-orange-500 pl-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                  <Calendar className="w-6 h-6 text-orange-500 mr-3" />
                  5. Actualizări ale Politicii
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Această politică poate fi actualizată periodic. Vă vom notifica
                  despre orice modificări semnificative prin publicarea noii politici
                  pe această pagină.
                </p>
              </div>
            </div>

            {/* Contact Section */}
            <div className="mt-12 p-6 bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 rounded-xl">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <Mail className="w-6 h-6 text-orange-500 mr-3" />
                6. Contact
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Pentru întrebări despre utilizarea cookie-urilor, contactați-ne la:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                  <Mail className="w-5 h-5 text-orange-500" />
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Email</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">it-solutions@dec-it.eu</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                  <Phone className="w-5 h-5 text-orange-500" />
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Telefon</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">+40-(0)259-419805</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
