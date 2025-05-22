"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Inbox, CheckCircle, Plus, Briefcase, GraduationCap, Code, Award, AtSign } from "lucide-react"

export function Sidebar() {
  const pathname = usePathname()
  const resumeSections = [
    { id: "inbox", label: "Inbox", icon: Inbox, href: "/inbox" },
    { id: "highlights", label: "Highlights", icon: CheckCircle, href: "/highlights" },
    { id: "experience", label: "Experience", icon: Briefcase, href: "/experience" },
    { id: "education", label: "Education", icon: GraduationCap, href: "/education" },
    { id: "projects", label: "Projects", icon: Award, href: "/projects" },
    { id: "skills", label: "Skills", icon: Code, href: "/skills" },
    { id: "contact", label: "Contact", icon: AtSign, href: "/contact" },
  ]

  return (
    <aside className="w-60 bg-[#131415] border-r border-[#232425] flex flex-col h-full min-h-screen select-none">
      <div className="flex items-center gap-3 px-6 py-4">
        <div className="h-8 w-8 rounded-full bg-[#F2C94C] flex items-center justify-center text-black font-bold text-base">NL</div>
        <span className="font-semibold text-white text-lg tracking-tight">nicklawson</span>
      </div>
      <nav className="flex-1 flex flex-col gap-1 px-2 mt-2">
        {resumeSections.map((section) => {
          const Icon = section.icon
          const isActive = pathname.startsWith(section.href)
          return (
            <Link
              key={section.id}
              href={section.href}
              className={`flex items-center gap-3 w-full px-3 py-2 rounded-md text-sm transition-colors no-underline bg-transparent hover:bg-[#202223] text-white`}
              style={{ fontWeight: isActive ? 600 : 400 }}
            >
              <Icon size={18} />
              <span>{section.label}</span>
            </Link>
          )
        })}
      </nav>
      <div className="mt-auto px-4 py-3 border-t border-[#232425]">
        <button className="flex items-center justify-center w-full p-2 text-sm text-white bg-[#5E6AD2] hover:bg-[#4F58B8] rounded-md font-medium transition-colors">
          <Plus size={16} className="mr-2" />
          Download Resume
        </button>
      </div>
    </aside>
  )
}
