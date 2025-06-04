// Simple static CMS for content management
// This can be easily replaced with a headless CMS like Strapi, Contentful, or Sanity

export interface Page {
  id: string
  title: string
  slug: string
  content: string
  meta: {
    description: string
    keywords: string[]
    image?: string
  }
  updatedAt: string
}

export interface Service {
  id: string
  title: string
  description: string
  icon: string
  features: string[]
  benefits: string[]
  slug: string
}

export interface Industry {
  id: string
  name: string
  description: string
  icon: string
  solutions: string[]
  caseStudies: CaseStudy[]
  slug: string
}

export interface CaseStudy {
  id: string
  client: string
  industry: string
  challenge: string
  solution: string
  results: string[]
  testimonial?: {
    text: string
    author: string
    position: string
  }
}

export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  author: string
  publishedAt: string
  tags: string[]
  image?: string
}

// Content repository
class ContentRepository {
  // In a real implementation, this would fetch from a database or API
  // For now, we'll use static data that can be easily migrated

  async getPage(slug: string): Promise<Page | null> {
    // Simulated database fetch
    const pages: Record<string, Page> = {
      'despre': {
        id: '1',
        title: 'Despre DEC-IT',
        slug: 'despre',
        content: 'Content here...',
        meta: {
          description: 'DEC-IT - Lider în soluții IT integrate din 1991',
          keywords: ['DEC-IT', 'despre noi', 'companie IT România']
        },
        updatedAt: new Date().toISOString()
      }
    }

    return pages[slug] || null
  }

  async getServices(): Promise<Service[]> {
    // This would typically come from a database
    return [
      {
        id: '1',
        title: 'Control Acces & Pontaj',
        description: 'Sistem KeyPont pentru gestionarea accesului',
        icon: 'ShieldCheckIcon',
        features: ['RFID/NFC', 'Biometrie', 'Rapoarte timp real'],
        benefits: ['Securitate sporită', 'Automatizare HR', 'Conformitate legală'],
        slug: 'control-acces'
      }
      // Add more services...
    ]
  }

  async getIndustries(): Promise<Industry[]> {
    return [
      {
        id: '1',
        name: 'Hoteluri & Turism',
        description: 'Soluții complete pentru industria ospitalității',
        icon: 'BuildingOfficeIcon',
        solutions: ['Check-in automat', 'Control acces camere', 'Management rezervări'],
        caseStudies: [],
        slug: 'hoteluri'
      }
      // Add more industries...
    ]
  }

  async getBlogPosts(limit?: number): Promise<BlogPost[]> {
    const posts: BlogPost[] = [
      {
        id: '1',
        title: 'Tendințe în Securitate IT pentru 2024',
        slug: 'tendinte-securitate-it-2024',
        excerpt: 'Descoperă cele mai importante tendințe în securitate IT',
        content: 'Full content here...',
        author: 'Admin DEC-IT',
        publishedAt: new Date().toISOString(),
        tags: ['securitate', 'IT', 'tendințe'],
        image: '/images/blog/security-trends.jpg'
      }
    ]

    return limit ? posts.slice(0, limit) : posts
  }

  async updateContent(type: string, id: string, data: any): Promise<boolean> {
    // In a real implementation, this would update the database
    console.log(`Updating ${type} with id ${id}:`, data)
    return true
  }
}

export const cms = new ContentRepository()
