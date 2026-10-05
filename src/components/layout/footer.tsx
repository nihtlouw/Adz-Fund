import { Link } from "@tanstack/react-router";
import { NAV, SITE } from "@/data/site";
import { Container } from "@/components/ui/container";

export function Footer() {
  return (
    <footer className="bg-forest-deep text-cream">
      <Container className="grid gap-12 py-16 sm:py-20 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Link to="/" className="inline-flex items-center gap-3 text-cream no-underline">
            <img
              src={SITE.logoSrc}
              alt=""
              width={44}
              height={44}
              className="size-11 bg-cream object-contain p-1"
            />
            <span>
              <span className="block text-[11px] font-semibold tracking-[0.18em] uppercase">
                AzHcriel Capital
              </span>
              <span className="block text-[10px] tracking-[0.16em] text-cream/60 uppercase">
                Investment Fund
              </span>
            </span>
          </Link>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-cream/70">{SITE.description}</p>
        </div>

        <div className="lg:col-span-3">
          <p className="text-xs font-semibold tracking-[0.18em] text-cream/55 uppercase">Navigate</p>
          <ul className="mt-4 space-y-2">
            {NAV.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-sm text-cream/85 no-underline transition-colors duration-150 hover:text-cream"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-4">
          <p className="text-xs font-semibold tracking-[0.18em] text-cream/55 uppercase">Contact</p>
          <ul className="mt-4 space-y-2 text-sm text-cream/85">
            <li>{SITE.contactEmail}</li>
            <li>{SITE.contactPhone}</li>
            <li className="max-w-xs leading-relaxed">{SITE.address}</li>
            <li>{SITE.officeHours}</li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-cream/10">
        <Container className="flex flex-col gap-4 py-6 text-xs leading-relaxed text-cream/55 sm:flex-row sm:items-start sm:justify-between">
          <p className="max-w-3xl">{SITE.disclaimer}</p>
          <div className="flex shrink-0 gap-5">
            <Link to="/privacy" className="text-cream/70 no-underline hover:text-cream">
              Privacy
            </Link>
            <Link to="/terms" className="text-cream/70 no-underline hover:text-cream">
              Terms
            </Link>
            <p>© {new Date().getFullYear()} {SITE.shortName}</p>
          </div>
        </Container>
      </div>
    </footer>
  );
}
