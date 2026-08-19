import Link from 'next/link';

const toneBorder = {
  green: 'border-green',
  lime: 'border-lime',
  blue: 'border-blue',
  red: 'border-red',
  orange: 'border-orange',
};

export default function SectionHeading({ title, href, tone = 'green' }) {
  return (
    <div className={`mb-[18px] flex items-end justify-between border-b-2 pb-[7px] ${toneBorder[tone] ?? toneBorder.green}`}>
      <h2 className="m-0 text-lg font-normal">{title}</h2>
      {href && (
        <Link href={href} className="text-xs font-bold uppercase tracking-[.06em]">
          View all <span>→</span>
        </Link>
      )}
    </div>
  );
}
