import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">D</span>
              </div>
              <span className="font-bold text-xl">DEC-IT</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              DEC-IT oferă soluții IT integrate și sisteme de securitate din 1991. 
              Specializați în control acces, ticketing, supraveghere video și automatizare.
            </p>
            <div className="text-gray-400">
              <p>Str. Rosiorilor nr. 1</p>
              <p>RO-410204 Oradea, România</p>
              <p>Tel: +40-(0)259-419805</p>
              <p>Email: it-solutions@dec-it.eu</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Link-uri Rapide</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/despre" className="hover:text-white transition-colors">
                  Despre Noi
                </Link>
              </li>
              <li>
                <Link href="/solutii" className="hover:text-white transition-colors">
                  Soluții
                </Link>
              </li>
              <li>
                <Link href="/industrii" className="hover:text-white transition-colors">
                  Industrii
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/legal/termeni" className="hover:text-white transition-colors">
                  Termeni și Condiții
                </Link>
              </li>
              <li>
                <Link href="/legal/confidentialitate" className="hover:text-white transition-colors">
                  Politica de Confidențialitate
                </Link>
              </li>
              <li>
                <Link href="/legal/cookies" className="hover:text-white transition-colors">
                  Politica de Cookie-uri
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} DEC S.R.L. Toate drepturile rezervate.</p>
        </div>
      </div>
    </footer>
  )
}
