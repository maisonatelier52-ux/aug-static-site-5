import Image from 'next/image';
import Link from 'next/link';

export default function OpinionStrip({ authors }) {
  return (
    <section className="mt-7 border-b-2 border-green pb-6 max-[760px]:overflow-hidden">
      <h2 className="mb-4 flex items-center gap-[18px] text-center text-[17px] font-normal before:h-px before:flex-1 before:bg-line before:content-[''] after:h-px after:flex-1 after:bg-line after:content-['']">
        <span>Authors</span>
      </h2>
      <div className="grid grid-cols-5 gap-[18px] max-[760px]:flex max-[760px]:gap-3.5 max-[760px]:overflow-x-auto">
        {authors.map((author) => (
          <Link key={author.id} href={`/author/${author.id}`} className="text-center max-[760px]:min-w-[82px]">
            <Image
              src={author.image}
              alt={author.name}
              width={82}
              height={82}
              className="mx-auto rounded-full grayscale-[20%] max-[760px]:h-[58px] max-[760px]:w-[58px]"
            />
            <strong className="mt-1.5 block text-sm max-[760px]:text-[11px]">{author.name}</strong>
            <span className="block text-[11px] text-muted max-[760px]:text-[9px]">{author.role}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
