import Social from "./components/socials";
import Link from "next/link";
import Blog from "./blog/page";


export default function Home() {
  return (
   <div className="flex justify-center items-center h-screen">
    <div className="w-[20vw] h-[20vw] bg-white rounded-full flex justify-center items-center text-center gap-4">
      <div>
        <h1 className="text-gray-800 font-bold space-y-2">mark ruzicka</h1>

        <a 
          className="text-gray-600" 
          href="/resume/MarkRuzicka__UWMadison_CS.pdf"
          target="_blank" 
          rel="noopener noreferrer"
        > 
        resume 
        </a>

        {/* <Link href="/blog">
          <a className="text-gray-600"> 
            portfolio 
          </a>
        </Link> */}

        <Link href="/blog" className="text-gray-600"> blog </Link>
        
        <Social/>
        
      </div>
    </div>
   </div>
  );
}
