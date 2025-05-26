"use client";

import { useResume } from "@/components/resume-context";
import { Award, BarChart2, Circle, Hexagon, Check } from "lucide-react";

export default function ProjectsPage() {
  const { projects } = useResume();
  return (
    <div className="flex flex-col h-full w-full">
      <div className="flex items-center justify-between px-4 py-2 text-sm text-[#8A8F98] border-b border-[#27292b]">
        <div className="flex items-center gap-2">
          <Award size={16} />
          <span>Projects</span>
          <span className="text-xs bg-[#232425] px-1.5 py-0.5 rounded">{projects.length}</span>
        </div>
      </div>
      {/* Header Row */}
      <div className="grid grid-cols-6 gap-4 px-4 py-2 text-xs text-[#8A8F98] border-b border-[#232425] font-medium">
        <div>Name</div>
        <div>Description</div>
        <div>Labels</div>
        <div>Priority</div>
        <div>Lead</div>
        <div>Status</div>
      </div>
      {/* Project Rows */}
      {projects.map((project, index) => (
        <div
          key={project.id}
          className="grid grid-cols-6 gap-4 px-4 py-3 border-b border-[#232425] hover:bg-[#232425] group transition-colors items-center min-h-[48px]"
        >
          {/* Name */}
          <div className="truncate font-medium text-sm text-white">
            {project.id === "proj-4" ? (
              <a href="https://agent.ai/profile/Youtube_Quiz_Generator" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#5E6AD2]">{project.title}</a>
            ) : (
              project.title
            )}
          </div>
          {/* Description */}
          <div className="text-[#E2E2E2] text-sm whitespace-pre-line break-words">
            {project.id === "proj-4"
              ? project.description.filter(line => !line.startsWith("Try it:")).join("\n\n")
              : project.description.join("\n\n")}
          </div>
          {/* Labels */}
          <div className="flex flex-wrap gap-1">
            {project.labels.map((label, i) => (
              <span key={i} className="text-xs px-1.5 py-0.5 rounded bg-[#27292b] text-[#8A8F98]">{label}</span>
            ))}
          </div>
          {/* Priority (custom bar chart icon) */}
          <div className="flex items-center" style={{ minWidth: 40, minHeight: 40 }}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="3" y="13" width="2" height="4" rx="1" fill="#8A8F98" />
              <rect x="8" y="10" width="2" height="7" rx="1" fill="#8A8F98" />
              <rect x="13" y="6" width="2" height="11" rx="1" fill="#8A8F98" />
            </svg>
          </div>
          {/* Lead (username only) */}
          <div className="flex items-center">
            <span className="text-white text-sm">nicklawson85</span>
          </div>
          {/* Status (hexagon with checkmark and percent) */}
          <div className="flex items-center gap-2">
            <span className="relative flex items-center justify-center w-6 h-6">
              <Hexagon size={20} className="text-[#4F5DFF] fill-[#4F5DFF]" />
              <Check size={14} className="absolute text-black" />
            </span>
            <span className="text-sm text-white font-medium">{project.status === 'completed' ? '100%' : project.status === 'in-progress' ? '0%' : '0%'}</span>
          </div>
        </div>
      ))}
    </div>
  );
} 