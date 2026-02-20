'use client'

import React, {useEffect, useState, useRef} from "react"
import {Menu, ChevronDown, Users, Calendar, Heart, Trophy, ChevronsDown} from "lucide-react"
import Link from 'next/link'
import Image from "next/image"
import {motion, AnimatePresence} from 'motion/react'
import mascot from "../../public/assests/x-logo-full.webp"
import {Button} from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {Separator} from "@/components/ui/separator"

interface DropdownItem {
  label: string
  href: string
  description?: string
  icon?: React.ReactNode
}

interface NavItem {
  label: string
  href: string
  dropdown?: DropdownItem[]
}

const navigationData: NavItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
    dropdown: [
      {
        label: "Our Story",
        href: "/about/our-story",
        description: "Why we exist and our mission",
        icon: <Heart className="w-4 h-4"/>,
      },
      {
        label: "The Team",
        href: "/about/team",
        description: "Meet the people behind Xolace",
        icon: <Users className="w-4 h-4"/>,
      },
      {
        label: "Impact & Vision",
        href: "/about/impact",
        description: "Our global vision and future plans",
        icon: <Trophy className="w-4 h-4"/>,
      },
    ],
  },
  {
    label: "How It Works",
    href: "/how-it-works",
  },
  {
    label: "Community",
    href: "/community",
    dropdown: [
      {
        label: "Campfires",
        href: "/community/campfires",
        description: "Guided support communities",
        icon: <Users className="w-4 h-4"/>,
      },
      {
        label: "For Professionals",
        href: "/community#professionals",
        description: "Join as a mental health professional",
        icon: <Heart className="w-4 h-4"/>,
      },
    ],
  },
  {
    label: "Get Involved",
    href: "/get-involved",
    dropdown: [
      {
        label: "Ambassadors",
        href: "/get-involved#ambassadors",
        description: "Become an ambassador",
        icon: <Users className="w-4 h-4"/>,
      },
      {
        label: "Events",
        href: "/get-involved#events",
        description: "Community events and initiatives",
        icon: <Calendar className="w-4 h-4"/>,
      },
      {
        label: "Partner With Us",
        href: "/get-involved#partners",
        description: "Collaborate with Xolace",
        icon: <Heart className="w-4 h-4"/>,
      },
    ],
  },
  {
    label: "Insights",
    href: "/insights",
  },
]

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [expandedMobileItem, setExpandedMobileItem] = useState<string | null>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setActiveDropdown(label)
  }

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null)
    }, 150)
  }

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])
// Reset expanded mobile item when sheet closes
  useEffect(() => {
    if (!isOpen) {
      setExpandedMobileItem(null)
    }
  }, [isOpen])

  return (
    <header className="px-4 md:px-[5%] sticky top-2 z-50 left-0 w-full mb-4">
      <div className="max-w-6xl mx-auto w-full py-2 px-4 flex flex-row items-center justify-between bg-muted rounded-full border">
        <div>
          <Link href="/" className="font-bold text-lg flex items-center">
            <ChevronsDown className="bg-linear-to-tr border-secondary from-primary via-primary/70 to-primary rounded-lg text-white w-9 h-9 mr-2 border" />
          </Link>
        </div>

        <nav className="hidden md:flex items-center justify-start space-x-6 font-semibold">
          {navigationData.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.dropdown && handleMouseEnter(item.label)}
              onMouseLeave={handleMouseLeave}
            >
              {item.dropdown ? (
                <button className="cursor-cell flex items-center gap-1 hover:text-primary transition">
                  {item.label}
                  <ChevronDown
                    className={`w-3 h-3 transition-transform duration-200 ${
                      activeDropdown === item.label ? "rotate-180" : ""
                    }`}
                  />
                </button>
              ) : (
                <Link
                  href={item.href}
                  className="cursor-pointer hover:text-primary transition"
                >
                  {item.label}
                </Link>
              )}

              {/* Desktop Dropdown Menu */}
              <AnimatePresence>
                {activeDropdown === item.label && item.dropdown && (
                  <motion.div
                    initial={{opacity: 0, y: 10, scale: 0.95}}
                    animate={{opacity: 1, y: 0, scale: 1}}
                    exit={{opacity: 0, y: 10, scale: 0.95}}
                    transition={{duration: 0.2}}
                    className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-72 bg-muted rounded-xl shadow-lg border border-border py-2 z-50"
                  >
                    {item.dropdown.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.label}
                        href={dropdownItem.href}
                        className="flex items-start gap-2 px-4 py-2 text-sm hover:bg-accent/60 transition-colors duration-150 rounded-lg mx-2"
                      >
                        <div className="text-destructive mt-0.5 shrink-0">
                          {dropdownItem.icon}
                        </div>
                        <div className="min-w-0">
                          <div className="font-medium truncate">
                            {dropdownItem.label}
                          </div>
                          {dropdownItem.description && (
                            <div className="text-muted-foreground text-xs mt-1 line-clamp-2">
                              {dropdownItem.description}
                            </div>
                          )}
                        </div>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        <div className="flex flex-row">
          {/* Mobile Sheet Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="w-10 h-10"/>
              </Button>
            </SheetTrigger>

            <SheetContent
              side="top"
              className="flex flex-col h-full justify-between px-4 bg-muted"
            >
              <div>
                <SheetHeader className="">
                  <SheetTitle className="flex items-center">
                    <Image
                      src={mascot}
                      alt="logo"
                      width={36}
                      height={36}
                    />
                  </SheetTitle>
                </SheetHeader>

                <div className="flex flex-col max-h-[calc(100vh-12rem)] overflow-y-auto space-y-2">
                  <Separator/>
                  {navigationData.map((item) => (
                    <MobileNavItem
                      key={item.label}
                      item={item}
                      isExpanded={expandedMobileItem === item.label}
                      onToggle={() => {
                        setExpandedMobileItem(
                          expandedMobileItem === item.label ? null : item.label
                        )
                      }}
                      onLinkClick={() => setIsOpen(false)}
                    />
                  ))}
                </div>
                <Separator/>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

function MobileNavItem(
  {
    item,
    isExpanded,
    onToggle,
    onLinkClick,
  }: {
    item: NavItem
    isExpanded: boolean
    onToggle: () => void
    onLinkClick: () => void
  }) {
  return (
    <div className="border-b border-border last:border-b-0 py-4">
      {item.dropdown ? (
        <>
          <button
            onClick={onToggle}
            className="flex items-center justify-between w-full text-left font-semibold text-base transition-colors duration-200"
          >
            {item.label}
            <ChevronDown
              className={`w-5 h-5 transition-transform duration-200 shrink-0 ${
                isExpanded ? "rotate-180" : ""
              }`}
            />
          </button>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{opacity: 0, height: 0}}
                animate={{opacity: 1, height: "auto"}}
                exit={{opacity: 0, height: 0}}
                transition={{duration: 0.2}}
                className="overflow-hidden"
              >
                <div className="ml-2 mt-2 space-y-1">
                  {item.dropdown.map((dropdownItem) => (
                    <Link
                      key={dropdownItem.label}
                      href={dropdownItem.href}
                      className="flex items-start gap-2 p-2 text-sm hover:bg-accent/60 rounded-lg  transition-colors duration-200"
                      onClick={onLinkClick}
                    >
                      <div className="text-destructive mt-1 shrink-0">
                        {dropdownItem.icon}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="font-medium">{dropdownItem.label}</div>
                        {dropdownItem.description && (
                          <div className="text-muted-foreground text-xs mt-1 line-clamp-2">
                            {dropdownItem.description}
                          </div>
                        )}
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      ) : (
        <Link
          href={item.href}
          className="block  font-semibold text-base hover:text-primary transition"
          onClick={onLinkClick}
        >
          {item.label}
        </Link>
      )}
    </div>
  )
}

export default NavBar