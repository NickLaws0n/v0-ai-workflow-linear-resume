"use client"

import { useResume } from "./resume-context"

export function SkillsView() {
  const { skills } = useResume()

  // Group skills by category
  const skillsByCategory = skills.reduce(
    (acc, skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = []
      }
      acc[skill.category].push(skill)
      return acc
    },
    {} as Record<string, typeof skills>,
  )

  const categories = Object.keys(skillsByCategory)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {categories.map((category) => (
        <div key={category} className="p-4 rounded-lg border border-[#27292b] bg-[#1e1f21]">
          <h3 className="font-medium mb-4">{category}</h3>
          <div className="space-y-4">
            {skillsByCategory[category].map((skill) => (
              <div key={skill.id} className="flex flex-col gap-1">
                <div className="flex justify-between items-center">
                  <span className="text-sm">{skill.name}</span>
                  <span className="text-xs text-[#8A8F98]">{skill.level}/5</span>
                </div>
                <div className="h-1.5 bg-[#27292b] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#F2C94C] rounded-full"
                    style={{ width: `${(skill.level / 5) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
