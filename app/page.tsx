import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <div>
        Essa é a página principal
      </div>

      <Link
        href="/page2"
        className=""
      >
        <button className="text-lg font-semibold">Página 2
        </button>
      </Link>

      {/* O resto do seu código */}
    </main>
  );
}