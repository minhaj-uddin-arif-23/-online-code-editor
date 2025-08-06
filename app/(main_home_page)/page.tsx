import HeroSection1 from "@/components/banner/heroSection1";
import Plater from "@/components/palter";
import Navbar from "@/components/shared/navbar";

export default function Home() {
  return (
   <div>
    
    <section className="">
      <Navbar />
      <HeroSection1 />
    </section>
    <section>
        <Plater />
    </section>
    {/* your content is here */}
    <div>
  
    </div>
   </div>
  );
}
