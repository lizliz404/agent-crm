export function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-[#e5e5e5]">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="text-[18px] font-semibold mb-4">Agent CRM</div>
          </div>
          <div>
            <h4 className="text-[14px] font-medium mb-4">Platform</h4>
            <ul className="space-y-2 text-[14px] text-[#525252]">
              <li>
                <a href="#" className="hover:text-[#0a0a0a]">
                  Refer a team
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#0a0a0a]">
                  Changelog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#0a0a0a]">
                  Gmail extension
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#0a0a0a]">
                  iOS app
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-[14px] font-medium mb-4">Company</h4>
            <ul className="space-y-2 text-[14px] text-[#525252]">
              <li>
                <a href="#" className="hover:text-[#0a0a0a]">
                  Customers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#0a0a0a]">
                  Announcements
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#0a0a0a]">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#0a0a0a]">
                  Manifesto
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-[14px] font-medium mb-4">Import from</h4>
            <ul className="space-y-2 text-[14px] text-[#525252]">
              <li>
                <a href="#" className="hover:text-[#0a0a0a]">
                  Salesforce
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#0a0a0a]">
                  Hubspot
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#0a0a0a]">
                  Pipedrive
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
