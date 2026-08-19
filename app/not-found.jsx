import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="w-[min(1180px,calc(100%-40px))] mx-auto text-center py-[100px]">
      <span className="text-green text-sm tracking-[.2em]">404</span>
      <h1 className="text-[55px]">That story can’t be found.</h1>
      <p>It may have moved, or the address may be incorrect.</p>
      <Link href="/" className="text-green font-bold underline">Return to the front page</Link>
    </main>
  );
}
