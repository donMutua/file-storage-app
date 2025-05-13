import type { ReactNode } from "react"
import { Sidebar } from "@/components/sidebar"
import { DashboardHeader } from "@/components/dashboard-header"
import { Toaster } from "@/components/ui/toaster"
import { SearchProvider } from "@/context/search-context"
import { Suspense } from "react"

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <SearchProvider>
      <div className="flex min-h-screen bg-white">
        <Sidebar />
        <div className="flex-1">
          <DashboardHeader />
          <Suspense>
            <main className="p-6">{children}</main>
          </Suspense>
        </div>
        <Toaster />
      </div>
    </SearchProvider>
  )
}
