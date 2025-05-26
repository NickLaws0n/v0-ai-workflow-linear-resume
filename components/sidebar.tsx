"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Inbox, CheckCircle, Plus, Briefcase, GraduationCap, Code, Award, AtSign, Search, ExternalLink, SquarePen, ChevronDown } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Mail, Phone, MapPin, Github, Linkedin, Globe } from "lucide-react"
import { useResume } from "./resume-context"

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
      {/* Top workspace/user bar */}
      <div className="flex items-center justify-between px-3 py-3 border-b border-[#232425] gap-2">
        <div className="flex items-center gap-2">
          <Avatar className="h-6 w-6 rounded-sm">
            <AvatarFallback className="bg-[#B08B36] text-white font-bold text-xs rounded-sm">NI</AvatarFallback>
          </Avatar>
          <span className="font-medium text-[#e5e5e5] text-sm tracking-tight">nicklawson</span>
          <ChevronDown size={16} className="text-[#8A8F98] -ml-1" />
        </div>
        <div className="flex items-center gap-2">
          <button className="p-1 text-[#8A8F98] hover:text-white transition-colors" title="Search">
            <Search size={18} />
          </button>
          <button className="flex items-center justify-center w-9 h-9 rounded-sm bg-[#232425] hover:bg-[#232425]/80 transition-colors" title="Edit">
            <SquarePen size={20} className="text-white" />
          </button>
        </div>
      </div>
      <nav className="flex-1 flex flex-col gap-1 px-2 mt-2">
        {resumeSections.map((section) => {
          const Icon = section.icon
          const isActive = pathname.startsWith(section.href)
          if (section.id === "contact") {
            // Dropdown logic for contact
            const [open, setOpen] = useState(false)
            const { contact } = useResume()
            const contactItems = [
              { icon: Mail, label: "Email", value: contact.email },
              { icon: Phone, label: "Phone", value: contact.phone },
              { icon: MapPin, label: "Location", value: contact.location },
              { icon: Github, label: "GitHub", value: contact.github },
              { icon: Linkedin, label: "LinkedIn", value: contact.linkedin },
              { icon: Globe, label: "Website", value: contact.website },
            ]
            return (
              <div key={section.id} className="relative">
                <button
                  className={`flex items-center gap-3 w-full px-3 py-2 rounded-md text-sm transition-colors no-underline bg-transparent hover:bg-[#202223] ${isActive ? 'font-semibold' : 'font-normal'}`}
                  style={{ color: '#F9F9FB' }}
                  onClick={() => setOpen((v) => !v)}
                  type="button"
                >
                  <Icon size={18} color="#8A8F98" />
                  <span>{section.label}</span>
                  <ChevronDown size={16} className={`ml-auto transition-transform ${open ? 'rotate-180' : ''}`} />
                </button>
                {open && (
                  <div className="absolute left-0 mt-1 w-56 z-50">
                    {contactItems.map((item, idx) => {
                      const ItemIcon = item.icon
                      return (
                        <div key={idx} className="flex items-center gap-3 py-2 first:pt-0 last:pb-0">
                          <ItemIcon size={18} className="text-[#8A8F98]" />
                          <div>
                            <div className="text-xs text-[#8A8F98]">{item.label}</div>
                            <div className="text-sm text-white break-all">{item.value}</div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                )}
              </div>
            )
          }
          return (
            <Link
              key={section.id}
              href={section.href}
              className={`flex items-center gap-3 w-full px-3 py-2 rounded-md text-sm transition-colors no-underline bg-transparent hover:bg-[#202223]`}
              style={{ fontWeight: isActive ? 600 : 400, color: '#F9F9FB' }}
            >
              <Icon size={18} color="#8A8F98" />
              <span>{section.label}</span>
            </Link>
          )
        })}
      </nav>
      <div className="mt-auto px-4 py-3 border-t border-[#232425]">
        <button className="flex items-center justify-center w-full p-2 text-sm text-white bg-[#5E6AD2] hover:bg-[#5E6AD2]/90 rounded-md font-medium transition-colors">
          <Plus size={16} className="mr-2" />
          Download Resume
        </button>
      </div>
    </aside>
  )
}
