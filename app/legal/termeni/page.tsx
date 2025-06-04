'use client'

import { motion } from 'framer-motion'
import { FileText, Shield, Mail, Phone, MapPin, Calendar, CheckCircle } from 'lucide-react'

export default function TermeniPage() {
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
            <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-6">
              <FileText className="w-10 h-10 text-blue-600 dark:text-blue-400" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Termeni și <span className="text-blue-600 dark:text-blue-400">Condiții</span>
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
              <div className="border-l-4 border-blue-500 pl-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                  <CheckCircle className="w-6 h-6 text-blue-500 mr-3" />
                  1. Acceptarea Termenilor
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Prin accesarea și utilizarea site-ului dec-it.eu, acceptați să fiți
                  obligat de acești termeni și condiții. Dacă nu sunteți de acord cu
                  oricare parte a acestor termeni, vă rugăm să nu utilizați site-ul nostru.
                </p>
              </div>

              {/* Section 2 */}
              <div className="border-l-4 border-blue-500 pl-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                  <Shield className="w-6 h-6 text-blue-500 mr-3" />
                  2. Descrierea Serviciilor
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  DEC-IT oferă soluții IT integrate și sisteme de securitate, inclusiv:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="flex items-center space-x-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Sisteme de control acces și pontaj</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Soluții de supraveghere video</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Sisteme de ticketing</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Management hotelier și spitalicesc</span>
                  </div>
                </div>
              </div>

              {/* Section 3 */}
              <div className="border-l-4 border-blue-500 pl-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                  <Shield className="w-6 h-6 text-blue-500 mr-3" />
                  3. Proprietate Intelectuală
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Toate drepturile de proprietate intelectuală asupra conținutului
                  site-ului, inclusiv texte, imagini, logo-uri, și software aparțin
                  DEC S.R.L. sau licențiatorilor săi.
                </p>
              </div>

              {/* Section 4 */}
              <div className="border-l-4 border-blue-500 pl-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                  <Shield className="w-6 h-6 text-blue-500 mr-3" />
                  4. Limitarea Răspunderii
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  DEC-IT nu va fi răspunzător pentru niciun fel de daune directe,
                  indirecte, incidentale, speciale sau consecvente care rezultă din
                  utilizarea sau imposibilitatea de a utiliza serviciile noastre.
                </p>
              </div>

              {/* Section 5 */}
              <div className="border-l-4 border-blue-500 pl-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                  <Shield className="w-6 h-6 text-blue-500 mr-3" />
                  5. Confidențialitate
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Utilizarea serviciilor noastre este de asemenea guvernată de
                  Politica noastră de Confidențialitate. Vă rugăm să o consultați
                  pentru detalii despre cum colectăm și utilizăm informațiile dvs.
                </p>
              </div>

              {/* Section 6 */}
              <div className="border-l-4 border-blue-500 pl-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                  <Calendar className="w-6 h-6 text-blue-500 mr-3" />
                  6. Modificări ale Termenilor
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Ne rezervăm dreptul de a modifica acești termeni în orice moment.
                  Modificările vor intra în vigoare imediat după publicarea pe site.
                </p>
              </div>

              {/* Section 7 */}
              <div className="border-l-4 border-blue-500 pl-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                  <Shield className="w-6 h-6 text-blue-500 mr-3" />
                  7. Legea Aplicabilă
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Acești termeni sunt guvernați de legile României. Orice dispută
                  va fi soluționată de instanțele competente din România.
                </p>
              </div>
            </div>

            {/* Contact Section */}
            <div className="mt-12 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <Mail className="w-6 h-6 text-blue-500 mr-3" />
                8. Contact
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Pentru întrebări despre acești termeni, contactați-ne la:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center space-x-3 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                  <Mail className="w-5 h-5 text-blue-500" />
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Email</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">it-solutions@dec-it.eu</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                  <Phone className="w-5 h-5 text-blue-500" />
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Telefon</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">+40-(0)259-419805</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                  <MapPin className="w-5 h-5 text-blue-500" />
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Adresă</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Str. Rosiorilor nr. 1, RO-410204 Oradea</p>
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
