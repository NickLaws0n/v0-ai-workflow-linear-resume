"use client"

import { useResume } from "./resume-context"
import { Search, Bell, Filter } from "lucide-react"

export function Header() {
  const { activeView } = useResume()

  const viewTitles = {
    experience: "Work Experience",
    education: "Education",
    projects: "Projects",
    skills: "Skills & Expertise",
    contact: "Contact Information",
  }

  return (
    <header className="border-b border-[#27292b]">
      <div className="flex items-center justify-between p-2 px-4">
        <div className="flex items-center">
          <button className="flex items-center gap-1 px-2 py-1 text-sm rounded-md text-[#8A8F98] hover:bg-[#27292b]">
            <Filter size={14} />
            <span>Filter</span>
          </button>
        </div>

        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-[#8A8F98]" />
            <input
              type="text"
              placeholder="Search resume..."
              className="h-9 w-64 rounded-md bg-[#27292b] pl-9 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-[#5E6AD2]"
            />
          </div>

          <button className="p-2 text-[#8A8F98] hover:text-white">
            <Bell size={18} />
          </button>

          <div className="h-8 w-8 rounded-full bg-[#F2C94C] flex items-center justify-center text-black font-semibold text-xs">
            YN
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 px-4 py-2">
        <button className="px-3 py-1 text-sm rounded-md bg-[#27292b] text-white">All</button>

        <button className="px-3 py-1 text-sm rounded-md hover:bg-[#27292b] text-[#8A8F98]">Recent</button>

        <button className="px-3 py-1 text-sm rounded-md hover:bg-[#27292b] text-[#8A8F98]">Highlights</button>

        <div className="ml-auto flex items-center">
          <button className="px-3 py-1 text-sm rounded-md hover:bg-[#27292b] text-[#8A8F98] flex items-center">
            Display
          </button>
        </div>
      </div>
    </header>
  )
}
