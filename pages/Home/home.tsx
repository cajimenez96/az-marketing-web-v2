import Hero from "@/components/Hero/hero";
import Navbar from "@/components/Navbar/navbar";
import Services from "@/components/Services/services";
import Coverage from "@/components/Coverage/coverage";
import AboutUs from "@/components/AboutUs/AboutUs";
import Clients from "@/components/Clients/Clients";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import ScrollProvider from "@/components/scroll/ScrollProvider";

const Home = () => {
  return (
    <div className="bg-page min-h-screen">
      <ScrollProvider>
        <Navbar />
        <main>
          <div>
            <Hero id="inicio" />
            <div className="reveal">
              <AboutUs id="nosotros" />
            </div>
            <div className="reveal">
              <Services id="servicios" />
            </div>
            <div className="reveal">
              <Coverage id="cobertura" />
            </div>
            <div className="reveal">
              <Clients id="clientes" />
            </div>
            <div className="reveal">
              <Contact id="contacto" />
            </div>
            <Footer />
          </div>
        </main>
      </ScrollProvider>
    </div>
  );
};

export default Home;
