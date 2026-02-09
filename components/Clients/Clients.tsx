import Image from "next/image";

const logos = [
  "/assets/images/companies/7.png",
  "/assets/images/companies/8.png",
  "/assets/images/companies/9.png",
  "/assets/images/companies/10.png",
  "/assets/images/companies/11.png",
  "/assets/images/companies/12.png",
  "/assets/images/companies/13.png",
  "/assets/images/companies/CAPO.jpg",
  "/assets/images/companies/WERCHOW.jpg",
  "/assets/images/companies/ruddys.jpg",
  "/assets/images/companies/Logo.png",
  "/assets/images/companies/logo-azul.png",
];

interface IClients {
  id?: string;
}

const Clients = ({ id }: IClients) => {
  return (
    <section
      id={id}
      className="relative w-full overflow-hidden py-6 md:py-8 bg-tonico"
    >
      <div className="relative overflow-hidden w-full">
        {/* Marquee */}
        <div className="flex animate-marquee whitespace-nowrap gap-16 md:gap-20 lg:gap-24">
          {[...logos, ...logos].map((logo, idx) => (
            <div
              key={idx}
              className="shrink-0 h-10 md:h-14 flex items-center justify-center"
            >
              <Image
                src={logo}
                alt={`Cliente ${idx + 1}`}
                className="object-contain h-full w-auto brightness-0"
                width={120}
                height={60}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
