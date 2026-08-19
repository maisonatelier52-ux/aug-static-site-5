// import Link from 'next/link';

// export default function Footer() {
//   return (
//     <footer className="mt-auto bg-green-dark text-white">
//       <div className="mx-auto grid w-[min(1180px,calc(100%-40px))] grid-cols-[2fr_repeat(3,1fr)] gap-12 py-[46px] max-[760px]:grid-cols-2 max-[760px]:gap-7 max-[760px]:py-[35px] max-[390px]:grid-cols-1">
//         <div className="max-[760px]:col-span-full max-[390px]:!col-span-1">
//           <Link href="/" className="text-[25px] font-black">THE SOUTHERN POST</Link>
//           <p className="text-[#c6ded9]">Trusted, independent local journalism.</p>
//         </div>
//         <div className="max-[390px]:!col-span-1">
//           <h3 className="text-sm uppercase tracking-[.1em] text-[#a9d5cc]">Sections</h3>
//           <Link href="/news" className="my-[9px] block text-sm">News</Link>
//           <Link href="/sport" className="my-[9px] block text-sm">Sport</Link>
//           <Link href="/business" className="my-[9px] block text-sm">Business</Link>
//           <Link href="/life" className="my-[9px] block text-sm">Life</Link>
//         </div>
//         <div className="max-[390px]:!col-span-1">
//           <h3 className="text-sm uppercase tracking-[.1em] text-[#a9d5cc]">About</h3>
//           <Link href="#" className="my-[9px] block text-sm">Our mission</Link>
//           <Link href="#" className="my-[9px] block text-sm">Contact</Link>
//           <Link href="#" className="my-[9px] block text-sm">Privacy</Link>
//           <Link href="#" className="my-[9px] block text-sm">Terms</Link>
//         </div>
//         <div className="max-[760px]:col-span-full max-[390px]:!col-span-1">
//           <h3 className="text-sm uppercase tracking-[.1em] text-[#a9d5cc]">Get the briefing</h3>
//           <p className="text-[#c6ded9]">Essential stories, sent each weekday morning.</p>
//           <a href="#newsletter" className="inline-block cursor-pointer rounded-[22px] bg-green px-5 py-[11px] font-bold text-white">Sign up</a>
//         </div>
//       </div>
//       <div className="mx-auto w-[min(1180px,calc(100%-40px))] border-t border-white/24 py-[17px] text-xs text-[#bfd2ce]">© 2026 THE SOUTHERN POST. Demo editorial project.</div>
//     </footer>
//   );
// }

'use client';

import Link from 'next/link';

const sections = [
  ['News', '/news'],
  ['Sport', '/sport'],
  ['Business', '/business'],
  ['Life & Entertainment', '/life'],
  ['Opinion', '/opinion'],
];

const about = [
  ['Our mission', '#'],
  ['Contact', '#'],
  ['Privacy', '#'],
  ['Terms', '#'],
];

const social = [
  ['X', '#'],
  ['Instagram', '#'],
  ['Facebook', '#'],
];

export default function Footer() {
  return (
    <footer className="mt-auto bg-green-dark text-white">
      {/* Newsletter band */}
      <div className="border-b border-white/12">
        <div className="mx-auto flex w-[min(1180px,calc(100%-40px))] flex-wrap items-center justify-between gap-6 py-9 max-[600px]:flex-col max-[600px]:items-start">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[.16em] text-[#a9d5cc]">Get the briefing</p>
            <p className="mt-1.5 text-2xl font-black leading-tight tracking-[-.4px] max-[600px]:text-xl">
              Essential stories, every weekday morning.
            </p>
          </div>
          <a
            href="#newsletter"
            className="inline-flex shrink-0 cursor-pointer items-center gap-2 rounded-full bg-green px-6 py-3 text-sm font-bold text-white transition-transform hover:scale-[1.03] max-[600px]:w-full max-[600px]:justify-center"
          >
            Sign up free
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>

      {/* Main grid */}
      <div className="mx-auto grid w-[min(1180px,calc(100%-40px))] grid-cols-[1.4fr_1fr_1fr_1fr] gap-10 py-12 max-[760px]:grid-cols-2 max-[760px]:gap-x-6 max-[760px]:gap-y-10 max-[390px]:grid-cols-1">

        <div className="max-[760px]:col-span-full max-[390px]:!col-span-1">
          <Link href="/" className="text-[22px] font-black tracking-[-.4px]">
            THE SOUTHERN POST
          </Link>
          <p className="mt-2 max-w-[30ch] text-sm leading-relaxed text-[#c6ded9]">
            Trusted, independent local journalism — reported by people who live here.
          </p>
          <div className="mt-5 flex gap-2.5">
            {social.map(([label, href]) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-xs font-bold transition-colors hover:border-white/60 hover:bg-white/5"
              >
                {label.charAt(0)}
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="Sections">
          <h3 className="text-[11px] font-bold uppercase tracking-[.16em] text-[#a9d5cc]">Sections</h3>
          <ul className="mt-4 grid gap-3">
            {sections.map(([label, href]) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-sm text-white/90 transition-colors hover:text-white hover:underline hover:underline-offset-4"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="About">
          <h3 className="text-[11px] font-bold uppercase tracking-[.16em] text-[#a9d5cc]">About</h3>
          <ul className="mt-4 grid gap-3">
            {about.map(([label, href]) => (
              <li key={label}>
                <Link
                  href={href}
                  className="text-sm text-white/90 transition-colors hover:text-white hover:underline hover:underline-offset-4"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="max-[760px]:col-span-full max-[390px]:!col-span-1">
          <h3 className="text-[11px] font-bold uppercase tracking-[.16em] text-[#a9d5cc]">Today</h3>
          <p className="mt-4 text-sm leading-relaxed text-[#c6ded9]">
            New york, USA &middot; Local edition
          </p>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/24 px-4 py-2 text-xs font-bold uppercase tracking-[.06em] transition-colors hover:border-white/60 hover:bg-white/5"
          >
            <span aria-hidden="true">↑</span> Back to top
          </button>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/12">
        <div className="mx-auto flex w-[min(1180px,calc(100%-40px))] flex-wrap items-center justify-between gap-3 py-5 text-xs text-[#bfd2ce]">
          <span>© 2026 THE SOUTHERN POST. Demo editorial project.</span>
          <span className="text-[#a9d5cc]">Independent. Local. Essential.</span>
        </div>
      </div>
    </footer>
  );
}