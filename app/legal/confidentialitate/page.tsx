'use client'

import { motion } from 'framer-motion'
import { Shield, Lock, Eye, Users, Database, Mail, Phone, MapPin, Calendar, CheckCircle, AlertTriangle } from 'lucide-react'

export default function ConfidentialitatePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-100 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="w-20 h-20 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-10 h-10 text-green-600 dark:text-green-400" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Politica de <span className="text-green-600 dark:text-green-400">Confidențialitate</span>
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
              <div className="border-l-4 border-green-500 pl-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                  <Shield className="w-6 h-6 text-green-500 mr-3" />
                  1. Introducere
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  DEC S.R.L. ("noi", "nostru" sau "DEC-IT") respectă confidențialitatea
                  vizitatorilor site-ului nostru dec-it.eu. Această politică explică
                  cum colectăm, utilizăm și protejăm informațiile dvs.
                </p>
              </div>

              {/* Section 2 */}
              <div className="border-l-4 border-green-500 pl-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                  <Database className="w-6 h-6 text-green-500 mr-3" />
                  2. Informații pe Care le Colectăm
                </h2>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                    <Users className="w-5 h-5 text-green-500 mr-2" />
                    2.1 Informații Furnizate Direct
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="flex items-center space-x-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">Nume și prenume</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">Adresă de email</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">Număr de telefon</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">Numele companiei</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                    <Eye className="w-5 h-5 text-green-500 mr-2" />
                    2.2 Informații Colectate Automat
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="flex items-center space-x-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                      <AlertTriangle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">Adresa IP</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                      <AlertTriangle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">Tipul de browser</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                      <AlertTriangle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">Paginile vizitate</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                      <AlertTriangle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">Date despre dispozitiv</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 3 */}
              <div className="border-l-4 border-green-500 pl-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                  <Database className="w-6 h-6 text-green-500 mr-3" />
                  3. Cum Utilizăm Informațiile
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  Utilizăm informațiile colectate pentru:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="flex items-center space-x-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Răspunderea la solicitările dvs.</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Îmbunătățirea serviciilor noastre</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Informații despre produse și servicii</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Conformarea cu obligațiile legale</span>
                  </div>
                </div>
              </div>

              {/* Section 4 */}
              <div className="border-l-4 border-green-500 pl-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                  <Lock className="w-6 h-6 text-green-500 mr-3" />
                  4. Partajarea Informațiilor
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  Nu vindem, închiriem sau partajăm informațiile dvs. personale cu
                  terți, cu excepția:
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                    <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Furnizorilor de servicii care ne ajută în operațiuni</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                    <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Când este cerut de lege</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Cu consimțământul dvs. explicit</span>
                  </div>
                </div>
              </div>

              {/* Section 5 */}
              <div className="border-l-4 border-green-500 pl-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                  <Lock className="w-6 h-6 text-green-500 mr-3" />
                  5. Securitatea Datelor
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Implementăm măsuri tehnice și organizatorice pentru a proteja
                  informațiile dvs. împotriva accesului neautorizat, modificării,
                  divulgării sau distrugerii.
                </p>
              </div>

              {/* Section 6 */}
              <div className="border-l-4 border-green-500 pl-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                  <Shield className="w-6 h-6 text-green-500 mr-3" />
                  6. Drepturile Dvs. GDPR
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  Conform GDPR, aveți dreptul să:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="flex items-center space-x-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Accesați datele dvs. personale</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Rectificați datele incorecte</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Ștergeți datele ("dreptul de a fi uitat")</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Portabilitatea datelor</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="mt-12 p-6 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <Mail className="w-6 h-6 text-green-500 mr-3" />
                Contact & DPO
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Pentru întrebări despre această politică sau pentru a vă exercita drepturile, contactați-ne la:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center space-x-3 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                  <Mail className="w-5 h-5 text-green-500" />
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Email General</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">it-solutions@dec-it.eu</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                  <Phone className="w-5 h-5 text-green-500" />
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Telefon</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">+40-(0)259-419805</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                  <Shield className="w-5 h-5 text-green-500" />
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">DPO</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">dpo@dec-it.eu</p>
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
