
import { Card, CardContent } from '@/components/ui/card';
import { worksexp } from '@/constants/contants';
import { cn } from '@/lib/utils';
import { useTheme } from '@/store/theme-store';


const WorkExperience = () => {
    const { theme } = useTheme()


    return (
        <section className="flex flex-col gap-y-4">
            <h3 className="text-2xl md:text-3xl font-semibold">Work Experience</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {worksexp.map((exp, index) => (
                    <Card key={index} className="space-y-4 p-6 hover:shadow-lg transition-shadow">
                        <img
                            src={exp.logo}
                            alt={`${exp.company} logo`}
                            className={cn("w-[250px] h-[250px] object-contain rounded-2xl", theme === "dark" && "invert")}
                            loading="lazy"
                        />
                        <CardContent className="p-0">
                            <p className="text-xl md:text-2xl font-semibold">{exp.company}</p>
                            <p className="text-lg md:text-xl">{exp.role}</p>
                            <p className="text-sm text-muted-foreground">{exp.duration}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
};

export default WorkExperience;