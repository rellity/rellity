import { personalProjects } from "@/lib/constant";
import { Card, CardContent } from "../ui/card";
import { cn } from "@/lib/utils";

export default function PersonalProjects() {

    return (
        <section className="flex flex-col gap-y-4">
            <h3 className="text-2xl md:text-3xl font-semibold">Personal Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {personalProjects.map((exp, index) => (
                    <Card key={index} className="space-y-4 p-6 hover:shadow-lg transition-shadow">
                        <img
                            src={exp.logo}
                            alt={`${exp.name} logo`}
                            className={cn("w-full h-[250px] object-contain bg-white rounded-2xl shadow-md p-3")}
                            loading="lazy"
                        />
                        <CardContent className="p-0">
                            <a href={exp.url} target="_blank" className="text-xl md:text-2xl font-semibold">{exp.name}</a>
                            <p className="text-lg md:text-xl">{exp.stack}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );


}