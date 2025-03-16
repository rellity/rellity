import * as React from "react"

import { Hammer, Menu, Moon, Sun } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { useTheme } from "@/store/theme-store"
import { cn } from "@/lib/utils"
import { Link } from "@tanstack/react-router"


export default function Navbar() {
  const { theme, setTheme } = useTheme()
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-200",
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-background",
      )}
    >
      <div className="flex h-16 items-center justify-between px-2">
        <div className="flex items-center justify-center gap-6">
          <Link to="/" className="flex flex-row text-sm gap-2 font-mono">
            <Hammer /> rell's hangout
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex flex-row gap-2 font-mono">
            About Me
          </div>
          <div className="border-l border-background invert w-1 h-[30px]"></div>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle theme"
            className="mr-2"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetTitle className="sr-only">Menu</SheetTitle>
            <SheetContent side="right" className="pl-2">
              <nav className="flex flex-col gap-4 mt-8">
                <span className="text-sm font-mono mt-5">
                  still a work in progress check back again later
                </span>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

