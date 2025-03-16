import { Github, Facebook, Linkedin } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="w-full bg-background py-8 px-4">
            <div className="container mx-auto space-y-6">
                <p className="text-sm">© 2024 Zachari Iligan</p>

                <div className="flex gap-4">
                    <a
                        href="https://web.facebook.com/zach16mxs"
                        target="_blank"
                        className="hover:text-white transition-colors"
                        aria-label="Facebook"
                    >
                        <Facebook className="h-5 w-5" />
                        <span className="sr-only">Facebook</span>
                    </a>

                    <a
                        href="https://github.com/rellity"
                        target='_blank'
                        className="hover:text-white transition-colors"
                        aria-label="Github"
                    >
                        <Github className="h-5 w-5" />
                        <span className="sr-only">Github</span>
                    </a>

                    <a
                        href="https://www.linkedin.com/in/zachari-iligan-333a312aa/"
                        target="_blank"
                        className="hover:text-white transition-colors"
                        aria-label="aedIn"
                    >
                        <Linkedin className="h-5 w-5" />
                        <span className="sr-only">aedIn</span>
                    </a>
                </div>
            </div>
        </footer>
    )
}
