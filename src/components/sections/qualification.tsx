export default function Qualification() {
    return (
        <section className="flex flex-col gap-y-4">
            <h3 className="text-2xl md:text-3xl font-semibold">Education</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="flex flex-row gap-y-4 items-center">
                    <img src="/colleges/slsu.png" alt="slsu logo" className="w-[150px] h-[150px] rounded-full" />
                    <div>

                        <h4 className="text-xl md:text-2xl font-semibold">Bachelor of Science in Information Technology</h4>
                        <p className="text-lg md:text-xl">2020-2024</p>
                        <p className="text-lg md:text-xl">Southern Leyte State University</p>
                        <p className="text-lg md:text-xl">GWA: 1.7</p>
                    </div>
                </div>
                <div className="flex flex-row gap-2 p-2 items-center">
                    <img src="/colleges/pup.png" alt="Psychology" className="w-[125px] h-[125px]  rounded-full" />
                    <div>
                        <h4 className="text-xl md:text-2xl font-semibold">Master of Arts in Psychology - Clinical Psychology</h4>
                        <p className="text-lg md:text-xl">2024-Present</p>
                        <p className="text-lg md:text-xl">Polytechnic University of the Philippines</p>
                    </div>

                </div>
            </div>
        </section>
    )
}