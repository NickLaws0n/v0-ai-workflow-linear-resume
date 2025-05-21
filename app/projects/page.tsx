"use client";

import { useResume } from "@/components/resume-context";
import { Award } from "lucide-react";

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
        <div>Status</div>
        <div>Priority</div>
        <div>Progress</div>
      </div>
      {/* Project Rows */}
      {projects.map((project, index) => (
        <div
          key={project.id}
          className="grid grid-cols-6 gap-4 px-4 py-3 border-b border-[#232425] hover:bg-[#232425] group transition-colors items-center"
        >
          {/* Name */}
          <div className="truncate font-medium text-sm text-white">{project.title}</div>
          {/* Description */}
          <div className="truncate text-[#E2E2E2] text-sm">{project.description[0]}</div>
          {/* Labels */}
          <div className="flex flex-wrap gap-1">
            {project.labels.map((label, i) => (
              <span key={i} className="text-xs px-1.5 py-0.5 rounded bg-[#27292b] text-[#8A8F98]">{label}</span>
            ))}
          </div>
          {/* Status */}
          <div>
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${project.status === 'completed' ? 'bg-green-500/20 text-green-400' : project.status === 'in-progress' ? 'bg-blue-500/20 text-blue-400' : 'bg-yellow-500/20 text-yellow-400'}`}>{project.status.replace('-', ' ')}</span>
          </div>
          {/* Priority */}
          <div>
            <span className={`text-xs px-1.5 py-0.5 rounded ${project.priority === 'high' ? 'bg-red-500' : project.priority === 'medium' ? 'bg-yellow-500' : 'bg-green-500'} text-white font-medium`}>{project.priority === 'high' ? 'P1' : project.priority === 'medium' ? 'P2' : 'P3'}</span>
          </div>
          {/* Progress (placeholder) */}
          <div className="flex items-center gap-2">
            <div className="w-20 h-2 bg-[#27292b] rounded-full overflow-hidden">
              <div className={`h-full rounded-full ${project.status === 'completed' ? 'bg-green-500' : project.status === 'in-progress' ? 'bg-blue-500' : 'bg-yellow-500'}`} style={{ width: project.status === 'completed' ? '100%' : project.status === 'in-progress' ? '50%' : '0%' }}></div>
            </div>
            <span className="text-xs text-[#8A8F98]">{project.status === 'completed' ? '100%' : project.status === 'in-progress' ? '50%' : '0%'}</span>
          </div>
        </div>
      ))}
    </div>
  );
} 