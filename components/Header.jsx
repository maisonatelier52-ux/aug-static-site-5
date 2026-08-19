// 'use client';

// import Link from 'next/link';
// import { useEffect, useState } from 'react';

// const menuItems = [
//   ['News', '/news'],
//   ['Opinion', '/opinion'],
//   ['Sport', '/sport'],
//   ['Business', '/business'],
//   ['Life & Entertainment', '/life'],
// ];

// export default function Header() {
//   const [open, setOpen] = useState(false);

//   useEffect(() => {
//     document.body.style.overflow = open ? 'hidden' : '';
//     return () => { document.body.style.overflow = ''; };
//   }, [open]);

//   useEffect(() => {
//     const close = (event) => event.key === 'Escape' && setOpen(false);
//     window.addEventListener('keydown', close);
//     return () => window.removeEventListener('keydown', close);
//   }, []);

//   return (
//     <>
//       <header className="relative z-50 bg-white">
//         <div className="grid min-h-16 grid-cols-[auto_1fr_auto_1fr] items-center gap-5 border-t border-[#d9a432] bg-green-dark px-6 text-white max-[1050px]:grid-cols-[auto_1fr_auto] max-[760px]:sticky max-[760px]:top-0 max-[760px]:h-12 max-[760px]:min-h-12 max-[760px]:grid-cols-[42px_1fr_42px] max-[760px]:gap-1.5 max-[760px]:px-2.5">
//           <button
//             className="flex min-h-10 items-center justify-center gap-2.5 rounded border border-white/90 bg-transparent px-3 text-lg font-bold text-white max-[760px]:min-h-[38px] max-[760px]:border-0 max-[760px]:p-0"
//             onClick={() => setOpen(true)}
//             aria-label="Open menu"
//             aria-expanded={open}
//           >
//             <span className="grid w-6 gap-1 max-[760px]:w-[22px]" aria-hidden="true">
//               <i className="block h-[3px] rounded-sm bg-white" />
//               <i className="block h-[3px] rounded-sm bg-white" />
//               <i className="block h-[3px] rounded-sm bg-white" />
//             </span>
//             <span className="max-[760px]:hidden">Menu</span>
//           </button>
//           <nav className="flex gap-5 whitespace-nowrap text-[15px] font-bold max-[1050px]:hidden" aria-label="Utility navigation">
//             <Link href="#notices" className="hover:underline hover:underline-offset-4">Notices</Link>
//             <Link href="#" className="hover:underline hover:underline-offset-4">Place a Notice</Link>
//             <Link href="#" className="hover:underline hover:underline-offset-4">Today’s Paper</Link>
//             <Link href="#" className="hover:underline hover:underline-offset-4">Subscriptions</Link>
//             <Link href="#" className="hover:underline hover:underline-offset-4">Podcasts</Link>
//             <Link href="#newsletter" className="hover:underline hover:underline-offset-4">Newsletters</Link>
//           </nav>
//           <Link href="/" className="whitespace-nowrap text-center text-[27px] font-black tracking-[-.6px] max-[760px]:text-base max-[760px]:tracking-[-.3px]">
//             THE NORTHERN JOURNAL
//           </Link>
//           <div className="flex justify-end gap-2.5 max-[760px]:justify-end">
//             <Link href="#newsletter" className="flex min-h-10 items-center justify-center rounded border border-white/90 px-3.5 font-bold hover:underline hover:underline-offset-4 max-[760px]:hidden">Sign Up</Link>
//             <Link href="#" className="flex min-h-10 items-center justify-center rounded border border-white/90 px-3.5 font-bold hover:underline hover:underline-offset-4 max-[760px]:hidden">Log In</Link>
//             <span className="hidden max-[760px]:grid max-[760px]:h-[34px] max-[760px]:w-[34px] max-[760px]:place-items-center max-[760px]:rounded-[3px] max-[760px]:border max-[760px]:border-white max-[760px]:text-lg" aria-hidden="true">♟</span>
//           </div>
//         </div>
//         <div className="mx-auto grid h-[92px] w-[min(1180px,calc(100%-40px))] grid-cols-[1fr_auto_1fr] items-center border-b border-ink text-[13px] tracking-[.06em] uppercase max-[1050px]:h-[72px] max-[760px]:hidden">
//           <span>TRUSTED SINCE 1891</span>
//           <Link href="/" aria-label="The Northern Journal home" className="text-[35px] font-black tracking-[-1px] max-[1050px]:text-[28px]">THE NORTHERN JOURNAL</Link>
//           <span className="text-right normal-case tracking-normal">Independent. Local. Essential.</span>
//         </div>
//       </header>

//       <div
//         className={`fixed inset-0 z-[80] bg-[#08191e]/48 transition-[opacity,visibility] duration-[.25s] ${open ? 'visible opacity-100' : 'invisible opacity-0'}`}
//         onClick={() => setOpen(false)}
//         aria-hidden="true"
//       />
//       <aside
//         className={`fixed left-0 top-0 z-[90] h-dvh w-[min(395px,92vw)] -translate-x-[101%] bg-green-dark p-6 px-[30px] text-white shadow-[18px_0_45px_rgba(0,0,0,.28)] transition-transform duration-300 ease-in-out max-[760px]:p-[17px] max-[760px]:px-[22px] ${open ? 'translate-x-0' : ''}`}
//         aria-hidden={!open}
//         aria-label="Main menu"
//       >
//         <div className="flex items-center justify-between border-b border-white/35 pb-[18px] text-xs uppercase tracking-[.14em]">
//           <span>Explore</span>
//           <button onClick={() => setOpen(false)} aria-label="Close menu" className="border-0 bg-transparent text-[36px] leading-none text-white">×</button>
//         </div>
//         <nav className="mt-[18px] grid">
//           <Link href="/" onClick={() => setOpen(false)} className="flex min-h-[57px] items-center justify-between border-b border-white/[.12] text-xl font-bold max-[760px]:min-h-[51px] max-[760px]:text-lg">⌂ <span>Home</span></Link>
//           {menuItems.map(([label, href]) => (
//             <Link key={href} href={href} onClick={() => setOpen(false)} className="flex min-h-[57px] items-center justify-between border-b border-white/[.12] text-xl font-bold max-[760px]:min-h-[51px] max-[760px]:text-lg">
//               <span>{label}</span><b className="text-[31px] font-normal">›</b>
//             </Link>
//           ))}
//           <Link href="#latest-video" onClick={() => setOpen(false)} className="flex min-h-[57px] items-center justify-between border-b border-white/[.12] text-xl font-bold max-[760px]:min-h-[51px] max-[760px]:text-lg"><span>Video</span></Link>
//           <Link href="#newsletter" onClick={() => setOpen(false)} className="flex min-h-[57px] items-center justify-between border-b border-white/[.12] text-xl font-bold max-[760px]:min-h-[51px] max-[760px]:text-lg"><span>Newsletters</span></Link>
//         </nav>
//         <p className="absolute bottom-[22px] italic text-[#b8d7d1]">Local stories. Wider perspective.</p>
//       </aside>
//     </>
//   );
// }
'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const primaryNav = [
  ['News', '/news'],
  ['Sport', '/sport'],
  ['Business', '/business'],
  ['Life & Entertainment', '/life'],
  ['Opinion', '/opinion'],
];

const menuItems = primaryNav;

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  useEffect(() => {
    const close = (event) => event.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50 bg-green-dark text-white shadow-[0_1px_0_rgba(0,0,0,.08)]">
        <div className="mx-auto grid w-[min(1280px,calc(100%-40px))] grid-cols-[auto_1fr_auto] items-center gap-6 py-3 max-[760px]:w-[calc(100%-20px)] max-[760px]:grid-cols-[auto_1fr_auto] max-[760px]:gap-3 max-[760px]:py-2.5">

          {/* Menu trigger */}
          <button
            className="flex min-h-10 items-center justify-center gap-2 rounded border border-white/40 bg-transparent px-3 text-sm font-bold uppercase tracking-[.04em] text-white transition-colors hover:border-white/90 max-[760px]:min-h-9 max-[760px]:border-0 max-[760px]:px-0"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
          >
            <span className="grid w-5 gap-[3px]" aria-hidden="true">
              <i className="block h-[2px] rounded-sm bg-white" />
              <i className="block h-[2px] rounded-sm bg-white" />
              <i className="block h-[2px] rounded-sm bg-white" />
            </span>
            <span className="max-[760px]:hidden">Menu</span>
          </button>

          {/* Single masthead */}
          <Link
            href="/"
            aria-label="The Northern Journal home"
            className="whitespace-nowrap text-[22px] font-black leading-none tracking-[-.5px] max-[1050px]:text-[19px] max-[760px]:text-[15px] max-[760px]:tracking-[-.3px]"
          >
           THE SOUTHERN POST
          </Link>

          {/* Right side: category nav + utility actions */}
          <div className="flex items-center gap-6 max-[1050px]:gap-4">
            <nav
              className="flex items-center gap-5 whitespace-nowrap text-[13px] font-bold uppercase tracking-[.03em] max-[1050px]:hidden"
              aria-label="Primary navigation"
            >
              {primaryNav.map(([label, href]) => (
                <Link key={href} href={href} className="hover:underline hover:underline-offset-4">
                  {label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <Link
                href="#newsletter"
                className="flex min-h-9 items-center justify-center rounded border border-white/40 px-3 text-sm font-bold hover:border-white/90 hover:underline hover:underline-offset-4 max-[760px]:hidden"
              >
                Sign Up
              </Link>
              <Link
                href="#"
                className="flex min-h-9 items-center justify-center rounded border border-white/40 px-3 text-sm font-bold hover:border-white/90 hover:underline hover:underline-offset-4 max-[760px]:hidden"
              >
                Log In
              </Link>
              <span
                className="hidden max-[760px]:grid max-[760px]:h-8 max-[760px]:w-8 max-[760px]:place-items-center max-[760px]:rounded max-[760px]:border max-[760px]:border-white/60 max-[760px]:text-base"
                aria-hidden="true"
              >
                ♟
              </span>
            </div>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[80] bg-[#08191e]/48 transition-[opacity,visibility] duration-[.25s] ${open ? 'visible opacity-100' : 'invisible opacity-0'}`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />
      <aside
        className={`fixed left-0 top-0 z-[90] h-dvh w-[min(395px,92vw)] -translate-x-[101%] bg-green-dark p-6 px-[30px] text-white shadow-[18px_0_45px_rgba(0,0,0,.28)] transition-transform duration-300 ease-in-out max-[760px]:p-[17px] max-[760px]:px-[22px] ${open ? 'translate-x-0' : ''}`}
        aria-hidden={!open}
        aria-label="Main menu"
      >
        <div className="flex items-center justify-between border-b border-white/35 pb-[18px] text-xs uppercase tracking-[.14em]">
          <span>Explore</span>
          <button onClick={() => setOpen(false)} aria-label="Close menu" className="border-0 bg-transparent text-[36px] leading-none text-white">×</button>
        </div>
        <nav className="mt-[18px] grid">
          <Link href="/" onClick={() => setOpen(false)} className="flex min-h-[57px] items-center justify-between border-b border-white/[.12] text-xl font-bold max-[760px]:min-h-[51px] max-[760px]:text-lg"><span>Home</span></Link>
          {menuItems.map(([label, href]) => (
            <Link key={href} href={href} onClick={() => setOpen(false)} className="flex min-h-[57px] items-center justify-between border-b border-white/[.12] text-xl font-bold max-[760px]:min-h-[51px] max-[760px]:text-lg">
              <span>{label}</span><b className="text-[31px] font-normal">›</b>
            </Link>
          ))}
          <Link href="#latest-video" onClick={() => setOpen(false)} className="flex min-h-[57px] items-center justify-between border-b border-white/[.12] text-xl font-bold max-[760px]:min-h-[51px] max-[760px]:text-lg"><span>Video</span></Link>
          <Link href="#newsletter" onClick={() => setOpen(false)} className="flex min-h-[57px] items-center justify-between border-b border-white/[.12] text-xl font-bold max-[760px]:min-h-[51px] max-[760px]:text-lg"><span>Newsletters</span></Link>
        </nav>
        <p className="absolute bottom-[22px] italic text-[#b8d7d1]">Local stories. Wider perspective.</p>
      </aside>
    </>
  );
}