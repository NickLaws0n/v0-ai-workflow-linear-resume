"use client"

import { useResume } from "./resume-context"
import { Inbox, CheckCircle, Plus, Briefcase, GraduationCap, Code, Award, AtSign } from "lucide-react"

export function Sidebar() {
  const { activeView, setActiveView } = useResume()

  const resumeSections = [
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "education", label: "Education", icon: GraduationCap },
    { id: "skills", label: "Skills", icon: Code },
    { id: "projects", label: "Projects", icon: Award },
    { id: "contact", label: "Contact", icon: AtSign },
  ] as const

  return (
    <div className="w-56 bg-[#151617] border-r border-[#27292b] flex flex-col h-full">
      <div className="p-3 flex items-center gap-2">
        <div className="w-6 h-6 rounded bg-[#F2C94C] flex items-center justify-center text-black font-semibold text-xs">
          YN
        </div>
        <span className="font-medium text-sm">yourname</span>
        <svg className="w-3 h-3 text-[#8A8F98]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      <div className="mt-4 px-1 space-y-0.5">
        <button className="flex items-center gap-2 w-full px-2 py-1.5 text-sm text-[#8A8F98] hover:bg-[#27292b] rounded-md">
          <Inbox size={16} />
          <span>Overview</span>
        </button>
        <button className="flex items-center gap-2 w-full px-2 py-1.5 text-sm text-[#8A8F98] hover:bg-[#27292b] rounded-md">
          <CheckCircle size={16} />
          <span>Highlights</span>
        </button>
      </div>

      <div className="mt-6 px-3">
        <div className="flex items-center justify-between mb-1">
          <h2 className="text-xs font-medium text-[#8A8F98] uppercase">Resume</h2>
          <button className="text-[#8A8F98] hover:text-white">
            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M6 9l6 6 6-6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <div className="space-y-0.5">
          {resumeSections.map((section) => {
            const Icon = section.icon
            const isActive = activeView === section.id

            return (
              <button
                key={section.id}
                onClick={() => setActiveView(section.id)}
                className={`flex items-center gap-2 w-full px-2 py-1.5 text-sm ${
                  isActive ? "text-white bg-[#27292b]" : "text-[#8A8F98] hover:bg-[#27292b]"
                } rounded-md`}
              >
                <Icon size={16} />
                <span>{section.label}</span>
              </button>
            )
          })}
        </div>
      </div>

      <div className="mt-6 px-3">
        <div className="flex items-center justify-between mb-1">
          <h2 className="text-xs font-medium text-[#8A8F98] uppercase">Your profile</h2>
          <button className="text-[#8A8F98] hover:text-white">
            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M6 9l6 6 6-6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <div className="space-y-0.5">
          <button className="flex items-center gap-2 w-full px-2 py-1.5 text-sm text-white hover:bg-[#27292b] rounded-md">
            <div className="w-4 h-4 rounded bg-[#5E6AD2] flex items-center justify-center text-white font-semibold text-xs">
              Y
            </div>
            <span>Your Name</span>
            <svg
              className="w-3 h-3 text-[#8A8F98] ml-auto"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 9l6 6 6-6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button className="flex items-center gap-2 w-full px-2 py-1.5 text-sm text-[#8A8F98] hover:bg-[#27292b] rounded-md ml-6">
            <Briefcase size={16} />
            <span>Frontend Developer</span>
          </button>
          <button className="flex items-center gap-2 w-full px-2 py-1.5 text-sm text-[#8A8F98] hover:bg-[#27292b] rounded-md ml-6">
            <AtSign size={16} />
            <span>your.email@example.com</span>
          </button>
        </div>
      </div>

      <div className="mt-auto p-3">
        <button className="flex items-center justify-center w-full p-1.5 text-sm text-white bg-[#5E6AD2] hover:bg-[#4F58B8] rounded-md">
          <Plus size={16} className="mr-1" />
          <span>Download Resume</span>
        </button>
      </div>
    </div>
  )
}
