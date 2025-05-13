"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

interface SearchContextType {
  searchQuery: string
  setSearchQuery: (query: string) => void
  activeFilter: string
  setActiveFilter: (filter: string) => void
}

const SearchContext = createContext<SearchContextType>({
  searchQuery: "",
  setSearchQuery: () => {},
  activeFilter: "all",
  setActiveFilter: () => {},
})

export const useSearchContext = () => useContext(SearchContext)

export const SearchProvider = ({ children }: { children: ReactNode }) => {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeFilter, setActiveFilter] = useState("all")

  return (
    <SearchContext.Provider value={{ searchQuery, setSearchQuery, activeFilter, setActiveFilter }}>
      {children}
    </SearchContext.Provider>
  )
}
