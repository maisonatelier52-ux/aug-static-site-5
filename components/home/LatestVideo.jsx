import StoryCard from '@/components/ui/StoryCard';
import SectionHeading from '@/components/ui/SectionHeading';

export default function LatestVideo({ articles }) {
  return (
    <section id="latest-video" className="mt-9">
      <SectionHeading title="Latest" tone="green" />
      <div className="grid grid-cols-5 gap-3 overflow-hidden max-[760px]:flex max-[760px]:snap-x max-[760px]:snap-mandatory max-[760px]:gap-2 max-[760px]:overflow-x-auto max-[760px]:pb-[5px]">
        {articles.map((article) => (
          <div key={article.id} className="max-[760px]:min-w-[55vw] max-[760px]:snap-start">
            <StoryCard article={article} variant="video" />
          </div>
        ))}
      </div>
    </section>
  );
}
