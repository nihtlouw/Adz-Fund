import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useId, useState } from "react";
import { NAV, SITE } from "@/data/site";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper">
      <Container className="flex h-20 items-center justify-between gap-6">
        <Link
          to="/"
          className="flex min-h-11 items-center gap-3 text-ink no-underline"
          aria-label={`${SITE.shortName} home`}
        >
          <img
            src={SITE.logoSrc}
            alt=""
            width={44}
            height={44}
            className="size-11 object-contain"
          />
          <span className="leading-tight">
            <span className="block text-[11px] font-semibold tracking-[0.18em] uppercase">
              AzHcriel Capital
            </span>
            <span className="block text-[10px] tracking-[0.16em] text-stone uppercase">
              Investment Fund
            </span>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => {
            const active = pathname === item.to || pathname.startsWith(`${item.to}/`);
            return (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "relative flex h-11 items-center px-3 text-[13px] font-semibold tracking-[0.08em] text-ink-soft no-underline uppercase transition-colors duration-150 hover:text-ink",
                  active && "text-ink",
                )}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
                {active ? (
                  <span className="absolute inset-x-3 bottom-2 h-px bg-forest" aria-hidden="true" />
                ) : null}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <Link to="/contact">Contact Us</Link>
          </Button>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center text-ink lg:hidden"
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="size-5" strokeWidth={1.75} /> : <Menu className="size-5" strokeWidth={1.75} />}
          </button>
        </div>
      </Container>

      <div
        id={menuId}
        hidden={!open}
        className="border-t border-line bg-paper lg:hidden"
      >
        <nav aria-label="Mobile" className="flex flex-col px-5 py-4 sm:px-8">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="flex min-h-12 items-center border-b border-line text-base font-semibold text-ink no-underline"
            >
              {item.label}
            </Link>
          ))}
          <Button asChild className="mt-5">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
