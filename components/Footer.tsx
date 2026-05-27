import { InstagramIcon } from "@/components/InstagramIcon";
import { Logo } from "@/components/Logo";
import { CONTACT, NAV_LINKS, SITE_NAME } from "@/lib/constants";

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="bg-brand-blue text-white/80">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <Logo />
            <p className="mt-4 text-sm leading-relaxed">
              Lavanderia de confiança no {CONTACT.location}. Roupas limpas,
              secas e prontas para o seu dia a dia.
            </p>
            <div className="mt-4">
              <InstagramIcon />
            </div>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-brand-lime">
              Navegação
            </h2>
            <ul className="mt-4 space-y-2">
              {NAV_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-sm transition-colors hover:text-brand-lime"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-brand-lime">
              Contato
            </h2>
            <ul className="mt-4 space-y-2 text-sm">
              <li>{CONTACT.phone}</li>
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="transition-colors hover:text-brand-lime"
                >
                  {CONTACT.email}
                </a>
              </li>
              <li>{CONTACT.address}</li>
              <li>{CONTACT.hours}</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm">
          <p>
            © {currentYear} {SITE_NAME}. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
