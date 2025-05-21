"use client";

import { useResume } from "@/components/resume-context";
import { GraduationCap, CheckCircle, MoreHorizontal } from "lucide-react";

export default function EducationPage() {
  const { education } = useResume();
  return (
    <div className="space-y-0">
      <div className="flex items-center justify-between px-4 py-2 text-sm text-[#8A8F98] border-b border-[#27292b]">
        <div className="flex items-center gap-2">
          <GraduationCap size={16} />
          <span>Education</span>
          <span className="text-xs bg-[#232425] px-1.5 py-0.5 rounded">{education.length}</span>
        </div>
      </div>
      {education.map((edu, index) => (
        <div key={edu.id} className="flex items-start px-4 py-3 border-b border-[#27292b] hover:bg-[#232425] group transition-colors">
          <div className="flex items-center gap-3 w-full">
            <div className="flex-shrink-0 mt-0.5">
              <CheckCircle size={16} className="text-green-500" />
            </div>
            <div className="flex flex-col min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <div className="text-xs text-[#8A8F98] font-medium">EDU-{index + 1}</div>
                <h3 className="font-medium text-sm text-white truncate">{edu.degree}</h3>
                <span className="text-xs text-[#8A8F98]">@{edu.institution}</span>
              </div>
              <div className="flex items-center justify-between mt-1">
                <div className="text-xs text-[#8A8F98]">{edu.description}</div>
                <div className="text-xs text-[#8A8F98] opacity-0 group-hover:opacity-100 transition-opacity">{edu.period}</div>
              </div>
            </div>
            <div className="flex items-center gap-2 ml-2">
              <span className={`text-xs px-1.5 py-0.5 rounded ${edu.priority === 'high' ? 'bg-red-500' : edu.priority === 'medium' ? 'bg-yellow-500' : 'bg-green-500'}`}>{edu.priority === 'high' ? 'P1' : edu.priority === 'medium' ? 'P2' : 'P3'}</span>
              <button className="text-[#8A8F98] hover:text-white">
                <MoreHorizontal size={16} />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
} 