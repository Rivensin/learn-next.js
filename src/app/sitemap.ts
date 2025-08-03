import type { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  const baseUrl = process.env.NEXT_PUBLIC_API_URL 
  const productSlug = ['burnt-cheese-cake','custom-cake','fudgy-brownie','soft-cookies','tiramisu-cake']

  const productUrl = productSlug.map(slug => (
    {
    url: `${baseUrl}/product/${slug}`,
    lastModified,
    changeFrequency : 'monthly' as const,
    priority: 0.8,
    }
  ))

  return [
    {
      url: `${baseUrl}`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/outlet`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/review`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    ...productUrl,
  ]
}