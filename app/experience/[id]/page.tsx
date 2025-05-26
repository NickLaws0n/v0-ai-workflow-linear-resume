"use client"

import { useParams, useRouter } from 'next/navigation'
import { useResume } from '@/components/resume-context'
import { ExperienceCard } from '@/components/experience-card'
import Link from 'next/link'

export default function ExperienceDetailPage() {
  const params = useParams<{ id: string }>()
  const router = useRouter()
  const { experiences } = useResume()
  const experience = experiences.find(exp => exp.id === params.id)

  if (!experience) {
    return (
      <div className="flex flex-col items-center justify-center h-full">
        <p className="text-lg text-[--muted]">Experience not found.</p>
        <button className="mt-4 text-[--primary] underline" onClick={() => router.back()}>
          Back
        </button>
      </div>
    )
  }

  // Breadcrumbs
  const breadcrumbs = [
    { label: 'Experience', href: '/#experience' },
    { label: experience.title, href: `/experience/${experience.id}` },
  ]

  const currentIndex = experiences.findIndex(exp => exp.id === params.id);
  const total = experiences.length;
  function goTo(index: number) {
    if (index < 0) {
      router.push(`/experience/${experiences[total - 1].id}`);
    } else if (index >= total) {
      router.push(`/experience/${experiences[0].id}`);
    } else {
      router.push(`/experience/${experiences[index].id}`);
    }
  }

  return (
    <div className="flex min-h-screen bg-[#181A1B] text-white">
      {/* Centered main content and right sidebar */}
      <div className="flex w-full">
        {/* Main content */}
        <div className="flex-1 py-10 pr-64">
          <div className="max-w-2xl w-full mx-auto relative">
            {/* Pager UI - absolutely positioned top right of main content */}
            <div className="absolute top-0 right-0 mr-2 z-10">
              <div className="flex items-center gap-2 text-xs text-[#8A8F98]">
                <span>{currentIndex + 1} / {total}</span>
                <button
                  className="p-1 rounded-md bg-[#232425] disabled:opacity-30"
                  onClick={() => goTo(currentIndex - 1)}
                  aria-label="Previous"
                >
                  <svg width="16" height="16" fill="none" stroke="currentColor"><path d="M4 10l4-4 4 4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
                <button
                  className="p-1 rounded-md bg-[#232425] disabled:opacity-30"
                  onClick={() => goTo(currentIndex + 1)}
                  aria-label="Next"
                >
                  <svg width="16" height="16" fill="none" stroke="currentColor"><path d="M4 6l4 4 4-4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
              </div>
            </div>
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
              <h1 className="text-2xl font-bold text-white">{experience.title}</h1>
            </div>
            {/* Title and actions */}
            <div className="text-[#8A8F98] text-2xl mb-6 font-semibold">{experience.company}</div>
            {/* Description */}
            <div className="bg-[#232425] rounded-lg p-6 border border-[#27292b] mb-8">
              <ul className="list-disc pl-5 space-y-4">
                {experience.description.map((item, i) => (
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
        {/* Right sidebar */}
        <aside className="fixed top-0 right-0 h-full w-64 border-l border-[#232425] bg-[#181A1B] px-4 flex flex-col gap-6 z-20">
          <div className="mt-10 flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <span className="text-xs text-[#8A8F98] w-20">Status</span>
              <span className="flex items-center gap-2">
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="10" cy="10" r="10" fill="#5E6AD2" />
                  <path d="M6 10.5l2.5 2.5 5-5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-sm text-white">Completed</span>
              </span>
            </div>
            {/* Start date */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-[#8A8F98] w-20">Start date</span>
              <span className="flex items-center gap-2">
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="5" width="14" height="10" rx="2" fill="#8A8F98" />
                  <rect x="6" y="2" width="2" height="3" rx="1" fill="#8A8F98" />
                  <rect x="12" y="2" width="2" height="3" rx="1" fill="#8A8F98" />
                </svg>
                <span className="text-sm text-white">{experience.period.split('–')[0].trim()}</span>
              </span>
            </div>
            {/* Finish date */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-[#8A8F98] w-20">Finish date</span>
              <span className="flex items-center gap-2">
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="5" width="14" height="10" rx="2" fill="#8A8F98" />
                  <rect x="6" y="2" width="2" height="3" rx="1" fill="#8A8F98" />
                  <rect x="12" y="2" width="2" height="3" rx="1" fill="#8A8F98" />
                </svg>
                <span className="text-sm text-white">{experience.period.split('–')[1] ? experience.period.split('–')[1].trim() : ''}</span>
              </span>
            </div>
          </div>
          <div className="pl-4 pr-2 mt-2">
            <div className="text-xs text-[#8A8F98] mb-0.5">Labels</div>
            <div className="flex items-center gap-2 flex-wrap">
              {experience.labels.map((label, i) => {
                const dotColors = [
                  'bg-yellow-400',
                  'bg-[#5E6AD2]',
                  'bg-green-400',
                  'bg-purple-400',
                  'bg-pink-400',
                  'bg-orange-400',
                  'bg-teal-400',
                ];
                const dot = dotColors[i % dotColors.length];
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
          <div className="pl-4 pr-2 mt-2">
            <div className="text-xs text-[#8A8F98] mb-0.5">Company</div>
            <div className="text-sm font-medium">{experience.company}</div>
          </div>
          <div className="pl-4 pr-2 mt-2">
            <div className="text-xs text-[#8A8F98] mb-0.5">Period</div>
            <div className="text-sm font-medium">{experience.period}</div>
          </div>
        </aside>
      </div>
    </div>
  )
} 