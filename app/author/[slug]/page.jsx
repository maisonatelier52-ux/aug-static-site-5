import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import StoryCard from '@/components/ui/StoryCard';
import JsonLd from '@/components/JsonLd';
import { authors, getAuthor, getAuthorArticles } from '@/lib/data';

export function generateStaticParams() { return authors.map((author) => ({ slug: author.id })); }

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const author = getAuthor(slug);
  return author ? { title: author.name, description: author.bio } : {};
}

export default async function AuthorPage({ params }) {
  const { slug } = await params;
  const author = getAuthor(slug);
  if (!author) notFound();
  const stories = getAuthorArticles(slug);
  return (
    <main>
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'Person', name: author.name, jobTitle: author.role, description: author.bio }} />
      <section className="relative overflow-hidden bg-ink py-17 py-[68px] text-white max-[760px]:py-[42px]">
        <div className="absolute inset-0 opacity-[.17] [background:repeating-linear-gradient(115deg,transparent_0_55px,#87b6aa_56px_58px)]" />
        <div className="relative mx-auto grid w-[min(1180px,calc(100%-40px))] grid-cols-[210px_1fr] items-center gap-[42px] max-[760px]:grid-cols-1 max-[760px]:gap-[22px] max-[760px]:text-center">
          <Image
            src={author.image}
            alt={author.name}
            width={210}
            height={210}
            priority
            className="rounded-full border-[7px] border-white shadow-[0_0_0_1px_var(--color-green)] max-[760px]:mx-auto max-[760px]:h-[150px] max-[760px]:w-[150px]"
          />
          <div>
            <span className="text-xs uppercase tracking-[.14em] text-[#88cabc]">Journalist profile</span>
            <h1 className="my-3 text-[clamp(50px,7vw,86px)] leading-[.9] max-[760px]:text-[50px]">{author.name}</h1>
            <h2 className="mb-3.5 text-lg text-[#a7d4ca]">{author.role}</h2>
            <p className="max-w-[620px] text-lg">{author.bio}</p>
            <div className="flex gap-[18px] text-[13px] max-[760px]:justify-center">
              <a href={`mailto:${author.email}`} className="underline underline-offset-4">Email {author.name.split(' ')[0]}</a>
              <span>{author.x}</span>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto w-[min(1180px,calc(100%-40px))] py-[50px] pb-[70px] max-[760px]:py-[34px]">
        <div className="flex items-center gap-4 border-b-2 border-green">
          <span className="text-[52px] text-[#99aca8] max-[760px]:text-[38px]">{String(stories.length).padStart(2, '0')}</span>
          <h2 className="text-[30px] max-[760px]:text-[25px]">Latest stories</h2>
        </div>
        {stories.length ? (
          <div className="max-w-[840px]">
            {stories.map((article) => <StoryCard key={article.id} article={article} variant="feed" />)}
          </div>
        ) : (
          <p>No stories published yet.</p>
        )}
        <Link href="/" className="mt-[38px] inline-block font-bold text-green">← Back to the front page</Link>
      </section>
    </main>
  );
}
