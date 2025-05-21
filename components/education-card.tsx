"use client"

import type { Education } from "./resume-context"
import { ArrowUpRight, MoreHorizontal } from "lucide-react"

export function EducationCard({ education }: { education: Education }) {
  const priorityLabels = {
    high: { text: "P1", color: "bg-red-500" },
    medium: { text: "P2", color: "bg-yellow-500" },
    low: { text: "P3", color: "bg-green-500" },
  }

  return (
    <div className="p-4 rounded-lg border border-[#27292b] bg-[#1e1f21] hover:bg-[#27292b] transition-colors">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-green-500"></div>
          <h3 className="font-medium">{education.degree}</h3>
          <span className="text-sm text-[#8A8F98]">@{education.institution}</span>
        </div>

        <div className="flex items-center gap-2">
          <span className={`text-xs px-1.5 py-0.5 rounded ${priorityLabels[education.priority].color}`}>
            {priorityLabels[education.priority].text}
          </span>
          <button className="text-[#8A8F98] hover:text-white">
            <MoreHorizontal size={16} />
          </button>
        </div>
      </div>

      <div className="mt-3 pl-5">
        <div className="text-sm text-[#8A8F98] mb-2">{education.period}</div>
        <p className="text-sm text-[#E2E2E2]">{education.description}</p>
      </div>

      <div className="mt-4 pl-5 flex items-center text-xs text-[#8A8F98]">
        <button className="flex items-center gap-1 hover:text-white">
          <span>View details</span>
          <ArrowUpRight size={12} />
        </button>
      </div>
    </div>
  )
}
