import { articles, authors } from '@/lib/data';
export default function sitemap() {
  const base = 'https://example.com';
  return [
    { url:base, changeFrequency:'daily', priority:1 },
    ...['news','opinion','sport','business','life'].map((category) => ({ url:`${base}/${category}`, changeFrequency:'daily', priority:.8 })),
    ...articles.map((article) => ({ url:`${base}/${article.category}/${article.slug}`, lastModified:article.published, changeFrequency:'weekly', priority:.7 })),
    ...authors.map((author) => ({ url:`${base}/author/${author.id}`, changeFrequency:'weekly', priority:.5 })),
  ];
}
