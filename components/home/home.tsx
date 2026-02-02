import Hero from "@/components/Hero/hero";
import Navbar from "@/components/Navbar/navbar";
import Services from "@/components/Services/services";
import Coverage from "@/components/Coverage/coverage";
import AboutUs from "@/components/AboutUs/AboutUs";
import { Separator } from "@/components/ui/separator";
import Clients from "@/components/Clients/Clients";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";

const Home = () => {
  return (
    <main>
      <Navbar />
      <div className="space-y-16 container mx-auto">
        <Hero id="#" />
      </div>

      {/* <AboutUs id="nosotros" />
      <Services id="servicios" />
      <Coverage id="cobertura" />
      <Clients id="clientes" />
      <Contact id="contacto" />
      <Footer /> */}
    </main>
  );
};

export default Home;
