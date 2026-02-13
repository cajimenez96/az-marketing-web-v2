import Hero from "@/components/Hero/hero";
import Navbar from "@/components/Navbar/navbar";
import Services from "@/components/Services/services";
import Coverage from "@/components/Coverage/coverage";
import AboutUs from "@/components/AboutUs/AboutUs";
import Clients from "@/components/Clients/Clients";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import ScrollReveal from "@/components/scroll-reveal/ScrollReveal";

const Home = () => {
  return (
    <div className="bg-page min-h-screen scroll-smooth">
      <Navbar />
      <main className="">
        <div>
          <ScrollReveal>
            <Hero id="inicio" />
          </ScrollReveal>
          <ScrollReveal>
            <AboutUs id="nosotros" />
          </ScrollReveal>
          <ScrollReveal>
            <Services id="servicios" />
          </ScrollReveal>
          <ScrollReveal>
            <Coverage id="cobertura" />
          </ScrollReveal>
          <ScrollReveal>
            <Clients id="clientes" />
          </ScrollReveal>
          <ScrollReveal>
            <Contact id="contacto" />
          </ScrollReveal>
          <ScrollReveal>
            <Footer />
          </ScrollReveal>
        </div>
      </main>
    </div>
  );
};

export default Home;
