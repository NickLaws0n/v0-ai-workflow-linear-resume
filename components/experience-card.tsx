"use client"

import type { Experience } from "./resume-context"
import { ArrowUpRight, MoreHorizontal } from "lucide-react"

export function ExperienceCard({ experience }: { experience: Experience }) {
  const statusColors = {
    completed: "bg-green-500",
    "in-progress": "bg-blue-500",
    planned: "bg-yellow-500",
  }

  const priorityLabels = {
    high: { text: "P1", color: "bg-red-500" },
    medium: { text: "P2", color: "bg-yellow-500" },
    low: { text: "P3", color: "bg-green-500" },
  }

  return (
    <div className="p-4 rounded-lg border border-[#27292b] bg-[#1e1f21] hover:bg-[#27292b] transition-colors">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className={`w-2 h-2 rounded-full ${statusColors[experience.status]}`}></div>
          <h3 className="font-medium">{experience.title}</h3>
          <span className="text-sm text-[#8A8F98]">@{experience.company}</span>
        </div>

        <div className="flex items-center gap-2">
          <span className={`text-xs px-1.5 py-0.5 rounded ${priorityLabels[experience.priority].color}`}>
            {priorityLabels[experience.priority].text}
          </span>
          <button className="text-[#8A8F98] hover:text-white">
            <MoreHorizontal size={16} />
          </button>
        </div>
      </div>

      <div className="mt-3 pl-5">
        <div className="text-sm text-[#8A8F98] mb-2">{experience.period}</div>
        <ul className="space-y-1 text-sm">
          {experience.description.map((item, index) => (
            <li key={index} className="list-disc ml-4 text-[#E2E2E2]">
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-4 pl-5 flex flex-wrap gap-2">
        {experience.labels.map((label, index) => (
          <span key={index} className="text-xs px-2 py-1 rounded-full bg-[#27292b] text-[#8A8F98]">
            {label}
          </span>
        ))}
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
