"use client"

import { useResume } from "./resume-context"
import { Circle, CheckCircle, Plus } from "lucide-react"
import { useState } from "react"
import { ExperienceCard } from "./experience-card"
import Link from "next/link"

export function IssueList() {
  const { activeView, experiences, education, projects, skills, contact } = useResume()
  const [expandedId, setExpandedId] = useState<string | null>(null)

  if (activeView === "inbox") {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh] w-full">
        <svg width="96" height="72" viewBox="0 0 96 72" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="12" y="16" width="72" height="40" rx="8" stroke="#B3B3B3" strokeWidth="2.5" fill="none" />
          <rect x="20" y="24" width="56" height="24" rx="6" stroke="#B3B3B3" strokeWidth="1.5" fill="none" />
          <path d="M28 48h40" stroke="#B3B3B3" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
        <div className="mt-4 text-[#8A8F98] text-base">No notifications.....yet ;)</div>
      </div>
    )
  }

  if (activeView === "highlights") {
    const topAchievements = [
      "Led the development of a complex SaaS application using React and TypeScript",
      "Implemented CI/CD pipelines that reduced deployment time by 40%",
      "Mentored junior developers and conducted code reviews",
      "Created a pixel-perfect clone of Linear's UI using React and Tailwind CSS",
      "Built a full-stack e-commerce platform with React and Node.js"
    ]
    return (
      <div className="space-y-0">
        <div className="flex items-center justify-between px-4 py-2 text-sm text-[#8A8F98] border-b border-[#27292b]">
          <div className="flex items-center gap-2">
            <CheckCircle size={16} />
            <span>Highlights</span>
          </div>
        </div>
        <div className="px-4 py-8 flex flex-col items-center gap-6">
          <div className="max-w-2xl w-full bg-[#232425] rounded-lg p-6 shadow-sm border border-[#27292b]">
            <div className="text-lg font-semibold text-white mb-2">Summary</div>
            <div className="text-[#8A8F98] text-base mb-4">Passionate developer with experience in React, TypeScript, and modern web technologies.</div>
            <div className="text-lg font-semibold text-white mb-2">Top Achievements</div>
            <ul className="list-disc pl-5 space-y-2">
              {topAchievements.map((item, i) => (
                <li key={i} className="text-[#8A8F98] text-base">{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }

  if (activeView === "experience") {
    return (
      <div className="space-y-0">
        <div className="flex items-center justify-between px-4 py-2 text-sm text-[--muted] border-b border-[--border]">
          <div className="flex items-center gap-2">
            <Circle size={16} />
            <span>Work Experience</span>
            <span className="text-xs bg-[--hover] px-1.5 py-0.5 rounded">{experiences.length}</span>
          </div>
          <button className="text-[--muted] hover:text-[--foreground] transition-colors">
            <Plus size={16} />
          </button>
        </div>

        {experiences.map((experience, index) => (
          <Link
            key={experience.id}
            href={`/experience/${experience.id}`}
            className="flex items-start px-4 py-3 border-b border-[--border] hover:bg-[--hover] group transition-colors no-underline"
          >
            <div className="flex items-center gap-3 w-full">
              <div className="flex-shrink-0 mt-0.5">
                <Circle size={16} className="text-[--muted]" />
              </div>
              <div className="flex flex-col min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <div className="text-xs text-[--muted] font-medium">EXP-{index + 1}</div>
                  <h3 className="font-medium text-sm text-[--foreground] truncate">{experience.title}</h3>
                  <span className="text-xs text-[--muted]">@{experience.company}</span>
                </div>
                <div className="flex items-center justify-between mt-1">
                  <div className="flex items-center gap-2">
                    {experience.labels.map((label, i) => (
                      <span key={i} className="text-xs px-1.5 py-0.5 rounded bg-[--hover] text-[--muted]">
                        {label}
                      </span>
                    ))}
                  </div>
                  <div className="text-xs text-[--muted] opacity-0 group-hover:opacity-100 transition-opacity">
                    {experience.period}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    )
  }

  if (activeView === "education") {
    return (
      <div className="space-y-0">
        <div className="flex items-center justify-between px-4 py-2 text-sm text-[#8A8F98] border-b border-[#27292b]">
          <div className="flex items-center gap-2">
            <Circle size={16} />
            <span>Education</span>
            <span className="text-xs bg-[#27292b] px-1.5 py-0.5 rounded">{education.length}</span>
          </div>
          <button className="text-[#8A8F98] hover:text-white">
            <Plus size={16} />
          </button>
        </div>

        {education.map((edu, index) => (
          <div key={edu.id} className="flex items-start px-4 py-3 border-b border-[#27292b] hover:bg-[#1e1f21] group">
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
                  <div className="text-xs text-[#8A8F98] opacity-0 group-hover:opacity-100">{edu.period}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }

  if (activeView === "projects") {
    return (
      <div className="space-y-0">
        <div className="flex items-center justify-between px-4 py-2 text-sm text-[#8A8F98] border-b border-[#27292b]">
          <div className="flex items-center gap-2">
            <Circle size={16} />
            <span>Projects</span>
            <span className="text-xs bg-[#27292b] px-1.5 py-0.5 rounded">{projects.length}</span>
          </div>
          <button className="text-[#8A8F98] hover:text-white">
            <Plus size={16} />
          </button>
        </div>

        {projects.map((project, index) => (
          <div
            key={project.id}
            className="flex items-start px-4 py-3 border-b border-[#27292b] hover:bg-[#1e1f21] group"
          >
            <div className="flex items-center gap-3 w-full">
              <div className="flex-shrink-0 mt-0.5">
                {project.status === "completed" ? (
                  <CheckCircle size={16} className="text-green-500" />
                ) : (
                  <Circle size={16} className={project.status === "in-progress" ? "text-blue-500" : "text-[#8A8F98]"} />
                )}
              </div>
              <div className="flex flex-col min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <div className="text-xs text-[#8A8F98] font-medium">PRJ-{index + 1}</div>
                  <h3 className="font-medium text-sm text-white truncate">{project.title}</h3>
                </div>
                <div className="flex items-center justify-between mt-1">
                  <div className="flex items-center gap-2">
                    {project.labels.map((label, i) => (
                      <span key={i} className="text-xs px-1.5 py-0.5 rounded bg-[#27292b] text-[#8A8F98]">
                        {label}
                      </span>
                    ))}
                  </div>
                  <div className="text-xs text-[#8A8F98] opacity-0 group-hover:opacity-100">
                    {project.status === "completed"
                      ? "Completed"
                      : project.status === "in-progress"
                        ? "In Progress"
                        : "Planned"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }

  if (activeView === "skills") {
    return (
      <div className="space-y-0">
        <div className="flex items-center justify-between px-4 py-2 text-sm text-[#8A8F98] border-b border-[#27292b]">
          <div className="flex items-center gap-2">
            <Circle size={16} />
            <span>Skills</span>
            <span className="text-xs bg-[#27292b] px-1.5 py-0.5 rounded">{skills.length}</span>
          </div>
          <button className="text-[#8A8F98] hover:text-white">
            <Plus size={16} />
          </button>
        </div>

        {skills.map((skill, index) => (
          <div key={skill.id} className="flex items-start px-4 py-3 border-b border-[#27292b] hover:bg-[#1e1f21] group">
            <div className="flex items-center gap-3 w-full">
              <div className="flex-shrink-0 mt-0.5">
                <Circle size={16} className="text-[#8A8F98]" />
              </div>
              <div className="flex flex-col min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <div className="text-xs text-[#8A8F98] font-medium">SKL-{index + 1}</div>
                  <h3 className="font-medium text-sm text-white truncate">{skill.name}</h3>
                  <span className="text-xs text-[#8A8F98]">{skill.category}</span>
                </div>
                <div className="flex items-center justify-between mt-1">
                  <div className="w-32 h-1.5 bg-[#27292b] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#5E6AD2] rounded-full"
                      style={{ width: `${(skill.level / 5) * 100}%` }}
                    ></div>
                  </div>
                  <div className="text-xs text-[#8A8F98] opacity-0 group-hover:opacity-100">
                    Proficiency: {skill.level}/5
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }

  if (activeView === "contact") {
    return (
      <div className="space-y-0">
        <div className="flex items-center justify-between px-4 py-2 text-sm text-[#8A8F98] border-b border-[#27292b]">
          <div className="flex items-center gap-2">
            <Circle size={16} />
            <span>Contact Information</span>
          </div>
          <button className="text-[#8A8F98] hover:text-white">
            <Plus size={16} />
          </button>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 rounded-lg border border-[#27292b] bg-[#1e1f21]">
              <h3 className="font-medium mb-4">Personal</h3>
              <div className="space-y-3">
                <div>
                  <div className="text-xs text-[#8A8F98]">Email</div>
                  <div className="text-sm">{contact.email}</div>
                </div>
                <div>
                  <div className="text-xs text-[#8A8F98]">Phone</div>
                  <div className="text-sm">{contact.phone}</div>
                </div>
                <div>
                  <div className="text-xs text-[#8A8F98]">Location</div>
                  <div className="text-sm">{contact.location}</div>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-lg border border-[#27292b] bg-[#1e1f21]">
              <h3 className="font-medium mb-4">Professional</h3>
              <div className="space-y-3">
                <div>
                  <div className="text-xs text-[#8A8F98]">GitHub</div>
                  <div className="text-sm">{contact.github}</div>
                </div>
                <div>
                  <div className="text-xs text-[#8A8F98]">LinkedIn</div>
                  <div className="text-sm">{contact.linkedin}</div>
                </div>
                <div>
                  <div className="text-xs text-[#8A8F98]">Website</div>
                  <div className="text-sm">{contact.website}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return null
}
