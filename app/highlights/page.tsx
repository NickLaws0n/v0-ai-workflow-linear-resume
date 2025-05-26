"use client"

import Link from 'next/link'
import { ROLE_TITLE } from '@/lib/role'

export default function HighlightsPage() {
  // Breadcrumbs
  const breadcrumbs = [
    { label: 'Highlights', href: '/#highlights' },
    { label: ROLE_TITLE, href: '/highlights' },
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
    'Highlights', 'Linear', ROLE_TITLE, 'SaaS', 'AI', 'Product Enablement', 'Customer Success'
  ]

  return (
    <div className="flex min-h-screen bg-[#181A1B] text-white">
      {/* Main content area */}
      <div className="flex-1 flex flex-col h-screen pr-64">
        {/* Top border divider only for main content */}
        <div className="border-b border-[#232425] w-full" />
        <div className="flex-1 overflow-auto">
          <div className="max-w-2xl w-full mx-auto py-10">
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
              <h1 className="text-2xl font-bold text-white">Nick's Work Highlights for {ROLE_TITLE} @ Linear</h1>
            </div>
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
            </div>
            {/* Activity feed placeholder */}
            <div className="mt-8">
              <div className="text-lg font-semibold mb-2">Activity</div>
              <div className="flex items-center gap-2 text-sm text-[#8A8F98] mb-4">
                <div className="w-6 h-6 rounded-sm bg-[#B08B36] flex items-center justify-center text-white font-bold text-xs">Nl</div>
                <span className="text-white font-medium">nicklawson</span>
                <span className="text-[#8A8F98]">created this highlight · just now</span>
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
      {/* Right sidebar, force full height */}
      <aside className="fixed top-0 right-0 h-full w-64 border-l border-[#232425] bg-[#181A1B] px-4 flex flex-col gap-6 z-20">
        <div className="mt-10 flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <span className="text-xs text-[#8A8F98] w-16">Status</span>
            <span className="flex items-center gap-2">
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10" cy="10" r="10" fill="#5E6AD2" />
                <path d="M6 10.5l2.5 2.5 5-5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="text-sm text-white">Ready</span>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-[#8A8F98] w-16">Priority</span>
            <span className="flex items-center gap-2">
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="13" width="2" height="4" rx="1" fill="#8A8F98" />
                <rect x="8" y="10" width="2" height="7" rx="1" fill="#8A8F98" />
                <rect x="13" y="6" width="2" height="11" rx="1" fill="#8A8F98" />
              </svg>
              <span className="text-sm text-white">High</span>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-[#8A8F98] w-16">Target date</span>
            <span className="flex items-center gap-2">
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="5" width="14" height="10" rx="2" fill="#8A8F98" />
                <rect x="6" y="2" width="2" height="3" rx="1" fill="#8A8F98" />
                <rect x="12" y="2" width="2" height="3" rx="1" fill="#8A8F98" />
              </svg>
              <span className="text-sm text-white">Jun 30</span>
            </span>
          </div>
        </div>
        <div>
          <div className="text-xs text-[#8A8F98] mb-1">Labels</div>
          <div className="flex items-center gap-2 flex-wrap">
            {labels.map((label, i) => {
              // Make 'SaaS', 'AI', and 'Product Enablement' dots yellow, others cycle as before
              const yellowLabels = ['SaaS', 'AI', 'Product Enablement'];
              const dotColors = [
                'bg-yellow-400',
                'bg-[#5E6AD2]',
                'bg-green-400',
                'bg-purple-400',
                'bg-pink-400',
                'bg-orange-400',
                'bg-teal-400',
              ];
              const dot = yellowLabels.includes(label) ? 'bg-yellow-400' : dotColors[i % dotColors.length];
              return (
                <span key={i} className="flex items-center px-3 py-1 rounded-full border border-[#232425] bg-[#181A1B] text-white text-sm font-medium mb-1">
                  <span className={`w-2 h-2 ${dot} rounded-full mr-2`}></span>
                  {label}
                </span>
              );
            })}
            <button className="text-[#8A8F98] hover:text-white text-lg leading-none px-1">+</button>
          </div>
        </div>
        <div>
          <div className="text-xs text-[#8A8F98] mb-1">Role</div>
          <div className="text-sm font-medium">{ROLE_TITLE}</div>
        </div>
        <div>
          <div className="text-xs text-[#8A8F98] mb-1">Source</div>
          <div className="text-sm font-medium">
            <a href="https://linear.app/careers/370d9605-f02f-44f9-97fa-ebf769bed93d?ashby_jid=370d9605-f02f-44f9-97fa-ebf769bed93d" target="_blank" rel="noopener noreferrer" className="text-[#5E6AD2] underline">View {ROLE_TITLE} Role</a>
          </div>
        </div>
      </aside>
    </div>
  )
} 