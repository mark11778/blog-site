import Image from "next/image";

export default function Social() {
  return(
    <div className="flex justify-evenly items-center mt-1">
        <a 
          href="https://github.com/mark11778" 
          target="_blank" 
          rel="noopener noreferrer">
          <Image 
            className="order-1"
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
            className="order-2"
            src="/images/linkedin.png" 
            alt="GitHub Logo"      
            width={25} 
            height={25}  
          />
        </a>
      </div>
    );
}