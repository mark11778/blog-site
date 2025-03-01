import Image from "next/image";

export default function Home() {
  return (
   <div class="flex justify-center items-center h-screen">
    <div className="w-[20vw] h-[20vw] bg-white rounded-full flex justify-center items-center text-center gap-4">
      <div class="">
        <h1 class="text-gray-800 font-bold space-y-2">mark ruzicka</h1>
        <a 
          class="text-gray-600" 
          href="\resume\MarkRuzicka__UWMadison_CS.pdf"
          target="_blank" 
          rel="noopener noreferrer"
        > 
        resume 
        </a>
        <a class="text-gray-600"> portfolio </a>
        <a class="text-gray-600"> blog </a>
        <div class="flex justify-evenly items-center mt-1">
          <a 
            href="https://github.com/mark11778" 
            target="_blank" 
            rel="noopener noreferrer">
            <Image 
              class="order-1"
              src="/images/github-mark.svg" 
              alt="GitHub Logo"  
              width={25} 
              height={25}  
            />
          </a>
           <a 
            href="https://www.linkedin.com/in/mark-ruzicka-a99264219/" 
            target="_blank" 
            rel="noopener noreferrer">
            <Image 
              class="order-2"
              src="/images/linkedin.png" 
              alt="GitHub Logo"      
              width={25} 
              height={25}  
            />
          </a>
        </div>
      </div>
    </div>
   </div>
  );
}
