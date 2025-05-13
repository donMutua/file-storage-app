import Link from "next/link"
import { FolderX } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f0f2f5] p-4">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-md">
        <div className="mb-6 flex flex-col items-center justify-center text-center">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#f0f2f5]">
            <FolderX className="h-8 w-8 text-[#637587]" />
          </div>
          <h1 className="mb-2 text-xl font-semibold text-[#121417]">Page not found</h1>
          <p className="text-[#637587]">The page you're looking for doesn't exist or has been moved.</p>
        </div>

        <div className="flex justify-end gap-3">
          <Button variant="outline" asChild className="border-[#e5e8eb] text-[#637587]">
            <Link href="/dashboard">Cancel</Link>
          </Button>
          <Button asChild className="bg-[#1980e6] hover:bg-[#1980e6]/90">
            <Link href="/">Go Home</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
