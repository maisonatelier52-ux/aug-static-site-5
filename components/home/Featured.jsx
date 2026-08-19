import StoryCard from '@/components/ui/StoryCard';
import SectionHeading from '@/components/ui/SectionHeading';

export default function Featured({ articles }) {
  return (
    <section className="mt-9">
      <SectionHeading title="Featured" tone="orange" />
      <div className="grid grid-cols-3 gap-4 max-[760px]:grid-cols-1">
        {articles.map((article) => <StoryCard key={article.id} article={article} variant="card" />)}
      </div>
    </section>
  );
}
