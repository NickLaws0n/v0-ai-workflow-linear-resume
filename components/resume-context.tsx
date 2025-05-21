"use client"

import React from "react"

import { createContext, useContext, type ReactNode } from "react"

type Status = "completed" | "in-progress" | "planned"
type Priority = "high" | "medium" | "low"

export interface Experience {
  id: string
  title: string
  company: string
  period: string
  description: string[]
  status: Status
  priority: Priority
  labels: string[]
}

export interface Education {
  id: string
  degree: string
  institution: string
  period: string
  description: string
  status: "completed"
  priority: Priority
}

export interface Project {
  id: string
  title: string
  description: string[]
  status: Status
  priority: Priority
  labels: string[]
}

export interface Skill {
  id: string
  name: string
  category: string
  level: number
}

export interface ResumeData {
  name: string
  title: string
  summary: string
  experiences: Experience[]
  education: Education[]
  projects: Project[]
  skills: Skill[]
  contact: {
    email: string
    phone: string
    location: string
    github: string
    linkedin: string
    website: string
  }
  activeView: "experience" | "education" | "projects" | "skills" | "contact"
  setActiveView: (view: "experience" | "education" | "projects" | "skills" | "contact") => void
}

// Sample resume data - replace with your own
const resumeData: Omit<ResumeData, "setActiveView"> = {
  name: "Your Name",
  title: "Frontend Developer",
  summary: "Passionate developer with experience in React, TypeScript, and modern web technologies.",
  activeView: "experience",
  experiences: [
    {
      id: "exp-1",
      title: "Senior Frontend Developer",
      company: "Linear",
      period: "2021 - Present",
      description: [
        "Led the development of a complex SaaS application using React and TypeScript",
        "Implemented CI/CD pipelines that reduced deployment time by 40%",
        "Mentored junior developers and conducted code reviews",
      ],
      status: "in-progress",
      priority: "high",
      labels: ["React", "TypeScript", "CI/CD"],
    },
    {
      id: "exp-2",
      title: "Frontend Developer",
      company: "Digital Agency",
      period: "2019 - 2021",
      description: [
        "Developed responsive web applications for various clients",
        "Collaborated with designers to implement pixel-perfect UIs",
        "Optimized application performance, improving load times by 30%",
      ],
      status: "completed",
      priority: "medium",
      labels: ["JavaScript", "React", "CSS"],
    },
    {
      id: "exp-3",
      title: "Junior Web Developer",
      company: "Startup Inc.",
      period: "2017 - 2019",
      description: [
        "Built and maintained company website and client portals",
        "Implemented responsive designs and ensured cross-browser compatibility",
        "Participated in agile development processes",
      ],
      status: "completed",
      priority: "medium",
      labels: ["HTML", "CSS", "JavaScript"],
    },
  ],
  education: [
    {
      id: "edu-1",
      degree: "B.S. Computer Science",
      institution: "University Name",
      period: "2013 - 2017",
      description: "Graduated with honors. Focused on web technologies and software engineering.",
      status: "completed",
      priority: "medium",
    },
    {
      id: "edu-2",
      degree: "Full-Stack Web Development",
      institution: "Coding Bootcamp",
      period: "2016",
      description: "Intensive 12-week program focused on modern web technologies and best practices.",
      status: "completed",
      priority: "medium",
    },
  ],
  projects: [
    {
      id: "proj-1",
      title: "Linear Clone",
      description: [
        "Created a pixel-perfect clone of Linear's UI using React and Tailwind CSS",
        "Implemented a creative resume format to showcase skills and experience",
        "Optimized for performance and accessibility",
      ],
      status: "completed",
      priority: "high",
      labels: ["React", "Next.js", "Tailwind CSS"],
    },
    {
      id: "proj-2",
      title: "E-commerce Platform",
      description: [
        "Built a full-stack e-commerce platform with React and Node.js",
        "Implemented user authentication, product catalog, and checkout process",
        "Integrated with payment gateways and shipping APIs",
      ],
      status: "in-progress",
      priority: "medium",
      labels: ["React", "Node.js", "MongoDB"],
    },
    {
      id: "proj-3",
      title: "Task Management App",
      description: [
        "Developed a Kanban-style task management application",
        "Implemented drag-and-drop functionality and real-time updates",
        "Created a responsive design that works on all devices",
      ],
      status: "planned",
      priority: "low",
      labels: ["React", "Firebase", "Styled Components"],
    },
  ],
  skills: [
    { id: "skill-1", name: "React", category: "Frontend", level: 5 },
    { id: "skill-2", name: "TypeScript", category: "Languages", level: 4 },
    { id: "skill-3", name: "Next.js", category: "Frontend", level: 4 },
    { id: "skill-4", name: "CSS/SCSS", category: "Frontend", level: 5 },
    { id: "skill-5", name: "Node.js", category: "Backend", level: 3 },
    { id: "skill-6", name: "Git", category: "Tools", level: 4 },
    { id: "skill-7", name: "UI/UX Design", category: "Design", level: 3 },
    { id: "skill-8", name: "Testing", category: "Quality", level: 3 },
  ],
  contact: {
    email: "your.email@example.com",
    phone: "+1 (123) 456-7890",
    location: "San Francisco, CA",
    github: "github.com/yourusername",
    linkedin: "linkedin.com/in/yourusername",
    website: "yourwebsite.com",
  },
}

const ResumeContext = createContext<ResumeData | undefined>(undefined)

export function ResumeProvider({ children }: { children: ReactNode }) {
  const [activeView, setActiveView] = React.useState<ResumeData["activeView"]>("experience")

  const value = {
    ...resumeData,
    activeView,
    setActiveView,
  }

  return <ResumeContext.Provider value={value}>{children}</ResumeContext.Provider>
}

export function useResume() {
  const context = useContext(ResumeContext)
  if (context === undefined) {
    throw new Error("useResume must be used within a ResumeProvider")
  }
  return context
}
