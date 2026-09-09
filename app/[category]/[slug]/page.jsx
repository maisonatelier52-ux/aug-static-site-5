// // import Image from 'next/image';
// // import Link from 'next/link';
// // import { notFound } from 'next/navigation';
// // import JsonLd from '@/components/JsonLd';
// // import StoryCard from '@/components/ui/StoryCard';
// // import { articles, getArticle, getArticles, getAuthor } from '@/lib/data';

// // export function generateStaticParams() { return articles.map((article) => ({ category: article.category, slug: article.slug })); }

// // export async function generateMetadata({ params }) {
// //   const { category, slug } = await params;
// //   const article = getArticle(category, slug);
// //   return article ? { title: article.title, description: article.dek, openGraph: { type: 'article', title: article.title, description: article.dek, images: [article.image], publishedTime: article.published } } : {};
// // }

// // const toId = (heading) => heading.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

// // export default async function ArticlePage({ params }) {
// //   const { category, slug } = await params;
// //   const article = getArticle(category, slug);
// //   if (!article) notFound();
// //   const author = getAuthor(article.authorId);
// //   const more = getArticles().filter((item) => item.id !== article.id && item.category === article.category).slice(0, 3);
// //   const published = new Date(article.published).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
// //   return (
// //     <main className="bg-white">
// //       <JsonLd data={{ '@context': 'https://schema.org', '@type': 'NewsArticle', headline: article.title, description: article.dek, image: [article.image], datePublished: article.published, author: { '@type': 'Person', name: author.name }, publisher: { '@type': 'Organization', name: 'The Northern Journal' } }} />
// //       <header className="border-b border-[#d8d3c9] bg-cream py-16 pb-[54px] max-[760px]:py-[38px] max-[760px]:pb-[30px]">
// //         <div className="mx-auto grid w-[min(1180px,calc(100%-40px))] grid-cols-[minmax(0,860px)_1fr] gap-[50px] max-[760px]:block">
// //           <div>
// //             <Link className="inline-block rounded-[20px] border border-green px-3.5 py-[7px] text-[11px] font-extrabold uppercase tracking-[.12em] text-green" href={`/${article.category}`}>
// //               {article.categoryLabel}
// //             </Link>
// //             <h1 className="my-[18px] mb-5 text-[clamp(48px,7vw,86px)] leading-[.94] tracking-[-.045em] max-[760px]:text-[44px]">{article.title}</h1>
// //             <p className="max-w-[750px] text-2xl leading-[1.35] text-[#435058] max-[760px]:text-lg">{article.dek}</p>
// //             <div className="mt-7 flex items-center gap-3">
// //               <Image src={author.image} alt="" width={52} height={52} className="rounded-full" />
// //               <div className="text-sm">
// //                 By <Link href={`/author/${author.id}`} className="font-extrabold underline underline-offset-[3px]">{author.name}</Link>
// //                 <span className="mt-[3px] block text-xs text-muted">{published} · {article.readTime}</span>
// //               </div>
// //             </div>
// //           </div>
// //           <div className="flex flex-col justify-between self-stretch border-l border-[#c9c2b4] pl-7 text-green max-[760px]:hidden">
// //             <span className="text-[11px] tracking-[.16em]">THE BIG READ</span>
// //             <strong className="text-[92px] font-normal leading-[.85] text-[#cfc8bb]">{String(article.id).padStart(2, '0')}</strong>
// //           </div>
// //         </div>
// //       </header>
// //       <div className="relative mx-auto mt-9 h-[min(68vw,690px)] w-[min(1180px,calc(100%-40px))] max-[760px]:mt-0 max-[760px]:h-[67vw] max-[760px]:w-full">
// //         <Image src={article.image} alt="" fill priority sizes="(max-width: 760px) 100vw, 1180px" className="object-cover" />
// //       </div>
// //       <div className="mx-auto grid w-[min(1180px,calc(100%-40px))] grid-cols-[270px_minmax(0,700px)] justify-center gap-20 pb-[70px] pt-[54px] max-[760px]:flex max-[760px]:flex-col max-[760px]:gap-7 max-[760px]:pt-7">
// //         <aside className="sticky top-[22px] self-start border-t-[5px] border-green bg-paper p-5 max-[760px]:static max-[760px]:order-first max-[760px]:w-full max-[760px]:p-4">
// //           <span className="text-xs font-extrabold uppercase tracking-[.14em]">In this story</span>
// //           <nav className="mt-[13px] grid max-[760px]:grid-cols-2 max-[760px]:gap-x-[15px] max-[390px]:grid-cols-1">
// //             {article.content.map((section, index) => (
// //               <a key={section.heading} href={`#${toId(section.heading)}`} className="grid grid-cols-[28px_1fr] gap-2 border-t border-[#d7e0de] py-3 text-sm">
// //                 <b className="text-[11px] text-green">0{index + 1}</b>{section.heading}
// //               </a>
// //             ))}
// //           </nav>
// //           <div className="mt-1.5 flex items-center gap-2 border-t border-[#d7e0de] pt-4">
// //             <span className="mr-auto text-xs uppercase">Share</span>
// //             <button aria-label="Share on X" className="h-[30px] w-[30px] cursor-pointer rounded-full border border-[#9daaa7] bg-white">X</button>
// //             <button aria-label="Share on Facebook" className="h-[30px] w-[30px] cursor-pointer rounded-full border border-[#9daaa7] bg-white">f</button>
// //             <button aria-label="Copy link" className="h-[30px] w-[30px] cursor-pointer rounded-full border border-[#9daaa7] bg-white">↗</button>
// //           </div>
// //         </aside>
// //         <article className="font-serif text-xl leading-[1.7] max-[760px]:text-lg max-[760px]:leading-[1.62]">
// //           <p className="mb-6 first-letter:float-left first-letter:pr-2.5 first-letter:pt-3.5 first-letter:text-[88px] first-letter:font-bold first-letter:leading-[.73] first-letter:text-green">
// //             {article.content[0].paragraphs[0]}
// //           </p>
// //           <section className="my-10 bg-green px-[34px] py-[30px] text-white max-[760px]:my-[30px] max-[760px]:px-[21px] max-[760px]:py-6">
// //             <span className="text-[11px] uppercase tracking-[.14em] text-[#b8e2d9]">At a glance</span>
// //             <h2 className="my-[5px] mb-3 text-[34px] max-[760px]:text-[29px]">Key takeaways</h2>
// //             <ul className="m-0 list-none p-0">
// //               {article.takeaways.map((point) => (
// //                 <li key={point} className="relative border-t border-white/25 py-2.5 pl-7">
// //                   <span className="absolute left-0 font-black text-[#d7e96c]">✓</span>
// //                   {point}
// //                 </li>
// //               ))}
// //             </ul>
// //           </section>
// //           {article.content.map((section, index) => (
// //             <section id={toId(section.heading)} key={section.heading} className="scroll-mt-6 pt-[22px] [&:not(:first-child)]:mb-6">
// //               <span className="text-xs font-extrabold tracking-[.14em] text-green">0{index + 1}</span>
// //               <h2 className="my-[3px] mb-5 text-[40px] leading-[1.05] max-[760px]:text-[32px]">{section.heading}</h2>
// //               {section.paragraphs.map((paragraph, pIndex) => (index === 0 && pIndex === 0) ? null : <p key={paragraph} className="mb-6">{paragraph}</p>)}
// //             </section>
// //           ))}
// //           <div className="mt-[35px] text-center text-green">◆</div>
// //         </article>
// //       </div>
// //       <section className="mx-auto w-[min(1180px,calc(100%-40px))] border-t-2 border-green pb-[65px] pt-3.5">
// //         <h2 className="text-[23px]">More from {article.categoryLabel}</h2>
// //         <div className="grid grid-cols-3 gap-[18px] max-[760px]:grid-cols-1">
// //           {more.map((item) => <StoryCard key={item.id} article={item} variant="card" />)}
// //         </div>
// //       </section>
// //     </main>
// //   );
// // }


// // import Image from 'next/image';
// // import Link from 'next/link';
// // import { notFound } from 'next/navigation';
// // import JsonLd from '@/components/JsonLd';
// // import ReadingProgress from '@/components/ReadingProgress';
// // import StoryCard from '@/components/ui/StoryCard';
// // import { articles, getArticle, getArticles, getAuthor } from '@/lib/data';

// // export function generateStaticParams() { return articles.map((article) => ({ category: article.category, slug: article.slug })); }

// // export async function generateMetadata({ params }) {
// //   const { category, slug } = await params;
// //   const article = getArticle(category, slug);
// //   return article ? { title: article.title, description: article.dek, openGraph: { type: 'article', title: article.title, description: article.dek, images: [article.image], publishedTime: article.published } } : {};
// // }

// // const toId = (heading) => heading.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

// // export default async function ArticlePage({ params }) {
// //   const { category, slug } = await params;
// //   const article = getArticle(category, slug);
// //   if (!article) notFound();
// //   const author = getAuthor(article.authorId);
// //   const more = getArticles().filter((item) => item.id !== article.id && item.category === article.category).slice(0, 3);
// //   const published = new Date(article.published).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
// //   const pullQuote = article.takeaways?.[0];

// //   return (
// //     <main className="bg-white">
// //       <JsonLd data={{ '@context': 'https://schema.org', '@type': 'NewsArticle', headline: article.title, description: article.dek, image: [article.image], datePublished: article.published, author: { '@type': 'Person', name: author.name }, publisher: { '@type': 'Organization', name: 'The Northern Journal' } }} />

// //       <ReadingProgress />

// //       {/* Hero: text + image side by side */}
// //       <header className="border-b border-[#d8d3c9] bg-cream py-14 max-[760px]:py-8">
// //         <div className="mx-auto grid w-[min(1180px,calc(100%-40px))] grid-cols-[minmax(0,620px)_1fr] items-center gap-[56px] max-[900px]:grid-cols-1 max-[900px]:gap-8">

// //           <div className="max-[900px]:order-2">
// //             <Link className="inline-block rounded-[20px] border border-green px-3.5 py-[7px] text-[11px] font-extrabold uppercase tracking-[.12em] text-green" href={`/${article.category}`}>
// //               {article.categoryLabel}
// //             </Link>
// //             <h1 className="my-[18px] mb-5 text-[clamp(38px,5.2vw,62px)] leading-[.98] tracking-[-.03em] max-[760px]:text-[34px]">{article.title}</h1>
// //             <p className="max-w-[560px] text-xl leading-[1.45] text-[#435058] max-[760px]:text-base">{article.dek}</p>
// //             <div className="mt-7 flex items-center gap-3">
// //               <Image src={author.image} alt="" width={48} height={48} className="rounded-md h-[50px] w-[40px] " />
// //               <div className="text-sm">
// //                 By <Link href={`/author/${author.id}`} className="font-extrabold underline underline-offset-[3px]">{author.name}</Link>
// //                 <span className="mt-[3px] block text-xs text-muted">{published} · {article.readTime}</span>
// //               </div>
// //             </div>
// //           </div>

// //           {/* Image now sits here, replacing the old "THE BIG READ / 01" filler */}
// //           <div className="relative max-[900px]:order-1">
// //             <div className="absolute -inset-3 -z-10 rounded-[22px] border border-green/25 max-[760px]:hidden" aria-hidden="true" />
// //             {/* <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[18px] shadow-[0_18px_40px_rgba(11,50,45,.18)] max-[900px]:aspect-[16/10]">
// //               <Image src={article.image} alt="" fill priority sizes="(max-width: 900px) 100vw, 560px" className="object-cover" />
// //             </div> */}
// //             <div className="w-full overflow-hidden rounded-[5px] shadow-[0_18px_40px_rgba(11,50,45,.18)]">
// //               <Image
// //                 src={article.image}
// //                 alt=""
// //                 width={1200}
// //                 height={800}
// //                 priority
// //                 sizes="(max-width: 900px) 100vw, 560px"
// //                 className="w-full h-auto object-cover"
// //               />
// //             </div>
// //             {/* <div className="absolute bottom-3 left-3 rounded-full bg-green px-3.5 py-[7px] text-[11px] font-extrabold uppercase tracking-[.1em] text-white shadow-md">
// //               {article.readTime}
// //             </div> */}
// //           </div>
// //         </div>
// //       </header>

// //       <div className="mx-auto grid w-[min(1180px,calc(100%-40px))] grid-cols-[270px_minmax(0,700px)] justify-center gap-20 pb-[70px] pt-[54px] max-[760px]:flex max-[760px]:flex-col max-[760px]:gap-7 max-[760px]:pt-7">
// //         <aside className="sticky top-[15px] self-start rounded-2xl border-t-[5px] border-green bg-paper p-5 max-[760px]:static max-[760px]:order-first max-[760px]:w-full max-[760px]:p-4">
// //           <span className="text-xs font-extrabold uppercase tracking-[.14em]">In this story</span>
// //           <nav className="mt-[13px] grid max-[760px]:grid-cols-2 max-[760px]:gap-x-[15px] max-[390px]:grid-cols-1">
// //             {article.content.map((section, index) => (
// //               <a key={section.heading} href={`#${toId(section.heading)}`} className="grid grid-cols-[28px_1fr] gap-2 rounded-lg border-t border-[#d7e0de] py-3 text-sm transition-colors hover:bg-white">
// //                 <b className="text-[11px] text-green">0{index + 1}</b>{section.heading}
// //               </a>
// //             ))}
// //           </nav>
// //           <div className="mt-1.5 flex items-center gap-2 border-t border-[#d7e0de] pt-4">
// //             <span className="mr-auto text-xs uppercase">Share</span>
// //             <button aria-label="Share on X" className="h-[30px] w-[30px] cursor-pointer rounded-full border border-[#9daaa7] bg-white transition-colors hover:border-green hover:text-green">X</button>
// //             <button aria-label="Share on Facebook" className="h-[30px] w-[30px] cursor-pointer rounded-full border border-[#9daaa7] bg-white transition-colors hover:border-green hover:text-green">f</button>
// //             <button aria-label="Copy link" className="h-[30px] w-[30px] cursor-pointer rounded-full border border-[#9daaa7] bg-white transition-colors hover:border-green hover:text-green">↗</button>
// //           </div>
// //         </aside>

// //         <article className="font-serif text-xl leading-[1.7] max-[760px]:text-lg max-[760px]:leading-[1.62]">
// //           <p className="mb-6 first-letter:float-left first-letter:pr-2.5 first-letter:pt-3.5 first-letter:text-[88px] first-letter:font-bold first-letter:leading-[.73] first-letter:text-green">
// //             {article.content[0].paragraphs[0]}
// //           </p>

// //           <section className="my-10 bg-green px-[34px] py-[30px] text-white max-[760px]:my-[30px] max-[760px]:px-[21px] max-[760px]:py-6">
// //             <span className="text-[11px] uppercase tracking-[.14em] text-[#b8e2d9]">At a glance</span>
// //             <h2 className="my-[5px] mb-3 text-[34px] max-[760px]:text-[29px]">Key takeaways</h2>
// //             <ul className="m-0 list-none p-0">
// //               {article.takeaways.map((point) => (
// //                 <li key={point} className="relative border-t border-white/25 py-2.5 pl-7">
// //                   <span className="absolute left-0 font-black text-[#d7e96c]">✓</span>
// //                   {point}
// //                 </li>
// //               ))}
// //             </ul>
// //           </section>

// //           {article.content.map((section, index) => (
// //             <section id={toId(section.heading)} key={section.heading} className="scroll-mt-6 pt-[22px] [&:not(:first-child)]:mb-6">
// //               <span className="text-xs font-extrabold tracking-[.14em] text-green">0{index + 1}</span>
// //               <h2 className="my-[3px] mb-5 text-[40px] leading-[1.05] max-[760px]:text-[32px]">{section.heading}</h2>
// //               {section.paragraphs.map((paragraph, pIndex) => (index === 0 && pIndex === 0) ? null : <p key={paragraph} className="mb-6">{paragraph}</p>)}

// //               {index === 0 && pullQuote && (
// //                 <blockquote className="my-10 border-l-4 border-green pl-6 text-[28px] font-normal italic leading-[1.35] text-[#1c2b28] max-[760px]:text-2xl">
// //                   “{pullQuote}”
// //                 </blockquote>
// //               )}
// //             </section>
// //           ))}

// //           <div className="mt-[35px] text-center text-green">◆</div>
// //         </article>
// //       </div>

// //       <section className="mx-auto w-[min(1180px,calc(100%-40px))] border-t-2 border-green pb-[65px] pt-3.5">
// //         <div className="flex items-baseline justify-between">
// //           <h2 className="text-[23px]">More from {article.categoryLabel}</h2>
// //           <Link href={`/${article.category}`} className="text-sm font-extrabold text-green underline underline-offset-4">View all →</Link>
// //         </div>
// //         <div className="grid grid-cols-3 gap-[18px] max-[760px]:grid-cols-1">
// //           {more.map((item) => <StoryCard key={item.id} article={item} variant="card" />)}
// //         </div>
// //       </section>
// //     </main>
// //   );
// // }

// import Image from 'next/image';
// import Link from 'next/link';
// import { notFound } from 'next/navigation';
// import JsonLd from '@/components/JsonLd';
// import ReadingProgress from '@/components/ReadingProgress';
// import StoryCard from '@/components/ui/StoryCard';
// import { articles, getArticle, getArticles, getAuthor } from '@/lib/data';

// export function generateStaticParams() { return articles.map((article) => ({ category: article.category, slug: article.slug })); }

// export async function generateMetadata({ params }) {
//   const { category, slug } = await params;
//   const article = getArticle(category, slug);
//   return article ? { title: article.title, description: article.dek, openGraph: { type: 'article', title: article.title, description: article.dek, images: [article.image], publishedTime: article.published } } : {};
// }

// const toId = (heading) => heading.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

// export default async function ArticlePage({ params }) {
//   const { category, slug } = await params;
//   const article = getArticle(category, slug);
//   if (!article) notFound();
//   const author = getAuthor(article.authorId);
//   const more = getArticles().filter((item) => item.id !== article.id && item.category === article.category).slice(0, 3);
//   const published = new Date(article.published).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
//   const pullQuote = article.takeaways?.[0];

//   return (
//     <main className="bg-white">
//       <JsonLd data={{ '@context': 'https://schema.org', '@type': 'NewsArticle', headline: article.title, description: article.dek, image: [article.image], datePublished: article.published, author: { '@type': 'Person', name: author.name }, publisher: { '@type': 'Organization', name: 'The Northern Journal' } }} />

//       <ReadingProgress />

//       {/* Hero: text + image side by side */}
//       <header className="border-b border-[#d8d3c9] bg-cream py-14 max-[760px]:py-8">
//         <div className="mx-auto grid w-[min(1180px,calc(100%-40px))] grid-cols-[minmax(0,620px)_1fr] items-center gap-[56px] max-[900px]:grid-cols-1 max-[900px]:gap-8">

//           <div className="max-[900px]:order-2">
//             <Link className="inline-block rounded-[20px] border border-green px-3.5 py-[7px] text-[11px] font-extrabold uppercase tracking-[.12em] text-green" href={`/${article.category}`}>
//               {article.categoryLabel}
//             </Link>
//             <h1 className="my-[18px] mb-5 text-[clamp(38px,5.2vw,62px)] leading-[.98] tracking-[-.03em] max-[760px]:text-[34px]">{article.title}</h1>
//             <p className="max-w-[560px] text-xl leading-[1.45] text-[#435058] max-[760px]:text-base">{article.dek}</p>
//             <div className="mt-7 flex items-center gap-3">
//               <Image src={author.image} alt="" width={48} height={48} className="rounded-md h-[50px] w-[40px] " />
//               <div className="text-sm">
//                 By <Link href={`/author/${author.id}`} className="font-extrabold underline underline-offset-[3px]">{author.name}</Link>
//                 <span className="mt-[3px] block text-xs text-muted">{published} · {article.readTime}</span>
//               </div>
//             </div>
//           </div>

//           {/* Image now sits here, replacing the old "THE BIG READ / 01" filler.
//               Fixed aspect-ratio box + fill so every article's hero image
//               renders at the same size regardless of its source dimensions. */}
//           <div className="relative max-[900px]:order-1">
//             <div className="absolute -inset-3 -z-10 rounded-[22px] border border-green/25 max-[760px]:hidden" aria-hidden="true" />
//             <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[5px] shadow-[0_18px_40px_rgba(11,50,45,.18)] max-[900px]:aspect-[16/10]">
//               <Image
//                 src={article.image}
//                 alt=""
//                 fill
//                 priority
//                 sizes="(max-width: 900px) 100vw, 560px"
//                 className="object-cover"
//               />
//             </div>
//           </div>
//         </div>
//       </header>

//       <div className="mx-auto grid w-[min(1180px,calc(100%-40px))] grid-cols-[270px_minmax(0,700px)] justify-center gap-20 pb-[70px] pt-[54px] max-[760px]:flex max-[760px]:flex-col max-[760px]:gap-7 max-[760px]:pt-7">
//         <aside className="sticky top-[15px] self-start rounded-2xl border-t-[5px] border-green bg-paper p-5 max-[760px]:static max-[760px]:order-first max-[760px]:w-full max-[760px]:p-4">
//           <span className="text-xs font-extrabold uppercase tracking-[.14em]">In this story</span>
//           <nav className="mt-[13px] grid max-[760px]:grid-cols-2 max-[760px]:gap-x-[15px] max-[390px]:grid-cols-1">
//             {article.content.map((section, index) => (
//               <a key={section.heading} href={`#${toId(section.heading)}`} className="grid grid-cols-[28px_1fr] gap-2 rounded-lg border-t border-[#d7e0de] py-3 text-sm transition-colors hover:bg-white">
//                 <b className="text-[11px] text-green">0{index + 1}</b>{section.heading}
//               </a>
//             ))}
//           </nav>
//           <div className="mt-1.5 flex items-center gap-2 border-t border-[#d7e0de] pt-4">
//             <span className="mr-auto text-xs uppercase">Share</span>
//             <button aria-label="Share on X" className="h-[30px] w-[30px] cursor-pointer rounded-full border border-[#9daaa7] bg-white transition-colors hover:border-green hover:text-green">X</button>
//             <button aria-label="Share on Facebook" className="h-[30px] w-[30px] cursor-pointer rounded-full border border-[#9daaa7] bg-white transition-colors hover:border-green hover:text-green">f</button>
//             <button aria-label="Copy link" className="h-[30px] w-[30px] cursor-pointer rounded-full border border-[#9daaa7] bg-white transition-colors hover:border-green hover:text-green">↗</button>
//           </div>
//         </aside>

//         <article className="font-serif text-xl leading-[1.7] max-[760px]:text-lg max-[760px]:leading-[1.62]">
//           <p className="mb-6 first-letter:float-left first-letter:pr-2.5 first-letter:pt-3.5 first-letter:text-[88px] first-letter:font-bold first-letter:leading-[.73] first-letter:text-green">
//             {article.content[0].paragraphs[0]}
//           </p>

//           <section className="my-10 bg-green px-[34px] py-[30px] text-white max-[760px]:my-[30px] max-[760px]:px-[21px] max-[760px]:py-6">
//             <span className="text-[11px] uppercase tracking-[.14em] text-[#b8e2d9]">At a glance</span>
//             <h2 className="my-[5px] mb-3 text-[34px] max-[760px]:text-[29px]">Key takeaways</h2>
//             <ul className="m-0 list-none p-0">
//               {article.takeaways.map((point) => (
//                 <li key={point} className="relative border-t border-white/25 py-2.5 pl-7">
//                   <span className="absolute left-0 font-black text-[#d7e96c]">✓</span>
//                   {point}
//                 </li>
//               ))}
//             </ul>
//           </section>

//           {article.content.map((section, index) => (
//             <section id={toId(section.heading)} key={section.heading} className="scroll-mt-6 pt-[22px] [&:not(:first-child)]:mb-6">
//               <span className="text-xs font-extrabold tracking-[.14em] text-green">0{index + 1}</span>
//               <h2 className="my-[3px] mb-5 text-[40px] leading-[1.05] max-[760px]:text-[32px]">{section.heading}</h2>
//               {section.paragraphs.map((paragraph, pIndex) => (index === 0 && pIndex === 0) ? null : <p key={paragraph} className="mb-6">{paragraph}</p>)}

//               {index === 0 && pullQuote && (
//                 <blockquote className="my-10 border-l-4 border-green pl-6 text-[28px] font-normal italic leading-[1.35] text-[#1c2b28] max-[760px]:text-2xl">
//                   “{pullQuote}”
//                 </blockquote>
//               )}
//             </section>
//           ))}

//           <div className="mt-[35px] text-center text-green">◆</div>
//         </article>
//       </div>

//       <section className="mx-auto w-[min(1180px,calc(100%-40px))] border-t-2 border-green pb-[65px] pt-3.5">
//         <div className="flex items-baseline justify-between">
//           <h2 className="text-[23px]">More from {article.categoryLabel}</h2>
//           <Link href={`/${article.category}`} className="text-sm font-extrabold text-green underline underline-offset-4">View all →</Link>
//         </div>
//         <div className="grid grid-cols-3 gap-[18px] max-[760px]:grid-cols-1">
//           {more.map((item) => <StoryCard key={item.id} article={item} variant="card" />)}
//         </div>
//       </section>
//     </main>
//   );
// }

import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import JsonLd from '@/components/JsonLd';
import ReadingProgress from '@/components/ReadingProgress';
import StoryCard from '@/components/ui/StoryCard';
import { articles, getArticle, getArticles, getAuthor } from '@/lib/data';
import { normalizeImageSrc } from '@/lib/image';

export function generateStaticParams() { return articles.map((article) => ({ category: article.category, slug: article.slug })); }

export async function generateMetadata({ params }) {
  const { category, slug } = await params;
  const article = getArticle(category, slug);
  return article ? { title: article.title, description: article.dek, openGraph: { type: 'article', title: article.title, description: article.dek, images: [normalizeImageSrc(article.image)], publishedTime: article.published } } : {};
}

const toId = (heading) => heading.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

export default async function ArticlePage({ params }) {
  const { category, slug } = await params;
  const article = getArticle(category, slug);
  if (!article) notFound();
  const author = getAuthor(article.authorId);
  const more = getArticles().filter((item) => item.id !== article.id && item.category === article.category).slice(0, 3);
  const published = new Date(article.published).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
  const pullQuote = article.takeaways?.[0];
  const articleImageSrc = normalizeImageSrc(article.image);
  const authorImageSrc = normalizeImageSrc(author.image);

  return (
    <main className="bg-white">
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'NewsArticle', headline: article.title, description: article.dek, image: [articleImageSrc], datePublished: article.published, author: { '@type': 'Person', name: author.name }, publisher: { '@type': 'Organization', name: 'The Northern Journal' } }} />

      <ReadingProgress />

      {/* Hero: text + image side by side */}
      <header className="border-b border-[#d8d3c9] bg-cream py-14 max-[760px]:py-8">
        <div className="mx-auto grid w-[min(1180px,calc(100%-40px))] grid-cols-[minmax(0,620px)_1fr] items-center gap-[56px] max-[900px]:grid-cols-1 max-[900px]:gap-8">

          <div className="max-[900px]:order-2">
            <Link className="inline-block rounded-[20px] border border-green px-3.5 py-[7px] text-[11px] font-extrabold uppercase tracking-[.12em] text-green" href={`/${article.category}`}>
              {article.categoryLabel}
            </Link>
            <h1 className="my-[18px] mb-5 text-[clamp(38px,5.2vw,62px)] leading-[.98] tracking-[-.03em] max-[760px]:text-[34px]">{article.title}</h1>
            <p className="max-w-[560px] text-xl leading-[1.45] text-[#435058] max-[760px]:text-base">{article.dek}</p>
            <div className="mt-7 flex items-center gap-3">
              <Image src={authorImageSrc} alt="" width={48} height={48} className="rounded-md h-[50px] w-[40px] " />
              <div className="text-sm">
                By <Link href={`/author/${author.id}`} className="font-extrabold underline underline-offset-[3px]">{author.name}</Link>
                <span className="mt-[3px] block text-xs text-muted">{published} · {article.readTime}</span>
              </div>
            </div>
          </div>

          {/* Image now sits here, replacing the old "THE BIG READ / 01" filler.
              Fixed aspect-ratio box + fill so every article's hero image
              renders at the same size regardless of its source dimensions. */}
          <div className="relative max-[900px]:order-1">
            <div className="absolute -inset-3 -z-10 rounded-[22px] border border-green/25 max-[760px]:hidden" aria-hidden="true" />
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[5px] shadow-[0_18px_40px_rgba(11,50,45,.18)] max-[900px]:aspect-[16/10]">
              <Image
                src={articleImageSrc}
                alt=""
                fill
                priority
                sizes="(max-width: 900px) 100vw, 560px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto grid w-[min(1180px,calc(100%-40px))] grid-cols-[270px_minmax(0,700px)] justify-center gap-20 pb-[70px] pt-[54px] max-[760px]:flex max-[760px]:flex-col max-[760px]:gap-7 max-[760px]:pt-7">
        <aside className="sticky top-[15px] self-start rounded-2xl border-t-[5px] border-green bg-paper p-5 max-[760px]:static max-[760px]:order-first max-[760px]:w-full max-[760px]:p-4">
          <span className="text-xs font-extrabold uppercase tracking-[.14em]">In this story</span>
          <nav className="mt-[13px] grid max-[760px]:grid-cols-2 max-[760px]:gap-x-[15px] max-[390px]:grid-cols-1">
            {article.content.map((section, index) => (
              <a key={section.heading} href={`#${toId(section.heading)}`} className="grid grid-cols-[28px_1fr] gap-2 rounded-lg border-t border-[#d7e0de] py-3 text-sm transition-colors hover:bg-white">
                <b className="text-[11px] text-green">0{index + 1}</b>{section.heading}
              </a>
            ))}
          </nav>
          <div className="mt-1.5 flex items-center gap-2 border-t border-[#d7e0de] pt-4">
            <span className="mr-auto text-xs uppercase">Share</span>
            <button aria-label="Share on X" className="h-[30px] w-[30px] cursor-pointer rounded-full border border-[#9daaa7] bg-white transition-colors hover:border-green hover:text-green">X</button>
            <button aria-label="Share on Facebook" className="h-[30px] w-[30px] cursor-pointer rounded-full border border-[#9daaa7] bg-white transition-colors hover:border-green hover:text-green">f</button>
            <button aria-label="Copy link" className="h-[30px] w-[30px] cursor-pointer rounded-full border border-[#9daaa7] bg-white transition-colors hover:border-green hover:text-green">↗</button>
          </div>
        </aside>

        <article className="font-serif text-xl leading-[1.7] max-[760px]:text-lg max-[760px]:leading-[1.62]">
          <p className="mb-6 first-letter:float-left first-letter:pr-2.5 first-letter:pt-3.5 first-letter:text-[88px] first-letter:font-bold first-letter:leading-[.73] first-letter:text-green">
            {article.content[0].paragraphs[0]}
          </p>

          <section className="my-10 bg-green px-[34px] py-[30px] text-white max-[760px]:my-[30px] max-[760px]:px-[21px] max-[760px]:py-6">
            <span className="text-[11px] uppercase tracking-[.14em] text-[#b8e2d9]">At a glance</span>
            <h2 className="my-[5px] mb-3 text-[34px] max-[760px]:text-[29px]">Key takeaways</h2>
            <ul className="m-0 list-none p-0">
              {article.takeaways.map((point) => (
                <li key={point} className="relative border-t border-white/25 py-2.5 pl-7">
                  <span className="absolute left-0 font-black text-[#d7e96c]">✓</span>
                  {point}
                </li>
              ))}
            </ul>
          </section>

          {article.content.map((section, index) => (
            <section id={toId(section.heading)} key={section.heading} className="scroll-mt-6 pt-[22px] [&:not(:first-child)]:mb-6">
              <span className="text-xs font-extrabold tracking-[.14em] text-green">0{index + 1}</span>
              <h2 className="my-[3px] mb-5 text-[40px] leading-[1.05] max-[760px]:text-[32px]">{section.heading}</h2>
              {section.paragraphs.map((paragraph, pIndex) => (index === 0 && pIndex === 0) ? null : <p key={paragraph} className="mb-6">{paragraph}</p>)}

              {index === 0 && pullQuote && (
                <blockquote className="my-10 border-l-4 border-green pl-6 text-[28px] font-normal italic leading-[1.35] text-[#1c2b28] max-[760px]:text-2xl">
                  “{pullQuote}”
                </blockquote>
              )}
            </section>
          ))}

          <div className="mt-[35px] text-center text-green">◆</div>
        </article>
      </div>

      <section className="mx-auto w-[min(1180px,calc(100%-40px))] border-t-2 border-green pb-[65px] pt-3.5">
        <div className="flex items-baseline justify-between">
          <h2 className="text-[23px]">More from {article.categoryLabel}</h2>
          <Link href={`/${article.category}`} className="text-sm font-extrabold text-green underline underline-offset-4">View all →</Link>
        </div>
        <div className="grid grid-cols-3 gap-[18px] max-[760px]:grid-cols-1">
          {more.map((item) => <StoryCard key={item.id} article={item} variant="card" />)}
        </div>
      </section>
    </main>
  );
}