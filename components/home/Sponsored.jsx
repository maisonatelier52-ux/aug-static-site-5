import StoryCard from '@/components/ui/StoryCard';
import SectionHeading from '@/components/ui/SectionHeading';

export default function Sponsored({ articles }) {
  return (
    <section id="notices" className="mb-[45px] mt-9">
      <SectionHeading title="Sponsored" tone="green" />
      <div className="grid grid-cols-4 gap-[15px] max-[760px]:grid-cols-2 max-[390px]:grid-cols-1">
        {articles.map((article) => <StoryCard key={article.id} article={article} variant="compact" />)}
      </div>
    </section>
  );
}
