import { Search, Upload, X, FileText, File } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { Sidebar } from "@/components/sidebar"
import { Avatar } from "@/components/ui/avatar"

export default function UploadPage() {
  return (
    <div className="flex min-h-screen bg-[#ffffff]">
      <Sidebar />

      <div className="flex-1">
        {/* Header */}
        <header className="border-b border-[#e5e8eb] bg-white">
          <div className="flex h-16 items-center justify-between px-4">
            <div className="flex items-center gap-10">
              <Link href="/" className="flex items-center gap-2 md:hidden">
                <div className="flex h-8 w-8 items-center justify-center rounded-md bg-[#1a80e5]">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-white"
                  >
                    <path
                      d="M9 13h6m-3-3v6M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className="text-lg font-semibold text-[#121417]">CloudWorks</span>
              </Link>

              <h1 className="text-xl font-bold text-[#121417]">Upload files</h1>
            </div>

            <div className="flex items-center gap-3">
              <div className="relative hidden md:block">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#637587]" />
                <Input
                  type="search"
                  placeholder="Search"
                  className="w-64 rounded-full border-[#e5e8eb] bg-[#f0f2f5] pl-9 text-sm"
                />
              </div>
              <Avatar />
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="mx-auto max-w-4xl p-6">
          <div className="mb-6">
            <p className="text-[#637587]">Drag files here or use the New button</p>
          </div>

          <div className="mb-8 rounded-lg border-2 border-dashed border-[#e5e8eb] p-10">
            <div className="flex flex-col items-center justify-center text-center">
              <Upload className="mb-4 h-12 w-12 text-[#637587]" />
              <h2 className="mb-2 text-xl font-semibold text-[#121417]">Drag and drop your files here</h2>
              <p className="mb-4 text-[#637587]">or</p>
              <Button className="rounded-md bg-[#1a80e5] px-4 text-white hover:bg-[#1a80e5]/90">Browse files</Button>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-[#121417]">Recent</h2>

            {[
              {
                name: "project-planning.pptx",
                size: "17.4 MB",
                progress: 100,
                date: "May 12",
              },
              {
                name: "quarterly-report.docx",
                size: "5.2 MB",
                progress: 100,
                date: "May 10",
              },
              {
                name: "marketing-assets.zip",
                size: "42.8 MB",
                progress: 65,
                date: "May 12",
              },
            ].map((file, index) => (
              <div
                key={index}
                className="flex items-start gap-4 rounded-lg border border-[#e5e8eb] p-4 hover:bg-[#f0f2f5]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-[#f0f2f5]">
                  {file.name.endsWith(".pptx") ? (
                    <FileText className="h-6 w-6 text-orange-500" />
                  ) : file.name.endsWith(".docx") ? (
                    <FileText className="h-6 w-6 text-blue-500" />
                  ) : (
                    <File className="h-6 w-6 text-green-500" />
                  )}
                </div>

                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium text-[#121417]">{file.name}</h3>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-[#637587]">
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="mt-1">
                    <div className="flex items-center justify-between text-xs text-[#637587]">
                      <span>
                        {file.size} • {file.date}
                      </span>
                      <span>{file.progress === 100 ? "Complete" : `${file.progress}%`}</span>
                    </div>
                    <Progress
                      value={file.progress}
                      className="mt-1 h-1 bg-[#e5e8eb]"
                      indicatorClassName={file.progress === 100 ? "bg-green-500" : ""}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}
