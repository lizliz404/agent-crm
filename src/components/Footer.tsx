import { footerColumns } from "@/lib/data";
import { LogoMark } from "@/components/ui";

export function Footer() {
  return (
    <footer className="border-t border-[#ececec] bg-white/60 py-16">
      <div className="container-page">
        <div className="grid gap-10 md:grid-cols-[1.2fr_repeat(4,1fr)]">
          <div>
            <LogoMark />
            <p className="mt-4 max-w-[240px] text-[13.5px] leading-relaxed text-[#737373]">
              The CRM for agentic revenue. Built for teams that run on agents and
              humans together.
            </p>
          </div>
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className="mb-3 text-[13px] font-semibold tracking-tight text-[#0a0a0a]">
                {col.title}
              </h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[13.5px] text-[#525252] transition hover:text-[#0a0a0a]"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col gap-2 border-t border-[#ececec] pt-6 text-[12.5px] text-[#a3a3a3] sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Agent CRM. Design study inspired by Attio.</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-[#525252]">
              Privacy
            </a>
            <a href="#" className="hover:text-[#525252]">
              Terms
            </a>
            <a href="#" className="hover:text-[#525252]">
              Security
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
