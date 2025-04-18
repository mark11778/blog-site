import Social from "./components/socials";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-[20vw] max-w-[400px] min-w-[200px] aspect-square bg-white rounded-full flex justify-center items-center text-center p-4 shadow-lg">
        <div>
          <h1 className="text-gray-800 font-bold text-xl mb-2">mark ruzicka</h1>
    
          <a 
            className="text-gray-600 block mb-1" 
            href="/resume/MarkRuzicka__UWMadison_CS.pdf"
            target="_blank" 
            rel="noopener noreferrer"
          > 
            resume 
          </a>
    
          <Link href="/blog" className="text-gray-600 block mb-1">
            blog
          </Link>
    
          <Social />
        </div>
      </div>
    </div>
  );
}
