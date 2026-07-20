"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Home() {
  const [activeTab, setActiveTab] = useState("build-pipeline");

  const tabs = [
    { id: "build-pipeline", label: "Build pipeline" },
    { id: "convert-leads", label: "Convert leads" },
    { id: "run-sales", label: "Run sales motions" },
    { id: "forecast", label: "Forecast revenue" },
    { id: "retain", label: "Retain and expand" },
  ];

  const tabContent: Record<string, { title: string; subtitle: string; description: string }> = {
    "build-pipeline": {
      title: "Your team, amplified. Agents prospect and reach out when buyers are looking, building a pipeline of deals ready to win.",
      subtitle: "Free your reps to sell.",
      description: "Agents handle the research and busywork. Reps focus their time where deals get won.",
    },
    "convert-leads": {
      title: "Speed to lead, every time. New leads get enriched, scored, and routed to the right rep before they ever cool off.",
      subtitle: "Agents dig. You close.",
      description: "Every lead is enriched and qualified, so reps know when and why to engage.",
    },
    "run-sales": {
      title: "Run every motion, your way. Pipeline built for how you sell, while agents brief the meetings and keep deals moving.",
      subtitle: "Catch changes to the deal.",
      description: "Spot new stakeholders, competitor moves, and stalls before your next call.",
    },
    "forecast": {
      title: "For the people who own the number. Ask any revenue question. From the weekly forecast to performance by rep, get the answer in seconds.",
      subtitle: "Skip the review scramble.",
      description: "Walk in with quota coverage, deal velocity, and potential risks already mapped.",
    },
    "retain": {
      title: "Keep more. Grow more. Agents track the whole book, so you save what's slipping and grow what's rising.",
      subtitle: "Spot the shift early.",
      description: "Whether an account's climbing or cooling, you'll know weeks before the call.",
    },
  };

  const logos = [
    "Parallel", "Turbopuffer", "Taskrabbit", "Granola", "Listen",
    "Wispr Flow", "Wordsmith", "Modal", "Obvious", "Passionfroot",
    "Railway", "Lightdash", "AIUC", "Near", "Public"
  ];

  const accounts = [
    { name: "Granola", signal: "Raised $125M Series C" },
    { name: "Linear", signal: "Building out its sales team" },
    { name: "Notion", signal: "New VP Sales from enterprise SaaS" },
    { name: "OpenAI", signal: "Scaling faster than it can hire" },
    { name: "Shopify", signal: "Doubling down on enterprise sales" },
    { name: "Dropbox", signal: "GTM reset under a new CRO" },
  ];

  const changelogItems = [
    { date: "June 29, 2026", title: "What's new in Workflows", desc: "More of the work, off your plate." },
    { date: "June 29, 2026", title: "New activity timeline", desc: "Eliminate noise in your records." },
    { date: "June 29, 2026", title: "Calls on mobile", desc: "Call recordings are now on mobile." },
    { date: "June 29, 2026", title: "More App Store updates", desc: "Connect Agent CRM to more of the tools you use every day." },
  ];

  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#fafafa]/80 backdrop-blur-md border-b border-[#e5e5e5]">
        <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <a href="#" className="text-[18px] font-semibold tracking-tight">Agent CRM</a>
            <div className="hidden md:flex items-center gap-6">
              <button className="text-[14px] font-medium text-[#525252] hover:text-[#0a0a0a] transition-colors">Platform</button>
              <button className="text-[14px] font-medium text-[#525252] hover:text-[#0a0a0a] transition-colors">Resources</button>
              <a href="#" className="text-[14px] font-medium text-[#525252] hover:text-[#0a0a0a] transition-colors">Customers</a>
              <a href="#" className="text-[14px] font-medium text-[#525252] hover:text-[#0a0a0a] transition-colors">Pricing</a>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a href="#" className="text-[14px] font-medium text-[#525252] hover:text-[#0a0a0a] transition-colors">Sign in</a>
            <a href="#" className="btn-primary">Start for free</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-24 px-6">
        <div className="max-w-[720px] mx-auto text-center">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.p
              variants={fadeInUp}
              className="text-[14px] font-medium text-[#525252] mb-6"
            >
              GTM lessons from Elena Verna and more
            </motion.p>
            
            <motion.h1
              variants={fadeInUp}
              className="text-hero mb-6"
            >
              Welcome to agentic revenue.
            </motion.h1>
            
            <motion.p
              variants={fadeInUp}
              className="text-body max-w-[420px] mx-auto mb-8"
            >
              Agent CRM is the CRM that builds pipeline, advances deals, and grows accounts around the clock.
            </motion.p>
            
            <motion.div
              variants={fadeInUp}
              className="flex items-center justify-center gap-3"
            >
              <a href="#" className="btn-primary">Talk to sales</a>
              <a href="#" className="btn-secondary">Start for free</a>
            </motion.div>
          </motion.div>
        </div>

        {/* Product Demo Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-[1000px] mx-auto mt-20"
        >
          <div className="bg-white rounded-[16px] border border-[#e5e5e5] shadow-[0_2px_20px_rgba(0,0,0,0.04)] overflow-hidden">
            <div className="bg-[#f5f5f5] px-4 py-3 border-b border-[#e5e5e5] flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <div className="w-3 h-3 rounded-full bg-[#28c840]" />
              </div>
              <span className="text-[13px] text-[#737373] ml-2">Product Demo w/ GreenLeaf</span>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-full bg-[#e5e5e5] flex items-center justify-center text-[14px] font-medium">M</div>
                <div>
                  <div className="text-[14px] font-medium">Marcus</div>
                  <div className="text-[13px] text-[#737373]">10:24</div>
                </div>
                <div className="ml-auto flex items-center gap-2">
                  <span className="text-[12px] px-2 py-1 bg-[#f5f5f5] rounded-md text-[#525252]">Agent CRM APP</span>
                  <span className="text-[13px] text-[#737373]">10:24</span>
                </div>
              </div>
              <div className="bg-[#fafafa] rounded-lg p-4 border border-[#e5e5e5]">
                <div className="flex items-center gap-2 text-[14px] text-[#525252]">
                  <span className="text-[#0a0a0a]">&gt;</span>
                  <span>Find yesterday's demo call and create the rig</span>
                  <span className="text-[#a3a3a3]">▶▶ auto</span>
                </div>
                <div className="mt-2 text-[13px] text-[#737373]">Opus 4.8 · 1M context</div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Logo Cloud */}
      <section className="py-16 px-6 border-t border-[#e5e5e5]">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6"
          >
            {logos.map((logo, i) => (
              <motion.span
                key={logo}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="text-[15px] font-medium text-[#a3a3a3] hover:text-[#525252] transition-colors cursor-default"
              >
                {logo}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Platform Showcase */}
      <section className="py-24 px-6">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-[14px] font-medium text-[#525252] uppercase tracking-wider">Platform</span>
            <h2 className="text-section mt-4 max-w-[800px] mx-auto">
              The intelligent system that never sleeps.
              <br />
              <span className="text-[#737373]">Picks up leads at 2am. Catches renewals before they slip. Hands you the answer before you ask.</span>
            </h2>
          </motion.div>

          {/* Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-wrap justify-center gap-2 mb-12"
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 text-[14px] font-medium rounded-[10px] transition-all ${
                  activeTab === tab.id
                    ? "bg-[#0a0a0a] text-[#fafafa]"
                    : "text-[#525252] hover:text-[#0a0a0a] hover:bg-[#f5f5f5]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </motion.div>

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid md:grid-cols-2 gap-12 items-start"
          >
            <div>
              <h3 className="text-subsection mb-4">
                {tabContent[activeTab].title}
              </h3>
              <h4 className="text-label mb-2">
                {tabContent[activeTab].subtitle}
              </h4>
              <p className="text-body">
                {tabContent[activeTab].description}
              </p>
            </div>

            {/* Mock UI */}
            <div className="bg-white rounded-[12px] border border-[#e5e5e5] p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-[#f5f5f5] flex items-center justify-center text-[13px] font-medium">?</div>
                <span className="text-[14px] text-[#737373]">Ask something...</span>
              </div>
              <div className="text-[13px] text-[#525252] mb-4">10 accounts ready for outreach</div>
              <div className="space-y-3">
                {accounts.map((account) => (
                  <motion.div
                    key={account.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center justify-between py-2 border-b border-[#f5f5f5] last:border-0"
                  >
                    <span className="text-[14px] font-medium">{account.name}</span>
                    <span className="text-[13px] text-[#737373]">{account.signal}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Live from day one */}
      <section className="py-24 px-6 bg-[#0a0a0a] text-[#fafafa]">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-16 items-center"
          >
            <div>
              <span className="inline-block px-3 py-1 text-[13px] font-medium bg-[#262626] rounded-full mb-6">Self-building</span>
              <h2 className="text-section text-[#fafafa] mb-6">
                Live from day one.
                <br />
                <span className="text-[#a3a3a3]">Connect your inbox and calendar. Agent CRM learns your business and builds itself around it, before your first agent even gets to work.</span>
              </h2>
              <a href="#" className="btn-primary bg-[#fafafa] text-[#0a0a0a] border-[#fafafa] hover:bg-[#e5e5e5]">Start for free</a>
            </div>

            <div className="bg-[#171717] rounded-[16px] border border-[#262626] p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-[#262626] flex items-center justify-center text-[14px] font-medium">S</div>
                <div>
                  <div className="text-[15px] font-medium">Sarah Johnson</div>
                  <div className="text-[13px] text-[#a3a3a3]">Head of IT</div>
                </div>
                <button className="ml-auto text-[13px] text-[#a3a3a3] hover:text-[#fafafa]">Compose email</button>
              </div>
              
              <div className="space-y-4">
                <div>
                  <div className="text-[13px] font-medium text-[#a3a3a3] mb-2">Highlights</div>
                  <div className="text-[14px] leading-relaxed">
                    Sarah Johnson, the Head of IT, is leading the initiative to modernize their data infrastructure, which aligns with GreenLeaf's growth and sustainability goals.
                  </div>
                </div>
                
                <div className="flex items-center gap-4 text-[13px]">
                  <span className="text-[#a3a3a3]">LinkedIn</span>
                  <span>sarahjohnson</span>
                </div>
                
                <div className="bg-[#262626] rounded-lg p-4">
                  <div className="text-[13px] text-[#a3a3a3] mb-1">Upcoming</div>
                  <div className="text-[14px] font-medium">Demo Call</div>
                  <div className="text-[13px] text-[#a3a3a3]">Aug 29, 10:40 AM</div>
                </div>
                
                <div>
                  <div className="text-[13px] text-[#a3a3a3] mb-2">Activity</div>
                  <div className="space-y-2 text-[13px]">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-[#262626] flex items-center justify-center text-[11px]">M</div>
                      <span>Michael Chang attended an in-person meeting</span>
                      <span className="text-[#737373]">6 hours ago</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-[#262626] flex items-center justify-center text-[11px]">S</div>
                      <span>Sarah Johnson attended an event</span>
                      <span className="text-[#737373]">2 days ago</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Universal Context */}
      <section className="py-24 px-6">
        <div className="max-w-[1200px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-[64px] leading-[1] font-semibold tracking-[-0.02em] text-[#0a0a0a] mb-4">
              Universal Context ™
            </h2>
            <p className="text-section text-[#525252] max-w-[600px] mx-auto">
              All of the signals, none of the noise. Ready to act on.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid md:grid-cols-3 gap-8 mt-16"
          >
            <div className="p-6 rounded-[12px] border border-[#e5e5e5] bg-white">
              <h3 className="text-label mb-3">Agents + automations</h3>
              <p className="text-body text-[14px]">AI agents that work around the clock</p>
            </div>
            <div className="p-6 rounded-[12px] border border-[#e5e5e5] bg-white">
              <h3 className="text-label mb-3">Your whole stack, connected</h3>
              <p className="text-body text-[14px]">Claude, Slack, Clay, Linear, Notion</p>
            </div>
            <div className="p-6 rounded-[12px] border border-[#e5e5e5] bg-white">
              <h3 className="text-label mb-3">SDK. API. MCP.</h3>
              <p className="text-body text-[14px]">Build anything on Agent CRM</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Customer Stories */}
      <section className="py-24 px-6 border-t border-[#e5e5e5]">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-[14px] font-medium text-[#525252]">Customer stories</span>
            <h2 className="text-section mt-4">
              Trusted by 30,000+ customers.
              <br />
              <span className="text-[#737373]">From first agent to enterprise scale.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {["Granola", "Railway", "Modal", "Taskrabbit"].map((name) => (
              <button
                key={name}
                className="px-6 py-3 text-[15px] font-medium border border-[#e5e5e5] rounded-[10px] hover:bg-[#f5f5f5] transition-colors"
              >
                {name}
              </button>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-[600px] mx-auto p-8 rounded-[16px] border border-[#e5e5e5] bg-white text-center"
          >
            <span className="text-[13px] font-medium text-[#737373] uppercase tracking-wider">Artificial Intelligence</span>
            <h3 className="text-subsection mt-2">
              83% faster lead triage. How Granola turns product signals into revenue at scale.
            </h3>
            <div className="mt-4 text-[15px] font-medium">Granola</div>
          </motion.div>
        </div>
      </section>

      {/* Changelog */}
      <section className="py-24 px-6 border-t border-[#e5e5e5]">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex items-end justify-between mb-12"
          >
            <div>
              <span className="text-[14px] font-medium text-[#525252]">Changelog</span>
              <h2 className="text-section mt-2">
                Better as you grow.
                <br />
                <span className="text-[#737373]">New features every week to keep pace with you.</span>
              </h2>
            </div>
            <a href="#" className="text-[14px] font-medium text-[#525252] hover:text-[#0a0a0a] flex items-center gap-1">
              View all
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {changelogItems.map((item, i) => (
              <motion.a
                key={item.title}
                href="#"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 rounded-[12px] border border-[#e5e5e5] bg-white hover:border-[#d4d4d4] transition-colors group"
              >
                <div className="text-[13px] text-[#737373] mb-2">{item.date}</div>
                <h3 className="text-[17px] font-medium mb-1 group-hover:text-[#525252] transition-colors">{item.title}</h3>
                <p className="text-[14px] text-[#737373]">{item.desc}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 border-t border-[#e5e5e5]">
        <div className="max-w-[720px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-hero mb-8">
              Agentic revenue runs on Agent CRM.
            </h2>
            <div className="flex items-center justify-center gap-3">
              <a href="#" className="btn-primary">Talk to sales</a>
              <a href="#" className="btn-secondary">Start for free</a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-[#e5e5e5]">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-[18px] font-semibold mb-4">Agent CRM</div>
            </div>
            <div>
              <h4 className="text-[14px] font-medium mb-4">Platform</h4>
              <ul className="space-y-2 text-[14px] text-[#525252]">
                <li><a href="#" className="hover:text-[#0a0a0a]">Refer a team</a></li>
                <li><a href="#" className="hover:text-[#0a0a0a]">Changelog</a></li>
                <li><a href="#" className="hover:text-[#0a0a0a]">Gmail extension</a></li>
                <li><a href="#" className="hover:text-[#0a0a0a]">iOS app</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[14px] font-medium mb-4">Company</h4>
              <ul className="space-y-2 text-[14px] text-[#525252]">
                <li><a href="#" className="hover:text-[#0a0a0a]">Customers</a></li>
                <li><a href="#" className="hover:text-[#0a0a0a]">Announcements</a></li>
                <li><a href="#" className="hover:text-[#0a0a0a]">Careers</a></li>
                <li><a href="#" className="hover:text-[#0a0a0a]">Manifesto</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[14px] font-medium mb-4">Import from</h4>
              <ul className="space-y-2 text-[14px] text-[#525252]">
                <li><a href="#" className="hover:text-[#0a0a0a]">Salesforce</a></li>
                <li><a href="#" className="hover:text-[#0a0a0a]">Hubspot</a></li>
                <li><a href="#" className="hover:text-[#0a0a0a]">Pipedrive</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
