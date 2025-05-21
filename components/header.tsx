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
    <header className="border-b border-[--border] bg-[--sidebar]">
      <div className="flex items-center justify-between px-6 py-2 h-14">
        <div className="flex-1" />
        <div className="flex items-center gap-4">
          <div className="relative group">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-[--muted] group-focus-within:text-[--foreground] transition-colors" />
            <input
              type="text"
              placeholder="Search..."
              className="h-9 w-64 rounded-md bg-[--hover] pl-10 pr-4 text-sm text-[--foreground] placeholder-[--muted] 
                focus:outline-none focus:ring-1 focus:ring-[--primary] border border-transparent 
                focus:border-[--primary] transition-all"
            />
          </div>
          <button className="p-2 text-[--muted] hover:text-[--foreground] transition-colors">
            <Bell size={18} />
          </button>
          <div className="h-8 w-8 rounded-full bg-[#F2C94C] flex items-center justify-center text-black font-bold text-xs">
            NL
          </div>
        </div>
      </div>
    </header>
  )
}
