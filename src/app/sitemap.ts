import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const sitemapRoutes: MetadataRoute.Sitemap = [
    {
      url: '', // home
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    // {
    //     url: 'tools', // tools
    //     lastModified: new Date(),
    //     changeFrequency: 'daily',
    //     priority: 0.9,
    //   },
    {
      url: 'sba-7a-loan-calculator', // category
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: 'sba-504-loan-calculator', // category
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: 'sba-504-loan-equipment-calculator', 
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: 'sba-504-loan-green-building-calculator', 
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: 'sba-504-loan-real-estate-calculator', 
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: 'sba-504-loan-payment-calculator', 
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: 'va-loan-calculator', 
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: 'va-loan-calculator-texas-veterans', 
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: 'sba-504-loan-calculator-california', 
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: 'sba-504-loan-calculator-florida', 
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: 'sba-504-loan-calculator-new-york', 
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: 'sba-504-loan-calculator-texas', 
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    // {
    //     url: 'article', // article
    //     lastModified: new Date(),
    //     changeFrequency: 'daily',
    //     priority: 0.8,
    //   },
    //   {
    //     url: 'privacy-policy', // privacy-policy
    //     lastModified: new Date(),
    //     changeFrequency: 'daily',
    //     priority: 0.5,
    //   },
    //   {
    //     url: 'terms-of-service', // terms-of-service
    //     lastModified: new Date(),
    //     changeFrequency: 'daily',
    //     priority: 0.5,
    //   },
    //   {
    //     url: 'about', // about
    //     lastModified: new Date(),
    //     changeFrequency: 'daily',
    //     priority: 0.7,
    //   },
  ];

  const sitemapData = sitemapRoutes.flatMap((route) => {
    const routeUrl = route.url === '' ? '' : `/${route.url}`;
    return {
        ...route,
        url: `https://sbaloancalculator.net${routeUrl}`,
      };
    }
  );

  return sitemapData;
}
