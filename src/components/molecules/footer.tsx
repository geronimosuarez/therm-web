import { Thermometer } from "lucide-react";
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
    <div className="flex items-center gap-2">
      <Thermometer className="size-5 text-red-500" />
      <p className="text-xs text-muted-foreground">&copy; {new Date().getFullYear()} Therm. All rights reserved.</p>
    </div>
    <nav className="sm:ml-auto flex gap-4 sm:gap-6">
      <Link href="#" className="text-xs hover:underline underline-offset-4">
        Terms of Service
      </Link>
      <Link href="#" className="text-xs hover:underline underline-offset-4">
        Privacy Policy
      </Link>
      <Link href="#" className="text-xs hover:underline underline-offset-4">
        Support
      </Link>
    </nav>
  </footer>   
  )
}