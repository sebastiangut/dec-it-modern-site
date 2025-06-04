import Head from 'next/head'

interface SEOProps {
  title: string
  description: string
  keywords?: string[]
  image?: string
  url?: string
  type?: 'website' | 'article'
}

export default function SEO({ 
  title, 
  description, 
  keywords = [], 
  image = '/images/og-default.jpg',
  url = 'https://dec-it.eu',
  type = 'website'
}: SEOProps) {
  const fullTitle = `${title} | DEC-IT - Soluții IT Inteligente`

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords.length > 0 && (
        <meta name="keywords" content={keywords.join(', ')} />
      )}
      <meta name="author" content="DEC-IT" />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="DEC-IT" />
      <meta property="og:locale" content="ro_RO" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <link rel="canonical" href={url} />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'DEC-IT',
            url: 'https://dec-it.eu',
            logo: 'https://dec-it.eu/images/logo.png',
            contactPoint: {
              '@type': 'ContactPoint',
              telephone: '+40-259-419805',
              contactType: 'customer service',
              areaServed: 'RO',
              availableLanguage: 'Romanian'
            },
            sameAs: [
              'https://www.facebook.com/decit',
              'https://www.linkedin.com/company/dec-it'
            ]
          })
        }}
      />
    </Head>
  )
}
