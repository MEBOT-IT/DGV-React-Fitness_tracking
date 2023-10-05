import Image from "next/image";
import "./hero.css";
import Link from "next/link";

const Hero = () => {
  

      
  return (
    <div className="background-container">
    <div className="hero1">
    
      <Image src="/Hero.jpg" alt="Logo" fill />
      
      <Link href="/signup">
       
          <button className="button">Get Started</button>
      
      </Link>
    </div>
    
    </div>
  );
};

export default Hero;
