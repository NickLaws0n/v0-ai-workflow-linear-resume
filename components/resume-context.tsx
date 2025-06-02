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

// Real resume data for Nick Lawson
const resumeData: Omit<ResumeData, "setActiveView"> = {
  name: "Nick Lawson",
  title: "Enterprise Customer Success Manager",
  summary:
    "Seasoned Enterprise Customer Success Manager with a passion for building relationships and maximizing technology to drive customer value. Unique ability to simplify complex concepts for non-technical audiences and drive organizational change.",
  activeView: "experience",
  experiences: [
    {
      id: "exp-1",
      title: "Enterprise Merchant Success Manager (L7)",
      company: "Shopify Plus",
      period: "Mar 2023 – Jan 2025",
      description: [
        "Managed a diverse portfolio of 20 enterprise merchants on Shopify Plus representing $30M in ARR.",
        "Spearheaded end-to-end renewal processes, conducted QBRs, identified upsell opportunities, and partnered with product teams.",
        "Consistently exceeded quarterly NRR and Expansion targets - 126% to target for 2024.",
        "Collaborated on 'Zero to AI' course to upskill Shopifolk with Learning and Development team (94% satisfaction rate).",
        "Teamed up with VP Product, Demand to turbocharge feature adoption playbook for GTM teams, boosting product adoption by 15% and shaping North American Product GTM strategy.",
        "Participated in Sidekick development with AI Product team during 'Hack Days', refining prompts and ensuring conversation quality."
      ],
      status: "in-progress",
      priority: "high",
      labels: ["Customer Success", "Renewals", "AI", "GTM", "Shopify Plus"],
    },
    {
      id: "exp-2",
      title: "Senior Merchant Success Manager (L6)",
      company: "Shopify Plus",
      period: "Mar 2021 – Mar 2023",
      description: [
        "Managed 25-45 Shopify Plus merchants, hitting targets and leveraging Executive Reviews to drive product feedback.",
        "Built executive relationships, driving adoption of Merchant Services products (top 3 GMV merchants switched to Shopify Payments, generating ~$1.3M revenue).",
        "Led VOC project to enhance support authentication, reducing unauthenticated requests by 20%.",
        "Global recommendations to Merchant Success Enablement improved onboarding, increasing merchant satisfaction and retention by 30%.",
        "Received the Shopify Values award for outstanding performance, as voted by both peers and leaders."
      ],
      status: "completed",
      priority: "high",
      labels: ["Customer Success", "Product Feedback", "Onboarding", "Shopify Plus"],
    },
    {
      id: "exp-3",
      title: "Merchant Success Manager (L5)",
      company: "Shopify Plus",
      period: "Mar 2020 – Mar 2021",
      description: [
        "Exceeded performance and retention targets for 60 merchants on Shopify Plus.",
        "Utilized Executive Business Reviews to align with Sales and deliver valuable product feedback.",
        "Received Exponential impact status within first year (awarded to <5% of company)."
      ],
      status: "completed",
      priority: "medium",
      labels: ["Customer Success", "Retention", "Shopify Plus"],
    },
    {
      id: "exp-4",
      title: "Customer Success Manager",
      company: "Nudge.ai",
      period: "Sep 2019 – Feb 2020",
      description: [
        "Led entire customer journey for a portfolio of B2B SaaS customers including Pendo, Airtable, and OMERS.",
        "Implemented CRM automation and enhanced reporting for Bouncex, resulting in a 20% increase in logged activities and 8% reduction in slipping accounts."
      ],
      status: "completed",
      priority: "medium",
      labels: ["Customer Success", "CRM", "B2B SaaS"],
    },
    {
      id: "exp-5",
      title: "Customer Success Manager",
      company: "ShopBrain",
      period: "Jan 2017 – Sep 2019",
      description: [
        "Managed a portfolio of customers through the entire lifecycle from onboarding, adoption, and renewal.",
        "Achieved 90% retention rate for clients by ensuring seamless experience and business outcomes."
      ],
      status: "completed",
      priority: "medium",
      labels: ["Customer Success", "Onboarding", "AI"],
    },
    {
      id: "exp-6",
      title: "Head of Customer Support",
      company: "SHOP.CA",
      period: "Mar 2016 – Dec 2016",
      description: [
        "Managed, coached, and drove performance of a team of Customer Support Representatives to ensure KPIs were met and surpassed.",
        "Acted as Voice of Customer (VOC), analyzed customer data and feedback, and implemented process improvements."
      ],
      status: "completed",
      priority: "medium",
      labels: ["Customer Support", "Team Leadership", "VOC"],
    },
    {
      id: "exp-7",
      title: "Customer Support Team Lead",
      company: "SHOP.CA",
      period: "Jun 2015 – Mar 2016",
      description: [
        "Hired, trained, and led a team of 8 Customer Support representatives responsible for driving 91% CSAT and 71% NPS."
      ],
      status: "completed",
      priority: "low",
      labels: ["Customer Support", "Team Leadership"],
    },
    {
      id: "exp-8",
      title: "Customer Support Representative",
      company: "SHOP.CA",
      period: "Aug 2014 – May 2015",
      description: ["Provided customer support and contributed to high CSAT and NPS scores."],
      status: "completed",
      priority: "low",
      labels: ["Customer Support"],
    },
    {
      id: "exp-9",
      title: "Senior Technical Recruiter",
      company: "TCES, Tundra, and ProvisionIT",
      period: "Sep 2008 – Jun 2014",
      description: ["Recruited technical talent for various clients, managed full-cycle recruiting processes."],
      status: "completed",
      priority: "low",
      labels: ["Recruiting", "Technical Hiring"],
    },
  ],
  education: [
    {
      id: "edu-1",
      degree: "altMBA",
      institution: "altMBA",
      period: "May 2021 – Jun 2021",
      description: "altMBA graduate. Focused on leadership, management, and organizational change.",
      status: "completed",
      priority: "high",
    },
    {
      id: "edu-2",
      degree: "Bachelor of Arts",
      institution: "University of Windsor",
      period: "Jan 2004 – Dec 2008",
      description: "Bachelor of Arts degree.",
      status: "completed",
      priority: "medium",
    },
    {
      id: "edu-3",
      degree: "Data Analytics",
      institution: "Juno College",
      period: "Feb 2023 – May 2023",
      description: "Completed Data Analytics course.",
      status: "completed",
      priority: "medium",
    },
    {
      id: "edu-4",
      degree: "Intro to Web Development",
      institution: "Lighthouse Labs",
      period: "Feb 2021 – May 2021",
      description: "Completed web development course.",
      status: "completed",
      priority: "medium",
    },
    {
      id: "edu-5",
      degree: "Generative AI for Everyone",
      institution: "Deeplearning.AI",
      period: "Jan 2024 – Feb 2024",
      description: "Completed Generative AI for Everyone course.",
      status: "completed",
      priority: "medium",
    },
    {
      id: "edu-6",
      degree: "AI For Everyone",
      institution: "Deeplearning.AI",
      period: "Aug 2023 – Sep 2023",
      description: "Completed AI For Everyone course.",
      status: "completed",
      priority: "medium",
    },
  ],
  projects: [
    {
      id: "proj-1",
      title: "Shopify Plus AI Enablement",
      description: [
        "Collaborated on 'Zero to AI' course to upskill Shopifolk, achieving 94% satisfaction rate.",
        "Participated in Sidekick AI product development during Hack Days."
      ],
      status: "completed",
      priority: "high",
      labels: ["AI", "Enablement", "Shopify Plus"],
    },
    {
      id: "proj-2",
      title: "Support Authentication VOC Project",
      description: [
        "Led VOC project to enhance support authentication, reducing unauthenticated requests by 20%.",
        "Recommendations improved onboarding and increased merchant satisfaction and retention by 30%."
      ],
      status: "completed",
      priority: "medium",
      labels: ["Support", "VOC", "Onboarding"],
    },
    {
      id: "proj-3",
      title: "Feature Adoption Playbook",
      description: [
        "Teamed up with VP Product, Demand to turbocharge feature adoption playbook for GTM teams.",
        "Boosted product adoption by 15% and shaped North American Product GTM strategy."
      ],
      status: "completed",
      priority: "medium",
      labels: ["GTM", "Product Adoption", "Strategy"],
    },
    {
      id: "proj-4",
      title: "YouTube Quiz Generator Agent",
      description: [
        "Built an agent that instantly transforms any YouTube video into an interactive, auto-graded quiz with up to 25 multiple-choice questions.",
        "Enables educators and learners to reinforce knowledge and boost retention through active engagement with video content.",
        "Try it: https://agent.ai/profile/Youtube_Quiz_Generator"
      ],
      status: "completed",
      priority: "high",
      labels: ["AI", "Quiz", "YouTube", "Education", "Agent", "Interactive"],
    },
  ],
  skills: [
    { id: "skill-1", name: "Customer Success", category: "Professional", level: 5 },
    { id: "skill-2", name: "AI & LLMs", category: "Technical", level: 4 },
    { id: "skill-3", name: "Data Analysis", category: "Technical", level: 4 },
    { id: "skill-4", name: "Contract Negotiation", category: "Professional", level: 4 },
    { id: "skill-5", name: "Sales", category: "Professional", level: 4 },
    { id: "skill-6", name: "Integration", category: "Technical", level: 3 },
    { id: "skill-7", name: "Communications", category: "Professional", level: 5 },
    { id: "skill-8", name: "Onboarding", category: "Professional", level: 4 },
    { id: "skill-9", name: "Operations", category: "Professional", level: 4 },
    { id: "skill-10", name: "API's", category: "Technical", level: 3 },
    { id: "skill-11", name: "SQL", category: "Technical", level: 3 },
    { id: "skill-12", name: "Web Development", category: "Technical", level: 3 },
  ],
  contact: {
    email: "nicklawson85@gmail.com",
    phone: "416 *** ****",
    location: "Toronto, Canada",
    github: "github.com/nicklawson85",
    linkedin: "linkedin.com/in/nicklawson85",
    website: "",
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
