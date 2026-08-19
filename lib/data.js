import articles from '@/json/articel.json';
import authors from '@/json/author.json';

export function getArticles() {
  return [...articles].sort((a, b) => new Date(b.published) - new Date(a.published));
}

export function getArticle(category, slug) {
  return articles.find((article) => article.category === category && article.slug === slug);
}

export function getCategoryArticles(category) {
  return getArticles().filter((article) => article.category === category);
}

export function getAuthor(id) {
  return authors.find((author) => author.id === id);
}

export function getAuthorArticles(id) {
  return getArticles().filter((article) => article.authorId === id);
}

export function withAuthor(article) {
  return { ...article, author: getAuthor(article.authorId) };
}

export { articles, authors };
