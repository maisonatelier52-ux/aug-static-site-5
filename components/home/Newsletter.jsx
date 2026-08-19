export default function Newsletter() {
  return (
    <section
      id="newsletter"
      className="my-10 mb-2.5 grid grid-cols-[auto_1fr_auto] items-center gap-5 border-t-2 border-b-2 border-green bg-[linear-gradient(100deg,#e5dfd4,#f5f0e8)] px-7 py-5 max-[760px]:grid-cols-[auto_1fr] max-[760px]:px-[15px] max-[760px]:py-[18px]"
    >
      <div className="rotate-[-8deg] text-[58px] text-[#967350] max-[760px]:text-[38px]" aria-hidden="true">✉</div>
      <div>
        <span className="text-[11px] uppercase tracking-[.12em]">Morning Edition</span>
        <h2 className="my-[-3px] text-[39px] text-green max-[760px]:text-[30px]">Newsletters</h2>
        <p className="m-0">Trusted news, direct to your inbox.</p>
      </div>
      <form className="flex gap-[7px] max-[760px]:col-span-full">
        <label className="sr-only" htmlFor="email">Email address</label>
        <input
          id="email"
          type="email"
          placeholder="you@example.com"
          className="min-w-[210px] border border-[#a5b3af] bg-white px-[13px] py-[11px] max-[760px]:w-full max-[760px]:min-w-0"
        />
        <button type="submit" className="cursor-pointer rounded-[22px] bg-green px-5 py-[11px] font-bold text-white">Sign up</button>
      </form>
    </section>
  );
}
