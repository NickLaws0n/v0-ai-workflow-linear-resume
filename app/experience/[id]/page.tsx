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
    if (index >= 0 && index < total) {
      router.push(`/experience/${experiences[index].id}`);
    }
  }

  return (
    <div className="flex min-h-screen bg-[#181A1B] text-white">
      {/* Centered main content and right sidebar */}
      <div className="flex w-full">
        {/* Main content */}
        <div className="flex-1 py-10">
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
              <h1 className="text-2xl font-bold text-white">{experience.title}</h1>
            </div>
            <div className="text-[#8A8F98] text-sm mb-6">@{experience.company} &middot; {experience.period}</div>
            {/* Description */}
            <div className="bg-[#232425] rounded-lg p-6 border border-[#27292b] mb-8">
              <ul className="list-disc pl-5 space-y-4">
                {experience.description.map((item, i) => (
                  <li key={i} className="text-[#E2E2E2] text-base">{item}</li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                {experience.labels.map((label, i) => (
                  <span key={i} className="text-xs px-2 py-1 rounded-full bg-[#27292b] text-[#8A8F98]">{label}</span>
                ))}
              </div>
            </div>
            {/* Activity feed placeholder */}
            <div className="mt-8">
              <div className="text-lg font-semibold mb-2">Activity</div>
              <input
                className="w-full bg-[#232425] border border-[#27292b] rounded px-4 py-2 text-sm text-white placeholder-[#8A8F98] focus:outline-none focus:ring-2 focus:ring-[#5e6ad2]"
                placeholder="Leave a comment... (coming soon)"
                disabled
              />
            </div>
          </div>
        </div>
        {/* Right sidebar */}
        <aside className="w-64 border-l border-[#232425] bg-[#181A1B] px-4 py-6 flex flex-col">
          <div className="pl-4 pr-2">
            <div className="text-xs text-[#8A8F98] mb-0.5">Status</div>
            <div className="text-xs font-medium capitalize mb-1">
              <span className={`px-2 py-0.5 rounded-full ${experience.status === 'completed' ? 'bg-green-500/20 text-green-400' : experience.status === 'in-progress' ? 'bg-blue-500/20 text-blue-400' : 'bg-yellow-500/20 text-yellow-400'}`}>{experience.status.replace('-', ' ')}</span>
            </div>
          </div>
          <div className="pl-4 pr-2 mt-2">
            <div className="text-xs text-[#8A8F98] mb-0.5">Priority</div>
            <div className="text-xs font-medium capitalize mb-1">
              <span className={`px-2 py-0.5 rounded-full ${experience.priority === 'high' ? 'bg-red-500/20 text-red-400' : experience.priority === 'medium' ? 'bg-yellow-500/20 text-yellow-400' : 'bg-green-500/20 text-green-400'}`}>{experience.priority}</span>
            </div>
          </div>
          <div className="pl-4 pr-2 mt-2">
            <div className="text-xs text-[#8A8F98] mb-0.5">Labels</div>
            <div className="flex flex-wrap gap-1">
              {experience.labels.map((label, i) => (
                <span key={i} className="text-xs px-1.5 py-0.5 rounded-full bg-[#232425] text-[#8A8F98]">{label}</span>
              ))}
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