
// import Image from 'next/image';
// import Link from 'next/link';

// const variants = {
//   card: {
//     container: 'min-w-0 bg-white border border-[#d9dfdd] shadow-[0_5px_16px_rgba(16,36,53,.12)]',
//     image: 'aspect-[1.38]',
//     copy: 'px-[13px] py-3',
//     h3: 'text-[19px]',
//   },
//   hero: {
//     container: 'min-w-0',
//     image: 'aspect-[1.38] max-[760px]:aspect-[1.48]',
//     copy: 'pt-[15px]',
//     h3: 'text-[clamp(35px,4.4vw,59px)] max-[760px]:text-[28px]',
//     p: 'text-[17px] max-w-[690px] max-[760px]:text-sm',
//   },
//   wide: {
//     container: 'min-w-0 grid grid-cols-[180px_1fr] gap-[18px] pb-[18px] border-b border-line [&+&]:pt-[18px] max-[1050px]:grid-cols-[125px_1fr] max-[760px]:grid-cols-[1fr_92px] max-[760px]:gap-3 max-[760px]:border-b-0 max-[760px]:py-3',
//     image: 'aspect-[1.55] max-[760px]:col-start-2 max-[760px]:row-start-1',
//     copy: 'max-[760px]:col-start-1 max-[760px]:row-start-1',
//     h3: 'text-[22px] max-[1050px]:text-lg max-[760px]:text-base',
//     eyebrowHidden: 'max-[760px]:hidden',
//     pHidden: 'hidden',
//     metaHidden: 'max-[760px]:hidden',
//   },
//   compact: {
//     container: 'min-w-0',
//     image: 'aspect-[1.4]',
//     copy: 'pt-2',
//     h3: 'text-[15px]',
//     eyebrowHidden: 'hidden',
//     metaHidden: 'hidden',
//   },
//   line: {
//     container: 'min-w-0 grid grid-cols-[130px_1fr] gap-3.5 border-b border-[#d9e2e0] py-[11px] max-[760px]:grid-cols-[96px_1fr] max-[760px]:gap-2.5 max-[390px]:grid-cols-[82px_1fr]',
//     image: 'aspect-[1.5]',
//     copy: '',
//     h3: 'text-[15px] max-[760px]:text-sm max-[390px]:text-[13px]',
//     eyebrowHidden: 'hidden',
//     pHidden: 'hidden',
//     metaHidden: 'hidden',
//   },
//   video: {
//     container: 'min-w-0',
//     image: 'aspect-[.72] max-[760px]:aspect-[.68]',
//     copy: '',
//     h3: 'mt-2.5 text-[17px] max-[760px]:text-sm',
//     pHidden: 'hidden',
//     metaHidden: 'hidden',
//   },
//   feed: {
//     container: 'min-w-0 grid grid-cols-[240px_1fr] gap-[22px] border-b border-line py-6 max-[760px]:grid-cols-[120px_1fr] max-[760px]:gap-[13px] max-[760px]:py-[17px]',
//     image: 'aspect-[1.45]',
//     copy: '',
//     h3: 'text-[27px] max-[760px]:text-lg',
//     pHidden: 'max-[760px]:hidden',
//   },
//   feature: {
//     container: 'min-w-0',
//     image: 'aspect-[1.1] max-[760px]:aspect-[1.16]',
//     copy: '',
//     h3: 'mt-3 text-[36px] max-[760px]:text-[27px]',
//     p: 'text-base',
//   },
// };

// // Normalizes bad/relative image paths (e.g. "../images/foo.webp") coming from
// // data sources (JSON/CMS) into a root-relative path next/image can handle.
// // Falls back to a placeholder if the field is missing entirely.
// function normalizeImageSrc(src) {
//   if (!src) return '/images/placeholder.jpg';
//   if (src.startsWith('http://') || src.startsWith('https://') || src.startsWith('/')) {
//     return src;
//   }
//   // Strip any leading ../ or ./ segments and force root-relative,
//   // so "../images/foo.webp" -> "/images/foo.webp"
//   return '/' + src.replace(/^(\.\.\/|\.\/)+/, '');
// }

// export default function StoryCard({ article, variant = 'card', priority = false }) {
//   const v = variants[variant] ?? variants.card;
//   const imageSrc = normalizeImageSrc(article.image);

//   return (
//     <article className={`group ${v.container}`}>
//       <Link
//         className="relative block self-start overflow-hidden bg-[#dbe2df]"
//         href={`/${article.category}/${article.slug}`}
//         aria-label={article.title}
//       >
//         <div className={`relative ${v.image}`}>
//           <Image
//             src={imageSrc}
//             alt=""
//             fill
//             className="object-cover transition-transform duration-[.45s] ease-out group-hover:scale-[1.025]"
//             sizes={variant === 'hero' ? '(max-width: 760px) 100vw, 58vw' : '(max-width: 760px) 100vw, 33vw'}
//             priority={priority}
//           />
//         </div>
//       </Link>
//       <div className={v.copy}>
//         <Link
//           className={`mb-[5px] inline-block text-xs font-extrabold uppercase tracking-[.08em] text-green ${v.eyebrowHidden ?? ''}`}
//           href={`/${article.category}`}
//         >
//           {article.categoryLabel}
//         </Link>
//         <h3 className={`m-0 mb-[5px] leading-[1.08] tracking-[-.015em] ${v.h3}`}>
//           <Link href={`/${article.category}/${article.slug}`} className="hover:underline hover:decoration-1 hover:underline-offset-[3px]">
//             {article.title}
//           </Link>
//         </h3>
//         {variant !== 'compact' && (
//           <p className={`my-2.5 text-[#41505a] ${v.p ?? ''} ${v.pHidden ?? ''}`}>{article.dek}</p>
//         )}
//         <div className={`mt-2.5 flex gap-2 text-[11px] uppercase tracking-[.04em] text-muted ${v.metaHidden ?? ''}`}>
//           <span>{article.readTime}</span>
//           <time dateTime={article.published}>{new Date(article.published).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })}</time>
//         </div>
//       </div>
//     </article>
//   );
// }

import Image from 'next/image';
import Link from 'next/link';
import { normalizeImageSrc } from '@/lib/image';

const variants = {
  card: {
    container: 'min-w-0 bg-white border border-[#d9dfdd] shadow-[0_5px_16px_rgba(16,36,53,.12)]',
    image: 'aspect-[1.38]',
    copy: 'px-[13px] py-3',
    h3: 'text-[19px]',
  },
  hero: {
    container: 'min-w-0',
    image: 'aspect-[1.38] max-[760px]:aspect-[1.48]',
    copy: 'pt-[15px]',
    h3: 'text-[clamp(35px,4.4vw,59px)] max-[760px]:text-[28px]',
    p: 'text-[17px] max-w-[690px] max-[760px]:text-sm',
  },
  wide: {
    container: 'min-w-0 grid grid-cols-[180px_1fr] gap-[18px] pb-[18px] border-b border-line [&+&]:pt-[18px] max-[1050px]:grid-cols-[125px_1fr] max-[760px]:grid-cols-[1fr_92px] max-[760px]:gap-3 max-[760px]:border-b-0 max-[760px]:py-3',
    image: 'aspect-[1.55] max-[760px]:col-start-2 max-[760px]:row-start-1',
    copy: 'max-[760px]:col-start-1 max-[760px]:row-start-1',
    h3: 'text-[22px] max-[1050px]:text-lg max-[760px]:text-base',
    eyebrowHidden: 'max-[760px]:hidden',
    pHidden: 'hidden',
    metaHidden: 'max-[760px]:hidden',
  },
  compact: {
    container: 'min-w-0',
    image: 'aspect-[1.4]',
    copy: 'pt-2',
    h3: 'text-[15px]',
    eyebrowHidden: 'hidden',
    metaHidden: 'hidden',
  },
  line: {
    container: 'min-w-0 grid grid-cols-[130px_1fr] gap-3.5 border-b border-[#d9e2e0] py-[11px] max-[760px]:grid-cols-[96px_1fr] max-[760px]:gap-2.5 max-[390px]:grid-cols-[82px_1fr]',
    image: 'aspect-[1.5]',
    copy: '',
    h3: 'text-[15px] max-[760px]:text-sm max-[390px]:text-[13px]',
    eyebrowHidden: 'hidden',
    pHidden: 'hidden',
    metaHidden: 'hidden',
  },
  video: {
    container: 'min-w-0',
    image: 'aspect-[.72] max-[760px]:aspect-[.68]',
    copy: '',
    h3: 'mt-2.5 text-[17px] max-[760px]:text-sm',
    pHidden: 'hidden',
    metaHidden: 'hidden',
  },
  feed: {
    container: 'min-w-0 grid grid-cols-[240px_1fr] gap-[22px] border-b border-line py-6 max-[760px]:grid-cols-[120px_1fr] max-[760px]:gap-[13px] max-[760px]:py-[17px]',
    image: 'aspect-[1.45]',
    copy: '',
    h3: 'text-[27px] max-[760px]:text-lg',
    pHidden: 'max-[760px]:hidden',
  },
  feature: {
    container: 'min-w-0',
    image: 'aspect-[1.1] max-[760px]:aspect-[1.16]',
    copy: '',
    h3: 'mt-3 text-[36px] max-[760px]:text-[27px]',
    p: 'text-base',
  },
};

export default function StoryCard({ article, variant = 'card', priority = false }) {
  const v = variants[variant] ?? variants.card;
  const imageSrc = normalizeImageSrc(article.image);

  return (
    <article className={`group ${v.container}`}>
      <Link
        className="relative block self-start overflow-hidden bg-[#dbe2df]"
        href={`/${article.category}/${article.slug}`}
        aria-label={article.title}
      >
        <div className={`relative ${v.image}`}>
          <Image
            src={imageSrc}
            alt=""
            fill
            className="object-cover transition-transform duration-[.45s] ease-out group-hover:scale-[1.025]"
            sizes={variant === 'hero' ? '(max-width: 760px) 100vw, 58vw' : '(max-width: 760px) 100vw, 33vw'}
            priority={priority}
          />
        </div>
      </Link>
      <div className={v.copy}>
        <Link
          className={`mb-[5px] inline-block text-xs font-extrabold uppercase tracking-[.08em] text-green ${v.eyebrowHidden ?? ''}`}
          href={`/${article.category}`}
        >
          {article.categoryLabel}
        </Link>
        <h3 className={`m-0 mb-[5px] leading-[1.08] tracking-[-.015em] ${v.h3}`}>
          <Link href={`/${article.category}/${article.slug}`} className="hover:underline hover:decoration-1 hover:underline-offset-[3px]">
            {article.title}
          </Link>
        </h3>
        {variant !== 'compact' && (
          <p className={`my-2.5 text-[#41505a] ${v.p ?? ''} ${v.pHidden ?? ''}`}>{article.dek}</p>
        )}
        <div className={`mt-2.5 flex gap-2 text-[11px] uppercase tracking-[.04em] text-muted ${v.metaHidden ?? ''}`}>
          <span>{article.readTime}</span>
          <time dateTime={article.published}>{new Date(article.published).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })}</time>
        </div>
      </div>
    </article>
  );
}