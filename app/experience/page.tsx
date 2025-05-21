"use client";

import { useResume } from "@/components/resume-context";
import Link from "next/link";
import { Circle } from "lucide-react";

export default function ExperiencePage() {
  const { experiences } = useResume();
  return (
    <div className="space-y-0">
      <div className="flex items-center justify-between px-4 py-2 text-sm text-[#8A8F98] border-b border-[#27292b]">
        <div className="flex items-center gap-2">
          <Circle size={16} />
          <span>Work Experience</span>
          <span className="text-xs bg-[#232425] px-1.5 py-0.5 rounded">{experiences.length}</span>
        </div>
      </div>
      {experiences.map((experience, index) => (
        <Link
          key={experience.id}
          href={`/experience/${experience.id}`}
          className="flex items-start px-4 py-3 border-b border-[#27292b] hover:bg-[#232425] group transition-colors no-underline"
        >
          <div className="flex items-center gap-3 w-full">
            <div className="flex-shrink-0 mt-0.5">
              <Circle size={16} className="text-[#8A8F98]" />
            </div>
            <div className="flex flex-col min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <div className="text-xs text-[#8A8F98] font-medium">EXP-{index + 1}</div>
                <h3 className="font-medium text-sm text-white truncate">{experience.title}</h3>
                <span className="text-xs text-[#8A8F98]">@{experience.company}</span>
              </div>
              <div className="flex items-center justify-between mt-1">
                <div className="flex items-center gap-2">
                  {experience.labels.map((label, i) => (
                    <span key={i} className="text-xs px-1.5 py-0.5 rounded bg-[#232425] text-[#8A8F98]">
                      {label}
                    </span>
                  ))}
                </div>
                <div className="text-xs text-[#8A8F98] opacity-0 group-hover:opacity-100 transition-opacity">
                  {experience.period}
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
} 