// 'use client';

// import Link from 'next/link';
// import { useEffect, useState } from 'react';

// const primaryNav = [
//   ['U.S. News', '/us-news'],
//   ['World', '/world'],
//   ['Business', '/business'],
//   ['Finance', '/finance'],
//   ['Sports', '/sports'],
  
// ];

// const menuItems = primaryNav;

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
//       <header className="sticky top-0 z-50 bg-green-dark text-white shadow-[0_1px_0_rgba(0,0,0,.08)]">
//         <div className="mx-auto grid w-[min(1280px,calc(100%-40px))] grid-cols-[auto_1fr_auto] items-center gap-6 py-3 max-[760px]:w-[calc(100%-20px)] max-[760px]:grid-cols-[auto_1fr_auto] max-[760px]:gap-3 max-[760px]:py-2.5">

//           {/* Menu trigger */}
//           <button
//             className="flex min-h-10 items-center justify-center gap-2 rounded border border-white/40 bg-transparent px-3 text-sm font-bold uppercase tracking-[.04em] text-white transition-colors hover:border-white/90 max-[760px]:min-h-9 max-[760px]:border-0 max-[760px]:px-0"
//             onClick={() => setOpen(true)}
//             aria-label="Open menu"
//             aria-expanded={open}
//           >
//             <span className="grid w-5 gap-[3px]" aria-hidden="true">
//               <i className="block h-[2px] rounded-sm bg-white" />
//               <i className="block h-[2px] rounded-sm bg-white" />
//               <i className="block h-[2px] rounded-sm bg-white" />
//             </span>
//             <span className="max-[760px]:hidden">Menu</span>
//           </button>

//           {/* Single masthead */}
//           <Link
//             href="/"
//             aria-label="The Northern Journal home"
//             className="whitespace-nowrap text-[22px] font-black leading-none tracking-[-.5px] max-[1050px]:text-[19px] max-[760px]:text-[15px] max-[760px]:tracking-[-.3px]"
//           >
//            THE SOUTHERN POST
//           </Link>

//           {/* Right side: category nav + utility actions */}
//           <div className="flex items-center gap-6 max-[1050px]:gap-4">
//             <nav
//               className="flex items-center gap-5 whitespace-nowrap text-[13px] font-bold uppercase tracking-[.03em] max-[1050px]:hidden"
//               aria-label="Primary navigation"
//             >
//               {primaryNav.map(([label, href]) => (
//                 <Link key={href} href={href} className="hover:underline hover:underline-offset-4">
//                   {label}
//                 </Link>
//               ))}
//             </nav>

//             <div className="flex items-center gap-2">
//               <Link
//                 href="#newsletter"
//                 className="flex min-h-9 items-center justify-center rounded border border-white/40 px-3 text-sm font-bold hover:border-white/90 hover:underline hover:underline-offset-4 max-[760px]:hidden"
//               >
//                 Sign Up
//               </Link>
//               <Link
//                 href="#"
//                 className="flex min-h-9 items-center justify-center rounded border border-white/40 px-3 text-sm font-bold hover:border-white/90 hover:underline hover:underline-offset-4 max-[760px]:hidden"
//               >
//                 Log In
//               </Link>
//               <span
//                 className="hidden max-[760px]:grid max-[760px]:h-8 max-[760px]:w-8 max-[760px]:place-items-center max-[760px]:rounded max-[760px]:border max-[760px]:border-white/60 max-[760px]:text-base"
//                 aria-hidden="true"
//               >
//                 ♟
//               </span>
//             </div>
//           </div>
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
//           <Link href="/" onClick={() => setOpen(false)} className="flex min-h-[57px] items-center justify-between border-b border-white/[.12] text-xl font-bold max-[760px]:min-h-[51px] max-[760px]:text-lg"><span>Home</span></Link>
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
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const primaryNav = [
  ['U.S. News', '/us-news'],
  ['World', '/world'],
  ['Business', '/business'],
  ['Finance', '/finance'],
  ['Sports', '/sports'],
  
];

const menuItems = primaryNav;

export default function Header() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState('');

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  useEffect(() => {
    const close = (event) => event.key === 'Escape' && (setOpen(false), setSearchOpen(false));
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, []);

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    const q = query.trim();
    if (!q) return;
    setSearchOpen(false);
    router.push(`/search?q=${encodeURIComponent(q)}`);
  };

  const SearchIcon = ({ className = '' }) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="7" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );

  return (
    <>
      <header className="sticky top-0 z-50 bg-green-dark text-white shadow-[0_1px_0_rgba(0,0,0,.08)]">
        <div className="mx-auto grid w-[min(1280px,calc(100%-40px))] grid-cols-[auto_1fr_auto] items-center gap-6 py-3 max-[760px]:w-[calc(100%-20px)] max-[760px]:grid-cols-[auto_1fr_auto] max-[760px]:gap-3 max-[760px]:py-2.5">

          {/* Menu trigger — left side */}
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

          {/* Single masthead — centered on mobile */}
          <Link
            href="/"
            aria-label="The Northern Journal home"
            className="whitespace-nowrap text-[22px] font-black leading-none tracking-[-.5px] max-[1050px]:text-[19px] max-[760px]:justify-self-center max-[760px]:text-center max-[760px]:text-[15px] max-[760px]:tracking-[-.3px]"
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
                Subscribe
              </Link>
              <button
                type="button"
                onClick={() => setSearchOpen(true)}
                aria-label="Open search"
                className="flex min-h-9 min-w-9 items-center justify-center gap-2 rounded border border-white/40 px-3 text-sm font-bold hover:border-white/90  hover:underline-offset-4 max-[760px]:min-h-8 max-[760px]:w-8 max-[760px]:min-w-0 max-[760px]:border max-[760px]:border-white/60 max-[760px]:px-0"
              >
                <SearchIcon className="h-4 w-4 max-[760px]:h-4 max-[760px]:w-4" />
                <span className="max-[760px]:hidden">Search</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Search overlay */}
      <div
        className={`fixed inset-0 z-[95] bg-[#08191e]/48 transition-[opacity,visibility] duration-[.25s] ${searchOpen ? 'visible opacity-100' : 'invisible opacity-0'}`}
        onClick={() => setSearchOpen(false)}
        aria-hidden="true"
      />
      <div
        className={`fixed left-0 right-0 top-0 z-[96] bg-green-dark text-white shadow-[0_18px_45px_rgba(0,0,0,.28)] transition-transform duration-300 ease-in-out ${searchOpen ? 'translate-y-0' : '-translate-y-full'}`}
        role="dialog"
        aria-modal="true"
        aria-label="Site search"
        aria-hidden={!searchOpen}
      >
        <form
          onSubmit={handleSearchSubmit}
          className="mx-auto flex w-[min(1280px,calc(100%-40px))] items-center gap-3 py-5 max-[760px]:w-[calc(100%-20px)] max-[760px]:py-4"
        >
          <SearchIcon className="h-5 w-5 shrink-0 text-white/70" />
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search The Southern Post"
            autoFocus={searchOpen}
            className="min-w-0 flex-1 bg-transparent text-lg text-white placeholder:text-white/50 focus:outline-none max-[760px]:text-base"
          />
          <button
            type="submit"
            className="min-h-9 shrink-0 rounded border border-white/40 px-3 text-sm font-bold uppercase tracking-[.04em] hover:border-white/90"
          >
            Go
          </button>
          <button
            type="button"
            onClick={() => setSearchOpen(false)}
            aria-label="Close search"
            className="shrink-0 border-0 bg-transparent text-[28px] leading-none text-white"
          >
            ×
          </button>
        </form>
      </div>

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