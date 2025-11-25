import Link from "next/link";


export default function Home() {
  return (
    <div className="bg-[#1a1a1a] text-white min-h-screen flex items-center justify-center p-4">
      <div className="max-w-lg w-full text-center border-2 border-[#5d4fb6] rounded-xl p-8 shadow-lg shadow-[#5d4fb6]/50 transition-transform transform hover:scale-105">
        <h1 className="text-2xl md:text-3xl font-bold mb-4">
          ¡Atención!
        </h1>
        <p className="text-lg md:text-xl mb-6">
          El dominio se ha cambiado a{" "}
          <Link
            href="https://gabs-six.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#5d4fb6] font-semibold underline hover:text-[#9b8dfb] transition-colors"
          >
            https://gabs-six.vercel.app/
          </Link>
        </p>
        <Link href="https://gabs-six.vercel.app/"
          target="_blank"
          rel="noopener noreferrer" className="bg-[#5d4fb6] hover:bg-[#9b8dfb] text-white font-bold py-2 px-6 rounded-lg transition-colors">
          Visitar sitio
        </Link>
      </div>
    </div>
  );

};
