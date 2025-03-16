import { createFileRoute } from '@tanstack/react-router'
import HeadSection from '@/components/user/home/head'
import PersonalProjects from '@/components/user/home/personal-projects'
import { Separator } from '@/components/ui/separator'
import Qualification from '@/components/user/home/qualifications'
import WorkExperience from '@/components/user/home/work'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <main className="flex flex-col justify-center items-center p-2 m-4 gap-10">
      <div className="flex flex-col w-full">
        <div className="h-full w-full bg-background p-2 m-4">
          <HeadSection />
        </div>
      </div>
      <div className="flex w-full bg-background">
        <div className="w-full bg-background p-2 m-4">
          <WorkExperience />
        </div>
      </div>

      <div className="flex w-full bg-background">
        <div className="w-full bg-background p-2 m-4">
          <PersonalProjects />
        </div>
      </div>

      <div className="flex w-full bg-background">
        <div className="w-full bg-background p-2 m-4">
          <Qualification />
        </div>
      </div>
      <Separator />
    </main>
  )
}
