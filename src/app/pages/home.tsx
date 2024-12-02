import Footer from "@/components/footer/footer";
import HeadSection from "@/components/sections/head";
import PersonalProjects from "@/components/sections/personal-peojects";
import Qualification from "@/components/sections/qualification";
import WorkSection from "@/components/sections/work";
import { Separator } from "@/components/ui/separator";
import { ModeToggle } from "@/components/utils/mode-toggle";
import { Hammer } from "lucide-react";

export default function Home() {
    return (
        <div>
            <div className="flex justify-between w-100 gap-2 m-4 p-2 bg-background">
                <div className="flex flex-row gap-2 font-mono">
                    <Hammer /> rell's hangout
                </div>
                <div className="flex flex-row gap-2 font-mono">
                    About Me
                </div>
            </div>
            <main className="flex flex-col justify-center items-center p-2 m-4 gap-10">
                <div className="flex flex-col w-full">
                    <div className="h-full w-full bg-background p-2 m-4">
                        <HeadSection />
                    </div>
                </div>
                <div className="flex w-full bg-background">
                    <div className="w-full bg-background p-2 m-4">
                        <WorkSection />
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


            <Footer />

            <div className="fixed flex flex-row gap-2 bottom-0 right-0 m-4 p-2 bg-background rounded-lg">
                <ModeToggle />
            </div>
        </div >

    )
}