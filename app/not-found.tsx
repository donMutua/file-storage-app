"use client"

import type React from "react"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function NotFound() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/dashboard?search=${encodeURIComponent(searchQuery)}`)
    }
  }

  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-white overflow-x-hidden"
      style={{ fontFamily: 'Manrope, "Noto Sans", sans-serif' }}
    >
      <div className="flex h-full grow flex-col">
        <div className="px-4 md:px-10 lg:px-20 xl:px-40 flex flex-1 justify-center py-5">
          <div className="flex flex-col w-full max-w-[960px] py-5 flex-1">
            <div className="@container">
              <div className="@[480px]:p-4">
                <div
                  className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-4"
                  style={{
                    backgroundImage:
                      'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://cdn.usegalileo.ai/sdxl10/eff24d82-1096-48ad-92d6-18dae5ce47bc.png")',
                  }}
                >
                  <div className="flex flex-col gap-2 text-center">
                    <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                      404 Not Found
                    </h1>
                    <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                      The page you're looking for doesn't exist or has been moved. Our robot is still looking for it.
                    </h2>
                  </div>
                  <form
                    onSubmit={handleSearch}
                    className="flex flex-col min-w-40 h-14 w-full max-w-[480px] @[480px]:h-16"
                  >
                    <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
                      <div className="text-[#637588] flex border border-[#dce0e5] bg-white items-center justify-center pl-[15px] rounded-l-xl border-r-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20px"
                          height="20px"
                          fill="currentColor"
                          viewBox="0 0 256 256"
                        >
                          <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                        </svg>
                      </div>
                      <input
                        placeholder="Search for something else"
                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111418] focus:outline-0 focus:ring-0 border border-[#dce0e5] bg-white focus:border-[#dce0e5] h-full placeholder:text-[#637588] px-[15px] rounded-r-none border-r-0 pr-2 rounded-l-none border-l-0 pl-2 text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                      <div className="flex items-center justify-center rounded-r-xl border-l-0 border border-[#dce0e5] bg-white pr-[7px]">
                        <button
                          type="submit"
                          className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#1980e6] text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]"
                        >
                          <span className="truncate">Search</span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
              <div className="flex flex-col gap-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                  style={{
                    backgroundImage: 'url("https://cdn.usegalileo.ai/sdxl10/0be118cd-f569-46ef-8e2b-b2642ba1d24e.png")',
                  }}
                ></div>
              </div>
              <div className="flex flex-col gap-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                  style={{
                    backgroundImage: 'url("https://cdn.usegalileo.ai/sdxl10/15116bcd-5125-43e7-9d02-f1623def02c5.png")',
                  }}
                ></div>
              </div>
              <div className="flex flex-col gap-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                  style={{
                    backgroundImage: 'url("https://cdn.usegalileo.ai/sdxl10/a676d659-c681-4ec1-abe4-4bc34a41a86b.png")',
                  }}
                ></div>
              </div>
              <div className="flex flex-col gap-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                  style={{
                    backgroundImage: 'url("https://cdn.usegalileo.ai/sdxl10/7a3beaa8-95c4-43f5-8cc2-a8e6d0b91a89.png")',
                  }}
                ></div>
              </div>
            </div>
            <div className="flex px-4 py-3 justify-end">
              <button
                onClick={() => router.back()}
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#f0f2f4] text-[#111418] text-sm font-bold leading-normal tracking-[0.015em]"
              >
                <span className="truncate">Go back</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
