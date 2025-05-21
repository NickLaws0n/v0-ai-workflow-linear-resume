"use client"

import { useResume } from "./resume-context"
import { Mail, Phone, MapPin, Github, Linkedin, Globe } from "lucide-react"

export function ContactView() {
  const { contact, name, title, summary } = useResume()

  const contactItems = [
    { icon: Mail, label: "Email", value: contact.email },
    { icon: Phone, label: "Phone", value: contact.phone },
    { icon: MapPin, label: "Location", value: contact.location },
    { icon: Github, label: "GitHub", value: contact.github },
    { icon: Linkedin, label: "LinkedIn", value: contact.linkedin },
    { icon: Globe, label: "Website", value: contact.website },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="md:col-span-2 p-6 rounded-lg border border-[#27292b] bg-[#1e1f21]">
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-2">{name}</h2>
          <p className="text-[#8A8F98]">{title}</p>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-3">About Me</h3>
          <p className="text-[#E2E2E2]">{summary}</p>
        </div>
      </div>

      <div className="p-6 rounded-lg border border-[#27292b] bg-[#1e1f21]">
        <h3 className="text-lg font-medium mb-4">Contact Information</h3>
        <div className="space-y-4">
          {contactItems.map((item, index) => {
            const Icon = item.icon
            return (
              <div key={index} className="flex items-start gap-3">
                <Icon size={18} className="text-[#8A8F98] mt-0.5" />
                <div>
                  <div className="text-xs text-[#8A8F98]">{item.label}</div>
                  <div className="text-sm">{item.value}</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
