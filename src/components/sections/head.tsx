export default function HeadSection() {
    return (
        <section className="flex flex-col gap-10">
            <h1 className="text-3xl md:text-4xl leading-[1.2] md:leading-[1.5] md:w-4/5">Hey! I’m Zachari Iligan, a web developer based in Quezon City, Philippines. I’m currently working at{" "}
                <span className="font-bold text-foreground hover:bg-gradient-to-r hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 hover:bg-clip-text hover:text-transparent transition-all duration-300 cursor-pointer">
                    <a href="https://www.asceoft.com/" target="_blank">Asceoft Inc.</a>
                </span>
                <br />
            </h1>
        </section>
    )
}