import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import StoryCard from '@/components/ui/StoryCard';
import JsonLd from '@/components/JsonLd';
import { articles, getCategoryArticles } from '@/lib/data';

const categoryNames = { news: 'News', opinion: 'Opinion', sport: 'Sport', business: 'Business', life: 'Life & Entertainment' };
const categoryIntros = {
  news: 'Reporting that keeps you close to the decisions, people and places shaping our communities.',
  opinion: 'Sharp thinking, considered arguments and distinctive voices from across the island.',
  sport: 'The scores, stories and human moments behind every contest.',
  business: 'Clear reporting on enterprise, work and the changing economy.',
  life: 'Culture, food, music and ideas for a richer everyday life.',
};
const categoryHeroBg = {
  news: 'bg-green',
  opinion: 'bg-[#343238]',
  sport: 'bg-[#283a06]',
  business: 'bg-[#153b51]',
  life: 'bg-[#70302d]',
};

export function generateStaticParams() { return Object.keys(categoryNames).map((category) => ({ category })); }

export async function generateMetadata({ params }) {
  const { category } = await params;
  if (!categoryNames[category]) return {};
  return { title: categoryNames[category], description: categoryIntros[category] };
}

export default async function CategoryPage({ params }) {
  const { category } = await params;
  const items = getCategoryArticles(category);
  if (!categoryNames[category] || !items.length) notFound();
  const [lead, ...rest] = items;
  const fallback = articles.filter((article) => article.category !== category).slice(0, 3);

  return (
    <main className="pb-[60px]">
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'CollectionPage', name: categoryNames[category], description: categoryIntros[category] }} />
      <header className={`relative overflow-hidden py-12 pb-[42px] text-white ${categoryHeroBg[category] ?? 'bg-green'} after:absolute after:-right-20 after:-top-[250px] after:h-[420px] after:w-[420px] after:rounded-full after:border after:border-white/18 after:content-[''] max-[760px]:py-[34px]`}>
        <div className="relative mx-auto w-[min(1180px,calc(100%-40px))]">
          {/* <span className="text-xs uppercase tracking-[.15em]">Section</span> */}
          <h1 className="my-[18px] mb-[15px] text-[clamp(56px,9vw,112px)] leading-[.86] tracking-[-.055em] max-[760px]:text-[58px]">{categoryNames[category]}</h1>
          <p className="m-0 max-w-[660px] text-xl max-[760px]:text-base">{categoryIntros[category]}</p>
        </div>
      </header>
      <div className="mx-auto mt-[5px] w-[min(1180px,calc(100%-40px))]">
        <section className="grid min-h-[430px] grid-cols-[1.35fr_.65fr] bg-cream max-[760px]:block">
          <Link className="relative min-h-[430px] max-[760px]:block max-[760px]:aspect-[1.25] max-[760px]:min-h-0" href={`/${lead.category}/${lead.slug}`}>
            <Image src={lead.image} alt="" fill priority sizes="(max-width: 760px) 100vw, 68vw" className="object-cover" />
          </Link>
          <div className="flex flex-col justify-center p-10 max-[760px]:p-6">
            <span className="mb-[7px] inline-block text-xs font-extrabold uppercase tracking-[.08em] text-green">Top story</span>
            <h2 className="my-1.5 mb-3.5 text-[clamp(32px,4vw,50px)] leading-[1.02] max-[760px]:text-[32px]">
              <Link href={`/${lead.category}/${lead.slug}`}>{lead.title}</Link>
            </h2>
            <p className="text-[17px]">{lead.dek}</p>
            <span className="text-xs uppercase text-muted">{lead.readTime}</span>
          </div>
        </section>
        <div className="mt-[50px] grid grid-cols-[1fr_320px] gap-[60px] max-[1050px]:grid-cols-[1fr_280px] max-[1050px]:gap-[35px] max-[760px]:mt-[34px] max-[760px]:block">
          <section>
            <h2 className="m-0 border-b-2 border-green pb-2.5 text-[28px]">Latest in {categoryNames[category]}</h2>
            {rest.map((article) => <StoryCard key={article.id} article={article} variant="feed" />)}
          </section>
          <aside className="sticky top-[22px] self-start border-t-[7px] border-ink bg-paper p-[18px] max-[760px]:static max-[760px]:mt-[35px]">
            <span className="text-xs font-bold uppercase tracking-[.12em]">Also in the Journal</span>
            {fallback.map((article) => <StoryCard key={article.id} article={article} variant="compact" />)}
          </aside>
        </div>
      </div>
    </main>
  );
}
