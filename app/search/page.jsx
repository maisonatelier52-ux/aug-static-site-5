import Link from 'next/link';
import StoryCard from '@/components/ui/StoryCard';
import { getArticles } from '@/lib/data';

export const metadata = { title: 'Search' };

export default async function SearchPage({ searchParams }) {
  const { q = '' } = await searchParams;
  const query = q.trim().toLowerCase();

  const results = query
    ? getArticles().filter((article) => {
        const haystack = [article.title, article.dek, article.categoryLabel, article.category]
          .filter(Boolean)
          .join(' ')
          .toLowerCase();
        return haystack.includes(query);
      })
    : [];

  return (
    <main className="mx-auto w-[min(1180px,calc(100%-40px))] py-14 max-[760px]:py-8">
      <header className="mb-10 border-b-2 border-green pb-5">
        <span className="text-xs font-extrabold uppercase tracking-[.14em] text-green">Search</span>
        <h1 className="mt-1.5 text-[clamp(30px,4.5vw,46px)] leading-[1.02] tracking-[-.02em]">
          {query ? `Results for “${q}”` : 'Search The Southern Post'}
        </h1>
        {query && (
          <p className="mt-2 text-[#435058]">
            {results.length} {results.length === 1 ? 'story' : 'stories'} found
          </p>
        )}
      </header>

      {!query && (
        <p className="text-lg text-[#435058]">
          Type a search term into the box at the top of the page to find stories.
        </p>
      )}

      {query && results.length === 0 && (
        <p className="text-lg text-[#435058]">
          No stories matched “{q}”. Try a different word or check the spelling.
        </p>
      )}

      {results.length > 0 && (
        <div className="grid grid-cols-3 gap-[18px] max-[900px]:grid-cols-2 max-[600px]:grid-cols-1">
          {results.map((article) => (
            <StoryCard key={article.id} article={article} variant="card" />
          ))}
        </div>
      )}

      {query && (
        <div className="mt-10">
          <Link href="/" className="text-sm font-extrabold text-green underline underline-offset-4">
            ← Back to home
          </Link>
        </div>
      )}
    </main>
  );
}