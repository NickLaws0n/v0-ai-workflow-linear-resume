import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { IssueList } from "@/components/issue-list"
import { ResumeProvider } from "@/components/resume-context"

export default function Home() {
  return (
    <ResumeProvider>
      <div className="flex h-screen bg-[#111213] text-white overflow-hidden">
        <Sidebar />
        <div className="flex flex-col flex-1 overflow-hidden">
          <Header />
          <main className="flex-1 overflow-auto">
            <IssueList />
          </main>
        </div>
      </div>
    </ResumeProvider>
  )
}
