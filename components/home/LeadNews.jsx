// import StoryCard from '@/components/ui/StoryCard';

// export default function LeadNews({ articles }) {
//   const [lead, ...rest] = articles;
//   return (
//     <section
//       className="grid grid-cols-[minmax(0,1.25fr)_minmax(360px,.75fr)] gap-x-[34px] gap-y-0 border-b-2 border-green pb-[34px] max-[1050px]:grid-cols-[1.15fr_.85fr] max-[760px]:block max-[760px]:pb-[22px]"
//       aria-label="Top stories"
//     >
//       <div className="row-span-2 border-r border-line pr-[34px] max-[760px]:border-0 max-[760px]:p-0">
//         <StoryCard article={lead} variant="hero" priority />
//       </div>
//       <div className="sticky top-[22px] self-start max-[760px]:static max-[760px]:mt-[14px]">
//         <StoryCard article={rest[0]} variant="wide" />
//         <StoryCard article={rest[1]} variant="wide" />
//         <div className="mt-5 grid grid-cols-3 gap-3.5 max-[760px]:block max-[760px]:grid-cols-1 max-[760px]:gap-0">
//           {rest.slice(2, 5).map((article) => <StoryCard key={article.id} article={article} variant="compact" />)}
//         </div>
//       </div>
//       <div className="col-span-full mt-[25px] grid grid-cols-3 gap-[25px] max-[760px]:block max-[760px]:grid-cols-1 max-[760px]:gap-0">
//         {rest.slice(5, 8).map((article) => <StoryCard key={article.id} article={article} variant="line" />)}
//       </div>
//     </section>
//   );
// }

import StoryCard from '@/components/ui/StoryCard';

export default function LeadNews({ articles }) {
  const [lead, ...rest] = articles;
  return (
    <section
      className="grid grid-cols-[minmax(0,1.25fr)_minmax(360px,.75fr)] grid-rows-[auto_auto] gap-x-[34px] gap-y-0 border-b-2 border-green pb-[34px] max-[1050px]:grid-cols-[1.15fr_.85fr] max-[760px]:block max-[760px]:pb-[22px]"
      aria-label="Top stories"
    >
      <div className="row-span-2 border-r border-line pr-[34px] max-[760px]:border-0 max-[760px]:p-0">
        <StoryCard article={lead} variant="hero" priority />
      </div>

      {/* This wrapper spans the same two rows as the hero, so the sticky
          child below only sticks within the hero's height and stops
          before it reaches the "line" cards row underneath. */}
      <div className="row-span-2 max-[760px]:contents">
        <div className="sticky top-[22px] max-[760px]:static max-[760px]:mt-[14px]">
          <StoryCard article={rest[0]} variant="wide" />
          <StoryCard article={rest[1]} variant="wide" />
          <div className="mt-5 grid grid-cols-3 gap-3.5 max-[760px]:block max-[760px]:grid-cols-1 max-[760px]:gap-0">
            {rest.slice(2, 5).map((article) => <StoryCard key={article.id} article={article} variant="compact" />)}
          </div>
        </div>
      </div>

      <div className="col-span-full mt-[25px] grid grid-cols-3 gap-[25px] max-[760px]:block max-[760px]:grid-cols-1 max-[760px]:gap-0">
        {rest.slice(5, 8).map((article) => <StoryCard key={article.id} article={article} variant="line" />)}
      </div>
    </section>
  );
}