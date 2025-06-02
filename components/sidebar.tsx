"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Inbox, CheckCircle, Plus, Briefcase, GraduationCap, Code, Award, AtSign, Search, ExternalLink, SquarePen, ChevronDown } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react"
import { useResume } from "./resume-context"

export function Sidebar() {
  const pathname = usePathname()
  const { contact } = useResume()
  // Collapsible state for each section
  const [openWorkspace, setOpenWorkspace] = useState(true)
  const [openLearning, setOpenLearning] = useState(true)
  const [openContact, setOpenContact] = useState(true)

  const obfuscatePhone = (phone: string) => {
    // Replace middle and last four digits with asterisks if phone is in the format '416 316 6474'
    return phone.replace(/(\d{3}) \d{3} \d{4}/, '$1 *** ****');
  };

  const contactItems = [
    { icon: Mail, label: "Email", value: contact.email },
    { icon: Phone, label: "Phone", value: obfuscatePhone(contact.phone) },
    { icon: MapPin, label: "Location", value: contact.location },
    { icon: Github, label: "GitHub", value: "NickLaws0n", href: "https://github.com/NickLaws0n" },
    { icon: Linkedin, label: "LinkedIn", value: "nicklawson", href: "https://www.linkedin.com/in/nicklawson/" },
  ]

  return (
    <aside className="w-[250px] bg-[#131415] border-r border-[#232425] flex flex-col h-full min-h-screen select-none">
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
        {/* Inbox and My Issues */}
        <div className="flex flex-col mb-2">
          <Link href="/inbox" className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors no-underline bg-transparent hover:bg-[#202223] ${pathname.startsWith('/inbox') ? 'font-semibold' : 'font-normal'}`} style={{ color: '#F9F9FB' }}>
            <Inbox size={18} color="#8A8F98" />
            <span>Inbox</span>
          </Link>
        </div>
        {/* Workspace group */}
        <div>
          <button
            className="flex items-center gap-2 w-full px-3 py-2 text-xs text-[#8A8F98] font-semibold tracking-wide hover:bg-[#202223] rounded-md font-sans" style={{ fontFamily: 'Inter, sans-serif' }}
            onClick={() => setOpenWorkspace((v) => !v)}
            type="button"
          >
            Workspace <span className="ml-0.5 align-middle" style={{ fontSize: '1em' }}>{openWorkspace ? '▾' : '▸'}</span>
          </button>
          {openWorkspace && (
            <div className="flex flex-col">
              <Link href="/highlights" className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors no-underline bg-transparent hover:bg-[#202223] ${pathname.startsWith('/highlights') ? 'font-semibold' : 'font-normal'}`} style={{ color: '#F9F9FB' }}>
                <CheckCircle size={18} color="#8A8F98" />
                <span>Highlights</span>
              </Link>
              <Link href="/experience" className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors no-underline bg-transparent hover:bg-[#202223] ${pathname.startsWith('/experience') ? 'font-semibold' : 'font-normal'}`} style={{ color: '#F9F9FB' }}>
                <Briefcase size={18} color="#8A8F98" />
                <span>Experience</span>
              </Link>
            </div>
          )}
        </div>
        {/* Learning group */}
        <div>
          <button
            className="flex items-center gap-2 w-full px-3 py-2 text-xs text-[#8A8F98] font-semibold tracking-wide hover:bg-[#202223] rounded-md font-sans" style={{ fontFamily: 'Inter, sans-serif' }}
            onClick={() => setOpenLearning((v) => !v)}
            type="button"
          >
            Learning <span className="ml-0.5 align-middle" style={{ fontSize: '1em' }}>{openLearning ? '▾' : '▸'}</span>
          </button>
          {openLearning && (
            <div className="flex flex-col">
              <Link href="/education" className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors no-underline bg-transparent hover:bg-[#202223] ${pathname.startsWith('/education') ? 'font-semibold' : 'font-normal'}`} style={{ color: '#F9F9FB' }}>
                <GraduationCap size={18} color="#8A8F98" />
                <span>Education</span>
              </Link>
              <Link href="/projects" className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors no-underline bg-transparent hover:bg-[#202223] ${pathname.startsWith('/projects') ? 'font-semibold' : 'font-normal'}`} style={{ color: '#F9F9FB' }}>
                <Award size={18} color="#8A8F98" />
                <span>Projects</span>
              </Link>
              <Link href="/skills" className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors no-underline bg-transparent hover:bg-[#202223] ${pathname.startsWith('/skills') ? 'font-semibold' : 'font-normal'}`} style={{ color: '#F9F9FB' }}>
                <Code size={18} color="#8A8F98" />
                <span>Skills</span>
              </Link>
            </div>
          )}
        </div>
        {/* Contact group */}
        <div>
          <button
            className="flex items-center gap-2 w-full px-3 py-2 text-xs text-[#8A8F98] font-semibold tracking-wide hover:bg-[#202223] rounded-md font-sans" style={{ fontFamily: 'Inter, sans-serif' }}
            onClick={() => setOpenContact((v) => !v)}
            type="button"
          >
            Contact <span className="ml-0.5 align-middle" style={{ fontSize: '1em' }}>{openContact ? '▾' : '▸'}</span>
          </button>
          {openContact && (
            <div className="flex flex-col">
              {contactItems.map((item, idx) => {
                const ItemIcon = item.icon
                return (
                  <div key={idx} className="flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors no-underline bg-transparent hover:bg-[#202223] font-normal" style={{ color: '#F9F9FB', fontFamily: 'Inter, sans-serif' }}>
                    {ItemIcon && <ItemIcon size={16} className="text-[#8A8F98] min-w-[16px]" />}
                    {item.href ? (
                      <a href={item.href} target="_blank" rel="noopener noreferrer" className="pr-2 hover:underline text-[#F9F9FB]">{item.value}</a>
                    ) : (
                      <span className="pr-2">{item.value}</span>
                    )}
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </nav>
    </aside>
  )
}
