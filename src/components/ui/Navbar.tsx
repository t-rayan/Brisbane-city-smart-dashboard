import { ThemeToggle } from "../ThemeToggle";
import { LiveTimer } from "./LiveTimer";

export default function Navbar() {
    return (
        <nav className="sticky top-0 z-50 w-full border-b border-muted/10 bg-background/80 backdrop-blur-md">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    {/* Brand Icon/Logo Placeholder */}
                    <div className="h-8 w-8 rounded-lg bg-brand flex items-center justify-center text-white font-black text-xl">
                        B
                    </div>
                    <h1 className="text-lg font-bold tracking-tight text-foreground">
                        BNE <span className="text-brand">Pulse</span>
                    </h1>
                </div>

                {/* Optional: Navigation Links or Theme Toggle area */}
                <div className="flex items-center gap-4 text-sm font-medium text-muted">
                <LiveTimer />
                    <ThemeToggle />
                </div>
            </div>
        </nav>
    )
}