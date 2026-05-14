/* Placeholder logos — swap each <svg> for a real <img src="/logos/client.svg" /> when available */

const CLIENTS = [
  { name: "Ministry of ICT", slug: "moict" },
  { name: "Rwanda Health Initiative", slug: "rhi" },
  { name: "East Africa NGO Alliance", slug: "eana" },
  { name: "Kigali Tech Hub", slug: "kth" },
  { name: "Development Finance Corp", slug: "dfc" },
  { name: "Pan-African Education Fund", slug: "paef" },
];

/* Inline SVG placeholder — generic "shield + initials" monogram.
   Replace the entire <LogoPlaceholder /> with <img> once real logos are provided. */
function LogoPlaceholder({ name, slug }: { name: string; slug: string }) {
  const initials = slug.slice(0, 3).toUpperCase();
  return (
    <div className="logo-placeholder" aria-label={name} title={name}>
      {/* Outer ring */}
      <svg
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="logo-svg"
        aria-hidden
      >
        {/* Background rect */}
        <rect x="1" y="1" width="62" height="62" rx="10" className="logo-bg" />
        {/* Horizontal rule top */}
        <rect x="10" y="12" width="44" height="3" rx="1.5" className="logo-bar" />
        {/* Horizontal rule bottom */}
        <rect x="10" y="49" width="44" height="3" rx="1.5" className="logo-bar" />
        {/* Left vertical bar */}
        <rect x="10" y="12" width="3" height="40" rx="1.5" className="logo-bar" />
        {/* Right vertical bar */}
        <rect x="51" y="12" width="3" height="40" rx="1.5" className="logo-bar" />
        {/* Diamond accent */}
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
              <LogoPlaceholder name={client.name} slug={client.slug} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
