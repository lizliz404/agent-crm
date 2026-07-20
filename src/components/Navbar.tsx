export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#fafafa]/80 backdrop-blur-md border-b border-[#e5e5e5]">
      <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <a href="#" className="text-[18px] font-semibold tracking-tight">
            Agent CRM
          </a>
          <div className="hidden md:flex items-center gap-6">
            <button className="text-[14px] font-medium text-[#525252] hover:text-[#0a0a0a] transition-colors">
              Platform
            </button>
            <button className="text-[14px] font-medium text-[#525252] hover:text-[#0a0a0a] transition-colors">
              Resources
            </button>
            <a
              href="#"
              className="text-[14px] font-medium text-[#525252] hover:text-[#0a0a0a] transition-colors"
            >
              Customers
            </a>
            <a
              href="#"
              className="text-[14px] font-medium text-[#525252] hover:text-[#0a0a0a] transition-colors"
            >
              Pricing
            </a>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="#"
            className="text-[14px] font-medium text-[#525252] hover:text-[#0a0a0a] transition-colors"
          >
            Sign in
          </a>
          <a href="#" className="btn-primary">
            Start for free
          </a>
        </div>
      </div>
    </nav>
  );
}
