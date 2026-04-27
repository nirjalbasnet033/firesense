import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  return [
    { url: `${base}/product-page`, lastModified: new Date(), priority: 1.0 },
    { url: `${base}/sign-up`, lastModified: new Date(), priority: 0.8 },
    { url: `${base}/login`, lastModified: new Date(), priority: 0.5 },
  ];
}