"use client"

import Link from 'next/link'

export default function HighlightsPage() {
  // Breadcrumbs
  const breadcrumbs = [
    { label: 'Highlights', href: '/#highlights' },
    { label: '@Web (Linear)', href: '/highlights' },
  ]

  const summary =
    "Seasoned Enterprise Customer Success Manager with a proven track record in SaaS, AI, and product enablement. Expert at building relationships, driving adoption, and delivering measurable results for enterprise clients. Passionate about simplifying complex technology and collaborating cross-functionally to shape product strategy and customer experience."

  const achievements = [
    "Managed a $30M+ ARR portfolio of enterprise merchants at Shopify Plus, consistently exceeding NRR and expansion targets (126% to target for 2024).",
    "Spearheaded end-to-end renewal processes, QBRs, and upsell opportunities, partnering with product and GTM teams to drive feature adoption by 15%.",
    "Collaborated with Learning & Development to launch the 'Zero to AI' enablement program, achieving a 94% satisfaction rate.",
    "Led a Voice of Customer (VOC) project to enhance support authentication, reducing unauthenticated requests by 20% and improving onboarding/retention by 30%.",
    "Recognized with the Shopify Values award for outstanding performance, as voted by peers and leaders.",
    "Participated in AI product development (Shopify Sidekick), refining prompts and ensuring conversation quality.",
    "Built executive relationships and drove adoption of Merchant Services, generating $1.3M+ in new revenue.",
  ]

  const labels = [
    'Highlights', 'Linear', '@Web', 'SaaS', 'AI', 'Product Enablement', 'Customer Success'
  ]

  return (
    <div className="flex min-h-screen bg-[#181A1B] text-white">
      {/* Main content with divider */}
      <div className="flex-1 flex flex-col">
        {/* Top border divider */}
        <div className="w-full border-b border-[#232425]"></div>
        <div className="py-10">
          <div className="max-w-2xl w-full mx-auto">
            {/* Breadcrumbs */}
            <nav className="text-xs text-[#8A8F98] mb-6 flex items-center gap-2">
              {breadcrumbs.map((bc, i) => (
                <span key={i} className="flex items-center gap-2">
                  {i > 0 && <span className="mx-1">/</span>}
                  <Link href={bc.href} className="hover:underline text-[#8A8F98]">{bc.label}</Link>
                </span>
              ))}
            </nav>
            {/* Title and actions */}
            <div className="flex items-center justify-between mb-2">
              <h1 className="text-2xl font-bold text-white">Nick's Work Highlights for @Web at Linear</h1>
              <div className="flex gap-2">
                {/* Placeholder for action icons */}
                <button className="p-2 rounded hover:bg-[#232425] transition-colors" title="Edit"><svg width="16" height="16" fill="none" stroke="currentColor"><path d="M12.1 3.9l-9.2 9.2c-.2.2-.3.4-.4.7l-1 3c-.1.3.2.6.5.5l3-1c.3-.1.5-.2.7-.4l9.2-9.2c.4-.4.4-1 0-1.4l-2.1-2.1c-.4-.4-1-.4-1.4 0z"/></svg></button>
                <button className="p-2 rounded hover:bg-[#232425] transition-colors" title="Attach"><svg width="16" height="16" fill="none" stroke="currentColor"><path d="M7.5 13.5a4 4 0 0 1-5.7-5.7l7.8-7.8a4 4 0 1 1 5.7 5.7l-7.8 7.8a2 2 0 1 1-2.8-2.8l7.8-7.8"/></svg></button>
              </div>
            </div>
            <div className="text-[#8A8F98] text-sm mb-6">Tailored for the @Web role at Linear</div>
            {/* Summary and Achievements */}
            <div className="bg-[#232425] rounded-lg p-8 border border-[#27292b] mb-8">
              <div className="text-lg font-semibold text-white mb-2">Summary</div>
              <div className="text-[#8A8F98] text-base mb-4">{summary}</div>
              <div className="text-lg font-semibold text-white mb-2">Top Achievements</div>
              <ul className="list-disc pl-5 space-y-2">
                {achievements.map((item, i) => (
                  <li key={i} className="text-[#E2E2E2] text-base">{item}</li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                {labels.map((label, i) => (
                  <span key={i} className="text-xs px-2 py-1 rounded-full bg-[#27292b] text-[#8A8F98]">{label}</span>
                ))}
              </div>
            </div>
            {/* Activity feed placeholder */}
            <div className="mt-8">
              <div className="text-lg font-semibold mb-2">Activity</div>
              <div className="flex items-center gap-2 text-sm text-[#8A8F98] mb-4">
                <div className="w-6 h-6 rounded-full bg-[#F2C94C] flex items-center justify-center text-black font-bold text-xs">NL</div>
                <span>nicklawson85 created this highlight · just now</span>
              </div>
              <input
                className="w-full bg-[#232425] border border-[#27292b] rounded px-4 py-2 text-sm text-white placeholder-[#8A8F98] focus:outline-none focus:ring-2 focus:ring-[#5e6ad2]"
                placeholder="Leave a comment... (coming soon)"
                disabled
              />
            </div>
          </div>
        </div>
      </div>
      {/* Right sidebar, flush to top and bottom, full height */}
      <aside className="w-64 h-screen border-l border-[#232425] bg-[#181A1B] px-4 flex flex-col gap-6">
        <div>
          <div className="text-xs text-[#8A8F98] mb-1">Status</div>
          <div className="text-sm font-medium capitalize mb-2">
            <span className="px-2 py-1 rounded-full bg-green-500/20 text-green-400">Ready</span>
          </div>
        </div>
        <div>
          <div className="text-xs text-[#8A8F98] mb-1">Priority</div>
          <div className="text-sm font-medium capitalize mb-2">
            <span className="px-2 py-1 rounded-full bg-[#27292b] text-[#8A8F98]">P1</span>
          </div>
        </div>
        <div>
          <div className="text-xs text-[#8A8F98] mb-1">Labels</div>
          <div className="flex flex-wrap gap-2">
            <span className="text-xs px-2 py-1 rounded-full bg-[#27292b] text-[#8A8F98]">React</span>
            <span className="text-xs px-2 py-1 rounded-full bg-[#27292b] text-[#8A8F98]">Next.js</span>
          </div>
        </div>
        <div>
          <div className="text-xs text-[#8A8F98] mb-1">Role</div>
          <div className="text-sm font-medium">@Web (Linear)</div>
        </div>
        <div>
          <div className="text-xs text-[#8A8F98] mb-1">Source</div>
          <div className="text-sm font-medium">
            <a href="https://linear.app/careers/370d9605-f02f-44f9-97fa-ebf769bed93d?ashby_jid=370d9605-f02f-44f9-97fa-ebf769bed93d" target="_blank" rel="noopener noreferrer" className="text-[#5e6ad2] underline">View @Web Role</a>
          </div>
        </div>
      </aside>
    </div>
  )
} 