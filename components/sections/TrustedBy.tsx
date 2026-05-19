import Image from "next/image";

/* Add a logo file to /public/logos/<slug>.{png,svg,jpg} then set logoFile here.
   Leave logoFile undefined to keep the monogram placeholder. */
const CLIENTS: { name: string; slug: string; logoFile?: string }[] = [
  { name: "Save the Life Homecare", slug: "save_the_life", logoFile: "/logos/save_the_life.png" },
  { name: "VeloT Africa",           slug: "velot", logoFile: "/logos/velot.jpg" },
  { name: "Twenza Tech",            slug: "twenza", logoFile: "/logos/twenza_favicon.svg" },
  { name: "Kigali Tech Hub",        slug: "kth"},
];

function ClientLogo({ name, logoFile }: { name: string; logoFile?: string }) {
  if (logoFile) {
    return (
      <div className="logo-placeholder" aria-label={name} title={name}>
        <div className="logo-img-wrap">
          <Image
            src={logoFile}
            alt={name}
            fill
            className="object-contain"
            sizes="120px"
          />
        </div>
        <span className="logo-name">{name}</span>
      </div>
    );
  }

  return (
    <div className="logo-placeholder" aria-label={name} title={name}>
      <svg
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="logo-svg"
        aria-hidden
      >
        <rect x="1" y="1" width="62" height="62" rx="10" className="logo-bg" />
        <rect x="10" y="12" width="44" height="3" rx="1.5" className="logo-bar" />
        <rect x="10" y="49" width="44" height="3" rx="1.5" className="logo-bar" />
        <rect x="10" y="12" width="3" height="40" rx="1.5" className="logo-bar" />
        <rect x="51" y="12" width="3" height="40" rx="1.5" className="logo-bar" />
        <rect x="28" y="28" width="8" height="8" rx="2" className="logo-accent" transform="rotate(45 32 32)" />
      </svg>
      <span className="logo-name">{name}</span>
    </div>
  );
}

/* Duplicate items for seamless marquee */
const ITEMS = [...CLIENTS, ...CLIENTS, ...CLIENTS];

export default function TrustedBy() {
  return (
    <section className="trusted-section">
      <div className="trusted-inner">
        <p className="trusted-label">
          Trusted by organisations across East Africa
        </p>
      </div>

      {/* Marquee track */}
      <div className="trusted-marquee-wrapper" aria-hidden>
        {/* Edge fade — left */}
        <div className="trusted-fade trusted-fade-left" />
        {/* Edge fade — right */}
        <div className="trusted-fade trusted-fade-right" />

        <div className="marquee-track trusted-track">
          {ITEMS.map((client, i) => (
            <div key={`${client.slug}-${i}`} className="trusted-item">
              <ClientLogo name={client.name} logoFile={client.logoFile} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
