import StoryCard from '@/components/ui/StoryCard';
import SectionHeading from '@/components/ui/SectionHeading';

export default function TopicSection({ title, slug, tone, articles, flip = false }) {
  if (!articles.length) return null;
  return (
    <section className="mt-9">
      <SectionHeading title={title} href={`/${slug}`} tone={tone} />
      <div className="grid grid-cols-[1.12fr_.88fr] gap-6 max-[760px]:block">
        <div className={flip ? 'order-2' : 'order-1'}>
          <StoryCard article={articles[0]} variant="feature" />
        </div>
        <div className={`self-start [&>*:first-child]:pt-0 max-[760px]:static ${flip ? 'order-1' : 'order-2'}`}>
          {articles.slice(1, 6).map((article) => <StoryCard key={article.id} article={article} variant="line" />)}
        </div>
      </div>
    </section>
  );
}
