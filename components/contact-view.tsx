"use client"

import { useResume } from "./resume-context"
import { Mail, Phone, MapPin, Github, Linkedin, Globe } from "lucide-react"

export function ContactView() {
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
    <div className="w-full flex justify-start">
      <div className="p-6 rounded-lg border border-[#27292b] bg-[#1e1f21] w-full max-w-md mt-8 ml-8">
        <h3 className="text-lg font-medium mb-4">Contact Information</h3>
        <div className="divide-y divide-[#232425]">
          {contactItems.map((item, index) => {
            const Icon = item.icon
            return (
              <div key={index} className="flex items-center gap-3 py-3 first:pt-0 last:pb-0">
                <Icon size={18} className="text-[#8A8F98]" />
                <div>
                  <div className="text-xs text-[#8A8F98]">{item.label}</div>
                  <div className="text-sm text-white">{item.value}</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
