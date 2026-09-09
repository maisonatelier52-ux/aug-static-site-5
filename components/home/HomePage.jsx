import Featured from './Featured';
import LatestVideo from './LatestVideo';
import LeadNews from './LeadNews';
import Newsletter from './Newsletter';
import OpinionStrip from './OpinionStrip';
import Sponsored from './Sponsored';
import TopicSection from './TopicSection';

export default function HomePage({ articles, authors }) {
  const byCategory = (category) => articles.filter((article) => article.category === category);
  return (
    <main className="mx-auto w-[min(1180px,calc(100%-40px))] pt-[34px] max-[760px]:pt-[15px]">
      <LeadNews articles={articles.slice(0, 9)} />
      <LatestVideo articles={articles.filter((article) => article.video).slice(0, 5)} />
      {/* <OpinionStrip authors={authors} /> */}
      <TopicSection title="Sport" slug="sport" tone="lime" articles={byCategory('sport')} />
      <Featured articles={articles.filter((article) => article.featured).slice(0, 3)} />
      <TopicSection title="Politics" slug="news" tone="green" articles={byCategory('news')} flip />
      <TopicSection title="Business" slug="business" tone="blue" articles={byCategory('business')} />
      <TopicSection title="Life & Entertainment" slug="life" tone="red" articles={byCategory('life')} flip />
      <Newsletter />
      <Sponsored articles={articles.slice(4, 8)} />
    </main>
  );
}
